"use client";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Fragment, useEffect, useRef, useState } from "react";

import "./menu.css";
import { MENU_DATA } from "./data";
import { actions, useStore } from "@/app/store";
import MenuChildren from "./MenuChildren";

function Menu() {
  const [state, dispatch] = useStore();
  const [menuChildren, setMenuChildren] = useState([]);

  const menutree = useRef<any>();

  const hendleShowMenuChildren = (data: any) => {
    setMenuChildren(data);
  };

  const hendleHiddenMenuChildren = () => {
    setMenuChildren([]);
  };

  useEffect(() => {
    menutree.current.parentElement.addEventListener("mouseleave", hendleHiddenMenuChildren);
  });
  return (
    <Fragment>
      <div ref={menutree} className="menu-tree">
        {MENU_DATA.map((item: any, IItem: number) => {
          const Icon = item.icon;
          return (
            <div
              key={IItem}
              className="item"
              onMouseOver={() => {
                hendleShowMenuChildren(() => item.children);
              }}
            >
              <div className="box">
                <Icon className="icon" />
                <div className="content">
                  {item.categories.map((category: any, ICategory: number) => (
                    <Link
                      key={ICategory}
                      onClick={() => dispatch(actions.setModalMenu(false))}
                      href={category.href}
                      className="title"
                    >
                      {category.title}
                      {ICategory === item.categories.length - 1 ? "" : ","}
                    </Link>
                  ))}
                </div>
              </div>
              <FaChevronRight className="icon-arrow" />
            </div>
          );
        })}
      </div>
      {!!menuChildren.length && <MenuChildren data={menuChildren} />}
    </Fragment>
  );
}

export default Menu;
