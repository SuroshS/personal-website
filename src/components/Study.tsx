import { useState } from "react";
import "../styles/study.css";

type StudySection = {
  heading: string;
  points: string[];
};

export default function Study() {
  const [isOpen, setIsOpen] = useState(false);

  const sections: StudySection[] = [
    {
      heading: "Business Process Analysis",
      points: [
        "Analysing workflows and identifying inefficiencies",
        "Designing improved systems using structured modelling techniques",
        "Documenting processes and gathering requirements",
        "Aligning solutions with organisational goals",
      ],
    },
    {
      heading: "Systems Analysis & Requirements Engineering",
      points: [
        "Stakeholder communication and requirement gathering",
        "Translating business needs into technical specifications",
        "Designing solutions that solve real problems",
      ],
    },
    {
      heading: "Databases & Data Management",
      points: [
        "Database design and data modelling",
        "Structured Query Language (SQL)",
        "Understanding how data supports decision-making",
      ],
    },
    {
      heading: "Project Management (Agile)",
      points: [
        "Agile frameworks and collaborative delivery",
        "Risk registers and burn-down charts",
        "Managing digital projects from concept to deployment",
      ],
    },
    {
      heading: "Enterprise Systems & Digital Strategy",
      points: [
        "ERP & CRM system adoption",
        "Digital transformation strategy",
        "Governance and long-term performance impact",
      ],
    },
  ];

  return (
    <div className="studyContainer">
      <h2>Education</h2>

      <div className="studyCard">

        <div
          className="studyHeader"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <h3>Information Systems</h3>
            <p className="studyUniversity">
              Queensland University of Technology (QUT)
            </p>
          </div>

          <span className="toggleIcon">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        <p className="studyHighlight">
          Bachelor’s degree focused on bridging business and technology through system design,
          process analysis, and digital strategy.
        </p>

        {isOpen && (
          <div className="studyDetails">

            <p className="studyIntro">
              My studies focus on the intersection of business and technology —
              understanding how organisations design, implement, and improve digital systems
              to solve real-world problems.
            </p>

            <p className="studyIntro">
              Rather than focusing purely on programming, my degree has trained me to think
              strategically about how technology supports operations, decision-making,
              and growth.
            </p>

            {sections.map((section) => (
              <div key={section.heading} className="studyBlock">
                <h4>{section.heading}</h4>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="studyBlock">
              <h4>What This Means Practically</h4>
              <ul>
                <li>Bridge the gap between technical teams and business stakeholders</li>
                <li>Design systems aligned with strategic goals</li>
                <li>Analyse and improve operational processes</li>
                <li>Create competitive advantage through technology</li>
                <li>Approach digital problems with structure and creativity</li>
              </ul>
            </div>

            <div className="studyBlock">
              <h4>My Approach to Technology</h4>
              <ul>
                <li>Problem-solving before coding</li>
                <li>Understanding systems holistically</li>
                <li>Designing with user needs in mind</li>
                <li>Building scalable and structured solutions</li>
              </ul>
            </div>

            <p className="studyClosing">
              While the degree builds strong technical foundations, I’ve also independently
              developed my programming skills to complement my academic background —
              allowing me to operate across both strategic and technical domains.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}