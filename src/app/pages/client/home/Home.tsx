"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./home.css";
import Navi from "@/app/components/Navigation";
import Product from "@/app/components/Product";
import * as productServices from "@/app/services/product";
import * as categoryServices from "@/app/services/category";
import config from "@/app/config";
import { SLIDE } from "./data";
import Menu from "@/app/components/Menu";

function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const [productsSale, setProductsSale] = useState([]);
  const [productsHot, setProductsHot] = useState([]);

  const [categoriesHasProduct, setCategoriesHasProduct] = useState<any>([]);

  useEffect(() => {
    productServices.getQuery({ page: 1, limit: 5, sale: true }).then((res) => setProductsSale(res));
    productServices
      .getQuery({ page: 1, limit: 5, orderby: "view-desc" })
      .then((res) => setProductsHot(res));

    categoryServices.getHasProduct().then(async (res) => {
      const temp: any = [];
      for (const category of res) {
        await productServices
          .getQuery({ page: 1, limit: 5, categoryid: category.id })
          .then((data) => {
            temp.push({ title: category.name, products: data });
          });
      }
      setCategoriesHasProduct(temp);
    });
  }, []);

  return (
    <main id="body">
      <div className="container">
        <section className="slider">
          <Menu />
          <div className="slide">
            <Swiper
              className="sliding"
              slidesPerView={1}
              modules={[Autoplay, Thumbs, Navigation]}
              thumbs={{ swiper: thumbsSwiper }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={{
                prevEl: "#prve",
                nextEl: "#next",
              }}
            >
              {SLIDE.map((e, i) => (
                <SwiperSlide key={i}>
                  <img src={e.image} alt="slide" />
                </SwiperSlide>
              ))}
              <Navi />
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              className="slide-pagination"
            >
              {SLIDE.map((e, i) => (
                <SwiperSlide key={i} className="slide-pagination-item">
                  {e.name}
                  <br />
                  {e.description}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="benner">
            <div className="benner-item">
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/udsv-right-laptop.jpg"
                alt="benner"
              />
            </div>
            <div className="benner-item">
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/right-banner-macbook-cto-09-08-new-new.jpg"
                alt="benner"
              />
            </div>
            <div className="benner-item">
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/right-banner-14-10.jpg"
                alt="benner"
              />
            </div>
          </div>
          <div className="banner-horizontal">
            <img
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06 (1).gif"
              alt="horizontal-banner"
            />
          </div>
        </section>
        <section className="product-container hotSale">
          <div className="product-title">
            <Link
              href={`${config.routes.product}?categoryid=66ebc5dea9bfeced32ee0554`}
              className="title-image"
            >
              <img
                src="https://cdn2.cellphones.com.vn/x/media/catalog/product/h/o/hot-sale-cuoi-tuan-20-03-2024.gif"
                alt="hot-sale-cuoi-tuan"
              />
            </Link>
            {/* <div className="tab-menu">
              <div className="tab-item active">Điện thoại, Tablet</div>
              <div className="tab-item">Phụ kiện, TV</div>
            </div> */}
            {/* <div className="countdown">
              <span>Kết thúc sau:</span>
              <div className="time-box">
                <div className="time">00</div>
                <div className="separate">:</div>
                <div className="time">00</div>
                <div className="separate">:</div>
                <div className="time">00</div>
                <div className="separate">:</div>
                <div className="time">00</div>
              </div>
            </div> */}
          </div>
          <div className="product-list">
            {productsSale.map((product: IProduct) => (
              <Fragment key={product.id}>
                <Product data={product} />
              </Fragment>
            ))}
            {/* <Navigation /> */}
          </div>
        </section>
        <section className="product-container">
          <div className="product-title">
            <Link
              href={`${config.routes.product}?categoryid=66ebc5dea9bfeced32ee0554`}
              className="title"
            >
              Sản phẩm nổi bật
            </Link>
            <div className="list-related-tag">
              {/* <div className="related-tag">Apple</div>
              <div className="related-tag">Samsung</div>
              <div className="related-tag">Xiaomi</div>
              <div className="related-tag">OPPO</div>
              <div className="related-tag">vivo</div>
              <div className="related-tag">realme</div>
              <div className="related-tag">ASUS</div>
              <div className="related-tag">TECNO</div>
              <div className="related-tag">Nokia</div>
              <div className="related-tag">Infinix</div>
              <div className="related-tag">Oneplus</div> */}
              <div className="related-tag">Xem tất cả</div>
            </div>
          </div>
          <div className="product-list">
            {productsHot.map((product: IProduct) => (
              <Fragment key={product.id}>
                <Product data={product} />
              </Fragment>
            ))}
            {/* <Navigation /> */}
          </div>
        </section>
        {categoriesHasProduct.map((e: any, i: number) => (
          <section key={i} className="product-container">
            <div className="product-title">
              <Link
                href={`${config.routes.product}?categoryid=66ebc5dea9bfeced32ee0554`}
                className="title"
              >
                {e.title}
              </Link>
              <div className="list-related-tag">
                {/* <div className="related-tag">Apple</div>
              <div className="related-tag">Samsung</div>
              <div className="related-tag">Xiaomi</div>
              <div className="related-tag">OPPO</div>
              <div className="related-tag">vivo</div>
              <div className="related-tag">realme</div>
              <div className="related-tag">ASUS</div>
              <div className="related-tag">TECNO</div>
              <div className="related-tag">Nokia</div>
              <div className="related-tag">Infinix</div>
              <div className="related-tag">Oneplus</div> */}
                <div className="related-tag">Xem tất cả</div>
              </div>
            </div>
            <div className="product-list">
              {e.products.map((product: IProduct) => (
                <Fragment key={product.id}>
                  <Product data={product} />
                </Fragment>
              ))}
              {/* <Navigation /> */}
            </div>
          </section>
        ))}
        <section className="category-container">
          <div className="category-title">
            <a className="title">PHỤ KIỆN</a> <a className="show-more">Xem tất cả</a>
          </div>
          <div className="category-content">
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_1_.png')",
              }}
            >
              <span>Phụ kiện Apple</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_4_.png)",
              }}
            >
              <span>Cáp, sạc</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/i/c/icon-cate-pk_5_.png')",
              }}
            >
              <span>Pin sạc dự phòng</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_3_.png')",
              }}
            >
              <span>Ốp lưng - Bao da</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_2_.png')",
              }}
            >
              <span>Dán màn hình</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_8_.png'",
              }}
            >
              <span>Thẻ nhớ, USB</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_13_.png')",
              }}
            >
              <span>Gaming Gear, Playstation</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_10_.png')",
              }}
            >
              <span>Sim 4G</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_7_.png')",
              }}
            >
              <span>Thiết bị mạng</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/c/a/cameraa.png')",
              }}
            >
              <span>Camera</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_12_.png')",
              }}
            >
              <span>Gimbal</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_15_.png')",
              }}
            >
              <span>Flycam</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_19_.png')",
              }}
            >
              <span>Máy ảnh</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_9_.png')",
              }}
            >
              <span>Chuột, bàn phím</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/i/c/icon-cate-pk_17_.png')",
              }}
            >
              <span>Balo, túi xách</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  "url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/i/c/icon-cate-pk_11_.png')",
              }}
            >
              <span>Hub chuyển đổi</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  " url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/suc-khoe-l_m-dep-iconcate_2_.png')",
              }}
            >
              <span>Phụ kiện điện thoại</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(242, 131, 118)",
                backgroundImage:
                  " url('https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_16_.png')",
              }}
            >
              <span>Phụ kiện Laptop</span>
            </a>
          </div>
        </section>
        <section className="category-container">
          <div className="category-title">
            <a className="title">LINH KIỆN MÁY TÍNH</a> <a className="show-more">Xem tất cả</a>
          </div>
          <div className="category-content">
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(252, 165, 165)",
                backgroundImage: "url(https://cellphones.com.vn/media/icons/category/cate-868.svg)",
              }}
            >
              <span>PC ráp sẵn CellphoneS</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(253, 164, 175)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/p/cpu_1.png)",
              }}
            >
              <span>CPU</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(249, 168, 212)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/m/a/mainboard_1.png)",
              }}
            >
              <span>Mainboard</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(196, 181, 253)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/r/a/ram_2.png)",
              }}
            >
              <span>RAM</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(165, 180, 252)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/s/s/ssd_2.png)",
              }}
            >
              <span>Ổ cứng</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(147, 197, 253)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/v/g/vga.png)",
              }}
            >
              <span>Card màn hình</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(110, 231, 183)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/p/s/psu.png)",
              }}
            >
              <span>Nguồn máy tính</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(252, 211, 75)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/t/_/t_n_nhi_t_2.png)",
              }}
            >
              <span>Tản nhiệt</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(253, 186, 116)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/case_1.png)",
              }}
            >
              <span>Case máy tính</span>
            </a>
          </div>
        </section>
        <section className="category-container">
          <div className="category-title">
            <a className="title">HÀNG CŨ</a> <a className="show-more">Xem tất cả</a>
          </div>
          <div className="category-content">
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/p/ip-14-hp-cu.png)",
              }}
            >
              <span>Điện thoại cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-cate-cu.png)",
              }}
            >
              <span>Máy tính bảng cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-392.svg)",
              }}
            >
              <span>Mac cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-878.svg)",
              }}
            >
              <span>Laptop cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-tai-nghe_1.png)",
              }}
            >
              <span>Tai nghe cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-loa_1.png)",
              }}
            >
              <span>Loa cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-451.svg)",
              }}
            >
              <span>Đồng hồ thông minh cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-846.svg)",
              }}
            >
              <span>Đồ gia dụng cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-phu-kien.png)",
              }}
            >
              <span>Phụ kiện cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-man-hinh.png)",
              }}
            >
              <span>Màn hình cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/i/tivi-cu-new_1334.png)",
              }}
            >
              <span>Tivi cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-114.svg)",
              }}
            >
              <span>Cáp sạc cũ</span>
            </a>
            <a
              className="category-item"
              style={{
                backgroundColor: "rgb(214, 64, 68)",
                backgroundImage:
                  "url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-122.svg)",
              }}
            >
              <span>Pin dự phòng cũ</span>
            </a>
          </div>
        </section>
        <section className="brand-banner">
          <div className="brand_banner-title">
            <a>Ưu đãi sinh viên</a>
          </div>
          <div className="brand_banner-content">
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-full-deal.jpg"
                  alt="brand-benner"
                />
              </a>
            </div>
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-samsung.jpg"
                  alt="brand-benner"
                />
              </a>
            </div>
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-laptop.jpg"
                  alt="brand-benner"
                />
              </a>
            </div>
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-macbook.jpg"
                  alt="brand-benner"
                />
              </a>
            </div>
            <Navi />
          </div>
        </section>
        <section className="brand-banner">
          <div className="brand_banner-title">
            <a>Ưu đãi thanh toán</a>
          </div>
          <div className="brand_banner-content">
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/techcom-iphone-16-update-uu-dai-1-6%20(2).jpg"
                  alt="brand-benner"
                />
              </a>
            </div>
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/techcom-iphone-16-update-uu-dai-1-6%20(2).jpg"
                  alt="brand-benner"
                />
              </a>
            </div>
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/techcom-iphone-16-update-uu-dai-1-6%20(2).jpg"
                  alt="brand-benner"
                />
              </a>
            </div>
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/techcom-iphone-16-update-uu-dai-1-6%20(2).jpg"
                  alt="brand-benner"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="brand-banner">
          <div className="brand_banner-title">
            <a>Chuyên trang thương hiệu</a>
          </div>
          <div className="brand_banner-content">
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/apple-chinh-hang-home.jpg"
                  alt="brand-benner"
                />
              </a>
            </div>
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/SIS asus.png"
                  alt="brand-benner"
                />
              </a>
            </div>
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/gian-hang-samsung-home.png"
                  alt="brand-benner"
                />
              </a>
            </div>
            <div className="brand_banner_box">
              <a className="brand_banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/xiaomi.png"
                  alt="brand-benner"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="sforum-homepage">
          <div className="sforum_homepage-title">
            <a>TIN CÔNG NGHỆ</a> <a className="show-more">Xem tất cả</a>
          </div>
          <div className="sforum_homepage-content">
            <a className="sforum_homepage-item">
              <img
                src="https://cdn-media.sforum.vn/storage/app/media/chidung/hotsale/hotsale-cuoi-tuan-nganh-hang-gia-dung-cover.jpg"
                alt="sforum_homepage"
              />
              <p>
                Hotsale cuối tuần: Toàn gia dụng "ngon - bổ - rẻ", có cả robot hút bụi, lau nhà với
                khuyến mãi 50%
              </p>
            </a>
            <a className="sforum_homepage-item">
              <img
                src="https://cdn-media.sforum.vn/storage/app/media/ducminh/nguyen-mau-dien-thoai-khong-phim-bam-xiaomi-t9-1.jpg"
                alt="sforum_homepage"
              />
              <p>Điện thoại không phím bấm của Xiaomi bất ngờ lộ diện, trang bị sạc nhanh 200W</p>
            </a>
            <a className="sforum_homepage-item">
              <img
                src="https://cdn-media.sforum.vn/storage/app/media/ducminh/oppo-find-x8-silicon-cacbon-t9-1.jpg"
                alt="sforum_homepage"
              />
              <p>OPPO Find X8 series được xác nhận sẽ trang bị pin silicon-carbon dung lượng lớn</p>
            </a>
            <a className="sforum_homepage-item">
              <img
                src="https://cdn-media.sforum.vn/storage/app/media/trannghia/Samsung-AI-Key-cover.jpg"
                alt="sforum_homepage"
              />
              <p>Bàn phím Galaxy Tab S10 sẽ có phím Galaxy AI chuyên dụng mới</p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
