import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { Card, InputGroup, FormControl } from "react-bootstrap";
import { ProjectData } from "../components/Data";
import AOS from "aos";
import Heads from "../components/Heads";
import Link from "next/link";
import ProjectCard from '../components/ProjectCard'

function Project() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Heads title="Project" />

      <div className="container project_page my-5 p-3 ">
        <p
          data-aos="flip-up"
          className="text-center"
          style={{ fontSize: "1.5rem" }}
        >
          Some Of My Recent Works
        </p>
        <h1 data-aos="flip-up" className="text-center p_heading">
          PROJECTS
        </h1>
<ProjectCard ProjectData={ProjectData}/>
        
      </div>
      <Footer />
    </Layout>
  );
}
export default Project;
