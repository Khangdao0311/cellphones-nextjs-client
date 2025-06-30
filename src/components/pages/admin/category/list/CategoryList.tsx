"use client";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import config from "@/config";
import * as categoryServices from "@/services/category";
import * as authServices from "@/services/auth";

function CategoryList() {
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [categories, setCategories] = useState([]);

  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  let searchParams: any = {};
  searchParams.page = query.get("page") || 1;
  searchParams.limit = query.get("limit") || 5;
  if (query.get("search")) searchParams.search = query.get("search");

  useEffect(() => {
    router.push(`?${new URLSearchParams(searchParams).toString()}`);
    categoryServices.getQuery(searchParams).then((categories) => setCategories(categories));
    categoryServices
      .getTotalPagesQuery(searchParams)
      .then((totalPages) => setTotalPages(totalPages));
  }, [query]);

  function handleDelete(id: string) {
    categoryServices
      .cancel(id)
      .then(() => {})
      .catch(async (err) => {
        if (err.status === 401) {
          const _ = await authServices.refreshTokenFlow();
          if (!_) return router.push(config.routes.login);
          handleDelete(id);
        }
      });
  }

  return (
    <main id="admin">
      <div className="admin-head">
        <div className="head-title">Danh Sách Danh Mục</div>
        {/* <div className="head-date">Thứ Năm, 04/07/2024 - 14 giờ 07 phút 50 giây</div> */}
      </div>
      <div className="admin-body">
        <div className="admin-function">
          <div className="function-item function-add">
            <FiPlus className="function-icon" />
            <Link href={config.routes.adminCategoryAdd} className="function-text">
              Tạo danh mục mới
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
              placeholder="Nhập Tên danh mụcc"
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
            <select
              value={searchParams.limit}
              onChange={(e) => {
                searchParams.page = 1;
                searchParams.limit = e.target.value;
                router.push(`${pathname}?${new URLSearchParams(searchParams).toString()}`);
              }}
              className="filter__limit-select"
            >
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
              <th className="table-id table-TJ">Mã danh mục</th>
              <th className="table-name table-TJ">Tên danh mục</th>
              <th className="table-function table-TC">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category: ICategory) => (
              <tr key={category.id}>
                <td className="table-checkbox table-TC">
                  <input type="checkbox" />
                </td>
                <td className="table-id table-TJ">{category.id}</td>
                <td className="table-name table-TJ">{category.name}</td>
                <td className="table-function table-TC">
                  <button onClick={() => handleDelete(category.id)} className="table-delete">
                    Xóa
                  </button>
                  <Link
                    href={`${config.routes.adminCategoryEdit}/${category.id}`}
                    className="table-edit"
                  >
                    Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {/* <div className="pagination-item">
            <HiChevronLeft />
          </div> */}
          {!!totalPages &&
            totalPages > 1 &&
            Array.from({ length: totalPages }).map((_, iPage: number) => (
              <div
                key={iPage}
                onClick={() =>
                  router.push(
                    `${pathname}?page=${iPage + 1}${
                      query.get("limit") ? "&limit=" + query.get("limit") : ""
                    }`
                  )
                }
                className={`pagination-item ${searchParams.page == iPage + 1 ? "active" : ""}`}
              >
                {iPage + 1}
              </div>
            ))}
          {/* <div className="pagination-item">
            <HiChevronRight />
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default CategoryList;
