// src/components/BatteryRecyclers.tsx
import React from "react";
import "./BatteryRecyclers.css"; // Import CSS file

const BatteryRecyclers: React.FC = () => {
  return (
    <section className="battery-recyclers">
      <h1>
        Battery Recyclers: Enabling Efficient Recovery, Compliance, and
        Sustainability
      </h1>
      <div className="recyclers-content">
        <p>
          Battery recyclers play a pivotal role in creating a circular economy
          by recovering valuable materials, ensuring regulatory compliance, and
          minimizing environmental impact. With the rising demand for
          lithium-ion batteries in electric vehicles (EVs), renewable energy
          storage, and consumer electronics, the need for efficient,
          transparent, and data-driven recycling solutions has never been
          greater.
        </p>
        <p>
          IONLedger empowers battery recyclers with real-time material tracking,
          automated compliance documentation, and sustainability reporting,
          making the recycling process more efficient, cost-effective, and
          environmentally responsible.
        </p>
        <br />
        <section>
          <h2>Optimizing Material Recovery for Maximum Efficiency</h2>
          <p>
            Recovering critical materials like lithium, cobalt, nickel, and
            graphite is essential for reducing reliance on mining and ensuring a
            sustainable supply chain. However, traditional recycling methods
            often face inefficiencies due to inaccurate data and inadequate
            tracking.
          </p>
          <p>IONLedger transforms this process by:</p>
          <ul>
            <li>
              Providing Detailed Battery Composition Data: Digital records help
              recyclers accurately identify and extract valuable materials.
            </li>
            <li>
              Enabling Smarter Sorting & Processing: Automates categorization of
              usable vs. non-usable battery components, improving resource
              efficiency.
            </li>
            <li>
              Reducing Waste & Maximizing Yield: By integrating AI-driven
              analytics, recyclers can optimize material recovery rates and
              minimize disposal costs.
            </li>
          </ul>
          <p>
            Example: An EV battery recycler using IONLedger can instantly
            determine the exact quantity of cobalt and lithium recoverable from
            a batch of used batteries, enabling precise material recovery
            planning.
          </p>
        </section>

        <section>
          <h2>Simplifying Regulatory Compliance & Audit Readiness</h2>
          <p>
            Recycling regulations are becoming increasingly strict, with
            governments worldwide enforcing sustainability mandates for battery
            disposal and material recovery (EU Battery Directive, AIS-156 in
            India, US EPA standards).
          </p>
          <p>IONLedger helps recyclers stay compliant by:</p>
          <ul>
            <li>
              Automating Compliance Documentation: Securely logs every step of
              the recycling process for effortless reporting.
            </li>
            <li>
              Ensuring Regulatory Adherence : Keeps recyclers aligned with
              evolving laws, reducing the risk of fines and legal penalties.
            </li>
            <li>
              Providing a Transparent & Immutable Audit Trail: Blockchain-backed
              records offer tamper-proof proof of sustainable recycling
              practices.
            </li>
          </ul>
          <p>
            Example: If an auditor requests proof of responsible recycling,
            IONLedger provides an instant, verifiable digital report detailing
            material recovery rates and process compliance.
          </p>
        </section>

        <section>
          <h2>Tracking & Showcasing Sustainability Metrics</h2>
          <p>
            As Environmental, Social, and Governance (ESG) compliance becomes a
            key market differentiator, recyclers must demonstrate their
            environmental impact with verifiable data.
          </p>
          <p>IONLedger enables recyclers to:</p>
          <ul>
            <li>
              Measure & Report Carbon Footprint Reduction: Quantifies the
              environmental benefits of material recovery vs. virgin mining.
            </li>
            <li>
              Track Circular Economy Contributions: Provides insights into how
              recovered materials are reintegrated into new battery production.
            </li>
            <li>
              Enhance Investor & Partner Confidence: Supports
              sustainability-focused investors and automakers seeking certified
              green supply chains.
            </li>
          </ul>
          <p>
            Example: A battery recycling firm can use IONLedger to generate a
            real-time dashboard displaying tons of recovered lithium, the carbon
            footprint saved, and compliance status—strengthening their appeal to
            investors and eco-conscious manufacturers.
          </p>
        </section>

        <section className="summary">
          <h2>The Future of Battery Recycling with IONLedger</h2>
          <p>
            By optimizing material recovery, simplifying compliance, and
            enabling sustainability tracking, IONLedger helps recyclers:
          </p>
          <ul>
            <li>
              Maximize operational efficiency by streamlining sorting and
              recovery.
            </li>
            <li>Ensure seamless compliance with automated documentation.</li>
            <li>
              Attract investors & build trust with transparent data-driven
              reporting.
            </li>
          </ul>
          <p>
            As the global push for electrification accelerates, battery
            recyclers empowered by digital innovation will lead the charge
            toward a sustainable, waste-free energy future.
          </p>
        </section>
      </div>
    </section>
  );
};

export default BatteryRecyclers;
