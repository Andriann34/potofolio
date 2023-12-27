import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Andrian Falah Kalyana </span>
            <br />
            I am an active 5th semester student majoring in Informatics
            Engineering at Bandung University of Logistics and International
            Business.
            <br />
            I have completed Project 1 in semester 3 entitled Presence
            Application Using IoT-Based RFID
            <br />
            <br />
            My Hobby!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games, Futsal, And Badminton
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
