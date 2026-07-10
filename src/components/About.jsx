import "./About.css";

const SKILLS = [
  "React", "Tailwind", "JavaScript", "HTML", "CSS", "REST APIs",
  "React Router", "Firebase", "Git", "Github"
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about__inner">
        <div className="about__label">
          <p className="eyebrow">About</p>
          <h2 className="about__title">
            Building modern<br />
            React applications<br />
            with clean and<br />
            <span className="about__title-italic">intuitive interfaces.</span>
          </h2>
        </div>

        <div className="about__body">
          <p>
            I enjoy creating interfaces that feel simple, intuitive, and enjoyable to use.
            My journey has been driven by curiosity and a desire to understand how ideas turn into real products that people interact with every day.
          </p>
          <p>
            Through personal projects, I have worked with APIs, reusable components, responsive layouts, and frontend architecture.
            I'm continuously improving my skills and exploring better ways to build scalable interfaces.
          </p>

          <div className="about__skills">
            <p className="eyebrow">Tools I reach for</p>
            <ul className="about__skills-list">
              {SKILLS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
