import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import AppLayout from "./ui/appLayout";
import Home from "./pages/homePage";
import AboutMePage from "./pages/aboutMePage";
import ContactMePage from "./pages/contactMePage";
import ErrorPage from "./pages/errorPage";
import Project from "./pages/project";
import { RoutingLinks } from "./data/data";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={RoutingLinks.home} element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <Home />
              </>
            }
          />
        </Route>
        <Route
          path={RoutingLinks.projects}
          element={<AppLayout isProjectPage={true} />}
        >
          <Route
            index
            element={<Navigate to={RoutingLinks.projects + "/samay-baji"} />}
          />
          <Route
            path="samay-baji"
            element={<Project projectTitle={"samay-baji"} />}
          />
          <Route path="gpuv" element={<Project projectTitle={"gpuv"} />} />
          <Route
            path="med-test"
            element={<Project projectTitle={"med-test"} />}
          />
          <Route
            path="crop-wiki"
            element={<Project projectTitle={"crop-wiki"} />}
          />
          <Route
            path="debris-destroyer"
            element={<Project projectTitle={"debris-destroyer"} />}
          />
          <Route
            path="eclipse-of-the-lantern"
            element={<Project projectTitle={"eclipse-of-the-lantern"} />}
          />
          <Route
            path="monument-recognition"
            element={<Project projectTitle={"monument-recognition"} />}
          />
          <Route
            path="deepfake-detection"
            element={<Project projectTitle={"deepfake-detection"} />}
          />
          <Route
            path="movie-ticket-booking-bot"
            element={<Project projectTitle={"movie-ticket-booking-bot"} />}
          />
        </Route>

        <Route path={RoutingLinks.about} element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <AboutMePage />
              </>
            }
          />
        </Route>

        <Route path={RoutingLinks.contact} element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <ContactMePage />
              </>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
