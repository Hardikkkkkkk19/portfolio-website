function Contact() {
  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>
        <section className="contact" id="contact"></section>
      <div className="contact-container">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="6"
        ></textarea>

        <button>
          Send Message
        </button>

      </div>
    </section>
  );
}

export default Contact;