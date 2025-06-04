import { FaSearch, FaCheckCircle } from "react-icons/fa";

import "./location.css";
import { actions, useStore } from "@/store";
import { LOCATION } from "./data";

function Location(prop: { location: string }) {
  const [state, dispatch] = useStore();

  //   const handleChangeLocation = (payload: string) => {
  //     dispatch(actions.setLocation(payload));
  //   };

  return (
    <div className="province">
      <div className="header">
        <div className="search">
          <input id="input" className="search-input" placeholder="Nhập tên tỉnh thành" />
          <label htmlFor="input" className="search-icon">
            <FaSearch />
          </label>
        </div>
        <button className="close">Đóng x</button>
      </div>
      <div className="list">
        <div className="placeholder">
          Vui lòng chọn tỉnh, thành phố để biết chính xác giá, khuyến mãi và tồn kho
        </div>
        <ul className="box">
          {LOCATION.map((item: ILocation) => (
            <li className="item" key={item.id}>
              <div
                className="name"
                onClick={() => {
                  dispatch(actions.setValueLocation(item));
                  dispatch(actions.setModalLocation(false));
                }}
              >
                {item.name}
                {item.id === state.location.id && <FaCheckCircle className="icon" />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Location;
