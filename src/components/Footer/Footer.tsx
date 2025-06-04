import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="top">
        <div className="container">
          <div className="box">
            <div className="item">
              <div className="title">Tổng đài hỗ trợ miễn phí</div>
              <div className="content">
                <div className="text">
                  Gọi mua hàng <span className="phone">1800.2097</span> (7h30 - 22h00)
                </div>
                <div className="text">
                  Gọi khiếu nại <span className="phone">1800.2063</span> (8h00 - 21h30)
                </div>
                <div className="text">
                  Gọi bảo hành <span className="phone">1800.2064</span> (8h00 - 21h00)
                </div>
              </div>
            </div>
            <div className="item">
              <div className="title">Phương thức thanh toán</div>
              <div className="boxIconPay">
                <div className="icon-pay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png"
                    alt="icon-pay"
                  />
                </div>
                <div className="icon-pay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"
                    alt="icon-pay"
                  />
                </div>
                <div className="icon-pay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/momo_1.png"
                    alt="icon-pay"
                  />
                </div>
                <div className="icon-pay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png"
                    alt="icon-pay"
                  />
                </div>
                <div className="icon-pay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/mpos-logo.png"
                    alt="icon-pay"
                  />
                </div>
                <div className="icon-pay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/kredivo-logo.png"
                    alt="icon-pay"
                  />
                </div>
                <div className="icon-pay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"
                    alt="icon-pay"
                  />
                </div>
                <div className="icon-pay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png"
                    alt="icon-pay"
                  />
                </div>
                <div className="icon-pay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/fundiin.png"
                    alt="icon-pay"
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="title">ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</div>
              <div className="notification">
                <div className="voucher">(*) Nhận ngay voucher 10%</div>
                <div className="tip">*Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới</div>
              </div>
              <input className="input" type="text" placeholder="Email*" />
              <input className="input" type="text" placeholder="Số điện thoại" />
              <div className="rule">
                <input type="checkbox" />
                Tôi đồng ý với điều khoản của CellphoneS
              </div>
              <button className="submit">Đăng ký ngay</button>
            </div>
          </div>
          <div className="box">
            <div className="item">
              <div className="title">Thông tin và chính sách</div>
              <div className="content">
                <a className="text">Mua hàng và thanh toán Online</a>
                <a className="text">Mua hàng trả góp Online</a>
                <a className="text">Mua hàng trả góp bằng thẻ tín dụng</a>
                <a className="text">Chính sách giao hàng</a>
                <a className="text">Tra điểm Smember</a>
                <a className="text">Xem ưu đãi Smember</a>
                <a className="text">Tra thông tin bảo hành</a>
                <a className="text">Tra cứu hoá đơn điện tử</a>
                <a className="text">Thông tin hoá đơn mua hàng</a>
                <a className="text">Trung tâm bảo hành chính hãng</a>
                <a className="text">Quy định về việc sao lưu dữ liệu</a>
                <a className="text">Chính sách khui hộp sản phẩm Apple</a>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="item">
              <div className="title">Tổng đài hỗ trợ miễn phí</div>
              <div className="content">
                <a className="text">Khách hàng doanh nghiệp (B2B)</a>
                <a className="text">Ưu đãi thanh toán</a>
                <a className="text">Quy chế hoạt động</a>
                <a className="text">Chính sách bảo mật thông tin cá nhân</a>
                <a className="text">Chính sách Bảo hành</a>
                <a className="text">Liên hệ hợp tác kinh doanh</a>
                <a className="text">Tuyển dụng</a>
                <a className="text">Dịch vụ bảo hành mở rộng</a>
                <div className="app-downloader">
                  <a className="text">Smember: Tích điểm & sử dụng ưu đãi</a>
                  <div className="is-flex">
                    <img
                      className="qr"
                      src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/QR_appGeneral.jpg"
                      alt="QR"
                    />
                    <div className="is-flex is-flex-direction-colum is-align-items-center is-justify-content-center">
                      <a className="app">
                        <img
                          src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png"
                          alt="google play"
                        />
                      </a>
                      <a className="app">
                        <img
                          src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png"
                          alt="google play"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="item">
              <div className="title">Kết nối với CellphoneS</div>
              <div className="boxIconNetWork">
                <a className="icon-netWork">
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                    alt="icon-netWork"
                  />
                </a>
                <a className="icon-netWork">
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                    alt="icon-netWork"
                  />
                </a>
                <a className="icon-netWork">
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                    alt="icon-netWork"
                  />
                </a>
                <a className="icon-netWork">
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                    alt="icon-netWork"
                  />
                </a>
                <a className="icon-netWork">
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-zalo.png"
                    alt="icon-netWork"
                  />
                </a>
              </div>
            </div>
            <div className="item">
              <div className="title">Website thành viên</div>
              <div className="corp-members">
                <div className="corp-member">
                  Hệ thống bảo hành sửa chữa Điện thoại - Máy tính
                  <a className="corp-member-image">
                    <img
                      src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                      alt="imgae"
                    />
                  </a>
                </div>
                <div className="corp-member">
                  Trung tâm bảo hành uỷ quyền Apple
                  <a className="corp-member-image">
                    <img
                      src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png"
                      alt="imgae"
                    />
                  </a>
                </div>
                <div className="corp-member">
                  Kênh thông tin giải trí công nghệ cho giới trẻ
                  <a className="corp-member-image">
                    <img
                      src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                      alt="imgae"
                    />
                  </a>
                </div>
                <div className="corp-member">
                  Trang thông tin công nghệ mới nhất
                  <a className="corp-member-image">
                    <img
                      src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                      alt="imgae"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="cms">
            <div className="cms-item">
              <div className="cms-line">
                <a>Back to School là gì</a> – <a>Điện thoại</a> – <a>Điện thoại iPhone</a>
              </div>
              <div className="cms-line">
                <a>Điện thoại iPhone 15</a> – <a>Điện thoại iPhone 15 Pro Max</a>
              </div>
            </div>
            <div className="cms-item">
              <div className="cms-line">
                <a>Điện thoại Vivo</a> – <a>Điện thoại OPPO</a> – <a>Điện thoại Xiaomi</a>
              </div>
              <div className="cms-line">
                <a>Điện thoại Samsung Galaxy</a> – <a>Samsung Galaxy A</a>
              </div>
            </div>
            <div className="cms-item">
              <div className="cms-line">
                <a>Laptop</a> – <a>Laptop Acer</a> – <a>Laptop Dell</a> – <a>Laptop HP</a>
              </div>
              <div className="cms-line">
                <a>Tivi</a> – <a>Tivi Samsung</a> – <a>Tivi Sony</a> – <a>Tivi LG</a>
              </div>
            </div>
            <div className="cms-item">
              <div className="cms-line">
                <a>Nhà thông minh</a> – <a>Máy hút bụi gia đình</a> – <a>Laptop AI</a>
              </div>
              <div className="cms-line">
                <a>Đồ gia dụng</a> – <a>Nồi chiên không dầu giá rẻ</a> – <a>Nồi cơm điện giá rẻ</a>
              </div>
            </div>
          </div>
          <div className="company-information">
            <div className="address">
              Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD: 0316172372 cấp tại Sở
              KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1,
              Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.
            </div>
            <div className="certification">
              <a className="certification-item">
                <img
                  src="https://cdn2.cellphones.com.vn/80x,webp/media/logo/logoSaleNoti.png"
                  alt="certification"
                />
              </a>
              <a className="certification-item">
                <img
                  src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022"
                  alt="certification"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
