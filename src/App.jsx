import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./ui/appLayout"
import Home from "./ui/home"



function App() {


  return (



<BrowserRouter>
          <Routes>
            <Route 
              element={
                
                  <AppLayout />
               
              }
            >
             <Route index element={
              <>
              <Home/>
             
             </>
             
             } />
            </Route>

         
          </Routes>
        </BrowserRouter>

  

    

   
   

    
  )
}

export default App
