import React from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import "./Stakeholders.css";

import cellChemistryProvidersImg from "../assets/cell_chemistry.jpg";
import batteryManufacturersImg from "../assets/battery_manufacturers.avif";
import automobileOemsImg from "../assets/oem.webp";
import batteryRepurposersImg from "../assets/battery_repurposers.jpg";
import batteryRecyclersImg from "../assets/battery_recyclers.jpg";

const Stakeholders: React.FC = () => {
  const navigate = useNavigate();

  const [stakeholdersViewRef, stakeholdersInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
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

  return (
    <div className="stakeholders2">
      <div className="stakeholders-banner">
        <h1 className="roboto-slab">STAKEHOLDERS</h1>
      </div>

      {/* Bottom Stakeholders Container */}
      <div className="container">
        {/* <div className="container-head">
          <h2>EMPOWERING STAKEHOLDERS</h2>
        </div> */}
        <div ref={stakeholdersViewRef} className="cards">
          <div className="grid">
            {stakeholders.map((stakeholder, index) => (
              <div className="grid-item">
                <div
                  className="stakeholder-card card"
                  key={index}
                  onClick={() => navigate(stakeholder.link)}
                >
                  <img src={stakeholder.image} alt={stakeholder.title} />
                  <h3>{stakeholder.title}</h3>
                  <p>{stakeholder.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stakeholders;
