import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "./menuChildren.css";
function MenuChildren(prop: { data: any }) {
   
  return (
    <Swiper
      className="menu-children"
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
      }}
      spaceBetween={5}
      slidesPerView={5}
    >
      {prop.data.map((e: any, i: number) => (
        <SwiperSlide key={i} className="item">
          <div className="title">{e.title}</div>
          {e.content.map((c: any, ic: number) => (
            <p key={ic} className="content">
              <span>{c.name}</span>
            </p>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MenuChildren;
