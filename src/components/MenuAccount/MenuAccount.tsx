"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiHomeAlt } from "react-icons/bi";
import { LuClipboardList } from "react-icons/lu";
import { RiShieldCheckLine } from "react-icons/ri";
import { PiMedal, PiStudent } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline, IoChatbubblesOutline, IoGiftOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { VscRepoForked } from "react-icons/vsc";
import { GrLogin, GrLogout } from "react-icons/gr";
import { useEffect, useLayoutEffect, useState } from "react";

import "./menuAccount.css";
import config from "@/config";
import * as authServices from "@/services/auth";

function MenuAccount() {
  const [role, setRole] = useState(0);

  const pathName = usePathname();
  const router = useRouter();
  // const user = authServices.getUser();

  useEffect(() => {
    authServices
      .getProfile()
      .then((res: any) => setRole(res.role))
      .catch(async (err: any) => {
        if (err.status == 401) {
          const _ = await authServices.refreshTokenFlow();
          if (!_) return router.push(config.routes.login);
          return authServices.getProfile().then((res: any) => setRole(res.role));
        }
        authServices.removeToken();
        return router.push(config.routes.login);
      });
  }, []);

  function handleLogOut() {
    const username = authServices.getUsername();
    if (!username) {
      authServices.removeToken();
      return router.push(config.routes.home);
    }
    authServices
      .logout(username)
      .then((res) => {
        authServices.removeToken();
        router.push(config.routes.login);
      })
      .catch((err) => {
        alert("Đăng xuất thất bại !");
      });
  }

  return (
    <div className="account-menu">
      {!!role && (
        <Link href={config.routes.adminCategoryList} className="account-menuItem ">
          <GrLogin className="item-icon" />
          <div className="item-text">Quản trị viên</div>
        </Link>
      )}
      <Link
        href={config.routes.account}
        className={`account-menuItem ${pathName === config.routes.account ? "active" : ""}`}
      >
        <BiHomeAlt className="item-icon" />
        <div className="item-text">Trang chủ</div>
      </Link>
      <div className="account-menuItem">
        <LuClipboardList className="item-icon" />
        <div className="item-text">Lịch sử mua hàng</div>
      </div>
      <div className="account-menuItem">
        <RiShieldCheckLine className="item-icon" />
        <div className="item-text">Tra cứu bảo hành</div>
      </div>
      <div className="account-menuItem">
        <IoGiftOutline className="item-icon" />
        <div className="item-text">Ưu đãi của bạn</div>
      </div>
      <div className="account-menuItem">
        <PiStudent className="item-icon" />
        <div className="item-text">Chương trình S-student</div>
      </div>
      <div className="account-menuItem">
        <PiMedal className="item-icon" />
        <div className="item-text">Hạng thành viên</div>
      </div>

      <Link
        href={config.routes.accountInfo}
        className={`account-menuItem ${
          pathName.startsWith(config.routes.accountInfo) ? "active" : ""
        }`}
      >
        <FiUser className="item-icon" />
        <div className="item-text">Tài khoản của bạn</div>
      </Link>

      <div className="account-menuItem">
        <VscRepoForked className="item-icon" />
        <div className="item-text">Liên kết tài khoản</div>
      </div>
      <div className="account-menuItem">
        <IoChatbubbleEllipsesOutline className="item-icon" />
        <div className="item-text">Hỗ trợ</div>
      </div>
      <div className="account-menuItem">
        <IoChatbubblesOutline className="item-icon" />
        <div className="item-text">Gớp ý - Phản hồi</div>
      </div>

      <div onClick={handleLogOut} className="account-menuItem">
        <GrLogout className="item-icon" />
        <div className="item-text">Thoát tài khoản</div>
      </div>
    </div>
  );
}

export default MenuAccount;
