import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bertille Sessitô Fagninou — Opératrice de prise de vue",
  description:
    "Portfolio de Bertille Sessitô Fagninou, opératrice de prise de vue, photographe et graphiste à Parakou, au Bénin.",
  keywords: [
    "Bertille Fagninou",
    "opératrice de prise de vue",
    "photographe",
    "graphiste",
    "Parakou",
    "montage vidéo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
