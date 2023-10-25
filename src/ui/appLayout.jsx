
import Header from "./header"
import Preloader from "../components/preloader"

import { Outlet } from 'react-router-dom';

function AppLayout() {


  return (
    <div >
    
    <Preloader/>
      <Header />

     
        <main className="mx-auto pt-16">
          <Outlet />
        </main>
    

  
    </div>
  );
}

export default AppLayout;
