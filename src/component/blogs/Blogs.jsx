import React from "react"
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import blog1 from "../../assets/img/home/blog1.png"
import blog2 from "../../assets/img/home/blog2.png"
import blog3 from "../../assets/img/home/blog3.jpg"
import blog4 from "../../assets/img/home/blog4.webp"
import blog5 from "../../assets/img/home/blog5.jpg"
import blog6 from "../../assets/img/home/blog6.jpg"
class Blogs extends React.Component {

  render() {
  return (
     
    <>
        <div className="row">
        <div className="Blogs-content">
        <h2>Blogs</h2>
        </div>
        </div>

        <div className="row">
        <div className="col-md-4">
        <div className="cards">
        <div className="blogs-outer">
        <img src={blog1} alt="blog"/>
        </div>
        <NavLink className="" to="/"><p>The Benefits of Extending Your Electronic Warranty: Protect Your Devices Today</p></NavLink> 
        
        </div>
        </div>
        <div className="col-md-4">
        <div className="cards">
            <div className="blogs-outer">
        <img src={blog2} alt="blog"/>
        </div>
        <NavLink className="" to="/"><p>Dell Laptop Warranty vs. Third-Party Warranty: Which is Right for You?</p></NavLink> 
       
        </div>
            </div>
            <div className="col-md-4">
            <div className="cards">
            <div className="blogs-outer">
        <img src={blog3} alt="blog"/>
        </div>
        <NavLink className="" to="/"><p>How to Calculate the Cost of an Extended Warranty</p></NavLink> 
        
        </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-4">
            <div className="cards">
            <div className="blogs-outer">
        <img src={blog4} alt="blog"/>
        </div>
        <NavLink className="" to="/"><p>Best Extended Warranty Companies for Electronics</p></NavLink> 
        
        </div>
            </div>
            <div className="col-md-4">
            <div className="cards">
            <div className="blogs-outer">
        <img src={blog5} alt="blog"/>
        </div>
        <NavLink className="" to="/"><p>Can You Purchase an Extended Floor Care Warranty?</p></NavLink> 
      
        </div>
            </div>
            <div className="col-md-4">
            <div className="cards">
            <div className="blogs-outer">
        <img src={blog6} alt="blog"/>
        </div>
        <NavLink className="" to="/"><p>LG Refrigerator Warranties Explained: What's Covered and Wha's Not</p></NavLink> 
        
        </div>
            </div>
        </div>
     
        
    </>
  );
}
}

export default Blogs;

