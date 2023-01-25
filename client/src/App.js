
import { useEffect } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import AdminRoute from './components/adminRoute'
import NavbarUser from './components/user/navbarUser';
import { Route, Routes } from 'react-router-dom';
import UserRoute from './components/userRoute';


function App() {
 
  
  return (
    <div className="App">
     
    <AdminRoute/>
       
  
</div>
  );
}

export default App;
