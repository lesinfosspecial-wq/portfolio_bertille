import { software } from "@/lib/profile";

export function Toolbox() {
  return (
    <section className="section section-dark" id="outils">
      <div className="shell">
        <div className="section-heading">
          <p className="index">05 — Savoir-faire</p>
          <h2>Outils maîtrisés</h2>
        </div>
        <ul className="tool-list">
          {software.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
