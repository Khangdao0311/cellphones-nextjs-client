import { Fragment } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./navigation.css";

function Navi() {
  return (
    <Fragment>
      <button id="prve">
        <FaChevronLeft />
      </button>
      <button id="next">
        <FaChevronRight />
      </button>
    </Fragment>
  );
}

export default Navi;
