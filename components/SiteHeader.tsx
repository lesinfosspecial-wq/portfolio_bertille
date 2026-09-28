"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/profile";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-bar">
        <a className="brand" href="#contenu" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            BF
          </span>
          <span className="brand-text">
            <strong>
              {profile.firstName} {profile.lastName}
            </strong>
            <small>{profile.role}</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-label">{open ? "Fermer" : "Menu"}</span>
        </button>
        <nav id="navigation" className={open ? "is-open" : undefined}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
