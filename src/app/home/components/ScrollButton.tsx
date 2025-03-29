"use client";
import React, { useEffect, useRef, useState } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 400) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 400) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [isVisible]);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener("click", scrollToTop);
    }
    return () => {
      if (button) {
        button.removeEventListener("click", scrollToTop);
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`scroll-top scroll-to-target ${isVisible ? "open" : ""}`}
      data-target="html"
    >
      <i className="flaticon-up-arrow" />
    </button>
  );
};

export default ScrollButton;
