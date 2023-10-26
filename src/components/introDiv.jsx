import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';


const StyledDiv = styled.div`

padding: 1rem;

`
const H1 = styled.h1`
font-size: 3.6rem;
font-weight: 600;
color: #222;
margin: 0rem 0rem -0.5rem 0rem;
background-image: linear-gradient(45deg, #553c9a, #ee4b2b);
color: transparent;
background-clip: text;
-webkit-background-clip: text;
font-family: 'Lato', sans-serif;
`
const H2 = styled.h2`
font-size: 1.8rem;
font-weight: 500;
color: #553c9a;
background-clip: text;
-webkit-background-clip: text;
font-family: 'Lato', sans-serif;
`
const H3 = styled.h3`
font-size: 1.3rem;
font-weight: 400;
color: #553c9a;
margin: 0rem 0rem -0.7rem 0.8rem;
background-clip: text;
-webkit-background-clip: text;
font-family: 'Lato', sans-serif;
`
const H4 = styled.h4`
font-size: 1.3rem;
font-weight: 400;
color: #553c9a;
font-family: 'Lato', sans-serif;
`
const IMG = styled.img`
display: inline;
height:1.3rem;
width:1.3rem;
margin: 0rem 0.4rem;

`

const Button = styled.button`

  background: linear-gradient(to bottom right, #553c9a, #ee4b2b);
  border: 0;
  border-radius: 24px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
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
  margin: 2rem 0rem;


&:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(85, 60, 154, 0.5), .125rem .125rem 1rem rgba(238, 75, 43, 0.5);
}

&:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(85, 60, 154, 0.5), .125rem .125rem 1rem rgba(238, 75, 43, 0.5);
}`

function IntroDiv(){
    return <StyledDiv>
     
      <H3>Hi, I am</H3>
        <H1>Jenish Twayana</H1>
        <H2>A Software Developer</H2>
        <H4>Based in Nepal <IMG alt="Flag of Nepal GIF" title="Flag of Nepal" src="nepal-flag.gif"/></H4>
        
 
        
        <Button>Contact <AiOutlineArrowRight/></Button>
        </StyledDiv>;
}

export default IntroDiv;