import React from "react";
import ContactForm from "./components/ContactForm";
import ScrollButton from "../home/components/ScrollButton";

export default function Contact() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {/* Title Tag */}
      <title>
        Renewaa | Contact Us - Your One-Stop Solution for energy storage
        problems
      </title>
      {/* Meta Description Tag */}
      <meta
        name="description"
        content="Contact Renewaa for all your energy storage needs. We offer innovative lithium battery services at competitive prices. Get in touch with us today!"
      />
      {/* Canonical Tag */}
      <link rel="canonical" href="https://www.renewaa.com/contact-us" />
      {/* Fav Icon */}
      <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      {/* Stylesheets */}
      {/* <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
      <link href="assets/css/flaticon.css" rel="stylesheet" />
      <link href="assets/css/owl.css" rel="stylesheet" />
      <link href="assets/css/bootstrap.css" rel="stylesheet" />
      <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
      <link href="assets/css/animate.css" rel="stylesheet" />
      <link href="assets/css/jquery-ui.css" rel="stylesheet" />
      <link href="assets/css/nice-select.css" rel="stylesheet" />
      <link href="assets/css/theme-color.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />
      <link href="assets/css/responsive.css" rel="stylesheet" /> */}
      {/* Open Graph Tags */}
      <meta
        property="og:title"
        content="Renewaa | Contact Us - Your One-Stop Solution for Energy Storage Problems"
      />
      <meta
        property="og:description"
        content="Contact Renewaa for all your energy storage needs. We offer innovative lithium battery services at competitive prices. Get in touch with us today!"
      />
      <meta
        property="og:image"
        content="/assets/images/banner/Banner-one.jpg"
      />
      <meta property="og:url" content="https://www.renewaa.com/contact-us" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Renewaa | Contact Us - Your One-Stop Solution for energy storage problems"
      />
      <meta
        name="twitter:description"
        content="Contact Renewaa for all your energy storage needs. We offer innovative lithium battery services at competitive prices. Get in touch with us today!"
      />
      <meta
        name="twitter:image"
        content="/assets/images/banner/Banner-one.jpg"
      />
      {/* page wrapper */}
      <div className="boxed_wrapper items-center">
        {/* Page Title */}
        <section
          className="page-title"
          style={{
            backgroundImage:
              "url(/assets/images/background/contact-page-title.jpg)",
          }}
        >
          <div className="auto-container">
            <div className="content-box clearfix">
              <div className="title">
                <h1>Contact Us</h1>
              </div>
              <ul className="bread-crumb clearfix pull-right">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}
        {/* contact-info-two */}
        <section className="contact-info-two">
          <div className="auto-container">
            <div className="sec-title centred">
              <div className="title-top">
                <div className="shape-box">
                  <span className="shape shape-1">//</span>
                  <span className="shape shape-2">\\</span>
                </div>
                <h6>Want quick help?</h6>
              </div>
              <h2>Good Time to Connect With Us</h2>
              <div className="title-text">
                <p>
                  Desire that they cannot foresee the pain and trouble that are
                  bound <br />
                  equal blame belongs to their duty.
                </p>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                <div className="inner-box left-column">
                  <div
                    className="shape"
                    style={{
                      backgroundImage:
                        "url(/assets/images/icons/icons-shape-1.png)",
                    }}
                  />
                  <div className="single-info-box">
                    <div className="icon-box">
                      <i className="far fa-map" />
                    </div>
                    <h6>Address</h6>
                    <span>L2-14, Realty Plaza, Ja-Ela, Sri Lanka, 11350</span>
                  </div>
                  <div className="single-info-box">
                    <div className="icon-box">
                      <i className="fas fa-headphones" />
                    </div>
                    <h6>Sales Team</h6>
                    <span>
                      <a href="tel:+940743020154">(074) 3020154</a>
                    </span>
                  </div>
                  <div className="single-info-box">
                    <div className="icon-box">
                      <i className="far fa-clock" />
                    </div>
                    <h6>Office Hours</h6>
                    <span>Mon - Sat: 09.00 to 06.30</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image clearfix">
                    <img src="/assets/images/resource/contact-01.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                <div className="inner-box text-right right-column">
                  {/* <div class="shape" style="background-image: url(assets/images/icons/icons-shape-2.png);">
                        </div> */}
                  <div className="single-info-box">
                    <div className="icon-box">
                      <i className="far fa-envelope-open" />
                    </div>
                    <h6>Email</h6>
                    <span>
                      <a href="mailto:info@renewaa.com">info@renewaa.com</a>
                    </span>
                  </div>
                  <div className="single-info-box">
                    <div className="icon-box">
                      <i className="fas fa-headphones" />
                    </div>
                    <h6>Marketing</h6>
                    <span>
                      <a href="tel:+940743020154">(074) 3020154</a>
                    </span>
                  </div>
                  {/* <div class="single-info-box">
              <div class="icon-box"><i class="fas fa-question"></i></div>
              <h6>Our Faq</h6>
              <span>Checkout your answers</span>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-info-two end */}
        {/* contact-form-section */}
        <ContactForm />
        {/* contact-form-section end */}
        {/* google-map-section */}
        <section className="google-map-section">
          <div className="map-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4380589020293!2d79.8920306!3d7.075103299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f0c9463cb0d7%3A0xe3137fdcc17700c6!2sReality%20Plaza!5e0!3m2!1sen!2slk!4v1707472406638!5m2!1sen!2slk"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        {/* google-map-section end */}

        {/* scroll to top */}
        <ScrollButton />
      </div>
      {/* jequery plugins */}
      {/* map script */}
      {/* main-js */}
      {/* End of .page_wrapper */}
    </>
  );
}
