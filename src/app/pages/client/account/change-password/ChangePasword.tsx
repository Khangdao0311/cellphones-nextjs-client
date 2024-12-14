import "../account.css";
import MenuAccount from "@/app/components/MenuAccount";

function ChangePassword() {
  return (
    <main id="body">
      <div className="container">
        <section className="account">
          <MenuAccount />
          <div className="account-content">
            <div className="account-form">
              <div className="account-title">Tạo mật khẩu mới</div>
              <div className="cpw-image">
                <img
                  src="https://cellphones.com.vn/smember/_nuxt/img/Shipper_CPS3.77d4065.png"
                  alt="icon"
                />
              </div>
              <div className="cpw-group">
                <div className="cpw-title">Nhập mật khẩu hiện tại</div>
                <div className="box-group">
                  <input
                    className="group-input"
                    type="text"
                    placeholder="Nhập mật khẩu hiện tại của bạn"
                  />
                  <label className="group-title">Mật khẩu hiện tại</label>
                </div>
              </div>
              <div className="cpw-group">
                <div className="cpw-title">Tạo mật khẩu mới</div>
                <div className="box-group">
                  <input className="group-input" type="text" placeholder="Nhập mật khẩu của bạn" />
                  <label className="group-title">Mật khẩu mới</label>
                </div>
                <div className="box-group">
                  <input className="group-input" type="text" placeholder="Xác nhận lại mật khẩu" />
                  <label className="group-title">Xác nhận lại mật khẩu</label>
                </div>
              </div>
              <div className="account-submit">Xác nhận</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ChangePassword;
