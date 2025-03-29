"use client";
import React from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == 200) {
      toast.info("Email sent successfully");
      console.log("Email sent successfully");
      form.reset(); // This will clear the form
    } else {
      toast.error("Error sending email");
      console.error("Error sending email");
    }
  };

  return (
    <section className="contact-form-section">
      <div className="auto-container">
        <div className="form-inner">
          <div className="text">
            <h3>Send Your Message</h3>
            <p>
              Please feel free to get in touch using the form below. We'd love
              to hear for you.
            </p>
          </div>
          <form
            id="contact-form"
            className="default-form"
            onSubmit={handleSubmit}
          >
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 column">
                <div className="form-group">
                  <i className="far fa-user" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    required={true}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 column">
                <div className="form-group">
                  <i className="far fa-envelope-open" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required={true}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 column">
                <div className="form-group">
                  <i className="far fa-phone" />
                  <input
                    type="text"
                    name="phone"
                    required={true}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 column">
                <div className="form-group">
                  <i className="far fa-desktop" />
                  <input type="text" name="subject" placeholder="Company" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 column">
                <div className="form-group">
                  <i className="far fa-text-width" />
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 column">
                <div className="message-btn">
                  <button
                    className="theme-btn btn-one"
                    type="submit"
                    name="submit-form"
                  >
                    <i className="flaticon-right-arrow" />
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
