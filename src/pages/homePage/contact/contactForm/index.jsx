function ContactForm() {
  return (
    <>
    <span className="contactForm-title">conteacteaza-ne</span>
    <span className="contactForm-info">Ai nevoie de asistență din partea consultanților noștri ? Completează formularul de mai jos pentru a ne trimite un e-mail.</span>
    <form className="contactForm">
      <input 
        className="contactForm__input"
        type="email"
        name="email"
        placeholder="email"
        required
      />      
      
      <textarea 
        className="contactForm__textArea"
        name="mesaj"
        maxLength="255"
        placeholder="mesaj"
        required
      />

      <button className="link-btn">Trimite</button>
    </form>
    </>
  );
}

export default ContactForm;