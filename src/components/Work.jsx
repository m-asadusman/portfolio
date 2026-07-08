import { useRef, useState } from "react";
import projects from "../data/projects";
import "./Work.css";

export default function Work() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const activeProject = projects.find((p) => p.id === active);

  return (
    <section
      className="work"
      id="work"
      ref={sectionRef}
      onMouseMove={handleMove}
    >
      <div className="wrap">
        <div className="work__head">
          <h2 className="work__title">Selected work</h2>
          <p className="eyebrow">Index — 01 to 0{projects.length}</p>
        </div>

        <ul className="work__list">
          {projects.map((p) => (
            <li
              key={p.id}
              className="work__row"
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
            >
              <a href={p.link} target="_blank" className="work__row-link">
                <span className="work__id">{p.id}</span>

                <span className="work__row-main">
                  <span className="work__row-title">{p.title}</span>
                  <span className="work__row-role">{p.role}</span>
                </span>

                <span className="work__row-desc">{p.description}</span>

                <span className="work__row-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="work__tag">
                      {t}
                    </span>
                  ))}
                </span>

                <span className="work__year">{p.year}</span>

                <span className="work__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <img
                className="work__thumb"
                src={p.image}
                alt=""
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>

      {activeProject && (
        <div
          className="work__preview"
          style={{ transform: `translate(${pos.x + 24}px, ${pos.y - 110}px)` }}
          aria-hidden="true"
        >
          <img src={activeProject.image} alt="" />
        </div>
      )}
    </section>
  );
}
