"use client";
import React, { useEffect, useRef } from "react";

const Loader = () => {
  const loaderWrapRef = useRef<HTMLDivElement | null>(null);
  const preloaderCloseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePreloader = () => {
      if (loaderWrapRef.current) {
        setTimeout(() => {
          if (loaderWrapRef.current) {
            loaderWrapRef.current.style.display = "none";
          }
        }, 3000);
      }
    };

    const handlePreloaderClose = () => {
      if (preloaderCloseRef.current) {
        preloaderCloseRef.current.addEventListener("click", () => {
          if (loaderWrapRef.current) {
            loaderWrapRef.current.style.display = "none";
          }
        });
      }
    };

    handlePreloader();
    handlePreloaderClose();

    // Clean up event listener on unmount
    return () => {
      if (preloaderCloseRef.current) {
        preloaderCloseRef.current.removeEventListener(
          "click",
          handlePreloaderClose
        );
      }
    };
  }, []);

  return (
    <div className="loader-wrap" ref={loaderWrapRef}>
      <div className="preloader">
        <div className="preloader-close" ref={preloaderCloseRef}>
          x
        </div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader">
            {/* <div className="spinner-container">
              <img
                className="spinner"
                src="/assets/images/rwenaa-logo.png"
                alt="Loading..."
              />
            </div> */}
            <div className="spinner"></div>

            <div className="txt-loading">
              <span data-text-preloader="r" className="letters-loading">
                r
              </span>
              <span data-text-preloader="e" className="letters-loading">
                e
              </span>
              <span data-text-preloader="n" className="letters-loading">
                n
              </span>
              <span data-text-preloader="e" className="letters-loading">
                e
              </span>
              <span data-text-preloader="w" className="letters-loading">
                w
              </span>
              <span data-text-preloader="a" className="letters-loading">
                a
              </span>
              <span data-text-preloader="a" className="letters-loading">
                a
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
