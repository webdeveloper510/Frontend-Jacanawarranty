import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../component/home/Home';
import Header from '../component/header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter } from "react-router-dom";



import GoToTop from '../GoToTop';
import { AuthProvider } from '../component/context/UserContext';


const Routerpage =()=>{

  /************ Start page show hide condtion page ***************/
  const token = localStorage.getItem("token");
  console.log("TOKEN", token);

  const DigitalCode = localStorage.getItem("DigitalCode");
  console.log("DigitalCode", DigitalCode);


 /******************* Start Api call Amount & Delivery State  *******/
  
  return(
  <>

  

    <Router>  
    <GoToTop />

    <>
  
    <Header/>
   
    <Routes>
    <Route exact path="/"  element={ <Home/>} /> 
{/* <>
{  
       token || DigitalCode != undefined || '' ? (
        <Route exact path='/sendMoney' element= {< SendMoney /> } />

        
       ):(
        <></>

       )
    }
 </> */}

   
    
    
    </Routes>
    <ToastContainer />
     

    </>
    </Router>
      {/* ):(
        <>
        </>

        )
      } */}
     
   </>
    
  )
}

export default Routerpage;