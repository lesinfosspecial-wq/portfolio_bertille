import { missions } from "@/lib/profile";

export function Missions() {
  return (
    <section className="section" id="missions">
      <div className="shell">
        <div className="section-heading">
          <p className="index">03 — Expérience</p>
          <h2>Missions</h2>
        </div>
        <p className="section-intro">
          Trois stages en télévision et en communication, entre 2023 et 2025.
        </p>
        <ol className="mission-list">
          {missions.map((mission, index) => (
            <li key={mission.org}>
              <p className="mission-index">0{index + 1}</p>
              <div>
                <p className="period">{mission.period}</p>
                <h3>{mission.org}</h3>
                <p className="mission-meta">
                  {mission.kind}
                  <span aria-hidden="true"> · </span>
                  {mission.place}
                </p>
                <p>{mission.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
