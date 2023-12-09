import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RoutingLinks } from "../data/data";

const H1 = styled.h1`
  font-size: 3.6rem;
  line-height: 4.2rem;
  font-weight: 600;
  margin-bottom: -0.5rem;
  background-image: linear-gradient(45deg, var(--purple), var(--accent));
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Space Grotesk", sans-serif;
  @media (min-width: 1024px) {
    line-height: 5.4rem;
  }
`;
const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--purple);
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Space Grotesk", sans-serif;
  margin-top: 1rem;
  @media (min-width: 1024px) {
    margin-top: 0rem;
  }
`;
const H3 = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--purple);
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Space Grotesk", sans-serif;
  @media (min-width: 1024px) {
    margin: 0rem 0rem -0.5rem 0.8rem;
  }
`;
const H4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--purple);
  font-family: "Space Grotesk", sans-serif;
`;
const IMG = styled.img`
  display: inline;
  height: 1.3rem;
  width: 1.3rem;
  margin: 0rem 0.4rem;
`;

const Button = styled.a`
  background: linear-gradient(to bottom right, var(--purple), var(--accent));
  border: 0;
  border-radius: 24px;
  color: var(--btntext);
  cursor: pointer;
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 0.4rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin: 2rem 0rem;

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

function IntroDiv() {
  return (
    <div className="flex flex-col items-center p-4 text-center lg:text-left lg:items-start">
      <H3>Hi, I am</H3>
      <H1>Jenish Twayana</H1>
      <H2>A Software Developer</H2>
      <H4>
        Based in Nepal{" "}
        <IMG
          alt="Flag of Nepal GIF"
          title="Flag of Nepal"
          src="nepal-flag.gif"
        />
      </H4>

      <Button href={RoutingLinks.contact}>
        Contact <AiOutlineArrowRight />
      </Button>
    </div>
  );
}

export default IntroDiv;
