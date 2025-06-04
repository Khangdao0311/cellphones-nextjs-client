"use client";

import Link from "next/link";
import { GrLogout } from "react-icons/gr";
import { usePathname } from "next/navigation";
import { Fragment, useEffect } from "react";
import { BsBoxSeam, BsClipboard2Check } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";

import "./headerAsideAdmin.css";
import config from "@/config";

function HeaderAsideAdmin() {
  const pathname = usePathname();

  return (
    <Fragment>
      <header id="header-admin">
        <div className="header-account">
          <div className="account-image">
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lx7ydnw2vp3tce"
              alt=""
            />
          </div>
          <div className="account-name">Admin</div>
        </div>
      </header>
      <aside id="aside-admin">
        <div className="aside-head">
          <img
            className="aside__head-logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII="
            alt=""
          />
          <div className="aside__head-text">Chào Mừng Bạn Quay Trở Lại</div>
        </div>
        <div className="aside-body">
          <Link
            href={config.routes.adminCategoryList}
            className={`aside-item ${pathname.startsWith("/admin/category") ? "active" : ""}`}
          >
            <BiCategory className="aside-icon" />
            <div className="aside-text">Quản lý sản danh mục</div>
          </Link>
          <Link
            href={config.routes.adminProductList}
            className={`aside-item  ${pathname.startsWith("/admin/product") ? "active" : ""}`}
          >
            <BsBoxSeam className="aside-icon" />
            <div className="aside-text">Quản lý sản phẩm</div>
          </Link>
          <div className="aside-item">
            <BsClipboard2Check className="aside-icon" />

            <div className="aside-text">Quản lý sản đơn hàng</div>
          </div>
          <Link href={config.routes.home} className="aside-item">
            <GrLogout className="aside-icon" />
            <div className="aside-text">Đăng Xuất </div>
          </Link>
        </div>
      </aside>
    </Fragment>
  );
}

export default HeaderAsideAdmin;
