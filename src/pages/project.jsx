import styled from "styled-components";
import ProjectList from "../data/data";
import CarouselSlider from "../components/carouselSlider";


const IconDiv = styled.img`
  height: 3.2rem;
  width: fit-content;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  -webkit-transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`;

const CardDiv = styled.div`
  background-color: #fff;
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(85, 60, 154, 0.4);
  display: flex;
  height: auto;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin: 1rem 0rem 2rem 0rem;
  width: 100%;
  padding: 2rem 2rem 0rem 2rem;
`;

const P = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.2rem;
  line-height: 28px;
  text-align: justify;
`;

const H1 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const H2 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
`;

const H3 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.4rem;
`;

const H4 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
`;





const VL = styled.div`
  display: none;
  height: 5rem;
  width: 0.1rem;
  background: rgba(85, 60, 154, 0.5);
  border-radius: 0.5rem;
  box-shadow: 0 0 1px rgba(85, 60, 154, 0.25);
  @media (min-width: 1024px) {
    display: inline-block;
  }
`;

const A = styled.a`
  text-align: center;
  align-items: center;
  width: fit-content;
  margin: 1rem 0rem 0rem 0rem;
  gap: 0.5rem;
  color: #553c9a;
  font-size: 1.2rem;
  font-family: "Space Grotesk", sans-serif;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;

  &:hover {
    color: #147efb;
  }
`;

const H5 = styled.h5`
  display: inline-block;
  margin: 1rem 0.25rem 0rem 0rem;
  color: #553c9a;
  font-size: 1.2rem;
  font-family: "Space Grotesk", sans-serif;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
`;
const projectList = ProjectList();





function Project({projectTitle}) {
  const projectData = projectList.filter(project => project.navlink === projectTitle)[0];

  
  
  const techStackUsedCard = projectData.techUsed.map((cat) => (
    <div
      key={cat.title}
      className="flex flex-col flex-auto items-center scale-75 md:scale-100 "
    >
      <div className="border-b-2 border-[#553c9a] w-full text-center">
        <H3>{cat.title}</H3>
      </div>
      <div className="flex flex-wrap mt-8 gap-4 ">
        {cat.technologies.map((tech) => (
          <div
            key={tech.title}
            className="flex flex-col px-2 items-center text-center  mb-8 "
          >
            <IconDiv
              src={tech.imgSrc}
              alt={tech.imgAlt}
              title={tech.imgTitle}
            ></IconDiv>
            <H4>{tech.title}</H4>
          </div>
        ))}
      </div>
    </div>
  ));

  const targetedPlatformIcons = projectData.targetedPlatform.map((platform) => (
    <div
      key={platform.title}
      className="flex flex-col px-2 items-center text-center  "
    >
      <IconDiv
        src={platform.src}
        alt={platform.alt}
        title={platform.title}
      ></IconDiv>
      <H4>{platform.title}</H4>
    </div>
  ));

  const youtubeEmbed = (videoDemo, title) => (
    <div className="overflow-hidden h-0 pb-[56.25%] relative">
      <iframe
      className="left-0 top-0 h-full w-full absolute rounded-[1.7rem]"
        width="800px"
        height="500px"
        src={videoDemo}
        title={title}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );

  return (
    <div>
      <H1>{projectData.projectSmallTitle}</H1>
   

<div className="flex py-8 flex-wrap gap-16 justify-center grow lg:gap-32 ">

{projectData.targetDevice === "web" || projectData.targetDevice === "both" ?
<div  className="relative min-h-[14rem] min-w-[24rem] max-h-[14rem] max-w-[24rem]"  >

<div className="flex p-1 absolute justify-center  ml-[2.75rem]  w-[18.5rem] mt-[0.5rem] h-[11.35rem] ">
<CarouselSlider isPhone={false} carouselImgSrc={projectData.carouselImg} />
</div>
<img className="absolute h-[14rem] w-[24rem]"  src="macbook.png"></img>
</div> : ""}

{projectData.targetDevice === "phone" || projectData.targetDevice === "both" ? 
 <div  className="flex relative min-h-[14rem] min-w-[7.4rem] max-h-[14rem] max-w-[7.4rem] items-center "  >   
  
<div className="flex p-2 absolute justify-center items-center">
<CarouselSlider isPhone={true} carouselImgSrc={projectData.carouselImg} />

</div>
<img className="absolute h-[14rem] w-[7.4rem] "  src="iphone.png"></img> 
</div> : ""
}





</div>
       




      <P>
      {projectData.description}
      </P>
      <br></br>
      <P>
      {projectData.description}
      </P>
      <div className="flex flex-col gap-4 mt-8 mb-12 items-center md:flex-row">
        <H2>Targeted Platform</H2>
        <VL />
        {targetedPlatformIcons}
      </div>

      <H2>Technologies Used</H2>

      <CardDiv>{techStackUsedCard}</CardDiv>
      <H2>Demo</H2>
      <div className="mb-16 mt-4">{youtubeEmbed(projectData.videoDemo, projectData.projectTitle)}</div>

      {projectData.hasNote ? <P>
        <b>Note: </b> {projectData.note}
      </P> : ""} 
{projectData.demoLink !== "" ? <div><H5>For Live demo,</H5>
      <A href={projectData.demoLink}>
        <u>Click here to visit the Live Site.</u>
      </A> </div>
      : ""}
      

      <H5>For source code and more information,</H5>
      <A href={projectData.ghubLink}>
        <u>Click here to visit the Github repository.</u>
      </A>
    </div>
  );
}
export default Project;
