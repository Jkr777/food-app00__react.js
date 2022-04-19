import ContactForm from "./contactForm/index";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-container__form">
        <ContactForm />
      </div>
      <div className="contact-container__img"></div>
    </div>
  );
}

export default Contact;