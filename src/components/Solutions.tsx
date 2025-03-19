// import React from "react";
// import "./Solutions.css";
// import solutionImage from "src/assets/battery-passport.jpg";

// const Solutions: React.FC = () => {
//   return (
//     <section className="solutions">
//       <div className="solutions-banner">
//         <h1 className="roboto-slab">
//           Unlock the Power
//           <br />
//           of Transparency with our
//           <br />
//           <span>Battery Passport Solution</span>
//         </h1>
//       </div>
//       <div className="solutions-container">
//         {/* <h1 className="main-heading">Our Solutions</h1> */}
//         <section className="solution-section">
//           <div className="solution-image">
//             <img
//               src={solutionImage}
//               width="600"
//               height="auto"
//               alt="Origin Story"
//             />
//           </div>
//           <h2 className="section-heading">Battery Passport</h2>
//           <div className="solution-item">
//             <p className="solution-text">
//               The Ion Ledger platform enables the creation, storage, and secure
//               sharing of Battery Passports. A Battery Passport is a digital
//               record containing both static and dynamic data about a battery
//               throughout its lifecycle.
//             </p>
//             <p className="solution-text">
//               {" "}
//               This digital identity ensures **full traceability** from raw
//               material sourcing to end-of-life recycling. Using **Hyperledger
//               Indy**, we create **verifiable credentials** that securely store
//               information about the battery's components, manufacturing
//               processes, quality control data, and shipment details. [cite: 3,
//               4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//             </p>
//           </div>
//         </section>

//         <section className="solution-section">
//           <h2 className="section-heading">Key Problems Addressed</h2>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Lack of Transparency</h3>
//             <p className="solution-text">
//               Ion Ledger provides end-to-end transparency in the battery supply
//               chain, allowing stakeholders to trace the origin of materials,
//               manufacturing processes, and the complete history of a battery.
//               [cite: 2, 3, 30] This transparency is achieved by providing access
//               to both static and dynamic data to downstream players. [cite: 29,
//               30]
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Data Silos and Inefficiency</h3>
//             <p className="solution-text">
//               Our platform breaks down data silos by enabling secure data
//               sharing among all stakeholders, fostering collaboration, and
//               improving operational efficiency across the entire supply chain.
//               [cite: 23, 24, 25, 36, 37, 38, 39]
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">
//               Counterfeit and Substandard Products
//             </h3>
//             <p className="solution-text">
//               By leveraging verifiable credentials (VCs), Ion Ledger ensures the
//               authenticity and integrity of battery data, helping to combat
//               counterfeit and substandard products. [cite: 8, 9, 10, 34, 35]
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">
//               Challenges in Recycling and Reuse
//             </h3>
//             <p className="solution-text">
//               Ion Ledger provides critical data to recyclers and reuse product
//               developers, enabling them to optimize their processes, increase
//               efficiency, and promote a circular economy. [cite: 21, 22]
//               Downstream entities can analyze dynamic data to facilitate
//               recycling and reuse processes. [cite: 31, 32]
//             </p>
//           </div>
//         </section>

//         <section className="solution-section">
//           <h2 className="section-heading">Specific Solutions and Features</h2>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Upstream Data Management</h3>
//             <p className="solution-text">
//               Ion Ledger facilitates the collection and storage of static data,
//               such as sourcing information, manufacturing processes, quality
//               control data, and shipment details, using verifiable credentials.
//               [cite: 4, 5, 6, 7, 8] Built on Hyperledger Indy and Aries, our
//               platform ensures secure credential issuance and management. [cite:
//               46, 47, 48, 49]
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Downstream Data Management</h3>
//             <p className="solution-text">
//               Our platform enables the collection and storage of dynamic data,
//               including battery performance, usage patterns, temperature, and
//               other operational metrics, using Hyperledger Fabric and IPFS.
//               [cite: 16, 17, 18, 19, 20, 21, 22, 23, 26, 60, 61, 62, 63, 64, 65,
//               66] This allows for tracking battery health, predicting
//               maintenance needs, and optimizing lifecycle management. [cite: 31,
//               32, 33]
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Data Security and Integrity</h3>
//             <p className="solution-text">
//               Ion Ledger uses blockchain technology to ensure that data is
//               authentic, tamper-proof, immutable, and verifiable. [cite: 23, 24,
//               25, 34, 35, 47, 50, 61] We also employ data encryption and robust
//               access control mechanisms to protect sensitive information. [cite:
//               70, 71]
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">
//               Scalability and Interoperability
//             </h3>
//             <p className="solution-text">
//               Our platform is designed to be scalable, capable of handling large
//               volumes of data and growing with your needs. [cite: 26, 27, 28,
//               35, 36, 64, 65, 66, 69, 72, 73] APIs will be developed to
//               facilitate seamless interoperability between different blockchain
//               networks and traditional IT systems used by supply chain members.
//               [cite: 67, 68, 69]
//             </p>
//           </div>
//         </section>

//         <section style={{ textAlign: "center", marginTop: "50px" }}>
//           <a href="/contact" className="cta-button">
//             Contact Us for a Demo
//           </a>
//         </section>
//       </div>
//     </section>
//   );
// };

// export default Solutions;

// import React from "react";
// import "./Solutions.css";
// import solutionImage from "src/assets/battery-passport.jpg";

// const Solutions: React.FC = () => {
//   return (
//     <section className="solutions">
//       <div className="solutions-banner">
//         <h1 className="roboto-slab">
//           Unlock the Power
//           <br />
//           of Transparency with our
//           <br />
//           <span>Battery Passport Solution</span>
//         </h1>
//       </div>
//       <div className="solutions-container">
//         <section className="solution-section image-text-section">
//           <div className="solution-image">
//             <img
//               src={solutionImage}
//               width="600"
//               height="auto"
//               alt="Battery Passport"
//             />
//           </div>
//           <div className="solution-text-content">
//             <p className="solution-text">
//               The Ion Ledger platform enables the creation, storage, and secure
//               sharing of Battery Passports. A Battery Passport is a digital
//               record containing both static and dynamic data about a battery
//               throughout its lifecycle.
//             </p>
//             <p className="solution-text">
//               This digital identity ensures **full traceability** from raw
//               material sourcing to end-of-life recycling. Using **Hyperledger
//               Indy**, we create **verifiable credentials** that securely store
//               information about the battery's components, manufacturing
//               processes, quality control data, and shipment details.
//             </p>
//           </div>
//         </section>

//         <section className="solution-section centered-text-section">
//           <h2 className="section-heading">Key Problems Addressed</h2>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Lack of Transparency</h3>
//             <p className="solution-text">
//               Ion Ledger provides end-to-end transparency in the battery supply
//               chain, allowing stakeholders to trace the origin of materials,
//               manufacturing processes, and the complete history of a battery.
//               This transparency is achieved by providing access to both static
//               and dynamic data to downstream players.
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Data Silos and Inefficiency</h3>
//             <p className="solution-text">
//               Our platform breaks down data silos by enabling secure data
//               sharing among all stakeholders, fostering collaboration, and
//               improving operational efficiency across the entire supply chain.
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">
//               Counterfeit and Substandard Products
//             </h3>
//             <p className="solution-text">
//               By leveraging verifiable credentials (VCs), Ion Ledger ensures the
//               authenticity and integrity of battery data, helping to combat
//               counterfeit and substandard products.
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">
//               Challenges in Recycling and Reuse
//             </h3>
//             <p className="solution-text">
//               Ion Ledger provides critical data to recyclers and reuse product
//               developers, enabling them to optimize their processes, increase
//               efficiency, and promote a circular economy. Downstream entities
//               can analyze dynamic data to facilitate recycling and reuse
//               processes.
//             </p>
//           </div>
//         </section>

//         <section className="solution-section centered-text-section">
//           <h2 className="section-heading">Specific Solutions and Features</h2>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Upstream Data Management</h3>
//             <p className="solution-text">
//               Ion Ledger facilitates the collection and storage of static data,
//               such as sourcing information, manufacturing processes, quality
//               control data, and shipment details, using verifiable credentials.
//               Built on Hyperledger Indy and Aries, our platform ensures secure
//               credential issuance and management.
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Downstream Data Management</h3>
//             <p className="solution-text">
//               Our platform enables the collection and storage of dynamic data,
//               including battery performance, usage patterns, temperature, and
//               other operational metrics, using Hyperledger Fabric and IPFS. This
//               allows for tracking battery health, predicting maintenance needs,
//               and optimizing lifecycle management.
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">Data Security and Integrity</h3>
//             <p className="solution-text">
//               Ion Ledger uses blockchain technology to ensure that data is
//               authentic, tamper-proof, immutable, and verifiable. We also employ
//               data encryption and robust access control mechanisms to protect
//               sensitive information.
//             </p>
//           </div>

//           <div className="solution-item">
//             <h3 className="solution-subheading">
//               Scalability and Interoperability
//             </h3>
//             <p className="solution-text">
//               Our platform is designed to be scalable, capable of handling large
//               volumes of data and growing with your needs. APIs will be
//               developed to facilitate seamless interoperability between
//               different blockchain networks and traditional IT systems used by
//               supply chain members.
//             </p>
//           </div>
//         </section>

//         <section style={{ textAlign: "center", marginTop: "50px" }}>
//           <a href="/contact" className="cta-button">
//             Contact Us for a Demo
//           </a>
//         </section>
//       </div>
//     </section>
//   );
// };

// export default Solutions;

import React from "react";
import "./Solutions.css";
import solutionImage from "../assets/battery-passport.jpg";

const Solutions: React.FC = () => {
  return (
    <section className="solutions">
      <div className="solutions-banner">
        <h1 className="roboto-slab">
          Unlock the Power
          <br />
          of Transparency with our
          <br />
          <span>Battery Passport Solution</span>
        </h1>
      </div>

      {/* Image on the left, text on the right */}
      <div className="solutions-container">
        <section className="solution-content">
          <div className="solution-image">
            <img
              src={solutionImage}
              width="700"
              height="auto"
              alt="Battery Passport"
            />
          </div>
          <div className="solution-text">
            <h2>Battery Passport</h2>
            <p>
              The Battery Passport is a digital identity that ensures full
              traceability of a battery from raw material sourcing to
              end-of-life recycling. It securely records both static and dynamic
              data throughout the battery’s lifecycle, enhancing transparency,
              compliance, and sustainability in the supply chain. In the
              upstream phase, key entities such as miners, cell manufacturers,
              distributors, retailers, and Tier-1 pack manufacturers collect
              crucial data, including material sourcing, manufacturing
              processes, quality control details, and shipment records.
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
              Passport enhances security, prevents counterfeiting, and promotes
              a circular economy, ensuring that batteries are sustainably
              tracked and efficiently recycled at the end of their lifecycle.

              This digital identity ensures <strong>full traceability</strong>{" "}
            from raw material sourcing to end-of-life recycling. Using{" "}
            <strong>Hyperledger Indy</strong>, we create{" "}
            <strong>verifiable credentials</strong> that securely store
            information about the battery's components, manufacturing processes,
            quality control data, and shipment details.
            </p>
          </div>
        </section>
      </div>

      <section className="center">
        {/* Centered text from here */}
        <div className="centered-text">
          {/* <p>
            This digital identity ensures <strong>full traceability</strong>{" "}
            from raw material sourcing to end-of-life recycling. Using{" "}
            <strong>Hyperledger Indy</strong>, we create{" "}
            <strong>verifiable credentials</strong> that securely store
            information about the battery's components, manufacturing processes,
            quality control data, and shipment details.
          </p> */}
          <h2>Key Problems Addressed</h2>

          {/* <h3>Lack of Transparency</h3> */}
          <p>
            Ion Ledger provides end-to-end transparency in the battery supply
            chain, allowing stakeholders to trace the origin of materials,
            manufacturing processes, and the complete history of a battery. This
            transparency is achieved by providing access to both static and
            dynamic data to downstream players.
          </p>

          {/* <h3>Data Silos and Inefficiency</h3> */}
          <p>
            Our platform breaks down data silos by enabling secure data sharing
            among all stakeholders, fostering collaboration, and improving
            operational efficiency across the entire supply chain.
          </p>

          {/* <h3>Counterfeit and Substandard Products</h3> */}
          <p>
            By leveraging verifiable credentials (VCs), Ion Ledger ensures the
            authenticity and integrity of battery data, helping to combat
            counterfeit and substandard products.
          </p>

          {/* <h3>Challenges in Recycling and Reuse</h3> */}
          <p>
            Ion Ledger provides critical data to recyclers and reuse product
            developers, enabling them to optimize their processes, increase
            efficiency, and promote a circular economy. Downstream entities can
            analyze dynamic data to facilitate recycling and reuse processes.
          </p>

          <h2>Specific Solutions and Features</h2>

          {/* <h3>Upstream Data Management</h3> */}
          <p>
            Ion Ledger facilitates the collection and storage of static data,
            such as sourcing information, manufacturing processes, quality
            control data, and shipment details, using verifiable credentials.
            Built on Hyperledger Indy and Aries, our platform ensures secure
            credential issuance and management.
          </p>

          {/* <h3>Downstream Data Management</h3> */}
          <p>
            Our platform enables the collection and storage of dynamic data,
            including battery performance, usage patterns, temperature, and
            other operational metrics, using Hyperledger Fabric and IPFS. This
            allows for tracking battery health, predicting maintenance needs,
            and optimizing lifecycle management.
          </p>

          {/* <h3>Data Security and Integrity</h3> */}
          <p>
            Ion Ledger uses blockchain technology to ensure that data is
            authentic, tamper-proof, immutable, and verifiable. We also employ
            data encryption and robust access control mechanisms to protect
            sensitive information.
          </p>

          {/* <h3>Scalability and Interoperability</h3>  */}
          <p>
            Our platform is designed to be scalable, capable of handling large
            volumes of data and growing with your needs. APIs will be developed
            to facilitate seamless interoperability between different blockchain
            networks and traditional IT systems used by supply chain members.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Solutions;
