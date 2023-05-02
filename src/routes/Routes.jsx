import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Component/home/Home';
import Header from '../Component/header/Header';
import Footer from '../Component/footer/Footer';

const Routerpage =()=>{

  
  return(
  <>

  

    <Router>  

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