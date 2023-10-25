import {  useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const StyledDropdownDiv = styled.div`
  position: relative;
  width: 20%;
  justify-content: center;
`;


const StyledDropdownDivContent = styled.div`

  position: absolute;
  background-color: #FFFFFF;
  min-width: 12rem;
  border-radius: 0.4rem;
  margin-top: 2.8rem;
  box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
  z-index: 1;
 
`;

const StyledDropdownDivContentA = styled.a`
display: block;
font-weight: 500;  
color: black;
font-size: 1.1rem;
padding: 1rem 4rem 1rem 2rem;
font-family: 'Lato', sans-serif;

&:hover{
    color: #147efb;
  }
`;

const StyledBtn = styled.button`
  text-align: center;
  align-items: center;
  width: fit-content;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
  color: rgba(238, 75, 43, 1);

  &:hover {
    color: #147efb;
  }
`;





function Header() {
  const [showDropdown, setShow] = useState(false);
  const handleShowDropdown = () => setShow(!showDropdown);
  return (
    <header>
      <a href="/" className="logo">
        <img src="logo.svg" title="website logo" alt="website logo" />
      </a>

      <nav className="navbar">
        <ul>
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>

          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
     
        <StyledDropdownDiv className="flex md:hidden">
        <StyledBtn onClick={handleShowDropdown}>
          {showDropdown ?  <FaTimes/> : <FaBars />}
        </StyledBtn>

        <StyledDropdownDivContent className= {showDropdown ? "block" : "hidden"} >
          <StyledDropdownDivContentA href="/">Home</StyledDropdownDivContentA>
          <StyledDropdownDivContentA href="/">Project</StyledDropdownDivContentA>
          <StyledDropdownDivContentA href="/">About Me</StyledDropdownDivContentA>
          <StyledDropdownDivContentA href="/">Contact</StyledDropdownDivContentA>
        </StyledDropdownDivContent>
      </StyledDropdownDiv> 
      
      
    </header>
  );
}

export default Header;
