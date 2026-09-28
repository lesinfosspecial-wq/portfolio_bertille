import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
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
        <Toolbox />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
