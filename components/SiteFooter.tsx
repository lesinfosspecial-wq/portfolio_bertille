import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-bar">
        <p>{profile.fullName}</p>
        <p>
          {profile.role}
          <span aria-hidden="true"> · </span>
          {profile.location}
        </p>
      </div>
    </footer>
  );
}
