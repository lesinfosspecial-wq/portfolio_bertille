import { profile } from "@/lib/profile";

const facts = [
  { value: "3", label: "stages" },
  { value: "4", label: "langues" },
  { value: "5", label: "logiciels" },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.location}</p>
          <h1>
            <span className="middle-name">{profile.middleName}</span>
            {profile.firstName}
            <br />
            {profile.lastName}
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="lede">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#realisations">
              Voir les réalisations
            </a>
            <a className="button button-ghost" href="#contact">
              La contacter
            </a>
          </div>
          <ul className="hero-stats">
            {facts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="portrait">
          <div className="portrait-frame">
            <img
              src="/portrait.png"
              alt={`Portrait de ${profile.fullName}`}
              width={640}
              height={800}
            />
          </div>
          <figcaption>
            <span>Sur le terrain depuis 2023</span>
            <span>Parakou</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
