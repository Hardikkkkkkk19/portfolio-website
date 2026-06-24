function Certificates() {
  return (
    <section className="certificates">
      <h2 className="section-title">Certificates</h2>

      <div className="certificate-card">

        <div className="certificate-image">
          <img
            src="/certificate.png"
            alt="AI Skills Passport"
          />
        </div>

        <div className="certificate-info">

          <div className="certificate-icon">
            🏅
          </div>

          <h3>AI Skills Passport</h3>

          <p className="issuer">
            Issued by EY & Microsoft
          </p>

          <p className="certificate-description">
            Successfully completed the AI Skills Passport
            program offered by EY and Microsoft. The course
            covered AI fundamentals, technology concepts
            and employability skills.
          </p>

          <p className="certificate-year">
            📅 2025
          </p>

            <a
            href="/certificate.png"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
            >
            View Certificate
          </a>

        </div>

      </div>
    </section>
  );
}

export default Certificates;
