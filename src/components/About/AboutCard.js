import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Mahima Kumar </span>
            from <span className="purple"> West Godavari, Andhra Pradesh.</span>
            <br />
            I have completed Btech in Computer Science and Engineering at Velagapudi RamaKrishna Siddhartha Engineering College, Vijayawada.
            <br />
            I have completed 3 Months Internship at Cognizant.
            
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mahi</footer>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
