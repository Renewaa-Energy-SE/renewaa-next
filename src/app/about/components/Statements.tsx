"use client";
import { useState } from "react";

const Statements = () => {
  const [activeTab, setActiveTab] = useState("#tab-1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section
      className="statements-section"
      style={{
        backgroundImage: "url(/assets/images/background/renewaa-statement.png)",
      }}
    >
      <div className="auto-container">
        <div className="tabs-box">
          <div className="tab-btn-box">
            <ul className="tab-btns tab-buttons clearfix">
              <li
                className={`tab-btn ${
                  activeTab === "#tab-1" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("#tab-1")}
              >
                <div className="icon-box">
                  <img src="/assets/images/icons/icon-40-blue.png" alt="" />
                </div>
                <div className="icon-box-2">
                  <img src="/assets/images/icons/icon-41-blue.png" alt="" />
                </div>
                <span>Renewaa</span>
                <h5 id="misson-statement">Mission Statement</h5>
              </li>
              <li
                className={`tab-btn ${
                  activeTab === "#tab-2" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("#tab-2")}
              >
                <div className="icon-box">
                  <img src="/assets/images/icons/icon-42-blue.png" alt="" />
                </div>
                <div className="icon-box-2">
                  <img src="/assets/images/icons/icon-43-blue.png" alt="" />
                </div>
                <span>Renewaa</span>
                <h5 id="visson-statement">Vision Statement</h5>
              </li>
              <li
                className={`tab-btn ${
                  activeTab === "#tab-3" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("#tab-3")}
              >
                <div className="icon-box">
                  <img src="/assets/images/icons/icon-44-blue.png" alt="" />
                </div>
                <div className="icon-box-2">
                  <img src="/assets/images/icons/icon-45-blue.png" alt="" />
                </div>
                <span>Renewaa</span>
                <h5>Value Statement</h5>
              </li>
            </ul>
          </div>
          <div className="tabs-content">
            <div
              className={`tab ${activeTab === "#tab-1" ? "active-tab" : ""}`}
              id="tab-1"
            >
              <div className="content-inner">
                <div className="row clearfix">
                  <div className="col-xl-7 col-lg-12 col-md-12 offset-xl-5">
                    <div className="content-box">
                      <h5>Mission Statement</h5>
                      <h3>Company wants to achieve</h3>
                      <p>
                        At Renewaa, we aim to lead the charge in transforming
                        energy storage solutions. We are committed to pioneering
                        innovative lithium battery technology that empowers
                        individuals and businesses. Through our dedication to
                        excellence and sustainability, we strive to redefine
                        energy storage possibilities, revolutionize industries,
                        and power a brighter, more sustainable future.
                      </p>
                      <ul className="clearfix">
                        <li>
                          Focusing relentlessly on quality and performance.
                        </li>
                        <li>
                          We believe in the power of collaboration and
                          partnership.
                        </li>
                        <li>
                          Join us as we harness the power of innovation to
                          create lasting change and positively impact the world.
                          Together, let's build a brighter future for
                          generations to come.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`tab ${activeTab === "#tab-2" ? "active-tab" : ""}`}
              id="tab-2"
            >
              <div className="content-inner">
                <div className="row clearfix">
                  <div className="col-xl-7 col-lg-12 col-md-12 offset-xl-5">
                    <div className="content-box">
                      <h5>Vision Statement</h5>
                      <h3>Company wants to achieve</h3>
                      <p>
                        At our core, we envision a world where sustainable
                        energy solutions power progress and prosperity for all.
                        Through innovation, excellence, and a commitment to
                        environmental stewardship, we strive to be at the
                        forefront of this transformation. Our vision is to
                        empower individuals, businesses, and communities with
                        cutting-edge energy technologies that meet their needs
                        and contribute to a cleaner, greener future. By
                        harnessing the power of renewable resources and
                        advancing energy efficiency, we aim to create a world
                        where access to reliable, sustainable energy is a
                        fundamental right. Together, let's pave the way towards
                        a brighter tomorrow.
                      </p>
                      <ul className="clearfix">
                        <li>Renewable resources.</li>
                        <li>Advancing energy efficiency.</li>
                        <li>Reliable.</li>
                        <li>Sustainable energy.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`tab ${activeTab === "#tab-3" ? "active-tab" : ""}`}
              id="tab-3"
            >
              <div className="content-inner">
                <div className="row clearfix">
                  <div className="col-xl-7 col-lg-12 col-md-12 offset-xl-5">
                    <div className="content-box">
                      <h5>Value Statement</h5>
                      <h3>Company wants to achieve</h3>
                      <p>
                        Renewaa is your premier destination for cutting-edge
                        lithium battery solutions. Committed to innovation and
                        sustainability, we deliver top-quality battery packs
                        designed to power your projects and revolutionize your
                        energy storage needs. Our advanced technology ensures a
                        longer lifespan, faster charging times, and superior
                        performance compared to traditional battery options.
                        Whether you're powering off-grid solar systems or
                        electric bikes or upgrading from lead-acid batteries or
                        any battery requirement, Renewaa has the solution.
                        Backed by years of expertise and a dedication to
                        customer satisfaction, we strive to exceed your
                        expectations and provide reliable energy solutions for a
                        greener future.
                      </p>
                      {/* <ul class="clearfix">
                                            <li>Undertakes laborious physical exercise except to obtain.</li>
                                            <li>Find fault with a man who chooses to enjoy.</li>
                                            <li>Every pleasure is to be welcomed and every pain avoided.</li>
                                        </ul> */}
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

export default Statements;
