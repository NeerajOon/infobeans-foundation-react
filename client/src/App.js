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


function App() {
 
  
  return (
    <div className="App">
      {/* <Navbar/>
      <Progress/>
      <StudentTable/>
      <Forms/>
      <Message/>
      <Footer/>
     */}

    <AdminRoute/>

</div>
  );
}

export default App;
