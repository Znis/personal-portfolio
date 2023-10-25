import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import {BiWindowOpen} from "react-icons/bi";

const H1 = styled.h1`
font-size: 2.4rem;
font-weight: 600;
color: #553c9a;
font-family: 'Roboto', sans-serif;
margin-bottom: 2rem;
text-align: end;
`

const P = styled.p`
font-size: 1.15rem;
font-weight: 400;
font-family: 'Lato', sans-serif;
text-align: justify;

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
  font-size: 20px;
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



&:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(85, 60, 154, 0.5), .125rem .125rem 1rem rgba(238, 75, 43, 0.5);
}

&:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(85, 60, 154, 0.5), .125rem .125rem 1rem rgba(238, 75, 43, 0.5);
}`

const StyledImg = styled.img`
    margin: 0 auto;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 2s infinite  alternate;

@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-2rem); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-2rem); }
}
@media (min-width: 1024px) {
  height: auto;
  padding: 0rem 2rem;;
}
   
`

const A = styled.a`
display: flex;
text-align: center;
align-items: center;
width: fit-content;
gap: 0.5rem;
font-size: 1.3rem;
color: rgba(238, 75, 43, 1);
font-family: 'Roboto', sans-serif;
padding: 1rem 0rem;
transition: color 0.25s;
-webkit-transition: color 0.25s;


&:hover{
    
   color: #147efb;
}
`


function AboutMeSection() {
  return (
    <section className="px-8 py-16 flex justify-center items-center bg-center bg-fixed bg-gradient-to-br from-slate-100  to-slate-200  ">
<div className="columns-1 w-4/5">
<H1>About Me</H1>
<div className=" flex flex-col flex-wrap lg:flex-row">
<div className="py-8 w-full lg:w-1/2">
<StyledImg src="portfolio-code-snippet.png" />
</div>
<div className="w-full lg:w-1/2">
   <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod eius nesciunt, distinctio quibusdam dolorem repellat, officia hic officiis accusamus explicabo quas? Corporis dolorum fugiat praesentium veritatis animi! Dolor, tempore?
    <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, non fugiat dolor dolores voluptatibus molestiae maxime tenetur saepe quia minus nisi repellendus necessitatibus doloribus ut optio quas ullam enim vitae.</P> 
   <A href="" >Learn More <AiOutlineArrowRight/></A>
<div className=" flex flex-col mt-16 place-items-end py-6">
<Button><BiWindowOpen/> Resume</Button>




</div>

</div>
</div>
</div>

    </section>
  );
}
export default AboutMeSection;
