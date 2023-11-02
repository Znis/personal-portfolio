import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./ui/appLayout"
import Home from "./pages/homePage"
import AboutMePage from "./pages/aboutMePage"
import ProjectsPage from "./pages/projectsPage"
import Samaybaji from "./pages/projectPage/samaybaji"



function App() {


  return (

<BrowserRouter>
          <Routes>
            <Route path="/personal-portfolio/" element={
              <AppLayout showPreloader={true} />
              }
            >
             <Route index element={
              <>
              <Home/>
             
             </>
             
             } />
            </Route>
            <Route path="/personal-portfolio/projects" element={<ProjectsPage/>}>
            <Route path="samay-baji" element={<Samaybaji />} />
            <Route path="gpuv" element={<Samaybaji />} />
            <Route path="med-test" element={<Samaybaji />} />
            <Route path="crop-wiki" element={<Samaybaji />} />
            <Route path="debris-destroyer" element={<Samaybaji />} />
            <Route path="monument-recognition" element={<Samaybaji />} />
            <Route path="movie-ticket-booking-bot" element={<Samaybaji />} />
            </Route>

            <Route path="/personal-portfolio/about-me" element={
              <AppLayout showPreloader={false} />
              }
            >
             <Route index element={
              <>
              <AboutMePage/>
             
             </>
             
             } />
             </Route>
      

          </Routes>
        </BrowserRouter>

  

    

   
   

    
  )
}

export default App
