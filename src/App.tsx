export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 42, marginBottom: 8 }}>Surosh Salehi</h1>
      <p style={{ fontSize: 18, opacity: 0.8 }}>
        IT + Business student • Builder • Projects, achievements, and contact
      </p>

      <hr style={{ margin: "24px 0" }} />

      <h2>Projects</h2>
      <ul>
        <li>Notionise — AI study SaaS</li>
        <li>AI Email Assistant — Node + MongoDB + Gmail API</li>
        <li>WordPress client work — Premium Funding + DNS/Cloudflare</li>
      </ul>

      <hr style={{ margin: "24px 0" }} />

      <h2>Contact</h2>
      <p>Email: yourname@email.com</p>
      <p>LinkedIn: link</p>
      <p>GitHub: link</p>
    </div>
  );
}