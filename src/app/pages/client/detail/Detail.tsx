"use client";
import { BsCartPlus, BsStar, BsStarFill, BsStarHalf, BsTicketPerforated } from "react-icons/bs";
import { IoGiftOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { SlSocialDropbox } from "react-icons/sl";
import { RiMapPinLine, RiShieldCheckLine } from "react-icons/ri";
import { LiaPhoneSolid } from "react-icons/lia";
import { FaCircleCheck } from "react-icons/fa6";
import { useParams, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import "./detail.css";
import * as productServices from "@/app/services/product";
import Product from "@/app/components/Product";
import config from "@/app/config";
import Navi from "@/app/components/Navigation";
import { cart } from "@/app/redux";
import { actions, useStore } from "@/app/store";

const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function Detail() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [product, setProduct] = useState<IProduct>();
  const [productsSame, setProductsSame] = useState<IProduct[]>([]);
  const [iType, setIType] = useState(0);
  const [iColor, setIColor] = useState(0);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  const [state, dispatch] = useStore();

  const router = useRouter();
  const param = useParams();

  const dispatchRedux = useDispatch();

  useEffect(() => {
    const id = param.id;
    if (id) {
      productServices.getById(id.toString()).then((res) => setProduct(res));
      productServices.getSame(id.toString(), 5).then((res) => setProductsSame(res));
    } else {
      router.push(config.routes.home);
    }
    setToken(Cookies.get("token") || "");
    setUsername(Cookies.get("username") || "");
  }, [param]);

  return (
    <main id="body">
      <div className="container">
        {product && (
          <Fragment>
            <section className="detail-info">
              <div className="info-head">
                <a className="detail-name">{product.name}</a>
                <div className="detail-rating">
                  {Array.from({ length: product.rating }).map((_, i: number) => (
                    <BsStarFill key={i} />
                  ))}
                  {Array.from({ length: 5 - product.rating }).map((_, i: number) => (
                    <BsStar key={i} />
                  ))}
                  <span> {product.view.toLocaleString("vi-VN")} Lược xem</span>
                </div>
              </div>
              <hr className="info-hr" />
              <div className="info-content">
                <div className="content-left">
                  <div className="detail-gallery">
                    <Swiper
                      className="gallery-sliding"
                      slidesPerView={1}
                      modules={[Autoplay, Thumbs, Navigation]}
                      thumbs={{ swiper: thumbsSwiper }}
                      autoplay={{ delay: 2500, disableOnInteraction: false }}
                      navigation={{
                        prevEl: "#prve",
                        nextEl: "#next",
                      }}
                    >
                      <SwiperSlide className="slide linear-gradient">
                        <img className="detail-image" src={product.images[0]} alt="product" />
                        <div className="detail-feature">
                          <div className="feature-title">Tính năng nổi bật</div>
                          <ul className="feature-list">
                            <li className="feature-item">
                              Thiết kế khung viền từ titan chuẩn hàng không vũ trụ - Cực nhẹ, bền
                              cùng viền cạnh mỏng cầm nắm thoải mái
                            </li>
                            <li className="feature-item">
                              Hiệu năng Pro chiến game thả ga - Chip A17 Pro mang lại hiệu năng đồ
                              họa vô cùng sống động và chân thực
                            </li>
                            <li className="feature-item">
                              Thoả sức sáng tạo và quay phim chuyên nghiệp - Cụm 3 camera sau đến
                              48MP và nhiều chế độ tiên tiến
                            </li>
                            <li className="feature-item">
                              Nút tác vụ mới giúp nhanh chóng kích hoạt tính năng yêu thích của bạn
                            </li>
                          </ul>
                        </div>
                      </SwiperSlide>
                      {product.images.map((image: string, IImage: number) => (
                        <SwiperSlide key={IImage} className="slide">
                          <img className="gallery-image" src={image} alt="product" />
                        </SwiperSlide>
                      ))}

                      <Navi />
                    </Swiper>

                    {/* <div className="gallery-sliding"></div> */}

                    <Swiper
                      onSwiper={setThumbsSwiper}
                      slidesPerView={14}
                      // spaceBetween={10}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Thumbs]}
                      className="gallery-navigation"
                    >
                      <SwiperSlide className="navigation-item">
                        <BsStar />
                        <p>Tính năng nổi bật</p>
                      </SwiperSlide>
                      {product.images.map((image: string, IImage: number) => (
                        <SwiperSlide key={IImage} className="navigation-item">
                          <img src={image} alt="product" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="detail-warranty_store">
                    <div className="detail-warranty">
                      <div className="warranty-title">Thông tin sản phẩm </div>
                      <div className="warranty-list">
                        <div className="warranty-item">
                          <IoPhonePortraitOutline className="warranty-icon" />
                          <div className="warranty-content">
                            Máy mới 100% , chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán
                            lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam
                          </div>
                        </div>
                        <div className="warranty-item">
                          <SlSocialDropbox className="warranty-icon" />
                          <div className="warranty-content">
                            Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C
                          </div>
                        </div>
                        <div className="warranty-item">
                          <RiShieldCheckLine className="warranty-icon" />
                          <div className="warranty-content">
                            1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12
                            tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn
                            <a>(xem chi tiết)</a>
                          </div>
                        </div>
                        <div className="warranty-item">
                          <BsTicketPerforated className="warranty-icon" />
                          <div className="warranty-content">Giá sản phẩm đã bao gồm VAT</div>
                        </div>
                      </div>
                    </div>
                    <div className="detail-store">
                      <div className="store-options">
                        <div className="store-province">Hồ Chí Minh</div>
                        <div className="store-district">Quận/Huyện</div>
                      </div>
                      <div className="store-count">
                        Có <strong>50</strong> cửa hàng có sản phẩm
                      </div>
                      <div className="store-list">
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                        <div className="store-item">
                          <div className="store-phone">
                            <LiaPhoneSolid className="store-icon" />
                            <div className="store-content">0123456789</div>
                          </div>
                          <div className="store-address">
                            -
                            <RiMapPinLine className="store-icon" />
                            <div className="store-content">
                              134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-right">
                  <div className="detail-variants">
                    {product.types.length > 1 && (
                      <div className="variants-list">
                        {product.types.map((type: IProductType, IndexType: number) => (
                          <div
                            key={IndexType}
                            onClick={() => {
                              setIType(IndexType);
                              setIColor(0);
                            }}
                            className={`variants-item ${iType === IndexType ? "active" : ""}`}
                          >
                            <div className="variants-content">
                              <strong className="is-text-align-center">{type.name}</strong>
                              <p className="is-text-align-center">
                                {VND.format(product.price + type.price_extra - type.price_sale)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="detail-variants">
                    <div className="variants-title">Chọn màu để xem giá và chi nhánh có hàng</div>
                    <div className="variants-list">
                      {product.types[iType].colors.map((color: ITypeColor, IndexClolor: number) => (
                        <div
                          key={IndexClolor}
                          onClick={() => {
                            setIColor(IndexClolor);
                          }}
                          className={`variants-item ${iColor === IndexClolor ? "active" : ""}`}
                        >
                          <img className="variants-image" src={color.image} alt="" />
                          <div className="variants-content">
                            <strong>{color.name}</strong>
                            <p>
                              {VND.format(
                                product.price +
                                  product.types[iType].price_extra -
                                  product.types[iType].price_sale +
                                  color.price_extra
                              )}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="detail-priceBox">
                    <div className="price-box">
                      <IoPhonePortraitOutline className="price-icon" />
                      <div className="price-content">
                        <div className="price-show">
                          {VND.format(
                            product.price +
                              product.types[iType].price_extra -
                              product.types[iType].price_sale -
                              product.types[iType].price_update +
                              product.types[iType].colors[iColor].price_extra
                          )}
                        </div>
                        <span className="price-text">Khi thu cũ lên đời</span>
                      </div>
                    </div>
                    <div className="price-box active">
                      <div className="price-content">
                        <div className="price-show">
                          {VND.format(
                            product.price +
                              product.types[iType].price_extra -
                              product.types[iType].price_sale +
                              product.types[iType].colors[iColor].price_extra
                          )}
                        </div>
                        {product.price +
                          product.types[iType].price_extra -
                          product.types[iType].price_sale +
                          product.types[iType].colors[iColor].price_extra <
                          product.price +
                            product.types[iType].price_extra -
                            product.types[iType].colors[iColor].price_extra && (
                          <div className="price-through">
                            {VND.format(
                              product.price +
                                product.types[iType].price_extra -
                                product.types[iType].colors[iColor].price_extra
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="detail-benner">
                    <img
                      src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:120/q:90/plain/https://dashboard.cellphones.com.vn/storage/iPhone-product-banner-v1.png"
                      alt=""
                    />
                  </div>
                  <div className="detail-promotion">
                    <div className="promotion-title">
                      <IoGiftOutline />
                      <p>Khuyến mãi</p>
                    </div>
                    <div className="promotion-list">
                      <div className="promotion-item">
                        <div className="promotion-number">1</div>
                        <div className="promotion-text">
                          Giảm ngay 500K khi thanh toán qua VNPAY
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail-boxBtn">
                    <div className="detail-btn">
                      <button
                        onClick={() => {
                          if (token && username) {
                            dispatchRedux(
                              cart.addToCart({
                                username: username,
                                id: product.id,
                                type: iType,
                                color: iColor,
                                quantity: 1,
                              })
                            );
                            router.push(config.routes.cart);
                          } else {
                            if (state.modal.login) {
                              dispatch(actions.setModalLogin(false));
                            } else {
                              dispatch(actions.setModalLogin(true));
                            }
                          }
                        }}
                        className="btn-buy"
                      >
                        <strong>Mua Ngay</strong>
                        <span>(Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)</span>
                      </button>
                      <button
                        onClick={() => {
                          if (token && username) {
                            dispatchRedux(
                              cart.addToCart({
                                username: username,
                                id: product.id,
                                type: iType,
                                color: iColor,
                                quantity: 1,
                              })
                            );
                          } else {
                            if (state.modal.login) {
                              dispatch(actions.setModalLogin(false));
                            } else {
                              dispatch(actions.setModalLogin(true));
                            }
                          }
                        }}
                        className="btn-addCart"
                      >
                        <BsCartPlus />
                        <span>Thêm vào giỏ</span>
                      </button>
                    </div>
                    <div className="detail-btn">
                      <div className="btn-installment">
                        <strong>TRẢ GÓP 0%</strong>
                        <span>Trả trước chỉ từ 10.497.000₫</span>
                      </div>
                      <div className="btn-installment">
                        <strong>TRẢ GÓP 0% QUA THẺ</strong>
                        <span>(Không phí chuyển đổi 3 - 6 tháng)</span>
                      </div>
                    </div>
                    <div className="detail-btn">
                      <div className="btn-update">
                        <strong>Thu cũ lên đời</strong>
                        <span>Chỉ từ 27.290.000đ</span>
                      </div>
                    </div>
                  </div>
                  <div className="detail-promotionMore">
                    <div className="promotionMore-title">ƯU ĐÃI THÊM</div>
                    <div className="promotionMore-list">
                      <div className="promotionMore-item">
                        <FaCircleCheck className="promotionMore-tick" />
                        <div className="promotionMore-text">
                          Xem chính sách ưu đãi dành cho thành viên Smember
                        </div>
                      </div>
                      <div className="promotionMore-item">
                        <FaCircleCheck className="promotionMore-tick" />
                        <img
                          className="promotionMore-icon"
                          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Icon/hsbc_icon.png"
                          alt=""
                        />
                        <div className="promotionMore-text">
                          Giảm đến 500K khi thanh toán bằng thẻ tín dụng HSBC
                        </div>
                      </div>
                      <div className="promotionMore-item">
                        <FaCircleCheck className="promotionMore-tick" />
                        <img
                          className="promotionMore-icon"
                          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Icon/logo-ocb.png"
                          alt=""
                        />
                        <div className="promotionMore-text">
                          {" "}
                          Giảm 500K khi thanh toán qua thẻ OCB
                        </div>
                      </div>
                      <div className="promotionMore-item">
                        <FaCircleCheck className="promotionMore-tick" />
                        <img
                          className="promotionMore-icon"
                          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Icon/logo-home-credit-new.png"
                          alt=""
                        />
                        <div className="promotionMore-text">
                          Giảm 400.000đ khi thanh toán bằng thẻ tín dụng Home Credit
                        </div>
                      </div>
                      <div className="promotionMore-item">
                        <FaCircleCheck className="promotionMore-tick" />
                        <img
                          className="promotionMore-icon"
                          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/DUMT_ZV0.png"
                          alt=""
                        />
                        <div className="promotionMore-text">
                          Giảm đến 700.000đ khi thanh toán qua Krediv
                        </div>
                      </div>
                      <div className="promotionMore-item">
                        <FaCircleCheck className="promotionMore-tick" />
                        <div className="promotionMore-text">
                          Liên hệ B2B để được tư vấn giá tốt nhất cho khách hàng doanh nghiệp khi
                          mua số lượng nhiều
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="extendedWarranty">
                    <div className="extendedWarranty-title">
                      <RiShieldCheckLine className="title-icon" />
                      <div className="title-content">
                        <div className="title-text">
                          Bảo vệ sản phẩm toàn diện với dịch vụ bảo hành mở rộng
                          <a>Xem chi tiết</a>
                        </div>
                        <div className="title-note">
                          (Khách hàng đăng ký thông tin để được hỗ trợ tư vấn và thanh toán tại cửa
                          hàng nhanh nhất, số tiền phải thanh toán chưa bao gồm giá trị của gói bảo
                          hành mở rộng)
                        </div>
                      </div>
                    </div>
                    <div className="extendedWarranty-list">
                      <label htmlFor="extendedWarranty1" className="extendedWarranty-item">
                        <div className="extendedWarranty-content">
                          <input
                            name="extendedWarranty"
                            id="extendedWarranty1"
                            className="extendedWarranty-radio"
                            type="radio"
                          />
                          <div className="extendedWarranty-text">
                            Rơi vỡ - Rớt nước: Hỗ trợ 90% chi phí sửa chữa, đổi mới sản phẩm nếu hư
                            hỏng nặng trong 12 tháng
                          </div>
                        </div>
                        <div className="extendedWarranty-priceBox">
                          <div className="extendedWarranty-price">2.400.000 đ</div>
                          <em className="extendedWarranty-showMore">Xem chi tiết</em>
                        </div>
                      </label>
                      <label htmlFor="extendedWarranty2" className="extendedWarranty-item">
                        <div className="extendedWarranty-content">
                          <input
                            name="extendedWarranty"
                            id="extendedWarranty2"
                            className="extendedWarranty-radio"
                            type="radio"
                          />
                          <div className="extendedWarranty-text">
                            Dịch vụ bảo hành Apple Care+ cho iPhone
                          </div>
                        </div>
                        <div className="extendedWarranty-priceBox">
                          <div className="extendedWarranty-price">5.299.000 đ</div>
                          <em className="extendedWarranty-showMore">Xem chi tiết</em>
                        </div>
                      </label>
                      <label htmlFor="extendedWarranty3" className="extendedWarranty-item">
                        <div className="extendedWarranty-content">
                          <input
                            name="extendedWarranty"
                            id="extendedWarranty3"
                            className="extendedWarranty-radio"
                            type="radio"
                          />
                          <div className="extendedWarranty-text">
                            1 đổi 1 VIP 6 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 6
                            tháng
                          </div>
                        </div>
                        <div className="extendedWarranty-priceBox">
                          <div className="extendedWarranty-price">1.300.000 đ</div>
                          <em className="extendedWarranty-showMore">Xem chi tiết</em>
                        </div>
                      </label>
                      <label htmlFor="extendedWarranty4" className="extendedWarranty-item">
                        <div className="extendedWarranty-content">
                          <input
                            name="extendedWarranty"
                            id="extendedWarranty4"
                            className="extendedWarranty-radio"
                            type="radio"
                          />
                          <div className="extendedWarranty-text">
                            S24+ 12 tháng: Đổi sản phẩm tương đương hoặc miễn phí chi phí sửa chữa
                            nếu có lỗi của NSX khi hết hạn bảo hành trong 12 tháng
                          </div>
                        </div>
                        <div className="extendedWarranty-priceBox">
                          <div className="extendedWarranty-price">1.600.000 đ</div>
                          <em className="extendedWarranty-showMore">Xem chi tiết</em>
                        </div>
                      </label>
                      <label htmlFor="extendedWarranty5" className="extendedWarranty-item">
                        <div className="extendedWarranty-content">
                          <input
                            name="extendedWarranty"
                            id="extendedWarranty5"
                            className="extendedWarranty-radio"
                            type="radio"
                          />
                          <div className="extendedWarranty-text">
                            1 đổi 1 VIP 12 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 12
                            tháng
                          </div>
                        </div>
                        <div className="extendedWarranty-priceBox">
                          <div className="extendedWarranty-price">1.800.000 đ</div>
                          <em className="extendedWarranty-showMore">Xem chi tiết</em>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="product-container">
              <div className="product-title">
                <div className="title">Sản phẩm tương tự</div>
              </div>
              <div className="product-list">
                {productsSame.map((productSame: IProduct) => (
                  <Fragment key={productSame.id}>
                    <Product data={productSame} />
                  </Fragment>
                ))}
              </div>
            </section>
          </Fragment>
        )}
      </div>
    </main>
  );
}

export default Detail;
