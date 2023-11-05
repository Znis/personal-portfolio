import styled from "styled-components";
import ProjectList from "../data/data";
import { NavLink } from "react-router-dom";
import { MdWeb } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiArtificialHive } from "react-icons/gi";
import { TbSettingsAutomation } from "react-icons/tb";
import { PiArrowElbowDownRight } from "react-icons/pi";

const projectList = ProjectList();

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledProjectCategory = styled.div`


    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--purple);
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Space Grotesk", sans-serif;
    padding: 0.5rem 1.8rem;
    
  }


  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Space Grotesk", sans-serif;
    color: var(--text);
    padding: 0.5rem 0rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--blue);
  }

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--blue);
  }
`;

const StyledDiv = styled.div`
  margin: -0.4rem 4.8rem 0.5rem 4.8rem;
`;

const webAppProjects = projectList
  .filter((cat) => cat.projectType == "web")
  .map((filteredProject) => (
    <li key={filteredProject.id}>
      <StyledNavLink to={filteredProject.navlink}>
        <PiArrowElbowDownRight />
        <span>{filteredProject.projectSmallTitle}</span>
      </StyledNavLink>
    </li>
  ));

const mobileAppProjects = projectList
  .filter((cat) => cat.projectType == "mobile")
  .map((filteredProject) => (
    <li key={filteredProject.id}>
      <StyledNavLink to={filteredProject.navlink}>
        <PiArrowElbowDownRight />
        <span>{filteredProject.projectSmallTitle}</span>
      </StyledNavLink>
    </li>
  ));

const mlProjects = projectList
  .filter((cat) => cat.projectType == "ml")
  .map((filteredProject) => (
    <li key={filteredProject.id}>
      <StyledNavLink to={filteredProject.navlink}>
        <PiArrowElbowDownRight />
        <span>{filteredProject.projectSmallTitle}</span>
      </StyledNavLink>
    </li>
  ));

const gameProjects = projectList
  .filter((cat) => cat.projectType == "game")
  .map((filteredProject) => (
    <li key={filteredProject.id}>
      <StyledNavLink to={filteredProject.navlink}>
        <PiArrowElbowDownRight />
        <span>{filteredProject.projectSmallTitle}</span>
      </StyledNavLink>
    </li>
  ));

const automationProjects = projectList
  .filter((cat) => cat.projectType == "browserAutomation")
  .map((filteredProject) => (
    <li key={filteredProject.id}>
      <StyledNavLink to={filteredProject.navlink}>
        <PiArrowElbowDownRight />
        <span>{filteredProject.projectSmallTitle}</span>
      </StyledNavLink>
    </li>
  ));

function ProjectListSidebar() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledProjectCategory>
            <MdWeb />
            <span>Web Application</span>
          </StyledProjectCategory>

          <StyledDiv>
            <ul>{webAppProjects}</ul>
          </StyledDiv>
        </li>
        <li>
          <StyledProjectCategory>
            <BsPhone />
            <span>Mobile Application</span>
          </StyledProjectCategory>

          <StyledDiv>
            <ul>{mobileAppProjects}</ul>
          </StyledDiv>
        </li>
        <li>
          <StyledProjectCategory>
            <IoGameControllerOutline />
            <span>Executable Game</span>
          </StyledProjectCategory>
          <StyledDiv>
            <ul>{gameProjects}</ul>
          </StyledDiv>
        </li>
        <li>
          <StyledProjectCategory>
            <GiArtificialHive />
            <span>Machine Learning</span>
          </StyledProjectCategory>

          <StyledDiv>
            <ul>{mlProjects}</ul>
          </StyledDiv>
        </li>
        <li>
          <StyledProjectCategory>
            <TbSettingsAutomation />
            <span>Browser Automation</span>
          </StyledProjectCategory>

          <StyledDiv>
            <ul>{automationProjects}</ul>
          </StyledDiv>
        </li>
      </NavList>
    </nav>
  );
}

export default ProjectListSidebar;
