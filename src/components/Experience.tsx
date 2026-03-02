import { useState } from "react";
import "../styles/experience.css";

type ExperienceItem = {
  title: string;
  organisation: string;
  highlight: string;
  sections: {
    heading: string;
    points: string[];
  }[];
};

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "IT Support Officer",
      organisation: "World Wellness Group",
      highlight:
        "Enterprise systems, Microsoft 365 administration, digital operations.",
      sections: [
        {
          heading: "What I Do",
          points: [
            "Manage Microsoft 365 (Teams, SharePoint, Exchange, user provisioning)",
            "Configure shared mailboxes & permissions",
            "Troubleshoot room booking & timezone issues",
            "Support internal systems (RediCASE, Best Practice)",
            "Improve internal workflows",
          ],
        },
        {
          heading: "Impact",
          points: [
            "Improved system accessibility for staff",
            "Streamlined onboarding/offboarding",
            "Reduced recurring IT issues through structured fixes",
          ],
        },
      ],
    },
    {
      title: "Customer Service Officer",
      organisation: "Services Australia (Centrelink → Medicare)",
      highlight:
        "High-volume operations, compliance systems, stakeholder management.",
      sections: [
        {
          heading: "What I Did",
          points: [
            "Processed claims, enrolments & identity verification",
            "Managed sensitive customer cases",
            "Worked in a KPI-driven, 24/7 operational environment",
            "Trained new team members",
          ],
        },
        {
          heading: "Skills Developed",
          points: [
            "Process precision",
            "Compliance awareness",
            "Communication under pressure",
            "Enterprise systems literacy",
          ],
        },
      ],
    },
    {
      title: "BeeAware – Capstone Project",
      organisation: "Frontend Developer | Agile Team Member",
      highlight:
        "Agile delivery, React development, project governance.",
      sections: [
        {
          heading: "My Role",
          points: [
            "Implemented multiple frontend pages using React",
            "Translated Figma designs into working UI",
            "Created user stories & risk register",
            "Built burn-down tracking",
          ],
        },
        {
          heading: "What This Demonstrates",
          points: [
            "Agile methodology experience",
            "GitHub workflow familiarity",
            "Component-based architecture",
            "Cross-functional collaboration",
          ],
        },
      ],
    },
    {
      title: "Website Development Projects",
      organisation: "WordPress | UI/UX Design | Deployment",
      highlight:
        "End-to-end website deployment and hosting configuration.",
      sections: [
        {
          heading: "What I Handle",
          points: [
            "Domain setup & DNS configuration",
            "Hosting environments (Hostinger, Vodien, Cloudflare)",
            "WPForms & SMTP email setup",
            "UI design in Figma",
            "Elementor development",
          ],
        },
        {
          heading: "This Shows",
          points: [
            "End-to-end website deployment",
            "Client communication",
            "Hosting + email configuration",
            "Real-world troubleshooting",
          ],
        },
      ],
    },
    {
      title: "Notionise (AI SaaS)",
      organisation: "AI-powered study platform",
      highlight:
        "React-based AI SaaS with authentication and cloud architecture.",
      sections: [
        {
          heading: "Stack",
          points: [
            "React",
            "Firebase",
            "AI APIs",
            "Authentication systems",
          ],
        },
        {
          heading: "What I Built",
          points: [
            "Lecture summarisation system",
            "Quiz generation engine",
            "XP-based progress tracking",
            "User dashboards",
            "Cloud-based storage logic",
          ],
        },
        {
          heading: "What This Demonstrates",
          points: [
            "Product thinking",
            "Full-stack architecture awareness",
            "AI integration",
            "SaaS scalability mindset",
          ],
        },
      ],
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="experienceContainer">
      <h2 className="experienceTitle">Professional Experience</h2>

      <p className="experienceIntro">
        I build systems, solve operational problems, and bridge business with technology.
      </p>

      {experiences.map((exp, index) => (
        <div key={exp.title} className="experienceCard">

          <div
            className="experienceHeader"
            onClick={() => toggle(index)}
          >
            <div>
              <h3>{exp.title}</h3>
              <p className="experienceOrg">{exp.organisation}</p>
            </div>

            <span className="toggleIcon">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>

          <p className="experienceHighlight">{exp.highlight}</p>

          {openIndex === index && (
            <div className="experienceDetails">
              {exp.sections.map((section) => (
                <div key={section.heading} className="detailBlock">
                  <h4>{section.heading}</h4>
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Core Strengths */}

      <div className="coreStrengths">
        <h3>Core Strengths</h3>
        <div className="strengthGrid">
          <span>Enterprise System Administration</span>
          <span>Frontend Development (React)</span>
          <span>SaaS Product Development</span>
          <span>WordPress & Deployment</span>
          <span>Process & Workflow Optimisation</span>
          <span>UI/UX Implementation</span>
          <span>Agile Project Experience</span>
        </div>
      </div>
    </div>
  );
}