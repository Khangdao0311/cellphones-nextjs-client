"use client";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";

import "../auth.css";
import config from "@/config";
import * as authServices from "@/services/auth";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    account: Yup.string().required("Vui lòng nhập tài khoản"),
    password: Yup.string().required("Vui lòng nhập mật khẩu"),
  });

  async function handleLogin(values: any) {
    const { account, password } = await values;
    authServices
      .login(account, password)
      .then((token) => {
        alert("Đăng Nhập Thành Công !");
        // localStorage.setItem("token", token);
        // localStorage.setItem("username", account);
        Cookies.set("token", token);
        Cookies.set("username", account);
        router.push(config.routes.home);
      })
      .catch((err) => {
        alert("Lỗi Đăng Nhập !");
      });
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
            <h1>Đăng nhập với</h1>
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
              account: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form className="lg-form">
                <div className="lg-boxInput">
                  <Field
                    className="lg-input"
                    required
                    name="account"
                    type="text"
                    placeholder="Nhập tên tài khoản"
                  />
                  <div className="lg-inputTitle">TÊN TÀI KHOẢN</div>
                </div>
                <div className="lg-boxInput">
                  <Field
                    className="lg-input"
                    required
                    name="password"
                    type="text"
                    placeholder="Nhập mật khẩu"
                  />
                  <div className="lg-inputTitle">MẬT KHẨU</div>
                </div>
                <div className="lg-forgetPassword">
                  <a>Quên mật khẩu ?</a>
                </div>
                <button type="submit" className="lg-submit">
                  Đăng nhập
                </button>
              </Form>
            )}
          </Formik>

          <div className="lg-question">
            <p className="lg-questionText">Bạn chưa có tài khoản?</p>
            <Link href={config.routes.register} className="lg-go">
              Đăng ký ngay
            </Link>
          </div>
          <a className="lg-promotion">Xem chính sách ưu đãi Smember</a>
        </div>
      </div>
    </main>
  );
}

export default Login;
