import { Icon, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { classList, debounce } from "../../utils";
import ScrollTo from "../common/ScrollTo";

const TopBar11 = (props) => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  let scrollableElement = document.querySelector(".scrollable-content");
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;
  let toggleIcon = isClosed ? "menu" : "close";

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      let isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !isTop,
        closed: isClosed,
      })}
    >
      <div className="container header-container ">
        <div className="brand">
          <NavLink to="/">
            Christopher Moore
          </NavLink>

        </div>
        <ul className="navigation">
          <li>
            <NavLink to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <ScrollTo to="intro8" onScroll={close}>
              Home
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="gallery1" onScroll={close}>
              Products
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="service1" onScroll={close}>
              Services
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="cta1" onScroll={close}>
              Contact
            </ScrollTo>
          </li>
        </ul>
        <div className="m-auto" />
        <IconButton
          className="header__toggle"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        >
          <Icon>{toggleIcon}</Icon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar11;
