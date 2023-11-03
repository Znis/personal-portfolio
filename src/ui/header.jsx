import {  useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

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
  margin-top: 2.4rem;
  box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
  z-index: 1;
 
`;

const StyledDropdownDivContentA = styled.a`
display: block;
font-weight: 500;  
font-size: 1rem;
color: ${props => props.isActive ? " rgba(238, 75, 43, 0.7)" : " #222"}; 
padding: 0.8rem 4rem 0.8rem 2rem;
font-family: 'Lato', sans-serif;

&:hover{
  color: ${props => props.isActive ? " rgba(238, 75, 43, 0.7)" : " #147efb"}; 
  }

  
`;

const StyledBtn = styled.button`
  text-align: center;
  align-items: center;
  width: fit-content;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
  color: rgba(238, 75, 43, 1);

  &:hover {
    color: #147efb;
  }
`;





function Header() {
  const location = useLocation();
  const [showDropdown, setShow] = useState(false);
  const [activePage, setActive] = useState("/");

  useEffect(() => 
  {
    setActive(location.pathname);
  },[location]);

 
  const handleShowDropdown = () => setShow(!showDropdown);

  return (
    <header>
      <a href="/" className="logo">
        <img src="logo.svg" title="website logo" alt="website logo" />
      </a>


      <nav className="navbar">
        <ul>
          <li>
            
            <a className={activePage === ("/personal-portfolio/") ? "active" : ""}   href="/personal-portfolio/">
              Home
            </a>
          </li>

          <li>
            <a  className={activePage.includes("/personal-portfolio/projects") ? "active" : ""} href="/personal-portfolio/projects">Project</a>
          </li>
          <li>
            <a className={activePage.includes("/personal-portfolio/about-me") ? "active" : ""}  href="/personal-portfolio/about-me">About</a>
          </li>
          <li>
            <a className={activePage.includes("/personal-portfolio/contact") ? "active" : ""} href="/personal-portfolio/contact">Contact</a>
          </li>
        </ul>
      </nav>
     
        <StyledDropdownDiv className="flex md:hidden">
        <StyledBtn onClick={handleShowDropdown}>
          {showDropdown ?  <FaTimes/> : <FaBars />}
        </StyledBtn>

        <StyledDropdownDivContent className= {showDropdown ? "block" : "hidden"} >
          <StyledDropdownDivContentA isActive={activePage === ("/personal-portfolio/")} href="/">Home</StyledDropdownDivContentA>
          <StyledDropdownDivContentA isActive={activePage.includes("/personal-portfolio/projects")} href="/personal-portfolio/projects">Project</StyledDropdownDivContentA>
          <StyledDropdownDivContentA isActive={activePage.includes("/personal-portfolio/about-me")}  href="/personal-portfolio/about-me">About Me</StyledDropdownDivContentA>
          <StyledDropdownDivContentA isActive={activePage.includes("/personal-portfolio/contact")} href="/personal-portfolio/contact">Contact</StyledDropdownDivContentA>
        </StyledDropdownDivContent>
      </StyledDropdownDiv> 
      
      
    </header>
  );
}

export default Header;
