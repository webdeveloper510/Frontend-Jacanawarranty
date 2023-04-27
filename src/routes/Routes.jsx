import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../component/home/Home';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

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