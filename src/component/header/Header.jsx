import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';


// <!-- Vendor CSS Files -->
import '../../assets/vendor/animatecss/animate.min.css';
import '../../assets/vendor/aos/aos.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';
import logo from '../../assets/img/home/jacanalogo.png';


// Main CSS File
import '../../assets/css/style.css';
// responsive CSS File
import '../../assets/css/responsive.css';

import { RxHamburgerMenu } from "react-icons/rx";


import logoblue from '../../assets/img/home/logo-blue.png';

const Header =() => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const mobilemenuShow = () => setShow(true);




    return(
        <>

          {/* <!-- ======= Header ======= --> */}
            <header id="header" className="headre">
              <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                  <h1 className="text-light">
                  <NavLink to="/">
                    <img src={logo} alt="logo"  />
                    </NavLink>
                  </h1>
                </div>

                <nav id="navbar" className="navbar">
                  <ul>
                    <li>
                      <NavLink className="" to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Savings"> Savings</NavLink>
                      </li>
                    <li>
                      <NavLink to="/Compare"> Compare</NavLink>
                      </li>
                     

                      <li>
                      <NavLink to="/Coverage"> Coverage</NavLink>
                      </li>
                      <li>
                      <NavLink to="/Plans"> Plans</NavLink>
                      </li>
                      <li>
                      <NavLink to="/blog"> Blog</NavLink>
                      </li>
                      <li>
                      <NavLink to="/App"> App</NavLink>
                      </li>
                  
                    <li>
                      <NavLink to="/FAQ">FAQ</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Contact">Contact</NavLink>
                    </li>

                        {/* <li class="dropdown">
                          <a href="#">
                            <span>
                            My account <IoIosArrowDown style={{ color: 'rgb(20, 34, 224);' }}/>
                              </span> 
                          </a>
                        <ul>
                        <li> <NavLink to="/dashboard">Dashboard</NavLink></li>
                          <li><NavLink>Logout</NavLink></li>
                        </ul>
                      </li> */}
                        <li>
                        <NavLink to="/signup">Signup</NavLink>
                        </li>
                        <li>
                        <NavLink to="/login">Login</NavLink>
                        </li>
                       
                 

                  </ul>
                
                </nav> 
                {/* <!-- .navbar --> */}

                <RxHamburgerMenu onClick={mobilemenuShow}  className="mobile-btn"/>

                <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <div className="logo">
                  <h1 className="text-light">
                  <NavLink to="/">
                    <img src={logoblue} alt="logo" className="mobile-logo" />
                    </NavLink>
                  </h1>
                </div></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         

        <nav id="navbar" className="navbar">
                  <ul>
                    <li>
                      <NavLink className=""  to="/" onClick={handleClose}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Savings" onClick={handleClose}> Savings</NavLink>
                      </li>
                    <li>
                      <NavLink to="/Compare" onClick={handleClose}> Compare</NavLink>
                      </li>
                     

                      <li>
                      <NavLink to="/Coverage" onClick={handleClose}> Coverage</NavLink>
                      </li>
                      <li>
                      <NavLink to="/Plans" onClick={handleClose}> Plans</NavLink>
                      </li>
                      <li>
                      <NavLink to="/Blog" onClick={handleClose}> Blog</NavLink>
                      </li>
                      <li>
                      <NavLink to="/App" onClick={handleClose}> App</NavLink>
                      </li>
                  
                    <li>
                      <NavLink to="/FAQ" onClick={handleClose}>FAQ</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Contact" onClick={handleClose}>Contact</NavLink>
                    </li>

                        {/* <li class="dropdown">
                          <a href="#">
                            <span>
                            My account <IoIosArrowDown style={{ color: 'rgb(20, 34, 224);' }}/>
                              </span> 
                          </a>
                        <ul>
                        <li> <NavLink to="/dashboard">Dashboard</NavLink></li>
                          <li><NavLink>Logout</NavLink></li>
                        </ul>
                      </li> */}
                        <li>
                        <NavLink to="/Signup" onClick={handleClose}>Signup</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Login" onClick={handleClose}>Login</NavLink>
                        </li>
                       
                 

                  </ul>
                
                </nav> 
                {/* <!-- .navbar --> */}

                {/* <div className="row">
                  <div className="mobile-app-section">
                <p>Download Jacanna Warranty App</p>
                <img src={app} alt="app-icons"/>
                </div>
                </div> */}
        </Offcanvas.Body>
      </Offcanvas>
                

              </div>
            </header>
            {/* <!-- End Header --> */}

        </>
    )
}


export default Header;