import styled from 'styled-components';
import ProjectCard from '../components/projectCard';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ProjectList from '../data/data';



const A = styled.a`
display: flex;
text-align: center;
align-items: center;
width: fit-content;
gap: 0.5rem;
font-size: 1.4rem;
font-family: "Space Grotesk", sans-serif;
padding: 1rem 0rem;
margin: 1rem 0rem 0rem 0rem;
transition: color 0.25s;
-webkit-transition: color 0.25s;
color: rgba(238, 75, 43, 1);
float:right;

&:hover{
    
   color: #147efb;
}
`


const H1 = styled.h1`
font-size: 2rem;
font-weight: 600;
color: #553c9a;
font-family: "Space Grotesk", sans-serif;

`
const StyledDiv = styled.div`
display: row;
margin-top: -2rem;
margin-bottom: 4rem;
`

const projectList = ProjectList();

function Projects() {

  const renderProjectList = projectList.filter(project => project.isFeatured).map((project) => <ProjectCard key= {project.id} techUsed={(project.techUsed).reduce((acc, tech) => acc.concat(tech.technologies),[])} ghubLink={project.ghubLink} carouselImg={project.carouselImg} demoLink={project.demoLink} orientation={project.orientation} projectCategory={project.projectCategory} videoDemo={project.videoDemo} projectTitle={project.projectTitle} description={project.description}/>
  )
    return (
      <section className="px-8 py-16 flex justify-center items-center content-center bg-center bg-fixed  bg-gradient-to-br from-slate-50  to-slate-100 "  >
  <div className="w-4/5">
  <H1>Featured Projects</H1>
  <StyledDiv>
{renderProjectList}
<A href="">More Projects <AiOutlineArrowRight/></A>
  </StyledDiv>
  </div>
  

      </section>
    );
  }
  
  export default Projects;
