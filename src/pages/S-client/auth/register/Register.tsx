"use client";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../auth.css";
import config from "@/config";
import * as authServices from "@/services/auth";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập Họ và Tên"),
    phone: Yup.string().required("Vui lòng nhập Số điện thoại"),
    email: Yup.string(),
    username: Yup.string().required("Vui lòng nhập tên tài khoản"),
    password: Yup.string().required("Vui lòng nhập mật khẩu"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
      .required("Vui lòng nhập lại mật khẩu"),
  });

  function handleRegister(values: any) {
    const { name, phone, email, username, password, repeatPassword } = values;
    if (name && phone && username && password && repeatPassword) {
      if (password === repeatPassword) {
        authServices
          .register(name, phone, email, username, password)
          .then((res) => {
            alert("Đăng Ký Thành Công");
            router.push(config.routes.login);
          })
          .catch((err) => {
            alert("Đăng Ký Thất bại");
          });
      } else {
        alert("Mật khẩu không khớp !");
      }
    } else {
      alert("Vui lòng nhập đủ thông tin");
    }
  }

  return (
    <main id="body">
      <div className="container container-small">
        <div className="lg">
          <div className="lg-image">
            <img
              className="lg-logo"
              src="https://account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.77d4065.png"
              alt=""
            />
            <h1>Đăng ký với</h1>
          </div>
          <div className="lg-connectWith">
            <div className="connectWith">
              <img
                className="connectWith-icon"
                src="https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png"
                alt="google"
              />
              <p className="connectWith-text">Google</p>
            </div>
            <div className="connectWith">
              <img
                className="connectWith-icon"
                src="https://account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png"
                alt="Zalo"
              />
              <p className="connectWith-text">Zalo</p>
            </div>
          </div>
          <div className="lg-lineThrough">
            <hr />
            <p>Hoặc</p>
            <hr />
          </div>

          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              username: "",
              password: "",
              repeatPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {({ errors, touched }) => (
              <form action="" className="lg-form">
                <div className="lg-boxInput">
                  <Field
                    className="lg-input"
                    type="text"
                    placeholder="Nhập họ và tên"
                    name="name"
                    required
                  />
                  <div className="lg-inputTitle">HỌ VÀ TÊN (*)</div>
                  {errors.name && touched.name ? (
                    <div className="text-red-500 py-2">{errors.name}</div>
                  ) : null}
                </div>
                <div className="lg-boxInput">
                  <Field
                    className="lg-input"
                    type="text"
                    placeholder="Nhập số điện thoại"
                    name="phone"
                    required
                  />
                  <div className="lg-inputTitle">SỐ ĐIỆN THOẠI (*)</div>
                  {errors.phone && touched.phone ? (
                    <div className="text-red-500 py-2">{errors.phone}</div>
                  ) : null}
                </div>
                <div className="lg-boxInput">
                  <Field
                    className="lg-input"
                    type="email"
                    placeholder="Nhập email (không bắt buộc)"
                    name="email"
                  />
                  <div className="lg-inputTitle">EMAIL</div>
                </div>
                <div className="lg-boxInput">
                  <Field
                    className="lg-input"
                    type="text"
                    placeholder="Nhập tên đăng nhập"
                    name="username"
                    required
                  />
                  <div className="lg-inputTitle">TÊN ĐĂNG NHẬP (*)</div>
                  {errors.username && touched.username ? (
                    <div className="text-red-500 py-2">{errors.username}</div>
                  ) : null}
                </div>
                <div className="lg-boxInput">
                  <Field
                    className="lg-input"
                    type="text"
                    placeholder="Nhập mật khẩu"
                    name="password"
                    required
                  />
                  <div className="lg-inputTitle">MẬT KHẨU (*)</div>
                  {errors.password && touched.password ? (
                    <div className="text-red-500 py-2">{errors.password}</div>
                  ) : null}
                </div>
                <div className="lg-boxInput">
                  <Field
                    className="lg-input"
                    type="text"
                    placeholder="Nhập lại mật khẩu"
                    name="repeatPassword"
                    required
                  />
                  <div className="lg-inputTitle">XÁC NHẬN MẬT KHẨU (*)</div>
                  {errors.repeatPassword && touched.repeatPassword ? (
                    <div className="text-red-500 py-2">{errors.repeatPassword}</div>
                  ) : null}
                </div>

                <div className="lg-option">
                  <input
                    id="option1"
                    className="lg-optionCheckbox"
                    type="checkbox"
                    defaultChecked
                  />
                  <label htmlFor="option1" className="lg-optionText">
                    Tôi đồng ý với các điều khoản bảo mật cá nhân
                  </label>
                </div>
                <button type="submit" onClick={(e) => handleRegister(e)} className="lg-submit">
                  Đăng nhập
                </button>
              </form>
            )}
          </Formik>

          <div className="lg-question">
            <p className="lg-questionText">Bạn đã có tài khoản?</p>
            <Link href={config.routes.login} className="lg-go">
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
