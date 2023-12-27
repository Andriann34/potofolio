import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import IoT from "../../Assets/Projects/IoT.jpeg";
import Inventory from "../../Assets/Projects/Inventory.png";

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
              imgPath={IoT}
              isBlog={false}
              title="Presence Application Using IoT Based RFID"
              description="I made this Project 1 in the 3rd semester for approximately 4-5 months, using several hardware and programming languages, for hardware I used NodeMCU ESP8266, Button, LED Lights, Jumper Cables, RFID TAG and RFID Reader, for programming language I used C++, PHP and MySQL as database."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Inventory}
              isBlog={false}
              title="Inventory Management System Using the Laravel Framework"
              description="This project 2 is in the process of being made from October until now, using the Laravel Framework, PHP, MySQL, and Bootstrap."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
