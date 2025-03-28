import React from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import "./Resources.css";

import batteryRepurposersImg from "../assets/images/battery_repurposers.jpg";
import issuerImg from "../assets/images/issuer-removebg-preview (1).png";
import holderImg from "../assets/images/holder.webp";

const Resources: React.FC = () => {
  const navigate = useNavigate();

  const [resourcesViewRef] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const resources = [
    {
      title: "ISSUER",
      content: "Issuing credentials in batches for various batteries, enhancing efficiency and streamlining authentication and authorization processes.",
      image: issuerImg,
      link: "/issuer",
    },
    {
      title: "HOLDER",
      content:
        "Credential holders can access the complete details of the battery, including its composition, performance, compliance, supply chain, and lifecycle information, ensuring transparency and informed decision-making.",
      image: holderImg,
      link: "/holder",
    },
    {
      title: "REPURPOSERS",
      content:
        "Battery Repurposers can access detailed battery information to assess its condition, track its lifecycle, and determine its suitability for repurposing. This helps optimize battery reuse, reduce waste, and ensure efficient resource utilization.",
      image: batteryRepurposersImg,
      link: "/repurposers",
    },
    // {
    //   title: "Battery Repurposers",
    //   content: "Efficient Grading, Reduced Waste, Circular Economy.",
    //   image: batteryRepurposersImg,
    //   link: "/battery-repurposers",
    // },
    // {
    //   title: "Battery Recyclers",
    //   content:
    //     "Streamlined Recovery, Simplified Compliance, Sustainability Metrics.",
    //   image: batteryRecyclersImg,
    //   link: "/battery-recyclers",
    // },
  ];

  return (
    <div className="resources">
      <div className="resources-banner">
        <h1 className="roboto-slab">RESOURCES</h1>
      </div>

      {/* Bottom resources Container */}
      <div className="container">
        {/* <div className="container-head">
          <h2>EMPOWERING resources</h2>
        </div> */}
        <div ref={resourcesViewRef} className="cards">
          <div className="grid">
            {resources.map((resources, index) => (
              <div className="grid-item">
                <div
                  className="resources-card card"
                  key={index}
                  onClick={() => navigate(resources.link)}
                >
                  <img src={resources.image} alt={resources.title} />
                  <h3>{resources.title}</h3>
                  <p>{resources.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
