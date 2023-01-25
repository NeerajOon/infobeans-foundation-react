import logo from './logo.svg';
import './App.css';
import Navbar from './components/admin/navbar';
import { useEffect } from 'react';
import { Progress } from './components/admin/progresBar';
import { StudentTable } from './components/admin/studentTable';
import { Message } from './components/admin/message';
import Footer from './components/admin/footer';
import { Forms } from './components/admin/form';
import AdminRoute from './components/adminRoute';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { fetchNews } from './web/NewsSlice';
import { fetchGallery } from './web/gallerySlice';
import { fetchRegistration } from './web/adminSlice';


function App() {
 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchNews());
    dispatch(fetchGallery());
    dispatch(fetchRegistration());
  },[])
  return (
    <div className="App">
      {/* <Navbar/>
      <Progress/>
      <StudentTable/>
      <Forms/>
      <Message/>
      <Footer/>
     */}
     <Routes>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/admin-login' element={<AdminLogin/>}/>
     </Routes>

<AdminRoute/>

</div>
  );
}

export default App;
