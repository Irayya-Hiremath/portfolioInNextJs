import * as React from "react";
import Layout from "../components/Layout";
import { Container, Button, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import {ProjectData,allSkills} from "../components/Data";
import Heads from "../components/Heads";
import ProjectCard from '../components/ProjectCard'


const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);



  return (
    
    <Layout>

      <Heads title="Home" />

      <Container fluid className="index_main">
        <div className="main row m-auto p-3 ">
          <div  className="profile col-lg-5 col-12 order-lg-1 order-2 b" >
            </div>

          <div className=" textbody col-lg-7 col-12 order-lg-2 order-1" data-aos="fade-up" >
            <div className="profileText">
              <p style={{ fontSize: "2.5rem" }}>Hello,This is</p>
              <p style={{ fontSize: "2.5rem" }}>Irayya Hiremath</p>
              <p style={{ fontSize: "1.5rem", textAlign: "justify" }}>
              {/* I am a <strong>Software Engineer</strong>  I love to design and make new web experiences for people.
                <br />
                I am looking for an opportunity in an esteemed organisation to put in my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal growth and fulfil organisational goals. */}
                "Welcome to my website! I'm a passionate Software Engineer who thrives on designing and creating exceptional web experiences for users. With a strong foundation in HTML, CSS, and JavaScript, I specialize in utilizing cutting-edge technologies like React.js, Next.js, Gatsby, and Material UI to bring innovative ideas to life. I have hands-on experience working with frameworks and libraries such as React Bootstrap, Bootstrap, and Tailwind CSS, enabling me to build responsive and visually stunning web applications. Additionally, I have integrated powerful features like Google Maps API, Socket.io, and Crypto.js into my projects to enhance functionality and security. With an insatiable hunger for learning, I continuously seek opportunities to expand my skill set and apply my knowledge to achieve personal growth and contribute to organizational goals. Let's collaborate and create remarkable web experiences together!"
              </p>

              <p style={{ fontSize: "1.5rem", textAlign: "justify" }}>
                I Have done projects using following WebTechnologies
              </p>

              <div className="skillschart d-flex justify-content-spacebetween flex-wrap">
                {allSkills.map((elm,ind)=>{
                return (<h6 key={ind}>{elm}</h6>)
                  
                })}
                
              </div>
            </div>

            <div className="button_box  p-3">
              <Button data-aos="flip-up" className="button">
                <Link href="/project"> Works </Link>
              </Button>
              <Button data-aos="flip-up" className="button">
                <Link href="/about"> Readmore </Link>
              </Button>
            </div>

          </div>
        </div>
      </Container>
      <div className="project_section w-100">
        <p className="text-center mt-2" style={{ fontSize: "1.5rem" }}>
          Some Of My Recent Works
        </p>
        <h1 className="text-center mb-4" style={{ fontSize: "4rem" }}>
          PROJECTS
        </h1>
        <ProjectCard ProjectData={ProjectData}/>

       
      </div>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
