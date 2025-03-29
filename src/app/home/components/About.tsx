import Link from "next/link";

const About = () => {
  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_1">
              <div className="image-box">
                <figure className="image image-1">
                  <img src="/assets/images/resource/about-01.png" alt="" />
                </figure>
                <figure className="image image-2">
                  <img src="/assets/images/resource/about-02.png" alt="" />
                </figure>
                <figure className="image image-3">
                  <img src="/assets/images/icons/Rewenaa-icon.svg" alt="" />
                </figure>
                <div className="text">
                  <h2>
                    03<span>+</span>
                  </h2>
                  <h6>Years Experienced</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_1">
              <div className="content-box">
                <div className="sec-title text-center2">
                  <div className="title-top">
                    <div className="shape-box">
                      <span className="shape shape-1">//</span>
                    </div>
                    <h6>Who we are</h6>
                  </div>
                  <h2>smartest way to Generate electricity</h2>
                </div>
                <div className="text text-center2">
                  <p>
                    Welcome to Renewaa, your ultimate destination for innovative
                    lithium battery solutions!
                  </p>
                </div>
                <div className="inner-box">
                  <div className="single-item">
                    <h5>01. our vision</h5>
                    <div className="inner">
                      <div className="icon-box">
                        <img src="/assets/images/icons/icon-1.png" alt="" />
                      </div>
                      <p>
                        At our core, we envision a world where sustainable
                        energy solutions power progress and prosperity for
                        all....
                      </p>
                      <h6>
                        <i className="flaticon-right-arrow" />
                        <Link href="/about#visson-statement">Read More</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="single-item">
                    <h5>02. our mission</h5>
                    <div className="inner">
                      <div className="icon-box">
                        <img src="/assets/images/icons/icon-2.png" alt="" />
                      </div>
                      <p>
                        At Renewaa, we aim to lead the charge in transforming
                        energy storage solutions. We are committed to...
                      </p>
                      <h6>
                        <i className="flaticon-right-arrow" />
                        <Link href="/#misson-statement">Read More</Link>
                      </h6>
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

export default About;
