import React from "react";
import "./Holder.css";
import { useEffect, useRef } from "react";

import homePageImage from "../assets/home.png";
import viewMoreImage from "../assets/view_more.png";
import generalImage from "../assets/general_content.png";
import materialCompositionImage from "../assets/materialComposition_content.png";
import complianceImage from "../assets/compliance_content.png";
import supplychainImage from "../assets/supplychain_content.png";
import circularityImage from "../assets/circularty_content.png";
import carbonFootprintImage from "../assets/carbonfootprint_content.png";
import authenticateImage from "../assets/signin_content.png";
import starterImage from "../assets/starter.png";
import roleImage from "../assets/holder_home.png";
import vcImage from "../assets/verifiable_credential_page.png";
import registeredusersImage from "../assets/registered_users_page.png";
import materialImage from "../assets/materials_composition_display.png";
import performanceImage from "../assets/performance_content.png";

const sections = [
  {
    title: "Your Role",
    description: (
      <p>
        When you open the Battery Passport website, you will be prompted to
        select your role. As a Holder, click on the "Holder" button.
        This will take you to a page where you need to enter the Passport ID to
        proceed.
      </p>
    ),
    image: roleImage,
  },
  {
    title: "Fetch Passport Details",
    description: (
      <p>
        The Passport ID input field allows users to enter a battery passport ID
        and retrieve its details. If users don’t have an ID, they can click "Use
        sample battery passport ID", which automatically fills the input field.
        Once the Fetch Data button is clicked, users will be directed to the
        battery passport details page.
      </p>
    ),
    image: starterImage,
  },
  {
    title: "View the battery details",
    description: (
      <p>
        The Battery Passport Dashboard provides detailed information about a
        battery after the user enters its DID (Decentralized Identifier). It
        displays the Passport ID, Model Number, Serial Number, Category, Weight,
        Manufacturing Date, and Manufacturer Details, along with a verification
        badge indicating authenticity. A QR code is present for quick access to
        further details, and a "View More About This Passport" button allows
        users to explore additional information.
      </p>
    ),
    image: homePageImage,
  },
  {
    title: "View More Aout The Passport",
    description: (
      <p>
        After the user clicks the "View More About This Passport" button, they
        are taken to a detailed battery passport page that provides
        comprehensive information about the battery. At the top, the battery
        passport section displays key identifiers, including the Passport ID,
        Model Number, and Serial Number, along with a "Verified" badge
        indicating its authenticity. To the right, an illustrative image of a
        battery is shown, with a disclaimer stating that it is for reference
        purposes only. Additionally, an economic operator logo is displayed,
        representing the entity responsible for the battery. Below, the user can
        navigate different aspects of the battery's details through a set of tab
        buttons, each offering specific insights
      </p>
    ),
    image: viewMoreImage,
  },
  {
    title: "General Tab",
    description: (
      <p>
        The General tab contains essential details about the battery, giving you
        a quick overview of its key attributes. At the top, you’ll see a set of
        tabs that allow you to navigate through different sections, with the
        General tab currently highlighted in green, indicating it’s active.
        Other tabs, such as Material Composition, Performance, Compliance,
        Supply Chain, Circularity, and Carbon Footprint, are available for
        deeper insights.
      </p>
    ),
    image: generalImage,
  },
  {
    title: "Material Composition Tab",
    description: (
      <p>
        The Material Composition tab provides details about the materials used
        in the battery, including its chemical components and structural
        elements. However, access to this section is restricted, requiring
        authentication to view the information. A lock icon and message indicate
        that privileged access is needed, and users must click the
        "Authenticate" button to proceed. This ensures that sensitive material
        composition data is protected and only available to authorized users.
      </p>
    ),
    image: materialCompositionImage,
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
    title: "Successful Authentication",
    description: (
      <p>
        After successful authentication, you can see the Materials Composition
        section displayed. This section provides a detailed breakdown of the
        battery's composition.
      </p>
    ),
    image: materialImage,
  },
  {
    title: "Performance Tab",
    description: (
      <p>
        The Performance tab, which provides key insights into the battery's
        efficiency, health, and charging capabilities. It includes details on
        energy and power density, state of charge and health, cycle life, and
        thermal management.
      </p>
    ),
    image: performanceImage,
  },
  {
    title: "Compliance Tab",
    description: (
      <p>
        The Compliance tab provides information about the regulatory compliance
        of the battery. It includes details related to conformity assessment and
        the Declaration of conformity ID, ensuring the battery meets industry
        standards and legal requirements. The section contains external links
        that likely lead to official certification documents or regulatory
        databases for further verification. This tab helps users confirm that
        the battery adheres to necessary safety, environmental, and performance
        regulations.
      </p>
    ),
    image: complianceImage,
  },
  {
    title: "Supply Chain Tab",
    description: (
      <p>
        The Supply Chain tab provides insights into the regulatory supply of the
        battery, ensuring transparency in its sourcing and distribution. It
        includes links to key reports such as the Sustainability Report, which
        covers environmental and ethical sourcing practices, and the Due
        Diligence Report, detailing risk assessments and compliance with
        responsible sourcing policies. Additionally, the Third-Party Audit
        offers independent verification of supply chain integrity, while the
        Taxonomy Report classifies the battery’s materials and supply chain
        according to regulatory frameworks. Each report is accessible via an
        external link, allowing users to review official documentation and
        verify the battery's compliance with industry standards.
      </p>
    ),
    image: supplychainImage,
  },
  {
    title: "Circularity Tab",
    description: (
      <p>
        The Circularity tab provides details on the battery’s recyclability and
        material reuse. It emphasizes proper disposal according to material
        composition and advises against disposing of the battery as normal
        waste. The Recycled Content Share is marked as Unverified, indicating
        that the data has not been officially validated. Below, circular charts
        display the composition of key materials—Nickel, Cobalt, Lithium, and
        Lead—categorized into Post Consumer Share (recycled from used products),
        Pre Consumer Share (industrial scrap), and Primary Material (newly
        sourced raw materials). This tab ensures transparency in recycling and
        highlights the battery's environmental impact.
      </p>
    ),
    image: circularityImage,
  },
  {
    title: "Carbon Footprint Tab",
    description: (
      <p>
        The Carbon Footprint tab provides insights into the battery's
        environmental impact by measuring its CO₂ emissions throughout its
        lifecycle. It displays the total carbon footprint value, which indicates
        the amount of CO₂ emitted per unit of energy. A performance class rating
        helps assess the battery's sustainability compared to industry
        standards. Additionally, a pie chart visualization breaks down emissions
        into categories such as raw material extraction, main production,
        distribution, and recycling. This tab helps users understand the
        battery’s carbon impact and supports informed decision-making for
        sustainability efforts.
      </p>
    ),
    image: carbonFootprintImage,
  },
];

const Holder: React.FC = () => {
  const holderRef = useRef<HTMLDivElement>(null);

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

    const elements = holderRef.current?.querySelectorAll(
      ".holder-content, .holder-banner-text, .holder-info-section, .holder-info-section2"
    );

    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="holder" ref={holderRef}>
      <div className="holder-banner">
        <h1 className="roboto-slab">HOLDER</h1>
      </div>
      <section className="holder-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`holder-content ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="holder-inner">
              <img
                src={section.image}
                alt={section.title}
                className="holder-image"
              />
              <div className="holder-text">
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

export default Holder;
