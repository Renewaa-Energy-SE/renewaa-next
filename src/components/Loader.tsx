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
            <div
              className="spinner-logo-container"
              style={{
                position: "relative",
                width: "150px",
                height: "150px",
                margin: "0 auto 45px auto",
              }}
            >
              <div
                className="spinner"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  margin: "0",
                }}
              ></div>
              <img
                src="/assets/images/rwenaa-logo.png"
                alt="Renewaa"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "auto",
                  height: "auto",
                  maxWidth: "70%",
                  maxHeight: "70%",
                  objectFit: "contain",
                }}
              />
            </div>

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
