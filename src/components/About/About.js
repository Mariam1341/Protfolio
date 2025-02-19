import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>

            <Aboutcard />
          </Col>
          {/* <Col md={4} className="myAvtar">
         <Tilt>
           <img src={laptopImg} className="img-fluid" alt="avatar" />
         </Tilt>
       </Col> */}
          <Col
            md={5}
            style={{ marginTop: "0erm", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} width = "300px" height = "300px" alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Technologies</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
