"use client";
import { Fragment, useEffect, useState } from "react";

import "../account.css";
import Product from "@/components/Product";
import MenuAccount from "@/components/MenuAccount";
import * as authServices from "@/services/auth";
import * as productServices from "@/services/product";
import config from "@/config";
import { useRouter } from "next/navigation";

function Account() {
  const [productsSale, setProductsSale] = useState([]);
  const [user, setUser] = useState<any>({});

  const router = useRouter();

  useEffect(() => {
    if (authServices.getToken()) {
      authServices
        .getProfile()
        .then((res: any) => setUser(res))
        .catch(async (err: any) => {
          if (err.status == 401) {
            const _ = await authServices.refreshTokenFlow();
            if (!_) return router.push(config.routes.login);
            return authServices.getProfile().then((res: any) => setUser(res));
          }
          authServices.removeToken();
          return router.push(config.routes.login);
        });
    }
  }, []);

  useEffect(() => {
    productServices.getQuery({ page: 1, limit: 4, sale: true }).then((res) => setProductsSale(res));
  }, []);

  return (
    <main id="body">
      <div className="container">
        <section className="account">
          <MenuAccount />
          <div className="account-content">
            <div className="account-smem">
              <div className="account-welcome">
                <div className="welcome-avater">
                  <img
                    src="https://cdn2.cellphones.com.vn/50x50,webp,q100/media/wysiwyg/Shipper_CPS3_1.png"
                    alt="smember"
                  />
                </div>
                <div className="welcome-smember">
                  <div className="smember-name">{user.name}</div>
                  <div className="smember-phone">{user.phone}</div>
                  <div className="smember-rank">Summer</div>
                </div>
              </div>
              {/* <div className="account-cumulative">
                <div className="cumulative-item">
                  <div className="cumulative-quantity">3</div>
                  <div className="cumulative-title">đơn hàng</div>
                </div>
                <div className="cumulative-item">
                  <div className="cumulative-quantity">1M</div>
                  <div className="cumulative-title">Tổng tiền tích lũy</div>
                </div>
              </div> */}
            </div>
            <div className="account-sliding">
              <div className="sliding-title">
                <p>Chương trình nổi bật</p>
                <a className="show-more">Xem tất cả</a>
              </div>
              <div className="sliding-box">
                <div className="slide">
                  <div className="slide-item">
                    <img
                      className="slide-image"
                      src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/roi-16-pro-max-trang-km.jpg"
                      alt="slide item"
                    />
                    <div className="slide-name">IPHONE 16 SERIES - ĐĂNG KÝ NGAY</div>
                  </div>
                  <div className="slide-item">
                    <img
                      className="slide-image"
                      src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/fold-6-km-moi-home-30-8.png"
                      alt="slide item"
                    />
                    <div className="slide-name">GALAXY Z FOLD6 - ƯU ĐÃI HẤP DẪN</div>
                  </div>
                  <div className="slide-item">
                    <img
                      className="slide-image"
                      src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/banner-trang-khuyen-mai-smember-30-31-05.png"
                      alt="slide item"
                    />
                    <div className="slide-name">TẢI APP SMEMBER - TÍCH ĐIỂM NHẬN ƯU ĐÃI</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container hotSale ">
              <div className="product-title">
                <div className="title-image">
                  <img
                    src="https://cdn2.cellphones.com.vn/x/media/catalog/product/h/o/hot-sale-cuoi-tuan-20-03-2024.gif"
                    alt="hot-sale-cuoi-tuan"
                  />
                </div>
                <div className="tab-menu">
                  <div className="tab-item active">Điện thoại, Tablet</div>
                  <div className="tab-item">Phụ kiện, TV</div>
                </div>
                <div className="countdown">
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
                </div>
              </div>
              <div className="product-list">
                {productsSale.map((product: IProduct) => (
                  <Fragment key={product.id}>
                    <Product data={product} />
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="wishList">
              <div className="wishList-title">Sản phẩm yêu thích</div>
              <div className="product-list">{/* <Product data={product} />   */}</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Account;
