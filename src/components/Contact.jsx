import ContactForm from "./ContactForm.jsx";
import "./Contact.css";

const SOCIALS = [
  { label: "Email", href: "mailto:asadusman199@gmail.com" },
  { label: "GitHub", href: "https://github.com/m-asadusman" },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <p className="eyebrow">Contact</p>

        <a className="contact__headline">
          Let's build
          <br />
          something<span className="contact__dot">.</span>
        </a>

        <div className="contact__row">
          <p className="contact__note">
            I'm open to frontend development opportunities, internships, and freelance projects. 
            If you'd like to work together, feel free to send me a message.
          </p>

          <ul className="contact__socials">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="form__title">Send a message</h3>

        <ContactForm />

      </div>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span>© {new Date().getFullYear()} M. Asad Usman </span>
          <span>Built with React</span>
        </div>
      </footer>
    </section>
  );
}


