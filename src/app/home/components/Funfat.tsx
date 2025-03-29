import Counter from "./Counter";

const Funfact = () => {
  return (
    <section className="funfact-section centred green-bg">
      <span className="big-text">Fun Numbers</span>
      <div className="bg-layer">
        <div
          className="bg-1"
          style={{
            backgroundImage: "url(/assets/images/icons/vector-1.png)",
          }}
        />
        <div
          className="bg-2"
          style={{
            backgroundImage: "url(/assets/images/icons/vector-2.png)",
          }}
        />
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-4 col-sm-12 counter-block">
            <div className="counter-block-one">
              <div className="inner-box">
                <Counter targetCount={50} />
                <h5>Projects Completed</h5>
                <div className="icon-box">
                  <i className="flaticon-mill" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 counter-block">
            <div className="counter-block-one">
              <div className="inner-box">
                <Counter targetCount={10} />
                <h5>Professional Staff</h5>
                <div className="icon-box">
                  <i className="flaticon-geology" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 counter-block">
            <div className="counter-block-one">
              <div className="inner-box">
                <Counter targetCount={75} />
                <h5>Satisfied People</h5>
                <div className="icon-box">
                  <i className="flaticon-happiness" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funfact;
