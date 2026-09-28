import { profile } from "@/lib/profile";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <div className="section-heading">
          <p className="index">06 — Écrire ou appeler</p>
          <h2>Contact</h2>
        </div>
        <div className="contact-grid">
          <p className="contact-lead">
            Pour une mission de prise de vue, de montage ou de graphisme à{" "}
            {profile.location}.
          </p>
          <div>
            <p className="column-title">Téléphone</p>
            <ul className="phone-list">
              {profile.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href}>
                    <span>{phone.label}</span>
                    <span className="phone-action">Appeler</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact-place">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
