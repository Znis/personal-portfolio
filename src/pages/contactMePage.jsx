import styled from "styled-components";
import { AiOutlineContacts, AiOutlineMail, AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin  } from "react-icons/ai";
import {GrLocation} from "react-icons/gr";
import {FaXTwitter} from "react-icons/fa6";
import Form from "../components/form";

const H1 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
  margin-left: -0.2rem;
`;

const H4 = styled.h4`
display: flex;
align-items: center;
gap: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  &:hover{
    color: #147efb;
  }
`;

const H5 = styled.h5`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  color: #555;
  padding: 0.2rem 0.2rem;
`;

const StyledA = styled.a`
display: flex;
align-items: center;
gap: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  &:hover{
    color: #147efb;
  }
`;
const HLdiv = styled.div`
height: 2px;
width: 10rem;
background-color: #888;

@media (min-width: 1024px) {
  height: 50%;
  width: 2px;
  background-color: #888;
 
}

`;






function ContactMePage(){
    return(
      <div className="flex flex-col items-center gap-8 w-4/5 py-8 lg:flex-row lg:items-stretch">
         <div className="flex flex-col items-center gap-8 grow  lg:w-1/2">
        <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-4 ">
        <H1>Contact Details</H1>
       <H4><AiOutlineContacts/>Jenish Twayana</H4>
<H4><AiOutlineMail/> Metwayana@gmail.com</H4>
 <H4><AiOutlinePhone/>+977 9841394852</H4>
 <H4><GrLocation/>Bhaktapur, Nepal</H4>
        </div>
        <div className="flex flex-col gap-4">
        <H1>Social Media Links</H1>
       <StyledA href=""><AiOutlineLinkedin/>LinkedIn</StyledA>
<StyledA href=""><AiOutlineGithub/>Github</StyledA>
<StyledA href=""><FaXTwitter/>X (Twitter)</StyledA>
 <StyledA href=""><AiOutlineInstagram/>Instagram</StyledA>
 <StyledA href=""><AiOutlineFacebook/>Facebook</StyledA>
        </div>
        </div>
            
        </div>
        <div className="flex flex-row items-center lg:flex-col">
        
        
        <HLdiv></HLdiv>  
        <H5>or</H5>
        <HLdiv></HLdiv>
        </div>
    <div className=" mx-8 my-4 grow lg:w-1/2"  >
    <Form/>
    </div>

      </div>
       
    );
}
export default ContactMePage;