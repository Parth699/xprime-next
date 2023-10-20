"use client";

import React, { useState } from "react";
import Panel from "react-bootstrap";
import PanelGroup from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

import "./responsive.css";
import "./main.css";
import "./switcher.css";
import "./style.css";
import "./contact.css";
import axiosInstance from "../axios/axios";
import Map from "./Map";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    profession: "",
    country: "",
    state: "",
    city: "",
    message: "",
  });

  const location = {
    address: "GIDC Phase III, GIDC Phase-2, Dared, Jamnagar, Gujarat 361006",
    lat: 22.415129,
    lng: 70.047031,
  };

  const [isSending, setIsSending] = useState(false);

  const onInputChangeHandler = (e) => {
    // setcontactInfo((preMessageInfo) => ({
    //   ...preMessageInfo,
    //   [e.target.name]: e.target.value,
    // }));
    let x = e.target.name;
    setContactInfo((preContactInfo) => ({
      ...preContactInfo,
      [x]: e.target.value,
    }));
    console.log(contactInfo);
  };

  const collapseHandler = () => {
    console.log("HHHHH");
    let a = document.querySelector(".accordion-collapse");
    a.classList.remove("collapse");
    console.log("KKKKK");
  };

  const handleClickOne = (e) => {
    document.querySelector("#collapseOne").classList.toggle("collapse");
    document.querySelector("#collapseTwo").classList.add("collapse");
    document.querySelector("#collapseThree").classList.add("collapse");
  };
  const handleClickTwo = (e) => {
    document.querySelector("#collapseOne").classList.add("collapse");
    document.querySelector("#collapseTwo").classList.toggle("collapse");
    document.querySelector("#collapseThree").classList.add("collapse");
  };
  const handleClickThree = (e) => {
    document.querySelector("#collapseOne").classList.add("collapse");
    document.querySelector("#collapseTwo").classList.add("collapse");
    document.querySelector("#collapseThree").classList.toggle("collapse");
  };

  const handleSubmit = async () => {
    if (
      !contactInfo.name |
      !contactInfo.email |
      !contactInfo.company |
      !contactInfo.phone |
      !contactInfo.profession |
      !contactInfo.country |
      !contactInfo.state |
      !contactInfo.city |
      !contactInfo.message
    ) {
      return;
    }
    setIsSending(true);
    try {
      let res = await axiosInstance.post("/contact/store", { ...contactInfo });
      setContactInfo({
        name: "abc",
        email: "",
        company: "",
        phone: "",
        profession: "",
        country: "",
        state: "",
        city: "",
        message: "",
      });
    } catch (e) {
      console.log(e);
    }

    setIsSending(false);
  };

  return (
    <div>
      <section className="page_single ">
        <div className="container">
          <div className="row contact-bottom padTB100">
            <div className="col-md-12">
              <div className="centered-title">
                <h2>
                  Get In Touch <span className="heading-border"></span>
                </h2>
                <div className="clear"></div>
                <em>
                  Fill in the form below for any new product/business enquiry
                  and we will get back to you at the earliest.
                </em>
                <div className="clear"></div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
                style={{ transition: "all 0.3s" }}
              >
                <div className="panel panel-default">
                  <div
                    className="panel-heading"
                    onClick={handleClickOne}
                    role="tab"
                    id="headingOne"
                  >
                    <h4 className="panel-title">
                      {" "}
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {" "}
                        Where we are ?{" "}
                      </a>{" "}
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse "
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="centered-title">
                      <div className="panel-body">
                        <em>
                          ARBO ARTIFICIAL BATH FITTINGS, Lakhdhirpur Road, Nr
                          Grand Vaibhav Hotel, Opp. Saheb Ceramic, Morbi,
                          Gujarat , India 363642{" "}
                        </em>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div
                    className="panel-heading"
                    onClick={handleClickTwo}
                    role="tab"
                    id="headingTwo"
                  >
                    <h4 className="panel-title">
                      {" "}
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {" "}
                        Become A Dealer{" "}
                      </a>{" "}
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body">
                      {" "}
                      <h3> INTERESTED IN DEALERSHIP? </h3>
                      <p>
                        {" "}
                        Join our elite group of Dealers. We follow a policy of
                        working with few select dealers across India and have a
                        stringent criteria for appointing new dealers. Our brand
                        is best suited for showrooms with an existing portfolio
                        of premium bathroom fittings brands.{" "}
                      </p>
                      <p>
                        {" "}
                        You can email Pratik – arbobath@gmail.com with details
                        about your dealership inquiry.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div
                    className="panel-heading"
                    onClick={handleClickThree}
                    role="tab"
                    id="headingThree"
                  >
                    <h4 className="panel-title">
                      {" "}
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        {" "}
                        Customer Care{" "}
                      </a>{" "}
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="panel-body">
                      <h2> WE ARE HERE TO HELP! </h2>
                      <p>
                        {" "}
                        Our Team strongly believes in providing Exceptional
                        Customer Service. You can contact us on our Toll-Free
                        Helpline or send us an Email.{" "}
                      </p>

                      <em>
                        Toll-Free Helpline: 1800 123 124 000 (Timing: 10.30 am
                        to 6.30 pm){" "}
                      </em>

                      <p> Email: info@arbobath.com </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 left-box">
              <form id="arbo_contactform" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Your Name<span className="required red-text">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactInfo.name}
                        onChange={(e) => {
                          onInputChangeHandler(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Company </label>
                      <input
                        type="text"
                        name="company"
                        value={contactInfo.company}
                        onChange={onInputChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Your Email<span className="required red-text">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="exampleInputEmail1"
                        value={contactInfo.email}
                        onChange={onInputChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Your Number</label>
                      <input
                        type="text"
                        name="phone"
                        id="exampleInputPhone"
                        value={contactInfo.phone}
                        onChange={onInputChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Profession*</label>
                      <select
                        name="profession"
                        value={contactInfo.profession}
                        onChange={onInputChangeHandler}
                      >
                        <option value="">Select Profession </option>
                        <option value="Architect">Architect</option>
                        <option value="Interior Designer">
                          Interior Designer
                        </option>
                        <option value="Builder">Builder</option>
                        <option value="Private Client">Private Client</option>
                        <option value="Journalist">Journalist</option>
                        <option value="Showroom Personnel">
                          Showroom Personnel
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Country <span className="required red-text">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="exampleInputEmail1"
                        value={contactInfo.country}
                        onChange={onInputChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        id="exampleInputPhone"
                        value={contactInfo.state}
                        onChange={onInputChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        id="exampleInputPhone"
                        value={contactInfo.city}
                        onChange={onInputChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="clear"></div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>
                        Your Message<span className="required red-text">*</span>
                      </label>
                      <textarea
                        name="message"
                        className="textarea-message"
                        rows="10"
                        value={contactInfo.message}
                        onChange={onInputChangeHandler}
                      ></textarea>
                    </div>
                  </div>

                  <input
                    type="button"
                    className="theme-button"
                    value={`${isSending ? "Sending..." : "Send"}`}
                    disabled={isSending}
                    onClick={handleSubmit}
                  />
                  <div className="fashion_infotext"></div>
                </div>
              </form>
            </div>
          </div>
        </div>

      
        <div className="w-full h-[400px]">
          <Map location={location} zoomLevel={16} />
        </div>
      </section>
    </div>
  );
};

export default Contact;
