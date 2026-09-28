import { hobbies, languages, practices, profile } from "@/lib/profile";

export function About() {
  return (
    <section className="section" id="a-propos">
      <div className="shell">
        <div className="section-heading">
          <p className="index">01 — Profil</p>
          <h2>À propos</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              {profile.fullName} est opératrice de prise de vue, photographe et
              graphiste à Parakou. Elle a mené des études germaniques à
              l’université de Parakou, jusqu’à une licence professionnelle en
              allemand, puis une formation d’opératrice de prise de vue au
              centre Cfoman – DAABAARU, de juin 2023 à juin 2024.
            </p>
            <p>
              Pendant son stage à la cellule de communication de l’archidiocèse
              de Parakou, elle a assuré la prise de vue et le montage des
              images réalisées sur le terrain. Elle aime travailler en équipe.
            </p>
            <p className="hobbies">Loisirs : {hobbies.join(", ")}.</p>
          </div>
          <ul className="practice-list">
            {practices.map((item) => (
              <li key={item.index}>
                <span>{item.index}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="language-row" aria-label="Langues">
          {languages.map((language) => (
            <li key={language.name}>
              <strong>{language.name}</strong>
              <span>
                {language.spoken ? "Parlé" : ""}
                {language.spoken && language.written ? " et " : ""}
                {language.written ? "écrit" : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
