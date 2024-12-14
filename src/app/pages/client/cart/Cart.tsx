"use client";
import { BsTrash } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { IoGiftOutline } from "react-icons/io5";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Link from "next/link";

import "./cart.css";
import * as productServices from "@/app/services/product";
import config from "@/app/config";
import { cart as cartActions } from "@/app/redux";
import * as authServices from "@/app/services/auth";
import { useRouter } from "next/navigation";

const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function Cart() {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [checkCart, setCheckCart] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const username = authServices.getUsername();
  if (!username) {
    authServices.removeToken();
  }
  const cartRedux: IStateCart[] = useSelector((state: any) => state.cart[username.toString()]);

  useEffect(() => {
    async function _() {
      const _: IProduct[] = [];
      if (cartRedux?.length) {
        for (const item of cartRedux) {
          await productServices.getById(item.id).then((res) => {
            _.push(res);
          });
        }
      }
      setCart(_);
    }
    _();
  }, [cartRedux]);

  useEffect(() => {
    setTotal(
      cart.reduce((cur, item, index) => {
        if (checkCart.includes(index)) {
          return (cur +=
            cartRedux[index]?.quantity *
            (item.price +
              item.types[cartRedux[index]?.type]?.price_extra -
              item.types[cartRedux[index]?.type]?.price_sale +
              item.types[cartRedux[index]?.type]?.colors[cartRedux[index]?.color]?.price_extra));
        } else {
          return cur;
        }
      }, 0)
    );
  }, [checkCart, cartRedux]);

  function changeCheck(id: number) {
    if (checkCart.includes(id)) {
      setCheckCart(checkCart.filter((eid) => eid !== id));
    } else {
      setCheckCart([...checkCart, id]);
    }
  }

  return (
    <main id="body">
      <div className="container container-small">
        {cart.length > 0 && cartRedux?.length > 0 && (
          <section className="cart">
            <div className="head">
              <a className="go-back">
                <BiArrowBack />
              </a>
              <div className="title">Giỏ hàng của bạn</div>
            </div>
            <div className="tabs-cart-type">
              <div className="tab-item active">Giỏ hàng</div>
            </div>

            <div className="block-cart">
              <div className="action">
                <label htmlFor="selectAll" className="action-select">
                  <input
                    checked={checkCart.length === cartRedux?.length}
                    onChange={() => {
                      if (checkCart.length === cartRedux?.length) {
                        setCheckCart([]);
                      } else {
                        setCheckCart(cartRedux.map((e, i) => i));
                      }
                    }}
                    id="selectAll"
                    type="checkbox"
                  />
                  <span>Chọn tất cả</span>
                </label>
                {!!checkCart.length && (
                  <button
                    onClick={() => {
                      dispatch(cartActions.removeMany({ username: username, list: checkCart }));
                      setCheckCart([]);
                    }}
                    className="action-remove-checked"
                  >
                    <em>Xóa sản phẩm đã chọn</em>
                  </button>
                )}
              </div>
              <div className="cart-list">
                {cart.map((product: IProduct, iProduct: number) => (
                  <div key={iProduct} className="cart-item">
                    <div className="cart-product ">
                      <label htmlFor={iProduct.toLocaleString()} className="product-checkbox">
                        <input
                          onChange={() => {
                            changeCheck(iProduct);
                          }}
                          checked={checkCart.includes(iProduct)}
                          id={iProduct.toLocaleString()}
                          type="checkbox"
                        />
                        <img
                          className="product-image"
                          src={
                            product.types[cartRedux[iProduct]?.type]?.colors[
                              cartRedux[iProduct]?.color
                            ]?.image
                          }
                          alt="cart-product"
                        />
                      </label>
                      <div className="product-info">
                        <div className="is-flex is-justify-content-space-between is-align-items-start">
                          <Link
                            href={`${config.routes.product}/${product.id}`}
                            className="product-name"
                          >
                            {`${product.name} - ${
                              product.types[cartRedux[iProduct]?.type]?.name
                            } - ${
                              product.types[cartRedux[iProduct]?.type]?.colors[
                                cartRedux[iProduct]?.color
                              ]?.name
                            }`}
                          </Link>
                          <div
                            onClick={() => {
                              setCheckCart([]);
                              dispatch(cartActions.remove({ username: username, index: iProduct }));
                            }}
                            className="remove-item"
                          >
                            <BsTrash />
                          </div>
                        </div>
                        <div className="is-flex is-justify-content-space-between is-align-items-end">
                          <div className="product-price">
                            <div className="price-show">
                              {VND.format(
                                product.price +
                                  product.types[cartRedux[iProduct]?.type]?.price_extra -
                                  product.types[cartRedux[iProduct]?.type]?.price_sale +
                                  product.types[cartRedux[iProduct]?.type]?.colors[
                                    cartRedux[iProduct]?.color
                                  ]?.price_extra
                              )}
                            </div>
                            {product.price +
                              product.types[cartRedux[iProduct]?.type]?.price_extra -
                              product.types[cartRedux[iProduct]?.type]?.price_sale +
                              product.types[cartRedux[iProduct]?.type]?.colors[
                                cartRedux[iProduct]?.color
                              ]?.price_extra <
                              product.price +
                                product.types[cartRedux[iProduct]?.type]?.price_extra +
                                product.types[cartRedux[iProduct]?.type]?.colors[
                                  cartRedux[iProduct]?.color
                                ]?.price_extra && (
                              <div className="price-through">
                                {VND.format(product.price + product.types[0]?.price_extra)}
                              </div>
                            )}
                          </div>
                          <div className="product-quantity">
                            <div
                              onClick={() => {
                                dispatch(
                                  cartActions.downQuantityItem({
                                    username: username,
                                    index: iProduct,
                                  })
                                );
                              }}
                              className="minus"
                            >
                              -
                            </div>
                            <span className="number">{cartRedux[iProduct]?.quantity}</span>
                            <div
                              onClick={() => {
                                dispatch(
                                  cartActions.upQuantityItem({
                                    username: username,
                                    index: iProduct,
                                  })
                                );
                              }}
                              className="plus"
                            >
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stickyBottomBar">
              <div className="temp-info">
                <div className="price-temp">
                  Tạm tính: <span>{VND.format(total)}</span>
                </div>
                <div className="bmsm-info">
                  <div className="bmsm-info__text">Chưa gồm chiết khấu SMember</div>
                </div>
              </div>
              <button className="btn-buy">Mua ngay</button>
            </div>
          </section>
        )}
        {cart.length <= 0 && !cartRedux?.length && (
          <section className="cart">
            <div className="cart-empty">
              <img
                src="https://cdn2.cellphones.com.vn/x,webp/media/cart/Cart-empty-v2.png"
                alt="Giỏ hàng rổng"
              />
              <span>
                Giỏ hàng của bạn đang trống. <br /> Hãy chọn thêm sản phẩm để mua sắm nhé
              </span>
            </div>

            <div className="stickyBottomBar">
              <Link href={config.routes.home} className="goHome">
                Quay lại trang chủ
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Cart;
