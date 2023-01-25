import React from 'react'
import {Routes, Route} from 'react-router-dom';
import NavbarUser from './user/navbarUser';
import Slider from './user/slider';
import OurStory from './user/ourStory';
import RegisterAdvertise from './user/registerAdvertise';
import Placements from './user/placements';
import Enquiry from './user/enquiry';
import News from './user/enquiry';
import Contact from './user/contact';
import Footer from './user/footer';

export default function UserRoute() {
  return (
    <div>
     
    
  <Routes>
        <Route path="/" element={<NavbarUser/>}>
                <Route index element={<><Slider/> <OurStory/> <RegisterAdvertise/> <Placements/> <Enquiry/>  <News/> <Contact/>   <Footer/> </>} /> 
                {/* <Route path="abc" element={<Slider />} />
                <Route path="forms" element={<Forms />} />
                <Route path="message" element={<Message />} />
                <Route path="footer" element={<Footer />} />  */}
               
               
                {/* <Route path="all" element={<> <Footer /> </>} /> */}
        {/*   <Route path="*" element={<NoPage />} />  ERROR PAGE Route */}
        </Route>
</Routes>
    </div>
  )
}
