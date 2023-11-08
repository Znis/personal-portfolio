import styled from "styled-components";
import {
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import Form from "../components/form";
import { RoutingLinks } from "../data/data";
import { useEffect } from "react";

const H1 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
  color: var(--purple);
  margin-left: -0.2rem;
`;

const H4 = styled.h4`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  color: var(--text);
  &:hover {
    color: var(--blue);
  }
`;

const H5 = styled.h5`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  color: var(--purple);
  padding: 0.2rem 0.2rem;
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  &:hover {
    color: var(--blue);
  }
`;
const HLdiv = styled.div`
  height: 2px;
  width: 10rem;
  background-color: var(--purple);

  @media (min-width: 1024px) {
    height: 50%;
    width: 2px;
    background-color: var(--purple);
  }
`;

function ContactMePage() {
  useEffect(() => {
    document.title = "Contact | Portfolio";
  }, []);
  return (
    <div className="flex flex-col items-center gap-8 w-4/5 py-8 lg:flex-row lg:items-stretch">
      <div className="flex flex-col items-center gap-8 grow  lg:w-1/2">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-4 ">
            <H1>Contact Details</H1>
            <H4>
              <AiOutlineContacts />
              Jenish Twayana
            </H4>
            <H4>
              <AiOutlineMail /> Metwayana@gmail.com
            </H4>
            <H4>
              <AiOutlinePhone />
              +977 9841394852
            </H4>
            <H4>
              <GrLocation />
              Bhaktapur, Nepal
            </H4>
          </div>
          <div className="flex flex-col gap-4">
            <H1>Social Media Links</H1>
            <StyledA href={RoutingLinks.linkedin} target="_blank">
              <AiOutlineLinkedin />
              Jenish Twayana
            </StyledA>
            <StyledA href={RoutingLinks.ghub} target="_blank">
              <AiOutlineGithub />
              Znis
            </StyledA>
            <StyledA href={RoutingLinks.twitter} target="_blank">
              <FaXTwitter />
              Zentw11
            </StyledA>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center lg:flex-col">
        <HLdiv></HLdiv>
        <H5>or</H5>
        <HLdiv></HLdiv>
      </div>
      <div className=" mx-8 my-4 grow lg:w-1/2">
        <Form />
      </div>
    </div>
  );
}
export default ContactMePage;
