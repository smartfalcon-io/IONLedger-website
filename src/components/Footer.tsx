
// src/components/Footer.tsx
import React from "react";
import "/home/krishna/react-battery1/src/components/Footer.css";
import logo from "/home/krishna/react-battery1/src/assets/LOGO-3-removebg-preview.png";

const Footer: React.FC = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="IonLedger Logo" className="footer-logo" />
          {/* <h2>IONLedger</h2> */}
        </div>
        <div className="footer-middle">
          <p>
            IonLedger, 4th Floor,
            <br /> T-Hub Phase 2, Plot No 1/C, Sy No 83/1, <br />
            Raidurgam Panmaktha, Hyderabad <br /> Knowledge City,
            Serilingampally, <br />
            Hyderabad, Telangana - 500 081.
          </p>
        </div>
        <div className="footer-right">
          <p>+91 98662 27022</p>
          <p>contact@ionledger.io</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </p>
        <p>&copy; {new Date().getFullYear()} IONLedger. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
