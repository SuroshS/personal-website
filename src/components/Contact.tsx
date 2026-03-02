import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contactWrapper">

      <h2 className="contactTitle">Get In Touch</h2>

      <p className="contactIntro">
        Open to graduate opportunities, collaborations, and technical discussions.
      </p>

      <div className="contactGrid">

        <a
          href="mailto:salehisurosh198@gmail.com"
          className="contactCard"
        >
          <div className="contactLabel">Email</div>
          <div className="contactValue">
            salehisurosh198@gmail.com
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/surosh-salehi-29b8b5206/"
          target="_blank"
          rel="noopener noreferrer"
          className="contactCard"
        >
          <div className="contactLabel">LinkedIn</div>
          <div className="contactValue">
            View Profile →
          </div>
        </a>

      </div>

    </div>
  );
}