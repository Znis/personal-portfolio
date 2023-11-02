import styled from "styled-components";
import ProjectListSidebar from "./projectListSidebar";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 0rem 3.2rem 2.4rem;
  border-right: 1px solid grey;
  height: 100%
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const StyledH1 = styled.h1`
font-size: 2rem;
font-weight: 500;
font-family: "Space Grotesk", sans-serif;
color: #553c9a;
`;
const StyledDiv = styled.div`
margin: 1.2rem 1.8rem 0rem 1.8rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledDiv><StyledH1>Project Category</StyledH1></StyledDiv>
      <ProjectListSidebar />
    </StyledSidebar>
  );
}

export default Sidebar;
