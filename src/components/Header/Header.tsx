"use client";

import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { CiViewList } from "react-icons/ci";
import { RiMapPinLine } from "react-icons/ri";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import { LiaPhoneSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBag } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { Fragment, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./header.css";
import config from "@/config";
import * as productServices from "@/services/product";
import { actions, useStore } from "@/store";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import { useDebounce } from "@/hooks";
import { useSelector } from "react-redux";

const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function Header() {
  const [state, dispatch] = useStore();
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [searchResult, setSearchResult] = useState<any>([]);

  const router = useRouter();
  const pathName = useParams();
  const query = useSearchParams();

  const cart = useSelector((state: any) => state.cart[username]);
  const length = cart?.length || 0;

  useEffect(() => {
    setToken(Cookies.get("token") || "");
    setUsername(Cookies.get("username") || "");
  }, [pathName]);

  function handleSearch(e: any) {
    dispatch(actions.setModalSearch(false));
    e.preventDefault();

    const searchParams = new URLSearchParams(query!.toString());
    searchParams.set("search", state.search);
    router.push(`/product?${searchParams.toString()}`);
  }

  function handleClearSearch() {
    const searchParams = new URLSearchParams(query!.toString());
    searchParams.delete("search");
    dispatch(actions.setValueSearch(""));
    router.push(`?${searchParams.toString()}`);
    setSearchResult([]);
    inputRef.current.focus();
    dispatch(actions.setModalSearch(false));
  }

  const inputRef = useRef<any>();

  const debouncedValue = useDebounce(state.search, 500);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      dispatch(actions.setModalSearch(false));
      return;
    }
    productServices.getQuery({ search: state.search, page: 1, limit: 5 }).then((res) => {
      setSearchResult(res);
      dispatch(actions.setModalSearch(true));
    });
    console.log("Đang Tìm...");
  }, [debouncedValue]);

  return (
    <Fragment>
      <header id="header">
        <div className="benner">
          <Swiper
            className="container"
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
            }}
            slidesPerView={3}
            navigation
          >
            <SwiperSlide>
              <img
                src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Thu cu.svg"
                alt="benner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Giao hang.svg"
                alt="benner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Smember.svg"
                alt="benner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Chinh hang.svg"
                alt="benner"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="nav-container">
          <Link href={config.routes.home} className="logo">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII="
              alt="logo"
            />
          </Link>
          <button
            onClick={() => {
              if (state.modal.menu) {
                dispatch(actions.setModalMenu(false));
              } else {
                dispatch(actions.setModalMenu(true));
              }
            }}
            className="button"
          >
            <CiViewList className="icon" />

            <div className="content">Danh mục</div>
          </button>
          {state.modal.menu && (
            <div className="menu">
              <div className="container">
                <Menu />
              </div>
            </div>
          )}
          <button
            className="button"
            onClick={() => {
              if (state.modal.location) {
                dispatch(actions.setModalLocation(false));
              } else {
                dispatch(actions.setModalLocation(true));
              }
            }}
          >
            <RiMapPinLine className="icon" />
            <div className="content">
              <div className="is-flex gap-1 is-align-items-center">
                Xem giá tại
                <FaAngleDown />
              </div>
              <span>{state.location.name}</span>
            </div>
          </button>
          <form className="search">
            <button type="submit" onClick={(e) => handleSearch(e)} className="button">
              <FaSearch className="icon" />
            </button>
            <input
              ref={inputRef}
              className="input"
              type="text"
              placeholder="Bạn cần tìm gì ?"
              value={state.search}
              onChange={(e) => {
                const searchValue = e.target.value;
                if (!searchValue.startsWith(" ")) {
                  dispatch(actions.setValueSearch(searchValue));
                }
              }}
              onFocus={() => {
                if (!!state.search) {
                  dispatch(actions.setModalSearch(true));
                }
              }}
            />
            <div onClick={handleClearSearch} className="clear">
              <FaXmark className="icon" />
            </div>
            {state.modal.search && !state.searchValue && !!searchResult.length && (
              <div className="result">
                <div className="find-product">
                  <div className="title">Sản phẩm gợi ý</div>
                  <div className="list">
                    {searchResult.map((product: IProduct, iProduct: number) => (
                      <Link
                        onClick={() => {
                          dispatch(actions.setModalSearch(false));
                          dispatch(actions.setValueSearch(""));
                        }}
                        href={`${config.routes.product}/${product.id}`}
                        key={iProduct}
                        className="item"
                      >
                        <img className="image" src={product.images[0]} alt="productFind" />
                        <div className="info">
                          <div className="name">{product.name}</div>
                          <div className="price">
                            <div className="price-show">
                              {" "}
                              {VND.format(
                                product.price +
                                  product.types[0].price_extra -
                                  product.types[0].price_sale
                              )}
                            </div>
                            {product.price +
                              product.types[0].price_extra -
                              product.types[0].price_sale <
                              product.price + product.types[0].price_extra && (
                              <div className="price-through">
                                {VND.format(product.price + product.types[0].price_extra)}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </form>
          <button className="button bg-none">
            <LiaPhoneSolid className="icon" />
            <div className="content">
              Gọi mua hàng <br /> 1800.2097
            </div>
          </button>
          <button className="button bg-none">
            <RiMapPinLine className="icon" />
            <div className="content">
              Cửa hàng <br /> gần bạn
            </div>
          </button>
          <button className="button bg-none">
            <TbTruckDelivery className="icon" />
            <div className="content">
              Tra cứu <br /> đơn hàng
            </div>
          </button>
          <button
            onClick={() => {
              if (token && username) {
                router.push(config.routes.cart);
              } else {
                if (state.modal.login) {
                  dispatch(actions.setModalLogin(false));
                } else {
                  dispatch(actions.setModalLogin(true));
                }
              }
            }}
            className="button bg-none"
          >
            <BsBag className="icon" />
            <div className="content">
              Giỏ <br /> hàng
              <span className="itemsInCart">{length}</span>
            </div>
          </button>
          <button
            onClick={() => {
              if (token && username) {
                if (state.modal.noti) {
                  dispatch(actions.setModalNoti(false));
                } else {
                  dispatch(actions.setModalNoti(true));
                }
              } else {
                if (state.modal.login) {
                  dispatch(actions.setModalLogin(false));
                } else {
                  dispatch(actions.setModalLogin(true));
                }
              }
            }}
            className="button buttonColumn"
            style={{ minWidth: "80px" }}
          >
            <HiOutlineUserCircle className="icon" />
            <div className="content">{!!(token && username) ? username : "Đăng nhập"}</div>
          </button>
          {state.modal.noti && (
            <div className="noti">
              <div className="head">
                <Link
                  onClick={() => dispatch(actions.setModalNoti(false))}
                  href={config.routes.account}
                  className="box"
                >
                  <div className="access">
                    <img
                      src="https://static.cellphones.com.vn/img/smember.ab0728d.svg"
                      alt="smumber"
                    />
                    <span>Truy cập Smember</span>
                  </div>
                  <FaChevronRight />
                </Link>
              </div>
              <div className="body">
                <div className="title">Thông báo</div>
                <div className="list">
                  <div className="empty">
                    <img src="https://static.cellphones.com.vn/img/empty.e7af47f.svg" alt="empty" />
                    <div className="textBox">
                      <strong>Ở đây hơi trống trải.</strong>
                      <span>S-Ant sẽ gửi cho bạn những thông báo mới nhất tại đây nhé!</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="foot" onClick={() => dispatch(actions.setModalNoti(false))}>
                Đóng
              </button>
            </div>
          )}
        </div>
      </header>
      {state.modal.menu && (
        <div id="overlay" onClick={() => dispatch(actions.setModalMenu(false))}></div>
      )}

      {state.modal.location && (
        <Fragment>
          <Location location={state.location} />
          <div id="overlay" onClick={() => dispatch(actions.setModalLocation(false))}></div>
        </Fragment>
      )}

      {state.modal.search && !state.searchValue && !!searchResult.length && (
        <div id="overlay" onClick={() => dispatch(actions.setModalSearch(false))}></div>
      )}
      {state.modal.login && (
        <Fragment>
          <div className="modal-login">
            <div className="title">
              Smember
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:80/q:90/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png"
                alt="summer-icon"
              />
            </div>
            <div className="text">
              Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ dàng hơn.
            </div>
            <div className="group-button">
              <Link
                onClick={() => dispatch(actions.setModalLogin(false))}
                href={config.routes.register}
                className="register"
              >
                Đăng ký
              </Link>
              <Link
                onClick={() => dispatch(actions.setModalLogin(false))}
                href={config.routes.login}
                className="login"
              >
                Đăng nhập
              </Link>
            </div>
            <button className="close" onClick={() => dispatch(actions.setModalLogin(false))}>
              <FaXmark />
            </button>
          </div>
          <div id="overlay" onClick={() => dispatch(actions.setModalLogin(false))}></div>
        </Fragment>
      )}
      {state.modal.noti && (
        <div id="overlay" onClick={() => dispatch(actions.setModalNoti(false))}></div>
      )}
    </Fragment>
  );
}

export default Header;
