import { Icon, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { classList, debounce } from "../../utils";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  brandName: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '1.5rem',
    textDecoration: 'none',
  },
}));

const TopBar11 = (props) => {
  const classes = useStyles();
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
          <NavLink to="/" className={classes.brandName}>
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
            <NavLink to="/Products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="m-auto" />
        <IconButton
          className="header__toggle"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
          style={{ color: '#e2e8f0' }}
        >
          <Icon>{toggleIcon}</Icon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar11;
