import * as React from "react";
import Layout from "../components/Layout";
import { Container, Button, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import ProjectData from "../components/Data";
import Heads from "../components/Heads";

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
          <div  className="profile col-lg-5 col-12 order-lg-1 order-2 b"> </div>

          <div className=" textbody col-lg-7 col-12 order-lg-2 order-1" data-aos="fade-up" >
            <div className="profileText">
              <p style={{ fontSize: "2.5rem" }}>Hello,This is</p>
              <p style={{ fontSize: "2.5rem" }}>Irayya Hiremath</p>
              <p style={{ fontSize: "1.5rem", textAlign: "justify" }}>
              I am a <strong>Software Engineer</strong>  I love to design and make new web experiences for people.
                <br />
                I am looking for an opportunity in an esteemed organisation to put in my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal growth and fulfil organisational goals.
              </p>

              <p style={{ fontSize: "1.5rem", textAlign: "justify" }}>
                I Have done projects using following WebTechnologies
              </p>

              <div className="skillschart d-flex justify-content-spacebetween flex-wrap">
                <h6>HTML</h6>
                <h6>CSS</h6>
                <h6>JavaScript</h6>
                <h6>React JS</h6>
                <h6>GatsBy</h6>
                <h6>React Bootstrap</h6>
                <h6>Bootstrap</h6>
                <h6>Tailwind css</h6>
                <h6>Ant D</h6>
                <h6>Next JS</h6>
                <h6>AWS</h6>
                <h6>PWA</h6>
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

        <div className=" project_box m-auto row d-flex justify-content-spacebetween flex-wrap">

          { ProjectData.map((Data, i) => {
            return (
              <Card className="col-lg-4 p-4 col-6"  >
                <Card.Img src={Data.img} />
                <Card.Body>
                  <Card.Title>{Data.title}</Card.Title>
                  <Card.Text className="d-flex justify-content-spacebetween flex-wrap">

                    {Data.tech.map((d, i) => {
                      return <p className="p_technolgies">{d}</p>;
                    })}

                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}

        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
