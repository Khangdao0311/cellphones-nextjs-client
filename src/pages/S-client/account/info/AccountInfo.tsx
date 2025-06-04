import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import "../account.css";
import config from "@/config";
import MenuAccount from "@/components/MenuAccount";

function AccountInfo() {
  return (
    <main id="body">
      <div className="container">
        <section className="account">
          <MenuAccount />
          <div className="account-content">
            <div className="account-info">
              <img
                className="info-avatar"
                src="https://cellphones.com.vn/smember/_nuxt/img/Shipper_CPS3.77d4065.png"
                alt=""
              />
              <div className="info-name">ĐÀO VĨNH KHANG</div>
              <div className="info-form">
                <div className="box-group">
                  <input
                    className="group-input"
                    type="text"
                    placeholder="Họ và tên: Đào Vĩnh Khang"
                  />
                  <label className="group-title">Họ và tên</label>
                  <div className="group-edit">
                    <TbEdit />
                  </div>
                </div>
                <div className="box-group">
                  <input
                    className="group-input"
                    type="text"
                    placeholder="Số điện thoại: 0976382553"
                  />
                  <label className="group-title">Số điện thoại</label>
                  <div className="group-edit">
                    <TbEdit />
                  </div>
                </div>
                <div className="box-group">
                  <input
                    className="group-input"
                    type="text"
                    placeholder="Email: khangdao0311@gmail.com"
                  />
                  <label className="group-title">Email</label>
                  <div className="group-edit">
                    <TbEdit />
                  </div>
                </div>
                <div className="box-group">
                  <input className="group-input" type="text" placeholder="Giới tính: Nam" />
                  <label className="group-title">Giới tính</label>
                  <div className="group-edit">
                    <TbEdit />
                  </div>
                </div>
                <div className="box-group">
                  <p className="group-go">Địa chỉ</p>
                  <div className="group-edit">
                    <TbEdit />
                  </div>
                </div>
                <div className="box-group">
                  <p className="group-go">Đổi mật khẩu</p>
                  <Link href={config.routes.changePassword} className="group-edit">
                    <TbEdit />
                  </Link>
                </div>
                <div className="account-submit">Cập nhật thông tin</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AccountInfo;
