import { useState } from "react";

import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Study from "../components/Study";
import Contact from "../components/Contact";

import "../styles/home.css";

type TabKey = "projects" | "experience" | "study" | "contact";

export default function Home() {
  const [tab, setTab] = useState<TabKey>("projects");

  return (
    <main className="page">

      <h1 className="title">Surosh Salehi</h1>

      <p className="tagline">
        IT Graduate • Brisbane
      </p>

      <div className="tabs">

        <button
          className={tab === "projects" ? "tab active" : "tab"}
          onClick={() => setTab("projects")}
        >
          Projects
        </button>

        <button
          className={tab === "experience" ? "tab active" : "tab"}
          onClick={() => setTab("experience")}
        >
          Experience
        </button>

        <button
          className={tab === "study" ? "tab active" : "tab"}
          onClick={() => setTab("study")}
        >
          Study
        </button>

        <button
          className={tab === "contact" ? "tab active" : "tab"}
          onClick={() => setTab("contact")}
        >
          Contact
        </button>

      </div>

      <div className="panel">

        {tab === "projects" && <Projects />}
        {tab === "experience" && <Experience />}
        {tab === "study" && <Study />}
        {tab === "contact" && <Contact />}

      </div>

    </main>
  );
}