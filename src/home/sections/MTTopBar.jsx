import { Icon, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { classList, debounce } from "../../utils";

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
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/MileTracker">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              Blog
            </NavLink>
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
