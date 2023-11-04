import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/appLayout";
import Home from "./pages/homePage";
import AboutMePage from "./pages/aboutMePage";
import ContactMePage from "./pages/contactMePage";
import ProjectsPage from "./pages/projectsPage";
import ErrorPage from "./pages/errorPage";
import Project from "./pages/project";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/personal-portfolio/"
          element={<AppLayout showPreloader={true} />}
        >
          <Route
            index
            element={
              <>
                <Home />
              </>
            }
          />
        </Route>
        <Route path="/personal-portfolio/projects" element={<ProjectsPage />}>
        <Route
            index
            element={
              <Navigate to="/personal-portfolio/projects/samay-baji"/>
           
              
            }
          />
          <Route path="samay-baji" element={<Project projectTitle={"samay-baji"} />} />
          <Route path="gpuv" element={<Project  projectTitle={"gpuv"} />} />
          <Route path="med-test" element={<Project  projectTitle={"med-test"}  />} />
          <Route path="crop-wiki" element={<Project   projectTitle={"crop-wiki"} />} />
          <Route path="debris-destroyer" element={<Project  projectTitle={"debris-destroyer"}  />} />
          <Route path="monument-recognition" element={<Project  projectTitle={"monument-recognition"} />} />
          <Route path="movie-ticket-booking-bot" element={<Project projectTitle={"movie-ticket-booking-bot"}  />} />
        </Route>

        <Route
          path="/personal-portfolio/about-me"
          element={<AppLayout showPreloader={false} />}
        >
          <Route
            index
            element={
              <>
                <AboutMePage />
              </>
            }
          />
        </Route>

        <Route
          path="/personal-portfolio/contact"
          element={<AppLayout showPreloader={false} />}
        >
          <Route
            index
            element={
              <>
                <ContactMePage />
              </>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
