
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/admin/Footer';
import  Forms  from './components/admin/Form';
import  Message  from './components/admin/Message';
import Navbar from './components/admin/Navbar';
import Progress  from './components/admin/ProgresBar';
import  StudentTable  from './components/admin/StudentTable';
import NavbarUser from './components/user/NavbarUser';
import Slider from './components/user/Slider'
import OurStory from './components/user/OurStory'
import RegisterAdvertise from './components/user/RegisterAdvertise'
import Placements from './components/user/Placements'
import Enquiry from './components/user/Enquiry'
import News1 from './components/user/News1'
import Contact from './components/user/Contact'
import FooterUser from './components/user/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGallery } from './web/gallerySlice';
import { fetchNews } from './web/NewsSlice';
import { fetchPlacement } from './web/placementSlice';
import Copyright from './components/Login ';
import Gallery from './components/user/Gallery';


function App() {
  const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(fetchGallery());
  dispatch(fetchNews());
  dispatch(fetchPlacement());
 },[])
  return (
    <div className="App">
    {/* <AdminRoute/> */}
      
    <Routes>
        <Route path="/admin" element={
        <div className='content'>
          <Navbar />
        </div>
        
        }>
                <Route index element={<><Progress/> <StudentTable /> <Forms /> <Message /> <Footer /></>} />
                <Route path="studentTable" element={<StudentTable />} />
                <Route path="forms" element={<Forms />} />
                <Route path="message" element={<Message />} />
                <Route path="footer" element={<Footer />} /> 
                <Route path="all" element={<> <Footer /> </>} />
        {/*   <Route path="*" element={<NoPage />} />  ERROR PAGE Route*/}
        </Route>
      <Route path="/" element={<NavbarUser/>}>
                   <Route index element={<><Slider/> <OurStory/> <RegisterAdvertise/> <Placements/> <Enquiry/>  <News1/> <Contact/>   <FooterUser/> </>} /> 
                  <Route path='login' element={<><Copyright/><FooterUser/></>}/>
                  <Route path='gallery' element={<><Gallery/><FooterUser/></>}/>
                 <Route path="all" element={<> <Footer /> </>} /> 
                {/* //  <Route path="*" element={<NoPage />} />  ERROR PAGE Route  */}
        </Route> 
        


</Routes>
     
       
  
</div>
  );
}

export default App;
