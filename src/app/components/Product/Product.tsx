import { BsStar, BsStarFill, BsStarHalf, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import Link from "next/link";

import "./product.css";
import config from "@/app/config";

function Product(prop: { data: IProduct }) {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="product">
      <Link href={`${config.routes.product}/${prop.data.id}`} className="product-info">
        <div className="product-image">
          <img src={prop.data.images[0]} alt="phone" />
        </div>
        <div className="product-name">{prop.data.name}</div>
        <div className="product-price">
          <div className="price-show">
            {VND.format(
              prop.data.price + prop.data.types[0].price_extra - prop.data.types[0].price_sale
            )}
          </div>
          {prop.data.price + prop.data.types[0].price_extra - prop.data.types[0].price_sale <
            prop.data.price + prop.data.types[0].price_extra && (
            <div className="price-through">
              {VND.format(prop.data.price + prop.data.types[0].price_extra)}
            </div>
          )}
          <div className="price-percent">
            <div className="price-percent-detail">
              Giảm{" "}
              {Math.ceil(
                100 -
                  ((prop.data.price +
                    prop.data.types[0].price_extra -
                    prop.data.types[0].price_sale) /
                    (prop.data.price + prop.data.types[0].price_extra)) *
                    100
              )}
              %
            </div>
          </div>
        </div>
        {/* <div className="product-smem-price">
          Smember giảm thêm đến <span>293.000đ</span>
        </div> */}
        <div className="product-promotions">
          <div className="promotions">
            Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng
          </div>
        </div>
      </Link>
      <div className="product-bottom">
        <div className="product-rating">
          {Array.from({ length: prop.data.rating }).map((_, i: number) => (
            <BsStarFill key={i} />
          ))}
          {Array.from({ length: 5 - prop.data.rating }).map((_, i: number) => (
            <BsStar key={i} />
          ))}
        </div>
        <div className="product-wish">
          <span className="wish-text">Yêu thích</span>
          <BsSuitHeart className="wish-icon" />
          {/* <BsSuitHeartFill className="wish-icon" /> */}
        </div>
      </div>
      <div className="install-0-tag">Trả góp 0%</div>
    </div>
  );
}

export default Product;
