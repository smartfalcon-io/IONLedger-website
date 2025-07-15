

import React, { useEffect, useState } from "react";
import "../assets/CSS/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector(".contact-content");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="contact">
      <div className="contact-banner"></div>
      <div className={`contact-content ${isVisible ? "show" : ""}`}>
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="phone-input">
                <select id="countryCode" name="countryCode">
                  <option value="+91">India (+91)</option>
                </select>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Reach Out to Us</h2>
          <div className="info">
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />{" "}
              <b>IonLedger</b>
              <br />
              T-hub Phase 2, Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha,
              Knowledge City, Serilingampally, <br/>
              Hyderabad, Telangana- 500081.
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="icon" />{" "}
              <b>+91 9866227022</b>
              <br />
              Mon to Fri 1am to 5pm
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
              <a href="mailto:contact@ionledger.io">contact@ionledger.co.in</a>
              <br />
              Send us your query anytime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
