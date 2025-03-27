import React from "react";
import "./Issuer.css";
import { useEffect, useRef } from "react";

import authenticateImage from "../assets/signin_content.png";
import roleImage from "../assets/issuer_page.png";
import vcImage from "../assets/verifiable_credential_page.png";
import registeredusersImage from "../assets/registered_users_page.png";
import uploadfileImage from "../assets/upload_file_page.png";

const sections = [
  {
    title: "Your Role",
    description: (
      <p>
        When you open the Battery Passport website, you will be prompted to
        select your role. As a Issuer, click on the "Issuer" button. This will
        take you to a page where you need to authenticate.
      </p>
    ),
    image: roleImage,
  },
  {
    title: "Authentication",
    description: (
      <p>
        When the user clicks the Authenticate button, they will be redirected to
        the sign-in page, where they can authenticate using either their
        verifiable credentials or as a registered user.
      </p>
    ),
    image: authenticateImage,
  },
  {
    title: "Authentcate with Verifiable Credentials",
    description: (
      <p>
        When the user clicks the with verifiable credentials button, they will
        be redirected to the a new page, to proceed, scan the QR code displayed
        on the screen using MS Authenticator or any compliant wallet. This step
        verifies your identity and grants you access to the system. .
      </p>
    ),
    image: vcImage,
  },
  {
    title: "Authentcate as Registered User",
    description: (
      <p>
        When the user clicks the as registered users button, they will be
        redirected to the a new page. Here, you need to sign in using your
        registered email and password to proceed.
      </p>
    ),
    image: registeredusersImage,
  },
  {
    title: "Upload .CSV Files containing credentials to be issued",
    description: (
      <p>
        On this page, users can upload a CSV file containing the credentials to be issued by
        clicking the "Choose File" button and then selecting "Upload" to process
        the data. Below the upload section, a table displays batch records,
        including Batch ID, Completed, Pending, and Status of the credentials. This allows users to
        track the progress of batches, with statuses such as
        Processing, Pending, and Completed indicating their current state.
      </p>
    ),
    image: uploadfileImage,
  },
];

const Issuer: React.FC = () => {
  const issuerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = issuerRef.current?.querySelectorAll(
      ".issuer-content, .issuer-banner-text, .issuer-info-section, .issuer-info-section2"
    );

    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="issuer" ref={issuerRef}>
      <div className="issuer-banner">
        <h1 className="roboto-slab">ISSUER</h1>
      </div>
      <section className="issuer-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`issuer-content ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="issuer-inner">
              <img
                src={section.image}
                alt={section.title}
                className="issuer-image"
              />
              <div className="issuer-text">
                <h1>{section.title}</h1>
                {section.description}{" "}
                {/* {section.whyChoose && (
                  <>
                    <h4>Why Choose IonLedger?</h4>
                    <ul>
                      {section.whyChoose.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Issuer;
