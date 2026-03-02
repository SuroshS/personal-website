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
            "Manage Microsoft 365 (Teams, SharePoint, Exchange)",
            "Configure shared mailboxes & permissions",
            "Troubleshoot room booking & timezone issues",
            "Support RediCASE & Best Practice systems",
            "Improve internal workflows",
          ],
        },
        {
          heading: "Impact",
          points: [
            "Improved system accessibility",
            "Streamlined onboarding/offboarding",
            "Reduced recurring IT issues",
          ],
        },
      ],
    },
    {
      title: "Customer Service Officer",
      organisation: "Services Australia",
      highlight:
        "High-volume operations, compliance systems, stakeholder management.",
      sections: [
        {
          heading: "Key Contributions",
          points: [
            "Processed claims & identity verification",
            "Managed sensitive customer cases",
            "Worked in KPI-driven environment",
            "Trained new staff",
          ],
        },
        {
          heading: "Skills Developed",
          points: [
            "Process precision",
            "Compliance awareness",
            "Communication under pressure",
          ],
        },
      ],
    },
    {
      title: "BeeAware – Capstone Project",
      organisation: "Frontend Developer | Agile Team",
      highlight:
        "Agile delivery, React development, project governance.",
      sections: [
        {
          heading: "My Role",
          points: [
            "Built frontend pages in React",
            "Translated Figma designs into UI",
            "Created user stories & risk register",
            "Implemented burn-down tracking",
          ],
        },
        {
          heading: "What This Demonstrates",
          points: [
            "Agile experience",
            "GitHub workflow",
            "Component-based architecture",
          ],
        },
      ],
    },
    {
      title: "Website Development Projects",
      organisation: "WordPress | UI/UX | Deployment",
      highlight:
        "End-to-end website deployment and hosting configuration.",
      sections: [
        {
          heading: "What I Handle",
          points: [
            "Domain & DNS configuration",
            "Hosting (Hostinger, Vodien, Cloudflare)",
            "WPForms & SMTP setup",
            "Figma UI design",
            "Elementor builds",
          ],
        },
        {
          heading: "What This Shows",
          points: [
            "Client communication",
            "Deployment expertise",
            "Real-world troubleshooting",
          ],
        },
      ],
    },
    {
      title: "Notionise (AI SaaS)",
      organisation: "Founder Project",
      highlight:
        "React-based AI SaaS with authentication & cloud architecture.",
      sections: [
        {
          heading: "Stack",
          points: ["React", "Firebase", "AI APIs", "Authentication"],
        },
        {
          heading: "What I Built",
          points: [
            "Lecture summarisation engine",
            "Quiz generation system",
            "XP progress tracking",
            "User dashboards",
          ],
        },
        {
          heading: "What This Demonstrates",
          points: [
            "Product thinking",
            "Full-stack awareness",
            "AI integration",
          ],
        },
      ],
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <div className="expWrapper">
    <h2 className="expTitle">Professional Experience</h2>

    <p className="expIntro">
      I build systems, solve operational problems, and bridge business with technology.
    </p>

    <div className="timeline">
      {experiences.map((exp, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={exp.title}
            className={`timelineItem ${isOpen ? "active" : ""}`}
          >
            <div className="timelineDot" />

            <div className="timelineContent">
              <div
                className="timelineHeader"
                onClick={() => toggle(index)}
              >
                <div>
                  <h3>{exp.title}</h3>
                  <p className="organisation">{exp.organisation}</p>
                </div>

                <span className="toggleIcon">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              <p className="highlight">{exp.highlight}</p>

              <div className={`details ${isOpen ? "open" : ""}`}>
                {isOpen &&
                  exp.sections.map((section) => (
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
            </div>
          </div>
        );
      })}
    </div>
  </div>

  );
}