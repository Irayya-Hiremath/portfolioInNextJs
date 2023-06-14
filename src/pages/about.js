import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import AOS from "aos";
import { Button } from 'react-bootstrap'
import { useEffect } from 'react';
import Heads from "../components/Heads";




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
                            <p style={{fontSize:'2.5rem'}}>Hello,</p>
                            <p style={{fontSize:'2rem'}}>Let me introduce myself</p>
                            <p style={{fontSize:'1.5rem',textAlign:'justify'}}>I am Irayya Hiremath, currently working as a <strong>Software Engineer</strong>. I am a Mechanical Engineering graduate from Hulkoti, Gadag. I started as a <strong>Design Engineer</strong> at BLH H-Tech PVT LTD, Hubbali, in an IoT team for the SPOUT project. I was in charge of designing the Spout's parts in Catia V5.<br/>
                            continued in the same organisation as a customer-facing Project Coordinator/Technical Consultant for web and mobile applications under the IT Dept. In that role, I was responsible for gathering customer requirements and signoff, designing the wireframes and application flows. collaborating with sales, development, and testing teams to complete the application implementation. Customer Demo and Presentation.<br/>
                            After that, I found an interest in development and coding. Then I joined the organisation Sathvik Softech, Hubbali, where I had completed my course and got an opportunity for an internship and worked on many small projects, learning new technology with real-time projects. This includes designing and developing UI for the websites and integrating them with the back-end system.</p>
                      </div>

                      <div className="button_box p-3">
                        <a href='./static/IrayyaHiremath_cv_2022.pdf'> <Button data-aos="flip-right" className="button"> Download CV</Button>  </a>
                        <a href='https://github.com/Irayya-Hiremath'target="blank" > <Button data-aos="flip-right" className="button"> Github</Button>  </a>
                     </div>

                </div>
             </div>
          </div>
          

      <div  className=" aboutsection w-75 container p-3 m-auto mt-5">

           <div className="educatioinSection mt-5 ">
                <h1>MY SKILLS</h1>
                <div  className="education mt-5 row">

                  <div className="col-lg-3 col-12 mb-3" >
                     <h2>WebTechnologies</h2>
                  </div>

                  <div className="col-lg-8 col-12 mb-3 d-flex ">
                    <h6>HTML</h6>
                    <h6>CSS</h6>
                    <h6>JavaScript</h6>
                  </div>

                  <div className="col-3">
                    <h2>FrameWorks/Libries</h2>
                  </div>

                  <div className="col-lg-8 col-12 mb-3 d-flex justify-content-spacebetween flex-wrap">
                      <h6>React JS</h6> 
                      <h6>GatsBy</h6> 
                      <h6>React Bootstrap</h6> 
                      <h6>Bootstrap</h6> 
                      <h6>Tailwind css</h6>
                      <h6>Ant D</h6> 
                      <h6>Next JS</h6> 
                  </div>

                  <div className="col-lg-3 col-12 mb-3 ">
                     <h2>Tools</h2>
                  </div>

                  <div className="col-lg-8 col-12 d-flex justify-content-spacebetween flex-wrap">
                    <h6>AWS</h6> 
                    <h6>Draw.io Flow charts</h6> 
                    <h6>VS code</h6> 
                    <h6>Mysql</h6> 
                    <h6>Git</h6> 
                  </div>

                </div>
          </div>


          <div className="educatioinSection mt-5 ">

                <h1>EXPERIENCES</h1>
                <div className="education mt-5 row">
                  <div className="col-lg-3 col-6 mb-3">
                  <h2>2020-Present</h2>

                  </div>
                  <div className="col-lg-8 col-12 mb-3 d-flex ">
                  <h6>Front-End Developer at SamarthMeditech Pvt Ltd</h6>
                

                  </div>
                  <div className="col-lg-3 col-12 mb-3 ">
                  <h2>2019-2020</h2>

                  </div>
                  <div className="col-lg-8 col-12 mb-3 d-flex justify-content-spacebetween flex-wrap">
                  <h6>Intern/Junior Web Developer at Sathvik Softech</h6> 
                  

                  </div>
                  <div className="col-lg-3 col-12 mb-3 ">
                  <h2>2018-2019</h2>

                  </div>
                  <div className="col-lg-8 col-12 d-flex   justify-content-spacebetween flex-wrap">
                  <h6>Design Engineer at BLH Hi-Tech Pvt Ltd</h6> 

                  </div>
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
      

      <Footer/>
      
    </Layout>
  )
}

export default About