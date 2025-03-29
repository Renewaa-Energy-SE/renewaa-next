"use client";
import useEffectOnce from "@/app/hooks/useeffectonce";
import Link from "next/link";
import React from "react";

const Footer = () => {
  useEffectOnce(() => {
    const script = document.createElement("script");
    script.src =
      "https://seal.godaddy.com/getSeal?sealID=6DCAhNS9AYR9FW9oRS4KKuPTGvsk6sYdMGdguWucZvVbbON8oty6umnxdLqE";
    script.async = true;
    const sealElement = document.getElementById("siteseal");
    if (sealElement) {
      sealElement.appendChild(script);
    }

    // Return a no-op function if there's no cleanup needed
    return () => {};
  });

  return (
    <footer className="main-footer bg-color-2">
      <div className="footer-top">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo">
                  <Link href="/home" scroll={false}>
                    <img src="/assets/images/rwenaa-logo.png" alt="" />
                  </Link>
                </figure>
                <div className="support-box">
                  <i className="far fa-envelope-open" />
                  <h6>Free Consult</h6>
                  <Link href="mailto:info@renewaa.com">info@renewaa.com</Link>
                </div>
                <div className="text">
                  <p>
                    Our goal to help our companies maintains to achieve best
                    position their respective industries best team work that
                    work have hand to be repudiated.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget d-md-none d-block">
                <div className="widget-title">
                  <h5>Company</h5>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <Link href="/home" scroll={false}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" scroll={false}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" scroll={false}>
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects" scroll={false}>
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-widget links-widget pull-right d-none d-md-block">
                <div className="widget-title">
                  <h5>Company</h5>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <Link href="/home" scroll={false}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" scroll={false}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" scroll={false}>
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects" scroll={false}>
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-box clearfix">
            <div
              className="copyright text-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span id="siteseal"></span>
              <p style={{ marginLeft: 10 }}>
                Copyright © 2024 ORAND | All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
