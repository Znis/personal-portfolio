import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdWeb } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiArtificialHive } from "react-icons/gi";
import { TbSettingsAutomation } from "react-icons/tb";
import { PiArrowElbowDownRight } from "react-icons/pi";

const projectList = [
  {
    id: 0,
    orientation: 0,
    projectTitle: "Monument Recognition",
    projectType: "ml",
    projectCategory: ["Machine Learning", "Mobile Application"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
    techUsed: [
      {
        alt: "Python Programming Language",
        title: "Python Programming Language",
        src: "python-icon.png",
      },
      {
        alt: "Tensorflow Framework",
        title: "Tensorflow Framework",
        src: "tensorflow-icon.png",
      },
      {
        alt: "Microsoft Azure",
        title: "Microsoft Azure",
        src: "azure-icon.png",
      },
      {
        alt: "Pytorch Framework",
        title: "Pytorch Framework",
        src: "pytorch-icon.png",
      },
      {
        alt: "PostgreSQL Database",
        title: "PostgreSQL Database",
        src: "postgres-icon.png",
      },
      {
        alt: "Android Studio IDE",
        title: "Android Studio IDE",
        src: "android-studio-icon.png",
      },
    ],
    codeLink: "/",
    demoSrc: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (elem) => "monument-recognition-application-images/" + elem + ".jpg",
    ),
    demoLink: "/",
    projectLink: "/",
    navlink: "monument-recognition",
  },

  {
    id: 1,
    orientation: 1,
    projectTitle: "Samay Baji",
    projectType: "web",
    projectCategory: ["Full Stack", "Web Application"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
    techUsed: [
      { alt: "HTML", title: "HTML", src: "html-icon.png" },
      { alt: "CSS", title: "CSS", src: "css-icon.png" },
      {
        alt: "Vanilla Javascript",
        title: "Vanilla Javascript",
        src: "js-icon.png",
      },
      {
        alt: "Python Programming Language",
        title: "Python Programming Language",
        src: "python-icon.png",
      },
      {
        alt: "Django Framework",
        title: "Django Framework",
        src: "django-icon.png",
      },
    ],
    codeLink: "/",
    demoSrc: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (elem) => "samaybaji-web-application-images/" + elem + ".jpg",
    ),
    demoLink: "",
    projectLink: "/",
    navlink: "samay-baji",
  },

  {
    id: 2,
    orientation: 0,
    projectTitle: "Med Test",
    projectType: "mobile",
    projectCategory: ["Android Platform", "Mobile Application"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
    techUsed: [
      {
        alt: "Flutter Framework",
        title: "Flutter Framework",
        src: "flutter-icon.png",
      },
      {
        alt: "Dart Programming Language",
        title: "Dart Programming Language",
        src: "dart-icon.png",
      },
      {
        alt: "Google Firebase",
        title: "Google Firebase",
        src: "firebase-icon.png",
      },
      {
        alt: "OpenStreetMaps Library",
        title: "OpenStreetMaps Library",
        src: "openstreetmaps-icon.png",
      },
      {
        alt: "Android Studio IDE",
        title: "Android Studio IDE",
        src: "android-studio-icon.png",
      },
    ],
    codeLink: "/",
    demoSrc: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (elem) => "med-test-application-images/" + elem + ".jpg",
    ),
    demoLink: "/",
    projectLink: "/",
    navlink: "med-test",
  },

  {
    id: 3,
    orientation: 1,
    projectTitle: "Debris Destroyer",
    projectType: "game",
    projectCategory: ["Game Development", "Executable Game"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
    techUsed: [
      { alt: "Unity Engine", title: "Unity Engine", src: "unity-icon.png" },
      {
        alt: "C# Programming Language",
        title: "C# Programming Language",
        src: "csharp-icon.png",
      },
    ],
    codeLink: "/",
    demoSrc: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (elem) => "debris-destroyer-game-images/" + elem + ".jpg",
    ),
    demoLink: "/",
    projectLink: "/",
    navlink: "debris-destroyer",
  },
  {
    id: 4,
    orientation: 1,
    projectTitle: "Crop Wiki",
    projectType: "mobile",
    projectCategory: ["Android Platform", "Mobile Application"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
    techUsed: [
      {
        alt: "Android Studio",
        title: "Android Studio",
        src: "android-studio-icon.png",
      },
    ],
    codeLink: "/",
    demoSrc: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (elem) => "crop-wiki-application-images/" + elem + ".jpg",
    ),
    demoLink: "/",
    projectLink: "/",
    navlink: "crop-wiki",
  },
  {
    id: 5,
    orientation: 1,
    projectTitle: "GpuV",
    projectType: "web",
    projectCategory: ["Linux", "Web Application"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
    techUsed: [
      {
        alt: "Django Framework",
        title: "Django Framework",
        src: "django-icon.png",
      },
    ],
    codeLink: "/",
    demoSrc: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (elem) => "gpuv-web-application-images/" + elem + ".jpg",
    ),
    demoLink: "/",
    projectLink: "/",
    navlink: "gpuv",
  },
  {
    id: 6,
    orientation: 1,
    projectTitle: "Movie Ticket Booking Bot",
    projectType: "browserAutomation",
    projectCategory: ["Browser Automation", "Bot"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
    techUsed: [
      {
        alt: "Python Programming Language",
        title: "Python Programming Language",
        src: "python-icon.png",
      },
    ],
    codeLink: "/",
    demoSrc: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (elem) => "qfx-bot-images/" + elem + ".jpg",
    ),
    demoLink: "/",
    projectLink: "/",
    navlink: "movie-ticket-booking-bot",
  },
];

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledProjectCategory = styled.div`


    display: flex;
    align-items: center;
    gap: 1rem;

    color: #553c9a;
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
    color: var(--color-grey-600);
    font-size: 1rem;
    font-weight: 500;
    font-family: "Space Grotesk", sans-serif;
    padding: 0.5rem 0rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #147efb;
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #147efb;
  }
`;

const StyledDiv = styled.div`
  margin: -0.4rem 4.8rem 0.5rem 4.8rem;

`;



const webAppProjects = projectList
.filter((cat) => cat.projectType == "web")
.map((filteredProject) => 

  <li  key= {filteredProject.id}>
    <StyledNavLink to={filteredProject.navlink}>
      <PiArrowElbowDownRight />
      <span>{filteredProject.projectTitle}</span>
    </StyledNavLink>
  </li>
);

const mobileAppProjects = projectList
.filter((cat) => cat.projectType == "mobile")
.map((filteredProject) => 

  <li  key= {filteredProject.id}>
    <StyledNavLink to={filteredProject.navlink}>
      <PiArrowElbowDownRight />
      <span>{filteredProject.projectTitle}</span>
    </StyledNavLink>
  </li>
);

const mlProjects = projectList
.filter((cat) => cat.projectType == "ml")
.map((filteredProject) => 

  <li  key= {filteredProject.id}>
    <StyledNavLink to={filteredProject.navlink}>
      <PiArrowElbowDownRight />
      <span>{filteredProject.projectTitle}</span>
    </StyledNavLink>
  </li>
);

const gameProjects = projectList
.filter((cat) => cat.projectType == "game")
.map((filteredProject) => 

  <li  key= {filteredProject.id}>
    <StyledNavLink to={filteredProject.navlink}>
      <PiArrowElbowDownRight />
      <span>{filteredProject.projectTitle}</span>
    </StyledNavLink>
  </li>
);

const automationProjects = projectList
.filter((cat) => cat.projectType == "browserAutomation")
.map((filteredProject) => 

  <li  key= {filteredProject.id}>
    <StyledNavLink to={filteredProject.navlink}>
      <PiArrowElbowDownRight />
      <span>{filteredProject.projectTitle}</span>
    </StyledNavLink>
  </li>
);

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
            <ul>
              {webAppProjects}
            </ul>
          </StyledDiv>
        </li>
        <li>
          <StyledProjectCategory>
            <BsPhone />
            <span>Mobile Application</span>
          </StyledProjectCategory>

          <StyledDiv>
          <ul>
              {mobileAppProjects}
            </ul>
          </StyledDiv>
        </li>
        <li>
          <StyledProjectCategory>
            <IoGameControllerOutline />
            <span>Executable Game</span>
          </StyledProjectCategory>
          <StyledDiv>
          <ul>
              {gameProjects}
            </ul>
          </StyledDiv>
        </li>
        <li>
          <StyledProjectCategory>
            <GiArtificialHive />
            <span>Machine Learning</span>
          </StyledProjectCategory>

          <StyledDiv>
          <ul>
              {mlProjects}
            </ul>
          </StyledDiv>
        </li>
        <li>
          <StyledProjectCategory>
            <TbSettingsAutomation />
            <span>Browser Automation</span>
          </StyledProjectCategory>

          <StyledDiv>
          <ul>
              {automationProjects}
            </ul>
          </StyledDiv>
        </li>
      </NavList>
    </nav>
  );
}

export default ProjectListSidebar;
