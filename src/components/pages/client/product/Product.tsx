"use client";
import { IoIosArrowDown } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { Fragment, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CgArrowTopRight } from "react-icons/cg";

import "./product.css";
import Product from "@/components/Product";
import * as productServices from "@/services/product";
import * as categoryServices from "@/services/category";
import { actions, useStore } from "@/store";

function Products() {
  const [state, dispatch] = useStore();

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const router = useRouter();
  const query = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [optionCategory, setOptionCategory] = useState(false);
  const [optionPrice, setOptionPrice] = useState(false);
  const [checkCategory, setCheckCategory] = useState<any>([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  let searchParams: any = {};

  searchParams.page = query.get("page") || 1;
  searchParams.limit = query.get("limit") || 10;
  searchParams.orderby = query.get("orderby") || "_id-desc";
  
  if (query.get("search")) searchParams.search = query.get("search");
  if (query.get("categoryid")) searchParams.categoryid = query.get("categoryid");
  if (query.get("price")) searchParams.price = query.get("price");

  useEffect(() => {
    if (searchParams.search) {
      dispatch(actions.setValueSearch(searchParams.search));
    }
    if (searchParams.categoryid) {
      setCheckCategory(searchParams.categoryid.split("-"));
    }
    if (searchParams.price) {
      const [min, max] = searchParams.price.split("-");
      setPriceMin(min);
      setPriceMax(max);
    }
    router.push(`?${new URLSearchParams(searchParams).toString()}`);

    productServices.getQuery(searchParams).then((res) => setProducts(res));



    productServices.getTotalPagesQuery(searchParams).then((res) => {
      if (res == 1) {
        searchParams.page = 1;
        router.push(`?${new URLSearchParams(searchParams).toString()}`);
      }
      if (res == 0) {
        alert("Không tìm thấy sản phẩm");
        handeClearFilter();
      }

      setTotalPages(res);
    });
    categoryServices.getAll().then((res) => setCategories(res));
  }, [query]);

  const handleCheckCategory = (id: string) => {
    if (checkCategory.includes(id)) {
      setCheckCategory(checkCategory.filter((e: string) => e !== id));
    } else {
      setCheckCategory([...checkCategory, id]);
    }
  };

  const handlefilterCategory = () => {
    searchParams.page = 1;
    searchParams.categoryid = checkCategory.join("-");
    router.push(`?${new URLSearchParams(searchParams).toString()}`);
    setOptionCategory(false);
  };

  const handleFilterPrice = (e: any) => {
    e.preventDefault();
    if (priceMin && priceMax) {
      if (+priceMin < +priceMax) {
        searchParams.page = 1;
        searchParams.price = `${priceMin}-${priceMax}`;
        router.push(`?${new URLSearchParams(searchParams).toString()}`);
        setOptionPrice(false);
      } else {
        alert("Giá tối tiểu không được lớn hơn giá tối da");
      }
    } else {
      alert("Vui lòng nhập đủ");
    }
  };

  const handleOrderBy = (orderby: string) => {
    if (query.get("orderby") !== orderby) {
      searchParams.orderby = orderby;
      router.push(`?${new URLSearchParams(searchParams).toString()}`);
    }
  };

  const handlePage = (page: number | string) => {
    if (query.get("page") !== page) {
      searchParams.page = page;
      router.push(`?${new URLSearchParams(searchParams).toString()}`);
    }
  };

  const handeClearFilterSearch = () => {
    delete searchParams.search;
    dispatch(actions.setValueSearch(""));
    router.push(`?${new URLSearchParams(searchParams).toString()}`);
  };

  const handeClearFilterCategory = () => {
    delete searchParams.categoryid;
    setCheckCategory([]);
    router.push(`?${new URLSearchParams(searchParams).toString()}`);
  };

  const handeClearFilterPrice = () => {
    delete searchParams.price;
    setPriceMax("");
    setPriceMin("");
    router.push(`?${new URLSearchParams(searchParams).toString()}`);
  };

  const handeClearFilter = () => {
    delete searchParams.categoryid;
    delete searchParams.price;
    delete searchParams.search;
    setCheckCategory([]);
    setPriceMax("");
    setPriceMin("");
    dispatch(actions.setValueSearch(""));
    router.push(`?${new URLSearchParams(searchParams).toString()}`);
  };

  return (
    <main id="body">
      <div className="container">
        <div className="filter-box">
          <div className="filter">
            <div className="filter-title">Chọn theo tiêu chí</div>
            <div className="filter-items">
              <div className="filter-item">
                <div
                  onClick={() =>
                    setOptionCategory((prev) => {
                      if (prev) return false;
                      return true;
                    })
                  }
                  className="filter-btn"
                >
                  <div className="filter-text">Danh mục</div>
                  <IoIosArrowDown className="filter-icon" />
                </div>
                <div className={`filter-wrapper ${optionCategory ? "active" : ""}`}>
                  <div className="filter-select">
                    {categories.map((category: ICategory) => (
                      <div
                        key={category.id}
                        onClick={() => handleCheckCategory(category.id)}
                        className={`filter-option ${
                          checkCategory.includes(category.id) ? "active" : ""
                        }`}
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                  <div className="filter-actions">
                    <div
                      onClick={() => {
                        if (searchParams.categoryid) {
                          setCheckCategory(searchParams.categoryid.split("-"));
                        } else {
                          setCheckCategory([]);
                        }
                        setOptionCategory(false);
                      }}
                      className="filter-close"
                    >
                      Đóng
                    </div>
                    <div onClick={handlefilterCategory} className="filter-show">
                      Xem kết quả
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-item">
                <div
                  onClick={() =>
                    setOptionPrice((prev) => {
                      if (prev) return false;
                      return true;
                    })
                  }
                  className="filter-btn"
                >
                  <RiMoneyDollarCircleLine className="filter-icon" />
                  <div className="filter-text">Giá</div>
                </div>
                <form className={`filter-wrapper ${optionPrice ? "active" : ""}`}>
                  <div className="filter-range">
                    <input
                      type="text"
                      placeholder="Từ"
                      value={priceMin}
                      onChange={(e) => setPriceMin(e.target.value)}
                    />
                    <hr />
                    <input
                      type="text"
                      placeholder="Đến"
                      value={priceMax}
                      onChange={(e) => setPriceMax(e.target.value)}
                    />
                  </div>
                  <div className="filter-actions">
                    <div
                      onClick={() => {
                        if (searchParams.price) {
                          const [min, max] = searchParams.price.split("-");
                          setPriceMin(min);
                          setPriceMax(max);
                        } else {
                          setPriceMin("");
                          setPriceMax("");
                        }
                        setOptionPrice(false);
                      }}
                      className="filter-close"
                    >
                      Đóng
                    </div>
                    <button
                      type="submit"
                      onClick={(e) => handleFilterPrice(e)}
                      className="filter-show"
                    >
                      Xem kết quả
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {(searchParams.search || searchParams.categoryid || searchParams.price) && (
            <div className="filtering">
              <div className="filter-title">Đang lọc theo</div>
              <div className="filter-items">
                {searchParams.search && (
                  <div className="filter-item">
                    <div onClick={handeClearFilterSearch} className="filter-btn active">
                      <FaRegCircleXmark className="filter-icon" />
                      <div className="filter-text">
                        Tìm kiếm <span>{state.search}</span>
                      </div>
                    </div>
                  </div>
                )}
                {searchParams.categoryid && (
                  <div className="filter-item">
                    <div onClick={handeClearFilterCategory} className="filter-btn active">
                      <FaRegCircleXmark className="filter-icon" />
                      <div className="filter-text">
                        Danh Mục
                        {categories.map((category: ICategory) => {
                          if (checkCategory.includes(category.id)) {
                            return <span key={category.id}>{`${category.name} `}</span>;
                          }
                        })}
                      </div>
                    </div>
                  </div>
                )}
                {searchParams.price && (
                  <div className="filter-item">
                    <div onClick={handeClearFilterPrice} className="filter-btn active">
                      <FaRegCircleXmark className="filter-icon" />
                      <div className="filter-text">
                        Giá: {VND.format(+priceMin)} &#9866; {VND.format(+priceMax)}
                      </div>
                    </div>
                  </div>
                )}
                <div className="filter-item">
                  <div onClick={handeClearFilter} className="filter-btn active">
                    <div className="filter-text">Xóa tất cả</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="sort">
          <div className="sort-title">Sắp xếp theo</div>
          <div className="sort-items">
            <div
              onClick={() => {
                handleOrderBy("_id-desc");
              }}
              className={`sort-item ${query.get("orderby") === "_id-desc" ? "active" : ""}`}
            >
              <CgArrowTopRight className="sort-icon" />
              <div className="sort-text">Mới nhất</div>
            </div>
            <div
              onClick={() => {
                handleOrderBy("view-desc");
              }}
              className={`sort-item ${query.get("orderby") === "view-desc" ? "active" : ""}`}
            >
              <IoEyeOutline className="sort-icon" />
              <div className="sort-text">Xem nhiều</div>
            </div>
            <div
              onClick={() => {
                handleOrderBy("finalPrice-desc");
              }}
              className={`sort-item ${query.get("orderby") === "finalPrice-desc" ? "active" : ""}`}
            >
              <BiSortDown className="sort-icon" />
              <div className="sort-text">Giá cao - thấp</div>
            </div>
            <div
              onClick={() => {
                handleOrderBy("finalPrice-asc");
              }}
              className={`sort-item ${query.get("orderby") === "finalPrice-asc" ? "active" : ""}`}
            >
              <BiSortUp className="sort-icon" />
              <div className="sort-text">Giá thấp - cao</div>
            </div>
          </div>
        </div>

        <div className="product-list">
          {products.map((product: IProduct) => (
            <Fragment key={product.id}>
              <Product data={product} />
            </Fragment>
          ))}
        </div>

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

export default Products;
