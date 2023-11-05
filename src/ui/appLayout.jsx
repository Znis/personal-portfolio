import Header from "./header";
import Preloader from "../components/preloader";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import ProjectsPage from "../pages/projectsPage";
import { RoutingLinks } from "../data/data";

function AppLayout({ showPreloader = false, isProjectPage = false }) {
  const location = useLocation();

  return (
    <>
      {!isProjectPage || location.pathname === RoutingLinks.projects ? (
        !showPreloader ? (
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {isProjectPage ? (
        <ProjectsPage />
      ) : (
        <div>
          {showPreloader ? <Preloader /> : ""}
          <Header />

          <main className="flex flex-col items-center  pt-12 bg-center bg-fixed bg-gradient-to-br from-slate-50  to-slate-100">
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}

export default AppLayout;
