
import Header from "./header"
import Preloader from "../components/preloader"

import { Outlet } from 'react-router-dom';

function AppLayout({showPreloader}) {


  return (
    <div >
    
    {showPreloader ? <Preloader/> : ""}
      <Header />

     
        <main className="flex flex-col items-center  pt-12 bg-center bg-fixed bg-gradient-to-br from-slate-50  to-slate-100">
          <Outlet />
        </main>
    

  
    </div>
  );
}

export default AppLayout;
