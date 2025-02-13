import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSpring,
  SiSpringboot,
  SiAngular,
  SiReact,
  SiDjango,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
    </Row>
  );
}

export default Toolstack;
