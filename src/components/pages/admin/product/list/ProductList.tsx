"use client";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import config from "@/config";
import * as productServices from "@/services/product";
import * as categoryServices from "@/services/category";

function ProductList() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  let searchParams: any = {};
  searchParams.page = query.get("page") || 1;
  searchParams.limit = query.get("limit") || 5;
  if (query.get("search")) searchParams.search = query.get("search");

  const [option, setOption] = useState(
    Object.fromEntries(
      Array.from({ length: +searchParams.limit }).map((_, index) => [index, { type: 0, color: 0 }])
    )
  );

  useEffect(() => {
    categoryServices.getAll().then((res) => setCategories(res));
  }, []);

  useEffect(() => {
    router.push(`${pathname}?${new URLSearchParams(searchParams).toString()}`);
    productServices.getQuery(searchParams).then((res) => {
      setProducts(res);
      setOption(
        Object.fromEntries(
          Array.from({ length: +searchParams.limit }).map((_, index) => [
            index,
            { type: 0, color: 0 },
          ])
        )
      );
    });
    productServices.getTotalPagesQuery(searchParams).then((res) => setTotalPages(res));
  }, [query]);

  function getNameCategory(id: string) {
    return (categories.find((category: ICategory) => category.id === id)! as ICategory)!.name;
  }

  function handlePage(page: number | string) {
    if (query.get("page") !== page) {
      searchParams.page = page;
      router.push(`${pathname}?${new URLSearchParams(searchParams).toString()}`);
    }
  }

  function handleLimit(limit: number | string) {
    if (query.get("limit") !== limit) {
      searchParams.page = 1;
      searchParams.limit = limit;
      router.push(`${pathname}?${new URLSearchParams(searchParams).toString()}`);
    }
  }

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <main id="admin">
      <div className="admin-head">
        <div className="head-title">Danh Sách Sản Phẩm</div>
        {/* <div className="head-date">Thứ Năm, 04/07/2024 - 14 giờ 07 phút 50 giây</div> */}
      </div>
      <div className="admin-body">
        <div className="admin-function">
          <div className="function-item function-add">
            <FiPlus className="function-icon" />
            <Link href={config.routes.adminProductAdd} className="function-text">
              Tạo sản phẩm mới
            </Link>
          </div>
          <div className="function-item function-delete">
            <BsTrash className="function-icon" />
            <div className="function-text">Xóa tất cả</div>
          </div>
        </div>
        <div className="admin-filter">
          <form className="filter-search">
            <div className="filter__search-text">Tìm kiếm: </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="filter__search-input"
              type="text"
              placeholder="Nhập Tên sản phẩm"
            />
            <button
              hidden
              onClick={(e) => {
                e.preventDefault();
                searchParams.page = 1;
                searchParams.search = search;
                router.push(`${pathname}?${new URLSearchParams(searchParams).toString()}`);
              }}
            ></button>
          </form>
          <div className="filter-limit">
            <div className="filter__limit-text">Hiển thị: </div>
            <select onChange={(e) => handleLimit(e.target.value)} className="filter__limit-select">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th className="table-checkbox table-TC">
                <input type="checkbox" />
              </th>
              <th className="table-id table-TJ">Mã sản phẩm</th>
              <th className="table-image table-TC">Ảnh</th>
              <th className="table-name table-TJ">Tên sản phẩm</th>
              <th className="table-TJ">Loại</th>
              <th className="table-TJ">Màu sắc</th>
              <th className="table-TC">Số lượng</th>
              <th className="table-TC">Giá tiền</th>
              <th className="table-TC">Danh mục</th>
              <th className="table-function table-TC">Chức năng</th>
            </tr>
          </thead>
          {!!products.length && (
            <tbody>
              {!!products.length &&
                products.map((product: IProduct, iProduct: number) => (
                  <tr key={product.id}>
                    <td className="table-checkbox table-TC">
                      <input type="checkbox" />
                    </td>
                    <td className="table-id table-TJ">{product.id}</td>
                    <td className="table-image table-TC">
                      {/* <img src={product.images[0]} alt="name" /> */}
                      <img
                        src={
                          product.types[option[iProduct].type ?? 0].colors[
                            option[iProduct].color ?? 0
                          ].image
                        }
                        alt="name"
                      />
                    </td>
                    <td className="table-name table-TJ">{product.name}</td>
                    <td className="table-select table-TJ">
                      <select
                        value={option[iProduct].type ?? 0}
                        onChange={(e) => {
                          setOption((prev: any) => ({
                            ...prev,
                            [iProduct]: {
                              type: +e.target.value,
                              color: 0,
                            },
                          }));
                        }}
                      >
                        {product.types.map((type: IProductType, iType: number) => (
                          <option key={iType} value={iType}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="table-select table-TJ">
                      <select
                        value={option[iProduct].color ?? 0}
                        onChange={(e) => {
                          setOption((prev: any) => ({
                            ...prev,
                            [iProduct]: {
                              ...prev[iProduct],
                              color: +e.target.value,
                            },
                          }));
                        }}
                      >
                        {product.types[option[iProduct].type ?? 0].colors.map(
                          (color: ITypeColor, iColor: number) => (
                            <option key={iColor} value={iColor}>
                              {color.name}
                            </option>
                          )
                        )}
                      </select>
                    </td>
                    <td className="table-TC">10</td>
                    <td className="table-TC">
                      <div className="table-price_show">
                        {VND.format(
                          product.price +
                            product.types[option[iProduct].type ?? 0].price_extra -
                            product.types[option[iProduct].type ?? 0].price_sale +
                            product.types[option[iProduct].type ?? 0].colors[
                              option[iProduct].color ?? 0
                            ].price_extra
                        )}
                      </div>
                      {product.price +
                        product.types[option[iProduct].type ?? 0].price_extra -
                        product.types[option[iProduct].type ?? 0].price_sale <
                        product.price + product.types[option[iProduct].type ?? 0].price_extra && (
                        <del className="table-price_through">
                          {VND.format(
                            product.price + product.types[option[iProduct].type ?? 0].price_extra
                          )}
                        </del>
                      )}
                    </td>
                    <td className="table-TC">{getNameCategory(product.category_id)}</td>
                    <td className="table-function table-TC">
                      <button className="table-delete">Xóa</button>
                      <button className="table-edit">Sửa</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>

        {totalPages > 1 && (
          <div className="pagination">
            {!!totalPages &&
              Array.from({ length: totalPages }).map((_, iPage: number) => (
                <div
                  key={iPage}
                  onClick={() => handlePage(iPage + 1)}
                  className={`pagination-item ${searchParams.page == iPage + 1 ? "active" : ""}`}
                >
                  {iPage + 1}
                </div>
              ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductList;
