import styled from "styled-components";
import ProjectListSidebar from "./projectListSidebar";
import { LuPanelLeftClose } from "react-icons/lu";

const StyledSidebar = styled.aside`
  margin-top: 3.4rem;
  padding: 0rem;
  width: 18rem;
  height: 100%;
  border-right: 1px solid grey;

  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  transition: 0.5s;

  grid-row: 1 / -1;
  display: ${(props) => (props.$showSidebar ? "flex" : "none")};

  flex-direction: column;
  gap: 2.2rem;
  overflow: scroll;
  background-color: var(--background);
  @media (min-width: 1024px) {
    padding: 0rem 0rem 3.2rem 2.4rem;
    width: auto;
    display: flex;
    position: static;

    top: auto;
    left: auto;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #999;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #777;
  }
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  font-family: "Space Grotesk", sans-serif;
  color: var(--purple);
`;
const StyledDiv = styled.div`
  margin: 1.2rem 1.8rem 0rem 1.8rem;
  display: flex;
  gap: 2rem;
`;

const StyledBtn = styled.button`
  display: inline-block;
  text-align: center;
  align-items: center;
  width: fit-content;

  font-size: 1.6rem;
  font-family: "Space Grotesk", sans-serif;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
  color: var(--purple);
  margin-top: -3.2rem;

  @media (min-width: 1024px) {
    display: none;
  }

  &:hover {
    color: var(--blue);
  }
`;

function Sidebar({ show, closeSidebar }) {
  const handleCloseSidebar = () => closeSidebar();

  return (
    <StyledSidebar $showSidebar={show}>
      <StyledDiv>
        <StyledH1>Project Category</StyledH1>
        <StyledBtn onClick={handleCloseSidebar}>
          <LuPanelLeftClose className="h-6 w-6" />
        </StyledBtn>
      </StyledDiv>
      <ProjectListSidebar />
    </StyledSidebar>
  );
}

export default Sidebar;
