import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWindowOpen } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import HoverCarousel from "hover-carousel";
import { useState } from "react";

const CardDiv = styled.div`
  background-color: #fff;
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(85, 60, 154, 0.25);
  display: flex;
  gap: 3rem;
  height: auto;
  flex-direction: column;
  margin: 4rem 0rem auto;
  width: 100%;
  padding: 2rem 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ProjectCategory = styled.div`
  border-radius: 24px;
  background: #fa8128;
  color: #ffffff;
  height: auto;
  width: fit-content;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  text-align: center;
  font-style: italic;
  font-weight: 300;
  font-family: "Space Grotesk", sans-serif;
`;

const ProjectDemoDiv = styled.div`
  height: auto;
  margin: 1rem 0rem;
  width: 100%;

  @media (min-width: 1024px) {
    width: 40%;
    margin: 0 auto;
  }
`;

const H1 = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  color: #553c9a;
  font-family: "Space Grotesk", sans-serif;
  text-align: ${(props) => (props.orientation === 0 ? "left" : "right")};
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Space Grotesk", sans-serif;
  text-align: justify;
`;

const SPAN = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: #553c9a;
  font-family: "Space Grotesk", sans-serif;
`;
const VL = styled.div`
  display: inline-block;
  height: 2rem;
  width: 0.1rem;
  background: rgba(85, 60, 154, 0.5);
  border-radius: 0.5rem;
  box-shadow: 0 0 1px rgba(85, 60, 154, 0.25);
`;
const IconDiv = styled.img`
  height: 2rem;
  width: auto;
  transition: transform 0.2s;
  -webkit-transition: transform 0.2s;

  &:hover {
    transform: scale(1.4);
  }
`;
const A = styled.a`
  display: flex;
  text-align: center;
  align-items: center;
  width: fit-content;
  float: ${(props) => (props.orientation === 0 ? "left" : "right")};
  gap: 0.5rem;
  font-size: 1.2rem;
  color: rgba(238, 75, 43, 1);
  font-family: "Space Grotesk", sans-serif;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;

  &:hover {
    color: #147efb;
  }
`;

const ProjectIntroDiv = styled.div`

display: column;
height: 100%;
margin: 0 auto;
width: 100%;

padding-${(props) => (props.orientation === 0 ? "right" : "left")}: 2rem;
border-${(props) => (props.orientation === 0 ? "right" : "left")}: ${(props) =>
  props.mediaQuery ? "2px solid rgba(85, 60, 154, 0.5)" : "none"};


  @media (min-width: 1024px) {
    width: 60%;
   
  }
`;
const IMGFRAME = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(238, 75, 43, 0.2),
    rgba(85, 60, 154, 0.2)
  );
  border-radius: 16px;
  height: 80%;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(85, 60, 154, 0.4);
`;

// const IMGFRAME_IMG = styled.img`

// transform: translateX(25%);
// transition: 10s ease-in-out 0s;
// &:hover{
//  transform: translateX(-25%);
// transition: 10s ease-in-out 0s;

//     }
//   `

ProjectCard.propTypes = {
  orientation: PropTypes.node.isRequired,
  projectTitle: PropTypes.node.isRequired,
  projectCategory: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  techUsed: PropTypes.node.isRequired,
  ghubLink: PropTypes.node.isRequired,
  carouselImg: PropTypes.node.isRequired,
  demoLink: PropTypes.node.isRequired,

};

function ProjectCard({
  orientation = 0,
  projectTitle,
  projectCategory,
  description,
  techUsed,
  ghubLink,
  carouselImg,
  demoLink,
 
}) {
  const [mediaQuery, setMediaQuery] = useState(
    window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    function handleResize() {
      setMediaQuery(window.matchMedia("(min-width: 1024px)").matches);
    }

    // Attach the event listener to the window object
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const listProjectCategory = projectCategory.map((cat) => (
    <ProjectCategory key={cat}>{cat}</ProjectCategory>
  ));
  const listTechUsed = techUsed.map((tech) => (
    <IconDiv key={tech} alt={tech.imgAlt} title={tech.imgTitle} src={tech.imgSrc} />
  ));

  if (orientation !== 0 && mediaQuery) {
    return (
      <CardDiv>
        <ProjectDemoDiv>
          <IMGFRAME>
            {/* <IMGFRAME_IMG src={carouselImg}/> */}
            <HoverCarousel images={carouselImg}></HoverCarousel>
          </IMGFRAME>

          <div className="  h-1/5 flex flex-wrap justify-center items-end gap-16">
            <A href={ghubLink}>
              Code <FiGithub />
            </A>
            <A href={demoLink}>
              Demo <BiWindowOpen />
            </A>
          </div>
        </ProjectDemoDiv>
        <ProjectIntroDiv mediaQuery={mediaQuery} orientation={orientation}>
          <H1 orientation={orientation}>{projectTitle}</H1>

          <div className="flex flex-wrap gap-6 my-6 justify-end">
            {listProjectCategory}
          </div>
          <P orientation={orientation}>{description}</P>
          <div className=" my-8 flex flex-wrap gap-6 items-center justify-end">
            <SPAN>Tech Used</SPAN>
            <VL />

            {listTechUsed}
          </div>
          <A orientation={orientation} href={demoLink}>
            Learn More <AiOutlineArrowRight />
          </A>
        </ProjectIntroDiv>
      </CardDiv>
    );
  } else {
    orientation = 0;

    return (
      <CardDiv>
        <ProjectIntroDiv mediaQuery={mediaQuery} orientation={orientation}>
          <H1 orientation={orientation}>{projectTitle}</H1>

          <div className={"flex flex-wrap gap-6 my-8 lg:my-6 "}>
            {listProjectCategory}
          </div>
          <P orientation={orientation}>{description}</P>
          <div className=" my-12 flex flex-wrap gap-6 items-center lg:my-8">
            <SPAN>Tech Used</SPAN>
            <VL />

            {listTechUsed}
          </div>
          <A orientation={orientation} href={demoLink}>
            Learn More <AiOutlineArrowRight />
          </A>
        </ProjectIntroDiv>
        <ProjectDemoDiv>
          <IMGFRAME>
            {/* <IMGFRAME_IMG src={carouselImg}/> */}
            <HoverCarousel images={carouselImg}></HoverCarousel>
          </IMGFRAME>

          <div className="h-1/5 flex flex-wrap justify-center items-end gap-16 mt-8 lg:mt-0 ">
            <A href={ghubLink}>
              Code <FiGithub />
            </A>
            <A href={demoLink}>
              Demo <BiWindowOpen />
            </A>
          </div>
        </ProjectDemoDiv>
      </CardDiv>
    );
  }
}
export default ProjectCard;
