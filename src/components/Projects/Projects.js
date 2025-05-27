import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bank Loan Management System - ASP.NET MVC"
              description="Built a web-based loan management system using ASP.NET MVC and SQL Server, ensuring secure data handling with web APIs. Designed a responsive UI using Bootstrap & jQuery, integrated role-based authentication, and optimized database performance"
              ghLink="https://github.com/g-mahi/BANKLOAN_APP_MVC"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CloudFreeNet: A Deep Learning Approach for Cloud Removal in Drone Imagery"
              description="Clouds in satellite video frames are accurately detected using a U-Net-based deep learning model, achieving a high accuracy of 98% in segmentation. Detected cloud regions are removed by replacing them with clean patches from other non-cloudy frames, ensuring seamless and visually consistent video output."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Recommender System for Customized Clinical Prescription"
              description="The project comes under EPICS, it’s a web application where people can get the cost-effective medication based on symptom, age, previous health issues and severity of the symptom. Our application uses HTML, CSS, JS as front end, python framework, FLASK in backend and uses XG Boost algorithm for recommendation."
              ghLink="https://github.com/g-mahi/medicare"
                           
            />
          </Col>

          

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
