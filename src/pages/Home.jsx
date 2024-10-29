import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Who from "../components/Who";
import We from "../components/We";
import Pricing from "../components/Pricing";
import WorkingProcess from "../components/WorkingProcess";
import Testimonal from "../components/Testimonal";
import MMainComponent from "../components/AAbout";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <We />
      <MMainComponent />
      <WorkingProcess />
      <Who />
      <Pricing />
      <Testimonal />
    </>
  );
}
