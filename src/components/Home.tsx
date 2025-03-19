import { useInView } from "react-intersection-observer";
// import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaChartLine,
  FaBoxes,
  FaClock,
  FaLightbulb,
  FaDollarSign,
} from "react-icons/fa";
import "./Home.css";

import solutionImage from "../assets/battery-passport.jpg";
import cellChemistryProvidersImg from "../assets/cell_chemistry.jpg";
import batteryManufacturersImg from "../assets/battery_manufacturers.avif";
import automobileOemsImg from "../assets/oem.webp";
import batteryRepurposersImg from "../assets/battery_repurposers.jpg";
import batteryRecyclersImg from "../assets/battery_recyclers.jpg";

const Home: React.FC = () => {
  const navigate = useNavigate();
  // const [slideIndex, setSlideIndex] = useState(0);
  // const stakeholdersRef = useRef<HTMLDivElement>(null);

  const [stakeholdersViewRef, stakeholdersInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [featuresViewRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleLearnMoreClick = () => {
    navigate("/ecosystem");
  };

  const stakeholders = [
    {
      title: "Cell Chemistry Providers",
      content:
        "Region-Specific Analytics, Accelerated R&D, Market Forecasting.",
      image: cellChemistryProvidersImg,
      link: "/cell-chemistry-providers",
    },
    {
      title: "Battery Manufacturers",
      content: "End-to-End Visibility, Continuous Improvement, Customer Trust.",
      image: batteryManufacturersImg,
      link: "/battery-manufacturers",
    },
    {
      title: "Automobile OEMs",
      content:
        "Predictive Maintenance, Enhanced Customer Experience, Compliance.",
      image: automobileOemsImg,
      link: "/automobile-oems",
    },
    {
      title: "Battery Repurposers",
      content: "Efficient Grading, Reduced Waste, Circular Economy.",
      image: batteryRepurposersImg,
      link: "/battery-repurposers",
    },
    {
      title: "Battery Recyclers",
      content:
        "Streamlined Recovery, Simplified Compliance, Sustainability Metrics.",
      image: batteryRecyclersImg,
      link: "/battery-recyclers",
    },
  ];

  const features = [
    {
      title: "Improved Collaboration",
      content:
        "Digital platforms facilitate seamless collaboration among various stakeholders, including suppliers, manufacturers, distributors, and retailers, by enabling secure data sharing, communication, and coordination of activities across the supply chain network.",
      icon: <FaUsers />,
    },
    {
      title: "Live Monitoring",
      content:
        "Digital platforms provide real-time visibility into all aspects of the supply chain, from sourcing to delivery, enabling stakeholders to track inventory levels, monitor shipments, and identify potential bottlenecks or disruptions.",
      icon: <FaChartLine />,
    },
    {
      title: "Optimized Inventory Management",
      content:
        "By leveraging advanced analytics and forecasting algorithms, digital platforms help optimize inventory levels, reducing excess stock while ensuring product availability and minimizing the risk of stockouts or overstocking.",
      icon: <FaBoxes />,
    },
    {
      title: "Increased Efficiency and Productivity",
      content:
        "Automation of routine tasks, such as order processing, invoicing, and inventory tracking, streamlines supply chain operations, freeing up resources and reducing manual errors, thus enhancing overall efficiency and productivity.",
      icon: <FaClock />,
    },
    {
      title: "Faster Decision-Making",
      content:
        "Access to real-time data and analytics empowers supply chain managers to make data-driven decisions quickly, responding promptly to changes in demand, supply, or market conditions, thereby improving agility and competitiveness.",
      icon: <FaLightbulb />,
    },
    {
      title: "Cost Reduction",
      content:
        "Digital platforms enable cost savings by optimizing various aspects of the supply chain, such as transportation, warehousing, and procurement, through better resource utilization, route optimization, and demand forecasting.",
      icon: <FaDollarSign />,
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      {/* <section className="home"> */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="roboto-slab">
            Powering <span className="green-text">Trust</span>
            <br />
            Empowering <span className="green-text">Sustainability</span>
            <br />
            Transforming the <span className="green-text">Future</span>
          </h1>
          <p>Explore our ecosystem</p>
          <button className="learn-more" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
      </section>

      <section className="solution-content">
        <div className="solutions-container">
          <div className="solution-image">
            <img
              src={solutionImage}
              width="700"
              height="auto"
              alt="Battery Passport"
            />
          </div>
        </div>
        <div className="solution-text">
          <h2>Battery Passport</h2>
          <p>
            The Battery Passport is a digital identity that ensures full
            traceability of a battery from raw material sourcing to end-of-life
            recycling. It securely records both static and dynamic data
            throughout the battery’s lifecycle, enhancing transparency,
            compliance, and sustainability in the supply chain. In the upstream
            phase, key entities such as miners, cell manufacturers,
            distributors, retailers, and Tier-1 pack manufacturers collect
            crucial data, including material sourcing, manufacturing processes,
            quality control details, and shipment records.
            <br /> <br />
            This data is converted into verifiable credentials (VCs) using
            Hyperledger Indy, ensuring immutability and tamper-proof
            authentication. The credentials are then issued by Tier-1
            manufacturers and securely stored by the OEMs (Original Equipment
            Manufacturers) for verification and supply chain tracking. In the
            downstream phase, real-time dynamic data such as battery discharge
            rate, charge cycles, usage patterns, and temperature metrics is
            collected by OEMs, dealers, recyclers, and regulatory bodies. This
            data is managed on Hyperledger Fabric, ensuring secure and
            permissioned access. <br />
            <br />
            Additionally, IPFS (InterPlanetary File System) is used for
            decentralized storage, enabling scalability and efficient data
            retrieval. By integrating blockchain technology, the Battery
            Passport enhances security, prevents counterfeiting, and promotes a
            circular economy, ensuring that batteries are sustainably tracked
            and efficiently recycled at the end of their lifecycle. This digital
            identity ensures <strong>full traceability</strong> from raw
            material sourcing to end-of-life recycling. Using{" "}
            <strong>Hyperledger Indy</strong>, we create{" "}
            <strong>verifiable credentials</strong> that securely store
            information about the battery's components, manufacturing processes,
            quality control data, and shipment details.
          </p>
        </div>
      </section>

      {/* <section className="features-section"> */}
      <section
        ref={featuresViewRef}
        className={`features-section ${featuresInView ? "animate" : ""}`}
      >
        <div className="features-content">
          <h2>Driving Innovation and Sustainability</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAKEHOLDERS SECTION */}
      <section className="stakeholders-container">
        <h2>EMPOWERING STAKEHOLDERS</h2>
        <div
          ref={stakeholdersViewRef}
          className={`stakeholders ${
            stakeholdersInView ? "animate-stakeholders" : ""
          }`}
          // style={{ transform: `translateX(-${slideIndex * 33.33}%)` }}
        >
          {stakeholders.map((stakeholder, index) => (
            <div
              className="stakeholder card"
              key={index}
              onClick={() => navigate(stakeholder.link)}
            >
              <img src={stakeholder.image} alt={stakeholder.title} />
              <h3>{stakeholder.title}</h3>
              <p>{stakeholder.content}</p>
            </div>
          ))}
        </div>
      </section>
      {/* </section> */}
    </>
  );
};

export default Home;
