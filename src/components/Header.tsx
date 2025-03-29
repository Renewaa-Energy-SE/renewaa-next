"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MobileMenu from "@/app/home/components/MobileMenu";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const horizontalNavigation = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    if (headerRef.current) {
      if (scrollPosition >= 110) {
        headerRef.current.classList.add("fixed-header");
        horizontalNavigation.current
          ? headerRef.current.classList.add("block")
          : headerRef.current.classList.add("hidden");
      } else {
        headerRef.current.classList.remove("fixed-header");
      }
    }
  }, [scrollPosition]);

  return (
    <>
      <header className="main-header" ref={headerRef}>
        {/* header-lower */}
        <div className="header-lower w-full">
          <div className="auto-container w-full">
            <div className="flex outer-box clearfix justify-between w-full">
              <div className=" menu-area pull-left clearfix md:w-3/5 w-full">
                <div className="flex flex-row items-center justify-between md:justify-start w-full h-full">
                  <div className="flex logo-box h-full fixed">
                    <Link href="/home" scroll={false}>
                      <figure className="flex h-full logo">
                        <img src="/assets/images/rwenaa-logo.png" alt="" />
                      </figure>
                    </Link>
                  </div>
                  {/*Mobile Navigation Toggler*/}
                  <div
                    className="mobile-nav-toggler m-0 p-0"
                    onClick={toggleMenu}
                  >
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                  </div>

                  <nav
                    className="hidden items-center lg:flex w-2/3"
                    ref={horizontalNavigation}
                  >
                    <div className="w-full flex-row flex-grow lg:flex lg:items-center lg:w-auto">
                      <ul className="flex gap-4 justify-between w-full">
                        <li className="text-white">
                          <Link
                            href="/home"
                            className="hover:text-[#0084ec] text-black font-bold font-sans text-sm"
                            scroll={false}
                          >
                            HOME
                          </Link>
                        </li>
                        <li className="text-white">
                          <Link
                            href="/about"
                            className="hover:text-[#0084ec] text-black font-bold font-sans text-sm whitespace-nowrap"
                            scroll={false}
                          >
                            ABOUT US
                          </Link>
                        </li>
                        <li className="text-white">
                          <Link
                            href="/projects"
                            className="hover:text-[#0084ec] text-black font-bold font-sans text-sm"
                          >
                            PROJECTS
                          </Link>
                        </li>
                        <li className="text-white">
                          <Link
                            href="/contact"
                            className="hover:text-[#0084ec] text-black font-bold font-sans text-sm whitespace-nowrap"
                            scroll={false}
                          >
                            CONTACT US
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="flex w-2/5 justify-end nav-right pull-right clearfix">
                <div className="support-box">
                  <h5>
                    <i className="fas fa-headphones" />
                    <span>(074) 3020154 </span>
                  </h5>
                  <ul className="info-box">
                    <li>
                      <i className="far fa-map" />
                      <h6>Address</h6>
                      <span>L2-14, Realty Plaza, Ja-Ela, Sri Lanka</span>
                    </li>
                    <li>
                      <i className="far fa-envelope-open" />
                      <h6>Email</h6>
                      <span>
                        <a href="mailto:info@renewaa.com">
                          info@renewaa.com
                          <br />
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="far fa-clock" />
                      <h6>Office Hours</h6>
                      <span>Mon - Sat: 9.00am to 6.30pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="auto-container w-full">
            <div className="flex outer-box clearfix justify-between w-full">
              <div className=" menu-area pull-left clearfix md:w-3/5 w-full">
                <div className="flex flex-row items-center justify-between md:justify-start w-full h-full">
                  <div className="flex logo-box h-full fixed">
                    <Link href="/home" scroll={false}>
                      <figure className="flex h-full logo">
                        <img src="/assets/images/rwenaa-logo.png" alt="" />
                      </figure>
                    </Link>
                  </div>
                  {/*Mobile Navigation Toggler*/}
                  <div
                    className="mobile-nav-toggler m-0 p-0"
                    onClick={toggleMenu}
                  >
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                  </div>

                  <nav
                    className="hidden items-center lg:flex w-2/3"
                    ref={horizontalNavigation}
                  >
                    <div className="w-full flex-row flex-grow lg:flex lg:items-center lg:w-auto">
                      <ul className="flex gap-4 justify-between w-full">
                        <li className="text-white">
                          <Link
                            href="/home"
                            className="hover:text-[#0084ec] text-black font-bold font-sans text-sm"
                            scroll={false}
                          >
                            HOME
                          </Link>
                        </li>
                        <li className="text-white">
                          <Link
                            href="/about"
                            className="hover:text-[#0084ec] text-black font-bold font-sans text-sm whitespace-nowrap"
                            scroll={false}
                          >
                            ABOUT US
                          </Link>
                        </li>
                        <li className="text-white">
                          <Link
                            href="/projects"
                            className="hover:text-[#0084ec] text-black font-bold font-sans text-sm"
                            scroll={false}
                          >
                            PROJECTS
                          </Link>
                        </li>
                        <li className="text-white">
                          <Link
                            href="/contact"
                            className="hover:text-[#0084ec] text-black font-bold font-sans text-sm whitespace-nowrap"
                            scroll={false}
                          >
                            CONTACT US
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="flex w-2/5 justify-end nav-right pull-right clearfix">
                <div className="support-box">
                  <h5>
                    <i className="fas fa-headphones" />
                    <span>(074) 3020154 </span>
                  </h5>
                  <ul className="info-box">
                    <li>
                      <i className="far fa-map" />
                      <h6>Address</h6>
                      <span>L2-14, Realty Plaza, Ja-Ela, Sri Lanka</span>
                    </li>
                    <li>
                      <i className="far fa-envelope-open" />
                      <h6>Email</h6>
                      <span>
                        <a href="mailto:info@renewaa.com">
                          info@renewaa.com
                          <br />
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="far fa-clock" />
                      <h6>Office Hours</h6>
                      <span>Mon - Sat: 9.00am to 6.30pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu menuVisible={menuVisible} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
