import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner wrap">
        <p className="eyebrow hero__eyebrow">Frontend Developer — based in Karachi, Pakistan</p>

        <h1 className="hero__name">
          M. Asad
          <br />
          Usman
        </h1>

        <div className="hero__row">
          <p className="hero__bio">
            Frontend Developer specializing in React, focused on turning ideas into polished, scalable web applications.
          </p>

          <div className="hero__meta">
            <div className="hero__meta-row">
              <span className="eyebrow">Available</span>
              <span>Open to Frontend Roles & Freelance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="eyebrow">Scroll</span>
      </div>
    </section>
  );
}
