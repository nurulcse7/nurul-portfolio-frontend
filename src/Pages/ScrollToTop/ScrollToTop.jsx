import React, { useEffect, useState } from "react";
import { BiUpArrowCircle } from 'react-icons/bi';
import "./ScrollToTop.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top" >
        <BiUpArrowCircle className="text-4xl"></BiUpArrowCircle>
      </a>
    </div>
  ) : null;
};
