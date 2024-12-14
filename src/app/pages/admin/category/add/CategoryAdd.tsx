"use client";
import Link from "next/link";
import config from "@/app/config";
import { useState } from "react";
import { useRouter } from "next/navigation";

import * as categoryServices from "@/app/services/category";
import * as authServices from "@/app/services/auth";

function CategoryAdd() {
  const [name, setName] = useState("");
  const router = useRouter();

  function handleAdd() {
    categoryServices
      .add(name)
      .then(() => router.push(config.routes.adminCategoryList))
      .catch(async (err) => {
        if (err.status === 401) {
          const _ = await authServices.refreshTokenFlow();
          if (!_) return router.push(config.routes.login);
          handleAdd();
        }
      });
  }

  return (
    <main id="admin">
      <div className="admin-head">
        <div className="head-title">Danh Sách Danh Mục / Thêm Danh Mục</div>
        {/* <div className="head-date">Thứ Năm, 04/07/2024 - 14 giờ 07 phút 50 giây</div> */}
      </div>
      <div className="admin-body">
        <div className="form-title">Tạo Mới Danh Mục</div>
        <div className="form-body row">
          <div className="form-group col col-3">
            <div className="form-key">Tên danh mục</div>
            <input
              className="form-value"
              type="text"
              placeholder="Nhập tên danh mục"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-button">
          <button onClick={handleAdd} type="button" className="form__button-save">
            Lưu
          </button>
          <Link
            href={config.routes.adminCategoryList}
            type="button"
            className="form__button-cancel"
          >
            Hủy
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CategoryAdd;
