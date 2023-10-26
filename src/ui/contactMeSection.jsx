import styled from "styled-components";
import {AiFillGithub, AiOutlineArrowRight, AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";


const H1 = styled.h1`
font-size: 2rem;
font-weight: 600;
color: #553c9a;
font-family: 'Roboto', sans-serif;
margin-bottom: 2rem;

`

const P = styled.p`
font-size: 1rem;
font-weight: 400;
font-family: 'Lato', sans-serif;
text-align: justify;

`
const A = styled.a`
display: flex;
text-align: center;
align-items: center;
width: fit-content;
gap: 0.5rem;
font-size: 1.6rem;
font-family: 'Roboto', sans-serif;
padding: 1rem 0rem;
transition: color 0.25s;
-webkit-transition: color 0.25s;
color: rgba(238, 75, 43, 1);

&:hover{
    
   color: #147efb;
}
`


const Button = styled.button`

  background: linear-gradient(to bottom right, #553c9a, #ee4b2b);
  border: 0;
  border-radius: 24px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin-top: 2rem;



&:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(85, 60, 154, 0.5), .125rem .125rem 1rem rgba(238, 75, 43, 0.5);
}

&:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(85, 60, 154, 0.5), .125rem .125rem 1rem rgba(238, 75, 43, 0.5);
}`






function ContactMeSection() {
   
  return (
    <section className="px-8 py-16 flex justify-center items-center bg-center bg-fixed bg-gradient-to-br from-slate-200  to-slate-300">
<div className="flex flex-col items-center lg:flex-row w-4/5">
    <div className="w-full lg:w-3/5">
<H1>Need A Developer? Need A Friend?</H1>
<P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit quibusdam repellendus a distinctio tempora ex. Obcaecati nesciunt a error officiis delectus maiores quod sint culpa corrupti facere, ipsum alias!</P>

<Button>Lets Connect <AiOutlineArrowRight/></Button>
</div>

<div className="flex gap-8 w-full justify-center pt-20 lg:w-2/5 lg:pt-0" >
<div className="columns-1">
<div className="flex items-center">
    <div className="flex-1 bg-[#614a9e] h-[3px]" />
 
    <p className="mx-[10px] text-[#614a9e]">Links</p>
 
    <div className="flex-1 bg-[#614a9e] h-[3px]" />
</div>
    <div className="flex gap-6">
    <A><AiFillGithub /></A>
    <A><AiFillLinkedin/></A>
   <A><FiMail/></A> 
    </div>
    
   </div>
</div>
</div>



    </section>
  );
}
export default ContactMeSection;
