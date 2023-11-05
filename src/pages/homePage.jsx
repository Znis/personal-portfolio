import Projects from "../ui/projectSection";
import AboutMeSection from "../ui/aboutMeSection";
import ContactMeSection from "../ui/contactMeSection";
import FooterSection from "../ui/footerSection";
import IntroSection from "../ui/introSection";
import PreLoader from "../components/preloader";
import { useEffect } from "react";

let page_load = sessionStorage.getItem("page_load") === "true" ? true : false;

function Home() {
useEffect(() => {!page_load ? sessionStorage.setItem("page_load", "true") : ""; },[]);

  return (
    <>
      {!page_load ? <PreLoader/> : "" }
      <IntroSection />
      <Projects />
      <AboutMeSection />
      <ContactMeSection />
      <FooterSection />
    </>
  );
}

export default Home;
