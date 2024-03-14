import React from "react";
import "./ScrollToTop.css";
import { IoArrowUp } from "react-icons/io5";

function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="ScrollToTop" onClick={handleScrollToTop}>
      <IoArrowUp className="TopIcon"/>
    </div>
  );
};

export default ScrollToTop;