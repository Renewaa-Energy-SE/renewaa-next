"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
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
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
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
                  <i className="far fa-user" aria-hidden="true" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    aria-label="Your Name"
                    required={true}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 column">
                <div className="form-group">
                  <i className="far fa-envelope-open" aria-hidden="true" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    required={true}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 column">
                <div className="form-group">
                  <i className="far fa-phone" aria-hidden="true" />
                  <input
                    type="text"
                    name="phone"
                    required={true}
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 column">
                <div className="form-group">
                  <i className="far fa-desktop" aria-hidden="true" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Company"
                    aria-label="Company"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 column">
                <div className="form-group">
                  <i className="far fa-text-width" aria-hidden="true" />
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    aria-label="Your Message"
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
                    disabled={isLoading}
                    aria-busy={isLoading}
                    aria-disabled={isLoading}
                    style={
                      isLoading
                        ? { opacity: 0.7, cursor: "not-allowed" }
                        : undefined
                    }
                  >
                    {isLoading ? (
                      <>
                        <i
                          className="fas fa-spinner fa-spin"
                          aria-hidden="true"
                        />{" "}
                        Sending...
                      </>
                    ) : (
                      <>
                        <i
                          className="flaticon-right-arrow"
                          aria-hidden="true"
                        />{" "}
                        Submit
                      </>
                    )}
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
