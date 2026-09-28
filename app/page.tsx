import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Films } from "@/components/Films";
import { Hero } from "@/components/Hero";
import { Missions } from "@/components/Missions";
import { Path } from "@/components/Path";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Toolbox } from "@/components/Toolbox";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <About />
        <Path />
        <Missions />
        <Films />
        <Toolbox />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
