import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import IoT from "../../Assets/Projects/IoT.jpeg";

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
              title="IoT"
              description="Creating a presence application Using IoT-based RFID, making this application so that it is effective there is no cheating because this is automatic when we bring the card closer to the RFID reader, our name will automatically be uploaded immediately."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
