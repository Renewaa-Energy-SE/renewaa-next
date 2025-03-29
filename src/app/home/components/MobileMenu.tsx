import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
// import { Scrollbar } from "react-scrollbars-custom";

type MobileMenuProps = {
  menuVisible: boolean;
  toggleMenu: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ menuVisible, toggleMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const handleDropdownClick = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  return (
    <div className={`${menuVisible ? "mobile-menu-visible" : ""}`}>
      <div className="mobile-menu ">
        <div className="menu-backdrop"></div>
        <div className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times" />
        </div>
        {/* <Scrollbar elementRef={myRef} style={{ height: "100%" }}> */}
        <nav className="flex flex-col menu-box justify-between">
          <div className="nav-logo">
            <Link href="/home" scroll={false}>
              <img src="/assets/images/rwenaa-logo.png" alt="" title="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div className="w-full flex-row flex-grow lg:flex lg:items-center lg:w-auto ">
              <ul className="flex flex-col gap-4 justify-between w-full navigation clearfix">
                <li className="">
                  <Link
                    href="/home"
                    className="hover:text-[#0084ec] font-bold font-sans text-sm text-white"
                    onClick={toggleMenu}
                    scroll={false}
                  >
                    HOME
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/about"
                    className="hover:text-[#0084ec] text-white font-bold font-sans text-sm whitespace-nowrap"
                    onClick={toggleMenu}
                    scroll={false}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/projects"
                    className="hover:text-[#0084ec] text-white font-bold font-sans text-sm"
                    onClick={toggleMenu}
                    scroll={false}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/contact"
                    className="hover:text-[#0084ec] text-white font-bold font-sans text-sm whitespace-nowrap"
                    onClick={toggleMenu}
                    scroll={false}
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>L2-14, Realty Plaza, Ja-Ela, Sri Lanka</li>
              <li>
                <Link href="tel:+8801682648101">(074) 3020154</Link>
              </li>
              <li>
                <Link href="mailto:info@renewaa.com">info@renewaa.com</Link>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/home" scroll={false}>
                  <span className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/home" scroll={false}>
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link href="/home" scroll={false}>
                  <span className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link href="/home" scroll={false}>
                  <span className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="/home" scroll={false}>
                  <span className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* </Scrollbar> */}
      </div>
    </div>
  );
};

export default MobileMenu;
