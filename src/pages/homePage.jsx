import Projects from "../ui/projectSection";
import AboutMeSection from "../ui/aboutMeSection";
import ContactMeSection from "../ui/contactMeSection";
import FooterSection from "../ui/footerSection";
import IntroSection from "../ui/introSection";
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
