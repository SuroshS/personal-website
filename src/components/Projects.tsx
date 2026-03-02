import { useState } from "react";

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
            "Frontend built using React + Vite",
            "Firebase Authentication & Firestore database",
            "OpenAI API integration for summarisation & quiz generation",
            "PDF and DOCX parsing support",
          ],
        },
        {
          heading: "Core Features",
          points: [
            "Lecture summarisation engine",
            "AI-generated quizzes",
            "XP-based progress tracking",
            "User dashboard & cloud storage logic",
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
        "End-to-end business website design, development, deployment and hosting configuration.",
      mainStack: ["WordPress", "Elementor", "Figma", "DNS", "SMTP"],
      sections: [
        {
          heading: "Design Process (Figma → Development)",
          points: [
            "Created UI layouts in Figma before development",
            "Designed responsive page structures",
            "Mapped user journeys & call-to-action flow",
            "Translated designs into Elementor components",
          ],
        },
        {
          heading: "Development & Implementation",
          points: [
            "Built pages using Elementor & custom styling",
            "Configured WPForms for lead capture",
            "Integrated SMTP email delivery systems",
            "Optimised mobile responsiveness",
          ],
        },
        {
          heading: "Hosting & Deployment",
          points: [
            "Domain configuration & DNS management",
            "Hosting environments (Hostinger, Vodien, Cloudflare)",
            "SSL setup & security configuration",
            "Email routing & mailbox troubleshooting",
          ],
        },
        {
          heading: "Business Impact",
          points: [
            "Delivered fully operational business websites",
            "Enabled structured lead generation",
            "Improved professional online presence",
            "Handled real-world troubleshooting & client communication",
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
        "Backend system supporting authentication and automated email workflows.",
      mainStack: ["Node.js", "MongoDB", "REST APIs"],
      sections: [
        {
          heading: "Architecture",
          points: [
            "Node.js backend service",
            "MongoDB database integration",
            "Authentication layer",
            "Email workflow automation logic",
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
    <div>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={project.title} className="projectCard">

          <div
            className="projectHeader"
            onClick={() => toggle(index)}
          >
            <div>
              <h3>{project.title}</h3>
              <p className="muted">{project.shortDescription}</p>

              <div className="techStack">
                {project.mainStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <span className="expandIcon">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>

          {openIndex === index && (
            <div className="projectDetails">

              {project.sections.map((section) => (
                <div key={section.heading} className="detailBlock">
                  <h4>{section.heading}</h4>
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {project.liveLinks && (
                <div className="projectLinks">
                  {project.liveLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

            </div>
          )}

        </div>
      ))}
    </div>
  );
}