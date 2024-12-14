"use client";
import Link from "next/link";
import config from "@/app/config";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import * as categoryServices from "@/app/services/category";
import * as authServices from "@/app/services/auth";

function CategoryEdit() {
  const [name, setName] = useState("");

  const router = useRouter();
  const params = useParams();
  const id: string = params.id!.toString();

  useEffect(() => {
    categoryServices.getById(id).then((category) => setName(category.name));
  }, [id]);

  function handleEdit() {
    categoryServices
      .edit(id, name)
      .then(() => router.push(config.routes.adminCategoryList))
      .catch(async (err) => {
        if (err.status === 401) {
          const _ = await authServices.refreshTokenFlow();
          if (!_) return router.push(config.routes.login);
          handleEdit();
        }
      });
  }

  return (
    <main id="admin">
      <div className="admin-head">
        <div className="head-title">Danh Sách Danh Mục / Chỉnh Sửa Danh Mục</div>
        {/* <div className="head-date">Thứ Năm, 04/07/2024 - 14 giờ 07 phút 50 giây</div> */}
      </div>
      <div className="admin-body">
        <div className="form-title">Chỉnh Sửa Danh Mục</div>
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
          <button onClick={handleEdit} type="button" className="form__button-save">
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

export default CategoryEdit;
