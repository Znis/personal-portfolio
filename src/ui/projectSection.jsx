import styled from 'styled-components';
import ProjectCard from '../components/projectCard';
import { AiOutlineArrowRight } from 'react-icons/ai';



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

const projectList = [
{
id:0,
orientation: 0,
projectTitle: "Monument Recognition App",
projectType: "ml",
projectCategory: ["Machine Learning","Mobile Application"],
description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
techUsed: [{alt: "Python Programming Language", title: "Python Programming Language", src: "python-icon.png"},
{alt: "Tensorflow Framework", title: "Tensorflow Framework", src: "tensorflow-icon.png"},
{alt: "Microsoft Azure", title: "Microsoft Azure", src: "azure-icon.png"},
{alt: "Pytorch Framework", title: "Pytorch Framework", src: "pytorch-icon.png"},
{alt: "PostgreSQL Database", title: "PostgreSQL Database", src: "postgres-icon.png"},
{alt: "Android Studio IDE", title: "Android Studio IDE", src: "android-studio-icon.png"},
],
codeLink: "/",
demoSrc: [1,2,3,4,5,6,7,8,9].map((elem) => "monument-recognition-application-images/"+elem + ".jpg"),
demoLink: "/",
projectLink: "/",
},

{
  id:1,
  orientation: 1,
  projectTitle: "Samay Baji Web Application",
  projectType: "web",
  projectCategory: ["Full Stack","Web Application"],
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
  techUsed: [{alt: "HTML", title: "HTML", src: "html-icon.png"},
  {alt: "CSS", title: "CSS", src: "css-icon.png"},
  {alt: "Vanilla Javascript", title: "Vanilla Javascript", src: "js-icon.png"},
  {alt: "Python Programming Language", title: "Python Programming Language", src: "python-icon.png"},
  {alt: "Django Framework", title: "Django Framework", src: "django-icon.png"},
 
  ],
  codeLink: "/",
  demoSrc: [1,2,3,4,5,6,7,8,9].map((elem) => "samaybaji-web-application-images/"+elem + ".jpg"),
  demoLink: "",
  projectLink: "/",
  },

  {
    id:2,
    orientation: 0,
    projectTitle: "Med Test Application",
    projectType: "mobile",
    projectCategory: ["Android Platform","Mobile Application"],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
    techUsed: [{alt: "Flutter Framework", title: "Flutter Framework", src: "flutter-icon.png"},
    {alt: "Dart Programming Language", title: "Dart Programming Language", src: "dart-icon.png"},
    {alt: "Google Firebase", title: "Google Firebase", src: "firebase-icon.png"},
    {alt: "OpenStreetMaps Library", title: "OpenStreetMaps Library", src: "openstreetmaps-icon.png"},
    {alt: "Android Studio IDE", title: "Android Studio IDE", src: "android-studio-icon.png"},
    ],
    codeLink: "/",
    demoSrc: [1,2,3,4,5,6,7,8,9].map((elem) => "med-test-application-images/"+elem + ".jpg"),
    demoLink: "/",
    projectLink: "/",
    },

    {
      id:3,
      orientation: 1,
      projectTitle: "Debris Destroyer Game",
      projectType: "game",
      projectCategory: ["Game Development","Executable Game"],
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      techUsed: [{alt: "Unity Engine", title: "Unity Engine", src: "unity-icon.png"},
      {alt: "C# Programming Language", title: "C# Programming Language", src: "csharp-icon.png"}, 
      ],
      codeLink: "/",
      demoSrc: [1,2,3,4,5,6,7,8,9].map((elem) => "debris-destroyer-game-images/"+elem + ".jpg"),
      demoLink: "/",
      projectLink: "/",
      },
];


function Projects() {
  const renderProjectList = projectList.map((project) => <ProjectCard key= {project.id} techUsed={project.techUsed} codeLink={project.codeLink} demoSrc={project.demoSrc} demoLink={project.demoLink} orientation={project.orientation} projectCategory={project.projectCategory} projectLink={project.projectLink} projectTitle={project.projectTitle} description={project.description}/>
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
