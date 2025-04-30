import React, { useEffect, useRef } from "react";
import "../assets/CSS/Ecosystem.css";
import indyImage from "../assets/images/Hyperledger_Indy.png";
import fabricImage from "../assets/images/Hyperledger_Fabric.png";
import ipfsImage from "../assets/images/ipfs.jpg";
import complianceImage from "../assets/images/compliance.jpeg";
// import ecosystemBanner from "../assets/images/ecosystem_banner.jpg";
import ecosystemInfoImage from "../assets/images/Untitled(2).png";
import ecosystemInfoImage2 from "../assets/images/Untitled (1).png";

const sections = [
  {
    title: "Decentralized Identity Verification",
    description: (
      <p>
        Traditional identity management systems rely on centralized authorities,
        making them vulnerable to data breaches and unauthorized access.
        <strong> Hyperledger Indy </strong> provides a decentralized framework
        for self-sovereign identity (SSI), allowing individuals and
        organizations to create, store, and manage verifiable credentials
        securely. This ensures that identity-related data remains tamper-proof
        and independently verifiable across the supply chain.
      </p>
    ),
    whyChoose: [
      "Enables secure and decentralized identity verification without third-party intermediaries.",
      "Prevents identity fraud and unauthorized access through verifiable credentials.",
      "Empowers individuals and organizations to control their own digital identities.",
      "Seamlessly integrates with existing authentication and verification systems.",
    ],
    image: indyImage,
  },
  {
    title: "Secure & Permissioned Data Transactions",
    description: (
      <p>
        In supply chains, organizations need a controlled and secure way to
        share sensitive data.
        <strong> Hyperledger Fabric </strong> enables confidential and
        tamper-proof transactions, ensuring that only authorized stakeholders
        can access specific data. It provides an immutable record of
        transactions while maintaining privacy through permissioned channels.
      </p>
    ),
    whyChoose: [
      "Permissioned blockchain with role-based access control for stakeholders.",
      "Ensures data confidentiality, eliminating risks of unauthorized exposure.",
      "Immutable ledger for fraud prevention and transparent auditing.",
      "Facilitates real-time and verifiable data sharing between trusted participants.",
    ],
    image: fabricImage,
  },
  {
    title: "Scalable Decentralized Storage",
    description: (
      <p>
        Centralized cloud storage systems are prone to failures, security risks,
        and high costs.
        <strong> IPFS (InterPlanetary File System) </strong> revolutionizes data
        storage by distributing files across multiple nodes in a decentralized
        network. This ensures data redundancy, prevents censorship, and enhances
        scalability for large datasets.
      </p>
    ),
    whyChoose: [
      "Decentralized architecture eliminates single points of failure.",
      "Content-based addressing allows fast and efficient data retrieval.",
      "Persistent storage with pinning and replication features.",
      "Reduces dependence on expensive centralized cloud providers.",
    ],
    image: ipfsImage,
  },
  {
    title: "Regulatory Compliance & Real-time Monitoring",
    description: (
      <p>
        Compliance with global and industry regulations is critical but often
        complex.
        <strong> Blockchain technology </strong> simplifies compliance
        management by providing real-time monitoring, tamper-proof audit logs,
        and automated rule enforcement through smart contracts. This ensures
        businesses meet industry and legal standards without manual
        intervention.
      </p>
    ),
    whyChoose: [
      "Immutable audit trails ensure compliance with regulatory frameworks.",
      "Smart contracts enable automated enforcement of compliance rules.",
      "Real-time tracking reduces fraud and enhances accountability.",
      "Facilitates adherence to environmental, safety, and sustainability standards.",
    ],
    image: complianceImage,
  },
];

const Ecosystem: React.FC = () => {
  const ecosystemRef = useRef<HTMLDivElement>(null);

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

    const elements = ecosystemRef.current?.querySelectorAll(
      ".ecosystem-content, .ecosystem-banner-text, .ecosystem-info-section, .ecosystem-info-section2"
    );

    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="ecosystem" ref={ecosystemRef}>
      {/* Banner Section */}
      <div className="ecosystem-banner">
        <h1 className="roboto-slab">
          The Future of <br />
          <span>Battery Supply Chain</span>
          <br /> Transparency & Security
        </h1>
      </div>

      {/* New Image and Text Section */}
      <div className="ecosystem-info-section">
        <img
          src={ecosystemInfoImage}
          alt="Ecosystem Overview"
          className="ecosystem-info-image"
        />
        <div className="ecosystem-info-text">
          <p>
            <strong className="side">ION LEDGER</strong> <br />
            <li>Maintains Hyperledger Indy & Fabric networks, ensuring security,
            uptime, and compliance. </li><li>Manages IPFS nodes for decentralized
            storage of battery data. Develops APIs for seamless data integration
            between Indy, Fabric, IPFS, and external systems. </li><br />
            <strong className="side">Tier-1 Battery Packer</strong> <br />
            <li>Participates in Indy and Fabric networks, Issues Verifiable
            Credentials (VC's) using Hyperledger Aries, containing battery
            manufacturing & sourcing data.</li>
            <li>Maintains a database to track issued VCs and ensure supply chain
            traceability.</li>
            <br />
            <strong className="side">OEM (Original Equipment Manufacturer)</strong> <br />
            <li>Participates in Hyperledger Fabric, storing and managing battery
            lifecycle data.</li>
            <li>Verifies and manages VCs from Tier-1 packers using Aries
            agents.</li>
            <li>Pushes telemetry data (charge cycles, safety alerts)
            into Fabric and optionally stores logs in IPFS.</li>
            <br />
            <strong className="side">
              Downstream Players (Recycler, Government, etc.,)
            </strong>{" "}
            <br /><li>Participate in Indy and Fabric networks, Verify VCs from
            OEMs using Aries agents.</li>
            <li>Access battery lifecycle data on Fabric for compliance,
            recycling, and second-life programs.</li>
          </p>
        </div>
      </div>
      <div className="ecosystem-info-section2">
        <img
          src={ecosystemInfoImage2}
          alt="Ecosystem Overview"
          className="ecosystem-info-image2"
        />
      </div>

      {/* Ecosystem Content Sections */}
      <section className="ecosystem-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`ecosystem-content ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="ecosystem-inner">
              <img
                src={section.image}
                alt={section.title}
                className="ecosystem-image"
              />
              <div className="ecosystem-text">
                <h1>{section.title}</h1>
                {section.description}{" "}
                {section.whyChoose && (
                  <>
                    <h4>Why Choose IonLedger?</h4>
                    <ul>
                      {section.whyChoose.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Ecosystem;
