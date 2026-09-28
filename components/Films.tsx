import { films } from "@/lib/profile";

export function Films() {
  return (
    <section className="section" id="realisations">
      <div className="shell">
        <div className="section-heading">
          <p className="index">04 — Images</p>
          <h2>Réalisations</h2>
        </div>
        <p className="section-intro">
          Six reportages diffusés sur YouTube. Chaque film se regarde ici et
          s’ouvre aussi sur sa page d’origine.
        </p>
        <ul className="film-list">
          {films.map((film) => (
            <li key={film.id}>
              <div className="film-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${film.id}`}
                  title={film.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <h3>{film.title}</h3>
              <p className="film-meta">{film.channel}</p>
              <a href={film.url} target="_blank" rel="noreferrer">
                {film.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
