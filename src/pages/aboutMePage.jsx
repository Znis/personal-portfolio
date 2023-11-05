import styled from "styled-components";
import Card from "../components/card";
import Carousel from "../components/carousel";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWindowOpen } from "react-icons/bi";
import { RoutingLinks, TechnologyList } from "../data/data";
import { useEffect } from "react";

const techStackData = TechnologyList();

const CardDiv = styled.div`
  background-color: var(--white);
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(85, 60, 154, 0.4);
  display: flex;
  height: auto;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 2rem 0rem 2rem;
`;

const IconDiv = styled.img`
  height: 3.2rem;
  width: fit-content;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  -webkit-transition: transform 0.2s;

  &:hover {
    transform: scale(1.25);
  }
`;

const P = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.2rem;
  line-height: 28px;
  text-align: justify;
  color: var(--text);
`;

const H1 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: var(--purple);
`;

const H2 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--purple);
  margin: 4rem 0rem 0rem 0rem;
`;

const H3 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.4rem;
  color: var(--purple);
`;

const H4 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  color: var(--text);
`;

const Button = styled.a`
  background: linear-gradient(to bottom right, var(--purple), var(--accent));
  border: 0;
  border-radius: 24px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0.2rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  margin-top: 1rem;
  width: 10rem;
  justify-content: center;

  &:not([disabled]):focus {
    box-shadow:
      0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(85, 60, 154, 0.25),
      0.125rem 0.125rem 1rem rgba(238, 75, 43, 0.25);
  }

  &:not([disabled]):hover {
    box-shadow:
      0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(85, 60, 154, 0.25),
      0.125rem 0.125rem 1rem rgba(238, 75, 43, 0.25);
  }
`;
function AboutMePage() {
  useEffect(() => {document.title = "About | Portfolio";}, []);
  const cards = [1, 2, 3].map((imgName) => ({
    key: imgName,
    content: (
      <Card imageSrc={RoutingLinks.gallery + imgName + ".jpg"} imageAlt="" />
    ),
  }));

  const techStackCardList = techStackData.map((cat) => (
    <CardDiv key={cat.title}>
      <div className="border-b-2 border-[#553c9a] w-full ">
        <H3>{cat.title}</H3>
      </div>
      <div className="flex flex-wrap mt-8 place-content-evenly gap-8">
        {cat.technologies.map((tech) => (
          <div
            key={tech.title}
            className="flex flex-col  px-2 items-center text-center grow mb-8  md:grow-0"
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
    </CardDiv>
  ));

  return (
    <div className="w-3/5 pb-20 flex flex-col items-center justify-center ">
      <Carousel cards={cards} offset={2} showArrows={false} />
      <H1>About Me</H1>
      <P>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius earum,
        fugiat vero provident similique aperiam omnis possimus deserunt,
        molestiae exercitationem nihil magnam nulla soluta non a officia unde
        dolore? Ab! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Possimus ullam mollitia similique est eaque, reprehenderit error numquam
        dolorum natus voluptatem. Cum distinctio aperiam optio illo non ipsam
        blanditiis delectus error.
      </P>
      <br />
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam
        mollitia similique est eaque, reprehenderit error numquam dolorum natus
        voluptatem. Cum distinctio aperiam optio illo non ipsam blanditiis
        delectus error.
      </P>
      <H2>Technologies I am familar with</H2>
      <div className="flex flex-col w-full my-8 gap-8">{techStackCardList}</div>

      <Button href={RoutingLinks.resume} target="_blank">
        Resume
        <BiWindowOpen />
      </Button>

      <Button href={RoutingLinks.contact}>
        Lets Connect <AiOutlineArrowRight />
      </Button>
    </div>
  );
}
export default AboutMePage;
