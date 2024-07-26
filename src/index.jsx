import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Workspace from "./components/Workspace";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const Index = () => {
  return (
    <>
      <div className="pt-[0rem] lg:pt-[0rem] overflow-hidden">
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Benefits />
        </section>
        <section id="how-to-use">
          <Workspace />
        </section>
        <section id="services">
          <Services />
        </section>
		<section id="pricing">
          <Pricing />
        </section>
        <section id="roadmap">
         <Roadmap />
        </section>
      </div>

      <ButtonGradient />
    </>
  );
};

export default Index;
