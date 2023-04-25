import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../component/home/Home';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import GoToTop from '../GoToTop';

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
    </Routes>
     
   
    <Footer/> 
    </>

   
    </Router>
     
   </>
    
  )
}

export default Routerpage;