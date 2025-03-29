import React from "react";
import Funfact from "../home/components/Funfat";
import Statements from "./components/Statements";
import ScrollButton from "../home/components/ScrollButton";
const About = () => {
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
        Renewaa | About Us - Learn More About Our Team Behind the Cutting-Edge
        Lithium Battery Solutions
      </title>
      {/* Meta Description Tag */}
      <meta
        name="description"
        content="Learn more about Renewaa, a leader in providing cutting-edge lithium battery solutions. Discover our team, mission, vision, and values today!"
      />
      {/* Canonical Tag */}
      <link rel="canonical" href="https://www.renewaa.com/about" />
      {/* Fav Icon */}
      <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
      {/* Open Graph Tags */}
      <meta
        property="og:title"
        content="Renewaa | About Us - Learn More About Our Cutting-Edge Lithium Battery Solutions"
      />
      <meta
        property="og:description"
        content="Learn more about Renewaa, a leader in providing cutting-edge lithium battery solutions. Discover our team, mission, vision, and values today!"
      />
      <meta
        property="og:image"
        content="/assets/images/banner/Banner-one.jpg"
      />
      <meta property="og:url" content="https://www.renewaa.com/about" />
      <meta property="og:type" content="website" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Renewaa | About Us - Learn More About Our Cutting-Edge Lithium Battery Solutions"
      />
      <meta
        name="twitter:description"
        content="Learn more about Renewaa, a leader in providing cutting-edge lithium battery solutions. Discover our team, mission, vision, and values today!"
      />
      <meta
        name="twitter:image"
        content="/assets/images/banner/Banner-one.jpg"
      />
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
      <link href="assets/css/theme-color.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />
      <link href="assets/css/responsive.css" rel="stylesheet" /> */}
      {/* page wrapper */}
      <div className="boxed_wrapper">
        {/* Page Title */}
        <section
          className="page-title"
          style={{
            backgroundImage: "url(/assets/images/background/About-Us.png)",
          }}
        >
          <div className="auto-container">
            <div className="content-box clearfix">
              <div className="title">{/* <h1>About Company</h1> */}</div>
              <ul className="bread-crumb clearfix pull-right">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>About</li>
                <li>Company</li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}
        {/* about-style-three */}
        <section className="about-style-three sec-pad">
          <div className="auto-container">
            <div className="sec-title centred">
              <div className="title-top">
                <div className="shape-box">
                  <span className="shape shape-1">//</span>
                  <span className="shape shape-2">\\</span>
                </div>
                <h6>Who We Are</h6>
              </div>
              <h2>
                LEADING THE lithium battery solutions
                <br />
                SINCE 2020
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image">
                    <img src="/assets/images/resource/about-03.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_7">
                  <div className="content-box">
                    <div className="text">
                      <h5>Welcome to a brighter world!</h5>
                      <p>
                        Renewaa is your premier destination for cutting-edge
                        lithium battery solutions. Committed to innovation and
                        sustainability, we deliver top-quality battery packs
                        designed to power your projects and revolutionize your
                        energy storage needs.
                      </p>
                    </div>
                    <div className="inner-box">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="fas fa-check-circle" />
                            </div>
                            <h5>Our Services</h5>
                            <p style={{ maxHeight: 250, overflowY: "auto" }}>
                              At Renewaa, we provide cutting-edge lithium
                              battery solutions and offer unparalleled service
                              and support to ensure the success of your
                              projects. With our comprehensive service
                              offerings, you can trust us to handle every aspect
                              of your energy storage needs with professionalism
                              and expertise.
                            </p>
                            {/* <a href="#team-section-id"
                            ><i class="flaticon-right-arrow"></i>Meet Team</a
                          > */}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="fas fa-check-circle" />
                            </div>
                            <h5>Service Commitment</h5>
                            <p style={{ maxHeight: 250, overflowY: "auto" }}>
                              From initial consultation and battery selection to
                              installation and ongoing support, our team of
                              experts is here to guide you every step of the
                              way. We pride ourselves on delivering exceptional
                              customer service, backed by a 6- year warranty on
                              all our products. Additionally, our commitment to
                              after sales service means we're always available
                              to address any questions, concerns, or issues you
                              may have. Whether powering off-grid solar systems,
                              electrifying your transportation fleet, or
                              upgrading industrial applications, Renewaa is your
                              trusted partner for reliable energy storage
                              solutions.
                            </p>
                            {/* <a href="#team-section-id"
                            ><i class="flaticon-right-arrow"></i>Meet Team</a
                          > */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="author-box">
                    <figure class="signature">
                      <img src="assets/images/icons/signature-1.png" alt="" />
                    </figure>
                    <div class="author-info">
                      <h5>Roman Primera</h5>
                      <span class="designation">Founder</span>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-style-three end */}
        {/* statements-section */}
        <Statements />
        {/* statements-section end */}
        {/* working-style-three */}
        <section className="working-style-three bg-color-2">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <figure className="image-box">
                    <img src="/assets/images/resource/why-us.png" alt="" />
                  </figure>
                  <div className="text">
                    {/* <h6>Why Choose Us</h6> */}
                    <h3>Why we are Unique?</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
                <div className="inner-content">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 working-block">
                      <div className="working-block-three">
                        <div className="inner-box">
                          <span className="big-text">01</span>
                          <div className="icon-box">
                            <img
                              src="/assets/images/icons/icon-32.png"
                              alt=""
                            />
                          </div>
                          <h5>Innovative Technology</h5>
                          <p style={{ textAlign: "center" }}>
                            We're at the forefront of lithium battery
                            technology, constantly pushing the boundaries of
                            innovation to deliver cutting-edge solutions that
                            exceed industry standards. Our advanced battery
                            packs offer superior performance, longer lifespan,
                            and faster charging times, providing the reliability
                            and efficiency you need for your projects.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 working-block">
                      <div className="working-block-three">
                        <div className="inner-box">
                          <span className="big-text">02</span>
                          <div className="icon-box">
                            <img
                              src="/assets/images/icons/icon-33.png"
                              alt=""
                            />
                          </div>
                          <h5>Customized Solutions</h5>
                          <p style={{ textAlign: "center" }}>
                            We understand that every project is unique, which is
                            why we offer customized solutions tailored to your
                            specific requirements. Whether you're powering
                            off-grid solar systems, electric vehicles, or
                            industrial applications, our team of experts will
                            work closely to design and implement the perfect
                            solution for your needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 working-block">
                      <div className="working-block-three">
                        <div className="inner-box">
                          <span className="big-text">03</span>
                          <div className="icon-box">
                            <img
                              src="/assets/images/icons/icon-34.png"
                              alt=""
                            />
                          </div>
                          <h5>Quality &amp; Warranty</h5>
                          <p style={{ textAlign: "center" }}>
                            We take pride in the quality of our products, which
                            is why we offer a comprehensive 6-year warranty on
                            all our lithium battery packs. Our commitment to
                            quality ensures you receive a reliable and durable
                            energy storage solution you can trust for years to
                            come.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 working-block">
                      <div className="working-block-three">
                        <div className="inner-box">
                          <span className="big-text">04</span>
                          <div className="icon-box">
                            <img
                              src="/assets/images/icons/icon-35.png"
                              alt=""
                            />
                          </div>
                          <h5>Customer Service</h5>
                          <p style={{ textAlign: "center" }}>
                            At Renewaa, customer satisfaction is our top
                            priority. Our dedicated team of professionals is
                            here to provide personalized support and assistance
                            every step of the way. From initial consultation to
                            installation and after-sales service, we're here to
                            ensure your experience with us is exceptional
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* working-style-three end */}
        {/* team-section */}
        <section className="team-section sec-pad team-page-2 centred">
          <div className="auto-container">
            <div className="sec-title centred">
              <div className="title-top">
                <div className="shape-box">
                  <span className="shape shape-1">//</span>
                  <span className="shape shape-2">\\</span>
                </div>
                <h6>Leadership Team</h6>
              </div>
              <h2>Team behind Our Success</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/assets/images/team/12.png" alt="" />
                    </figure>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="mailto:eranja.perera@renewaa.com">
                          <i className="fas fa-envelope" />
                        </a>
                      </li>
                      {/* <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li> */}
                    </ul>
                    <div className="text">
                      <h5>
                        <a href="#">Eranja Perera</a>
                      </h5>
                      <span className="designation">
                        Director / Mechanical Engineer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/assets/images/team/13.png" alt="" />
                    </figure>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="mailto:avishka.jayakody@renewaa.com">
                          <i className="fas fa-envelope" />
                        </a>
                      </li>
                      {/* <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li> */}
                    </ul>
                    <div className="text">
                      <h5>
                        <a href="#">Avishka Jayakody</a>
                      </h5>
                      <span className="designation"> Electrical Engineer </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/assets/images/team/14.png" alt="" />
                    </figure>
                    {/* <ul class="social-links clearfix">
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul> */}
                    <div className="text">
                      <h5>
                        <a href="#">Shamil Shilan</a>
                      </h5>
                      <span className="designation">Electronics Engineer </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/assets/images/team/15.png" alt="" />
                    </figure>
                    {/* <ul class="social-links clearfix">
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul> */}
                    <div className="text">
                      <h5>
                        <a href="#">Uvindu Avishke</a>
                      </h5>
                      <span className="designation">Mechanical Engineer </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/assets/images/team/16.png" alt="" />
                    </figure>
                    {/* <ul class="social-links clearfix">
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul> */}
                    <div className="text">
                      <h5>
                        <a href="#">Shan Minol</a>
                      </h5>
                      <span className="designation">Marketing Head </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/assets/images/team/17.png" alt="" />
                    </figure>
                    {/* <ul class="social-links clearfix">
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul> */}
                    <div className="text">
                      <h5>
                        <a href="#">Hiruni Maneesha</a>
                      </h5>
                      <span className="designation">Finance Head</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-section end */}
        {/* funfact-section */}
        <Funfact />
        {/* funfact-section end */}

        {/* scroll to top */}
        <ScrollButton />
      </div>
      {/* jequery plugins */}
      {/* main-js */}
      {/* End of .page_wrapper */}
    </>
  );
};

export default About;
