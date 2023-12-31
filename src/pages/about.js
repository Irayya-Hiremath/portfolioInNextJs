import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import AOS from "aos";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import Heads from "../components/Heads";
import {
  experienceData,
  frameWorks,
  webTechnologies,
  tools,
} from "../components/Data";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Heads title="About" />

      <div className=" container my-5">
        <div className=" container row m-auto">
          <div className="col-lg-5 read_about col-12 order-lg-1 order-2 "></div>
          <div className=" col-lg-7 col-12 order-lg-2 order-1 ">
            <div className="aboutText" data-aos="fade-left">
              <p style={{ fontSize: "2.5rem" }}>Hello,</p>
              <p style={{ fontSize: "2rem" }}>Let me introduce myself</p>
              <p style={{ fontSize: "1.5rem", textAlign: "justify" }}>
                I am Irayya Hiremath, currently working as a{" "}
                <strong>Software Engineer</strong> at Trellisys.Net Pvt Ltd. I am a Mechanical
                Engineering graduate from Hulkoti, Gadag. I started as a{" "}
                <strong>Design Engineer</strong> at BLH H-Tech PVT LTD, Hubbali,
                in an IoT team for the SPOUT project. I was in charge of
                designing the Spouts parts in Catia V5.
                <br />
                continued in the same organization as a customer-facing Project
                Coordinator/Technical Consultant for web and mobile applications
                under the IT Dept. In that role, I was responsible for gathering
                customer requirements and signoff, designing the wireframes and
                application flows. collaborating with sales, development, and
                testing teams to complete the application implementation.
                Customer Demo and Presentation.
                <br />
                After that, I found an interest in development and coding. Then
                I joined the organisation Sathvik Softech, Hubbali, where I had
                completed my course and got an opportunity for an internship and
                worked on many small projects, learning new technology with
                real-time projects. This includes designing and developing UI
                for the websites and integrating them with the back-end system.
              </p>
            </div>

            <div className="button_box p-3">
              <a target="blank" href="./images/Reactjs_Developer_3Year_Experiance2023.pdf">
              
                {" "}
                <Button data-aos="flip-right" className="button">
                  {" "}
                  Download CV
                </Button>{" "}
              </a>
              <a  href="https://github.com/Irayya-Hiremath" target="blank">
                {" "}
                <Button data-aos="flip-right" className="button">
                  {" "}
                  Github
                </Button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" aboutsection w-75 container p-3 m-auto mt-5">
        <div className="educatioinSection mt-5 ">
          <h1>MY SKILLS</h1>
          <div className="education mt-5 row">
            <div className="col-lg-3 col-12 mb-3">
              <h2>WebTechnologies</h2>
            </div>

            <div className="col-lg-8 col-12 mb-3 d-flex ">
              {webTechnologies.map((elm, ind) => {
                return <h6 key={ind}>{elm}</h6>;
              })}
            </div>

            <div className="col-3">
              <h2>FrameWorks/Libries</h2>
            </div>

            <div className="col-lg-8 col-12 mb-3 d-flex justify-content-spacebetween flex-wrap">
              {frameWorks.map((elm, ind) => {
                return <h6 key={ind}>{elm}</h6>;
              })}
            </div>

            <div className="col-lg-3 col-12 mb-3 ">
              <h2>Tools</h2>
            </div>

            <div className="col-lg-8 col-12 d-flex justify-content-spacebetween flex-wrap">
              {tools.map((elm, ind) => {
                return <h6 key={ind}>{elm}</h6>;
              })}
            </div>
          </div>
        </div>

        <div className="educatioinSection mt-5 ">
          <h1>EXPERIENCES</h1>
          <div className="education mt-5 row">
            {experienceData.map((elm, ind) => {
              return (
                <>
                  <div key={ind} className="col-lg-3 col-6 mb-3">
                    <h2>{elm.year}</h2>
                  </div>
                  <div className="col-lg-8 col-12 mb-3 d-flex ">
                    <h6>{elm.companyName}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="educatioinSection mt-5">
          <h1>EDUCATION</h1>
          <div className="education mt-5 row">
            <div className="col-lg-3 col-12 mb-3">
              <h2>School</h2>
            </div>
            <div className="col-lg-8 col-12 mb-3 d-flex ">
              <h6>Lamington High School,Hubbali</h6>
            </div>
            <div className="col-3">
              <h2>College</h2>
            </div>
            <div className="col-lg-8 col-12 mb-3  d-flex justify-content-spacebetween flex-wrap">
              <h6>Rural Engineering College,Hulkoti</h6>
            </div>
            <div className="col-lg-3 col-12 mb-3 ">
              <h2>University</h2>
            </div>
            <div className="col-lg-8 col-12 d-flex justify-content-spacebetween flex-wrap">
              <h6>Visvesvaraya Technological University (VTU)</h6>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

export default About;
