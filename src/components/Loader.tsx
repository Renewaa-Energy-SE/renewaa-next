"use client";
import Image from "next/image";
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
        <div
          id="handle-preloader"
          className="handle-preloader bg-[#1e2434] flex h-screen w-full items-center justify-center"
        >
          <div className="animation-preloader" style={{ position: "relative" }}>
            <div className="relative flex justify-center items-center mb-12">
              <div
                className="spinner"
                style={{ margin: "0", width: "150px", height: "150px" }}
              ></div>
              <div className="absolute">
                <Image
                  src="/assets/images/icons/Rewenaa-icon.svg"
                  alt="Renewaa"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
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
