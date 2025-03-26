import React, { useRef, useEffect } from "react";
import "./About.css";
import originImage from "../assets/Business_team_meeting-removebg-preview.png";

const About: React.FC = () => {
  const teamTextRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           teamTextRef.current?.classList.add("animate-in");
  //           observer.unobserve(entry.target); // Unobserve after animation triggers
  //         }
  //       });
  //     },
  //     {
  //       root: null, // Uses viewport
  //       threshold: 0.2, // 20% visibility triggers animation
  //       rootMargin: "0px 0px -50px 0px", // Adjust if needed
  //     }
  //   );

  //   if (teamTextRef.current) {
  //     observer.observe(teamTextRef.current);
  //   }

  //   return () => observer.disconnect(); // Cleanup observer on unmount
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(
      ".origin-text, .details, .our-team-text, .cta"
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="about">
      <div className="about-content">
        <div className="about-banner">
          <h1 className="roboto-slab">
            Revolutionizing <span>Battery</span>
            <br />
            Lifecycle Management
            <br /> in India
          </h1>
          {/* <p className="subheadline">
            IONLedger: Building a Transparent, Sustainable, and Accountable
            Energy Ecosystem
          </p> */}
        </div>
        <section className="origin">
          <div className="origin-container">

            <div className="origin-text">
              <h2>From Vision to Reality: Our Journey to Sustainable Energy</h2>
              <p>
                India's rapid adoption of electric mobility and renewable energy
                highlighted a critical gap: the lack of a reliable system to
                track and manage battery lifecycles. Issues like inefficient
                usage, lack of traceability, and improper disposal posed
                significant environmental and resource challenges.
              </p>
              <p>
                We asked: 'What if every battery had a digital identity, a
                'Battery Passport,' to tell its complete story?' This question
                ignited our passion to create a solution that would transform
                the industry.
              </p>
              <p>
                By combining blockchain technology with our expertise in energy
                and sustainability, we developed IONLedger's Battery Passport
                Solution. This platform provides end-to-end tracking and a
                secure and transparent record of each battery's journey.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="details">
            <p>
              At IONLedger, we're dedicated to revolutionizing battery lifecycle
              management. Our platform is a testament to this commitment,
              offering Advanced Analytics that deliver region-based insights,
              data visualization, and comprehensive reporting. We ensure
              Lifecycle Tracking through end-to-end traceability and secure
              blockchain records, fostering transparency and accountability.
              Predictive Maintenance is enabled through real-time monitoring and
              proactive alerts, maximizing battery lifespan and efficiency.
              Furthermore, we facilitate Regulatory Alignment through automated
              reporting, helping our partners navigate global sustainability
              standards seamlessly.
            </p>
          </div>
        </section>

        <section className="our-team">
          <div ref={teamTextRef} className="our-team-text">
            <h2>OUR TEAM</h2>
            <p>
              The IONLedger team is driven by a shared vision of a sustainable
              energy ecosystem in India. Our team blends diverse expertise, from
              blockchain technology to sustainability, to create innovative
              solutions for India's energy future.
            </p>
          </div>
        </section>

        <section className="cta">
          <p>
            Learn more about how IONLedger can transform your battery lifecycle
            management. Contact us for a demo or partnership opportunities.
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;