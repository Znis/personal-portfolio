import Projects from "./projects";
import AboutMeSection from "./aboutMeSection";
import ContactMeSection from "./contactMeSection";
import FooterSection from "./footerSection";
import IntroSection from "./introSection";
function Home() {
    return (
      <>
       <IntroSection/>
           <Projects/>
           <AboutMeSection/>
           <ContactMeSection/>
           <FooterSection/>
           </>
     
    );
  }
  
  export default Home;
