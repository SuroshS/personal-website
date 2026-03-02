import { useState } from "react";
import "../styles/projects.css";

type Project = {
  title: string;
  shortDescription: string;
  mainStack: string[];
  sections: {
    heading: string;
    points: string[];
  }[];
  github?: string;
  liveLinks?: { label: string; url: string }[];
};

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Notionise (AI Study Platform)",
      shortDescription:
        "AI-powered SaaS platform for lecture summarisation and quiz generation.",
      mainStack: ["React", "Vite", "Firebase", "OpenAI API"],
      sections: [
        {
          heading: "Architecture",
          points: [
            "React + Vite frontend",
            "Firebase Authentication & Firestore",
            "OpenAI API integration",
            "PDF & DOCX parsing support",
          ],
        },
        {
          heading: "Core Features",
          points: [
            "Lecture summarisation engine",
            "AI-generated quizzes",
            "XP-based progress tracking",
            "User dashboard & cloud storage",
          ],
        },
      ],
      liveLinks: [
        {
          label: "Live Site",
          url: "https://timely-hummingbird-88ff9f.netlify.app/",
        },
      ],
    },
    {
      title: "Website Development – Premium Funding & Coat & Cure",
      shortDescription:
        "End-to-end website design, development and hosting configuration.",
      mainStack: ["WordPress", "Elementor", "Figma", "DNS", "SMTP"],
      sections: [
        {
          heading: "Design & Development",
          points: [
            "UI design in Figma",
            "Responsive page structure",
            "Elementor implementation",
            "WPForms lead capture",
          ],
        },
        {
          heading: "Deployment & Hosting",
          points: [
            "Domain & DNS configuration",
            "Cloudflare & hosting setup",
            "SSL & security configuration",
            "Email routing & SMTP integration",
          ],
        },
      ],
      liveLinks: [
        {
          label: "Premium Funding",
          url: "https://premiumfunding.com.au",
        },
        {
          label: "Coat & Cure",
          url: "https://coatncure.com.au",
        },
      ],
    },
    {
      title: "AI Email Assistant",
      shortDescription:
        "Backend system for authentication and automated email workflows.",
      mainStack: ["Node.js", "MongoDB", "REST APIs"],
      sections: [
        {
          heading: "Architecture",
          points: [
            "Node.js backend service",
            "MongoDB integration",
            "Authentication layer",
            "Email workflow automation",
          ],
        },
      ],
      liveLinks: [
        {
          label: "Backend Service",
          url: "https://ai-email-backend-9hu6.onrender.com/",
        },
      ],
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="projectsWrapper">
      <h2 className="projectsTitle">Projects</h2>

      {projects.map((project, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={project.title}
            className={`projectCard ${isOpen ? "active" : ""}`}
          >
            <div
              className="projectHeader"
              onClick={() => toggle(index)}
            >
              <div>
                <h3>{project.title}</h3>
                <p className="projectDescription">
                  {project.shortDescription}
                </p>

                <div className="techStack">
                  {project.mainStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <span className="expandIcon">
                {isOpen ? "−" : "+"}
              </span>
            </div>

            <div className={`projectDetails ${isOpen ? "open" : ""}`}>
              {isOpen &&
                project.sections.map((section) => (
                  <div key={section.heading} className="detailBlock">
                    <h4>{section.heading}</h4>
                    <ul>
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}

              {isOpen && project.liveLinks && (
                <div className="projectLinks">
                  {project.liveLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectButton"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}