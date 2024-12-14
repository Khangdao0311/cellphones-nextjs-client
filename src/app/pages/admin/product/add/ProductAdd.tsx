"use client";
import Link from "next/link";
import { HiChevronRight, HiXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";

import config from "@/app/config";
import * as categoryServices from "@/app/services/category";

function ProductAdd() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [sale, setSale] = useState(false);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<any>([]);
  const [colorImages, setColorImages] = useState<any>([[""]]);
  const [types, setTypes] = useState<any>([
    {
      name: "",
      price_extra: "",
      price_sale: "",
      price_update: "",
      colors: [
        {
          name: "",
          image: "",
          price_extra: "",
          quantity: "",
        },
      ],
    },
  ]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryServices.getAll().then((res) => setCategories(res));
  }, []);

  function handleAddType() {
    setTypes((prev: any) => [
      ...prev,
      {
        name: "",
        price_extra: "",
        price_sale: "",
        price_update: "",
        colors: [
          {
            name: "",
            image: "",
            price_extra: "",
            quantity: "",
          },
        ],
      },
    ]);
    setColorImages((prev: any) => [...prev, [""]]);
  }

  function handleDeleteType(iType: number) {
    setTypes((prev: any) => prev.filter((e: any, i: number) => i !== iType));
    setColorImages((prev: any) => prev.filter((e: any, i: number) => i !== iType));
  }

  function handleChangeType(value: any, iType: number, key: string) {
    setTypes((prev: any) =>
      prev.map((t: any, iT: number) => {
        if (iType === iT) {
          return {
            ...t,
            [key]: value,
          };
        }
        return t;
      })
    );
  }

  function handleAddColor(iType: number) {
    setTypes((prev: any) =>
      prev.map((e: any, i: number) => {
        if (i === iType) {
          return {
            ...prev[iType],
            colors: [
              ...prev[iType].colors,
              {
                name: "",
                image: "",
                price_extra: "",
                quantity: "",
              },
            ],
          };
        }
        return e;
      })
    );
    setColorImages((prev: any) =>
      prev.map((_: any, i: number) => {
        if (i === iType) {
          return [...prev[iType], ""];
        }
        return _;
      })
    );
  }

  function handleDeleteColor(iType: number, iColor: number) {
    setTypes((prev: any) =>
      prev.map((t: any, iT: number) => {
        if (iT === iType) {
          return {
            ...prev[iType],
            colors: prev[iType].colors.filter((c: any, iC: number) => {
              if (iC !== iColor) {
                return c;
              }
            }),
          };
        }
        return t;
      })
    );
    setColorImages((prev: any) =>
      prev.map((_: any, i: number) => {
        if (i === iType) {
          return prev[iType].filter((c: any, iC: number) => {
            if (iC !== iColor) {
              return c;
            }
          });
        }
        return _;
      })
    );
  }

  function handleChangeColor(value: any, iType: number, iColor: number, key: string) {
    setTypes((prev: any) =>
      prev.map((t: any, iT: number) => {
        if (iType === iT) {
          return {
            ...t,
            colors: prev[iType].colors.map((c: any, iC: number) => {
              if (iColor === iC) {
                return {
                  ...c,
                  [key]: value,
                };
              }
              return c;
            }),
          };
        }
        return t;
      })
    );
  }

  function loadImage(e: any, iType: number, iColor: number) {
    //   const dataTransfer = new DataTransfer();
    //   dataTransfer.items.add(colorImages[`${iType}${iColor}`]);
    //   (e.target as HTMLInputElement).files = dataTransfer.files;
  }

  function handleCollapse(e: any) {
    (e.target as HTMLElement)!.parentElement!.parentElement!.parentElement!.classList.toggle(
      "collapse"
    );
  }

  function handleSubmit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category_id", categoryId);
    formData.append("description", description);
    formData.append("sale", JSON.stringify(sale));
    formData.append("types", JSON.stringify(types));
    Array.from(images).forEach((image: any) => {
      formData.append("images", image);
    });
    const formDataUpload = new FormData();
    Array.from(colorImages).forEach((image: any) => {
      formDataUpload.append("images", image);
    });
  }

  return (
    <main id="admin">
      <div className="admin-head">
        <div className="head-title">Danh Sách Sản phẩm / Thêm Sản Phẩm</div>
        {/* <div className="head-date">Thứ Năm, 04/07/2024 - 14 giờ 07 phút 50 giây</div> */}
      </div>
      <div className="admin-body">
        <div className="form-title">Tạo Mới Sản Phẩm</div>
        <div className="form-body row">
          <div className="form-group col col-3">
            <div className="form-key">Tên sản phẩm</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-value"
              type="text"
              placeholder="Nhập tên sản phẩm"
            />
          </div>
          <div className="form-group col col-3">
            <div className="form-key">Giá</div>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-value"
              type="text"
              placeholder="Nhập giá"
            />
          </div>
          <div className="form-group col col-3">
            <div className="form-key">Loại sản phẩm</div>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="form-value"
            >
              <option hidden>&#8213; Loại Sản Phẩm &#8213;</option>
              {categories.map((category: ICategory) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col col-12">
            <div className="form-key">
              Loại
              <button onClick={handleAddType} type="button" className="btnAdd">
                Thêm loại
              </button>
            </div>
            <div className="form-types">
              {types.map((type: any, iType: number) => (
                <div key={iType} className="form-type row">
                  <div
                    className="form-actions"
                    // skip="true"
                  >
                    <button onClick={(e) => handleCollapse(e)} className="btnCollapse">
                      <HiChevronRight />
                    </button>
                    <button onClick={() => handleDeleteType(iType)} className="btnDelete">
                      <HiXMark />
                    </button>
                  </div>

                  <div className="form-group col col-3 is-position-relative">
                    <input
                      value={type.name}
                      onChange={(e) => handleChangeType(e.target.value, iType, "name")}
                      key="name"
                      className="form-value"
                      type="text"
                      placeholder="Nhập tên sản phẩm"
                    />
                    <div className="form-key key-label">Tên sản phẩm</div>
                  </div>
                  <div className="form-group col col-3 is-position-relative">
                    <input
                      value={type.price_extra}
                      onChange={(e) => handleChangeType(+e.target.value, iType, "price_extra")}
                      key="price_extra"
                      className="form-value"
                      type="text"
                      placeholder="Nhập giá thêm"
                    />
                    <div className="form-key key-label">Giá thêm</div>
                  </div>
                  <div className="form-group col col-3 is-position-relative">
                    <input
                      value={type.price_sale}
                      onChange={(e) => handleChangeType(+e.target.value, iType, "price_sale")}
                      key="price_sale"
                      className="form-value"
                      type="text"
                      placeholder="Nhập giá giảm"
                    />
                    <div className="form-key key-label">Giá giảm</div>
                  </div>
                  <div className="form-group col col-3 is-position-relative">
                    <input
                      value={type.price_update}
                      onChange={(e) => handleChangeType(+e.target.value, iType, "price_update")}
                      key="price_update"
                      className="form-value"
                      type="text"
                      placeholder="Nhập giá lên đời"
                    />
                    <div className="form-key key-label">Giá lên đời</div>
                  </div>

                  <div className="col col-12">
                    <div className="form-key">
                      Màu sắc
                      <button
                        onClick={() => handleAddColor(iType)}
                        type="button"
                        className="btnAdd"
                      >
                        Thêm màu
                      </button>
                    </div>
                    <div className="form-colors">
                      {type.colors.map((color: any, iColor: number) => (
                        <div key={iColor} className="form-color row ">
                          <div
                            className="form-actions"
                            // skip="true"
                          >
                            <button onClick={(e) => handleCollapse(e)} className="btnCollapse">
                              <HiChevronRight />
                            </button>
                            <button
                              onClick={() => handleDeleteColor(iType, iColor)}
                              className="btnDelete"
                            >
                              <HiXMark />
                            </button>
                          </div>

                          <div className="col col-3 is-position-relative">
                            <input
                              value={color.name}
                              onChange={(e) =>
                                handleChangeColor(e.target.value, iType, iColor, "name")
                              }
                              key="name"
                              className="form-value"
                              type="text"
                              placeholder="Nhập tên màu"
                            />
                            <div className="form-key key-label">Tên màu</div>
                          </div>
                          <div className="col col-3 is-position-relative">
                            <input
                              value={color.price_extra}
                              onChange={(e) =>
                                handleChangeColor(+e.target.value, iType, iColor, "price_extra")
                              }
                              key="price_extra"
                              className="form-value"
                              type="text"
                              placeholder="Nhập giá thêm"
                            />
                            <div className="form-key key-label">Giá thêm</div>
                          </div>
                          <div className="col col-3 is-position-relative">
                            <input
                              value={color.quantity}
                              onChange={(e) =>
                                handleChangeColor(+e.target.value, iType, iColor, "quantity")
                              }
                              key="quantity"
                              className="form-value"
                              type="text"
                              placeholder="Nhập số lượng"
                            />
                            <div className="form-key key-label">Số lượng</div>
                          </div>

                          <div className="col col-12">
                            <div className="form-key">Hình Ảnh</div>
                            <input
                              onLoad={(e) => console.log(e)}
                              onChange={(e) => {
                                handleChangeColor(
                                  (e.target as HTMLInputElement).files![0].name,
                                  iType,
                                  iColor,
                                  "image"
                                );

                                setColorImages((prev: any) =>
                                  prev.map((_: any, i: number) => {
                                    if (i === iType) {
                                      return prev[iType].map((c: any, ic: number) => {
                                        if (ic === iColor) {
                                          return e.target.files![0];
                                        }
                                        return c;
                                      });
                                    }
                                    return _;
                                  })
                                );
                              }}
                              className="form-value"
                              type="file"
                              name="image"
                            />

                            {colorImages[iType][iColor] && (
                              <div className="form-images row">
                                <div className="col col-1">
                                  <div className="form-boxImage">
                                    <div
                                      onClick={() => {
                                        setColorImages((prev: any) =>
                                          prev.map((_: any, i: number) => {
                                            if (i === iType) {
                                              return prev[iType].map((c: any, ic: number) => {
                                                if (ic === iColor) {
                                                  return "";
                                                }
                                                return c;
                                              });
                                            }
                                            return _;
                                          })
                                        );
                                      }}
                                      className="form-cancel"
                                    >
                                      <HiXMark />
                                    </div>
                                    <img
                                      className="form-image"
                                      src={URL.createObjectURL(colorImages[iType][iColor])}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group col col-12 ">
            <div className="form-key">Nổi Bật</div>
            <div className="form-value radio">
              <label htmlFor="yes" className="radio-item">
                <input
                  checked={sale === true}
                  onChange={(e) => setSale(true)}
                  id="yes"
                  // name="top"
                  className="radio-input"
                  type="radio"
                />
                <div className="redio-text">Có</div>
              </label>
              <label htmlFor="no" className="radio-item">
                <input
                  checked={sale === false}
                  onChange={(e) => setSale(false)}
                  id="no"
                  // name="top"
                  className="radio-input"
                  type="radio"
                />
                <div className="redio-text">Không</div>
              </label>
            </div>
          </div>
          <div className="form-group col col-12">
            <div className="form-key">Hình Ảnh</div>
            <input
              onChange={(e) => setImages(e.target.files)}
              id="image"
              className="form-value"
              type="file"
              name="image"
              multiple
            />
            <div className="form-images row">
              {Array.from(images).map((image: any, iImage: number) => (
                <div key={iImage} className="col col-1 ">
                  <div className="form-boxImage">
                    <div className="form-cancel">
                      <HiXMark />
                    </div>
                    <img className="form-image" src={URL.createObjectURL(image)} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group col col-12">
            <div className="form-key">Mô tả</div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-value"
              rows={10}
              placeholder="Nhập mô tả sản phẩm..."
            ></textarea>
          </div>
        </div>
        <div className="form-button">
          <button onClick={handleSubmit} type="button" className="form__button-save">
            Lưu
          </button>
          <Link href={config.routes.adminProductList} type="button" className="form__button-cancel">
            Hủy
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductAdd;
