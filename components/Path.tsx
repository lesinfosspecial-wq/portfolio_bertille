import { studies, training } from "@/lib/profile";

export function Path() {
  return (
    <section className="section section-alt" id="parcours">
      <div className="shell">
        <div className="section-heading">
          <p className="index">02 — Formation</p>
          <h2>Parcours</h2>
        </div>
        <div className="path-grid">
          <div>
            <h3 className="column-title">Formation professionnelle</h3>
            <ol className="timeline">
              {training.map((item) => (
                <li key={item.title}>
                  <p className="period">{item.period}</p>
                  <h4>{item.title}</h4>
                  {item.place ? <p>{item.place}</p> : null}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="column-title">Études et diplômes</h3>
            <ol className="timeline">
              {studies.map((item) => (
                <li key={`${item.period}-${item.title}`}>
                  <p className="period">{item.period}</p>
                  <h4>{item.title}</h4>
                  {item.place ? <p>{item.place}</p> : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
