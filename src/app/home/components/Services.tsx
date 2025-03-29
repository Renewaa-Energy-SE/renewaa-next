import Link from "next/link";

const Services = () => {
  return (
    <section className="service-style-two sec-pad">
      <div className="auto-container">
        <div className="upper-box">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
              <div className="sec-title text-center2">
                <div className="title-top">
                  <div className="shape-box">
                    <span className="shape shape-1">//</span>
                  </div>
                  <h6>Services</h6>
                </div>
                <h2>Our efficient solutions</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text text-center2">
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power off choice is untrammelled.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-two wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src="/assets/images/service/service-tech copy.jpg"
                    alt=""
                  />
                </figure>
                <div className="content-box">
                  <div className="inner">
                    <div className="icon-box">
                      <img src="/assets/images/icons/icon-29.png" alt="" />
                    </div>
                    <div className="text">
                      <span className="category">Next Generation</span>
                      <h3>
                        <Link href="/about" scroll={false}>
                          Electric Mobility Solutions
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-two wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src="/assets/images/service/service-maintenance - Copy.jpg"
                    alt=""
                  />
                </figure>
                <div className="content-box">
                  <div className="inner">
                    <div className="icon-box">
                      <img src="/assets/images/icons/icon-30.png" alt="" />
                    </div>
                    <div className="text">
                      <span className="category">High End</span>
                      <h3>
                        <Link href="/about" scroll={false}>
                          Energy Storage Solutions
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-two wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src="/assets/images/service/service-solor - Copy.jpg"
                    alt=""
                  />
                </figure>
                <div className="content-box">
                  <div className="inner">
                    <div className="icon-box">
                      <img src="/assets/images/icons/icon-31.png" alt="" />
                    </div>
                    <div className="text">
                      <span className="category">
                        Solar Ongrid, and Off-Grid
                      </span>
                      <h3>
                        <Link href="/about" scroll={false}>
                          Installations
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
