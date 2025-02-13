import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Button } from 'react-bootstrap/Button';
import "../../index.css";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mariam Mohammed </span>
            from <span className="purple"> Egypt.</span>
            <br />
            I am currently software Engineer Trainee at Digital Egypt Builders Initiative.
            <br />
            I have completed my Bachelor's degree in Computer Engineering.
            <br />
            <br />
          </p>
          <div class="cta">
            <a href="/static/media/Mostafa Hamdy CV.c1cda6bf60c0f3544568.pdf" download="" class="btn custom-btn  purple" >Download CV</a>
            <a href="#contact" class="btn btn-primary">Let's Talk</a></div>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
    
  );
}

export default AboutCard;
