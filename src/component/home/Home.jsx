
import React from "react";
import Vimeo from '@u-wave/react-vimeo';
import 'react-multi-carousel/lib/styles.css';
import BackgroundVideo from '../backgroundvideo/backgroundvideo';
import Scrollbar from "./Scrollbar";
import {GiReceiveMoney} from "react-icons/gi";
import {VscGraphLine} from "react-icons/vsc";
import {BsCurrencyDollar} from "react-icons/bs";
import {TbDeviceMobileCharging} from "react-icons/tb";
import {BsDroplet} from "react-icons/bs";
import {GiFalling} from "react-icons/gi";
import {TbSunglasses} from "react-icons/tb";
import {AiOutlineFire} from "react-icons/ai";
import {MdElectricBolt} from "react-icons/md";
import {RxCrossCircled} from "react-icons/rx";
import { BsPhone } from "react-icons/bs";
import { GiGardeningShears } from "react-icons/gi";
import { GiBlender } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";
import { CgGym } from "react-icons/cg";
import { MdCancelPresentation } from "react-icons/md";
import { MdOutlineTransferWithinAStation } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TfiGame } from "react-icons/tfi";
import { FaShippingFast } from "react-icons/fa";
import { RxExclamationTriangle } from "react-icons/rx";
import { ProgressBar} from 'react-bootstrap';
import assistantimg from "../../assets/img/home/Jasmine2.png";
import phoneimage from "../../assets/img/home/phone.png";
import Button from 'react-bootstrap/Button';

import Blogs from "../blogs/Blogs";


class Home extends React.Component {
  render() {
  const percentage = 60
  const percentage1 = 80
  
    return(
        <>
        
<section className="top_sec">
  <div className="banner_main first-section">
<BackgroundVideo></BackgroundVideo>
</div>
</section>
<div className="plans_sec second-section">

<Scrollbar /> 

</div>



<div className="third-section">
<div className="curve">
  <div className="container">
  <div className="row">
  <div className="video-content">
<h2>Massive savings to you!</h2>
<p>What does all this mean?</p>
<p>The Jacana Warranty App eliminates the dealer markup, which in turn passes <br></br>
Tremendous savings directly to the end user, the consumer.</p>


<div className="row margin-t">
<div className="col-md-12">
<div className="row">
 
 <div className="col-md-4">
<div className="icons_row">
  <VscGraphLine/>
  <h3>140% INCREASE IN DEMAND</h3>
  <p>The mobile phone extended warranty space, for example has more than doubled in the past 5 years with growth of 140.38%  and an average of 28.07% yearly.</p>
    </div>
</div>
<div className="col-md-4">
  <div className="icons_row">
  <GiReceiveMoney/>
  <h3>20 BILLION IN SAVINGS</h3>
  <p>American consumers purchase $40 billion dollars per year in extended warranties.
    Up to $20 billion dollars are paid out in commissions to middlemen, IE: retail dealers.</p>
    </div>
 </div>
 <div className="col-md-4">
 <div className="icons_row">
  <BsCurrencyDollar/>
  <h3>SAVINGS TO CONSUMER</h3>
  <p>The Jacana Warranty App eliminates the middleman, <br></br>saving consumers billions (or 50%) on extended warranties!</p>
    </div>
</div>

</div>
</div>
</div>


<Vimeo
  className="video-section"
  video="257319294"
  autoplay
/>


</div>
</div>
</div>
</div>
</div>


<div className="fourth-section">
<div className="container">
  <div className="row align-center">
    <div className="col-md-6">
      <div className="assistant-content">
     <h2>All New Virtual claims assistant</h2>
     <span>ATTENTION JACANA WARRANTY CUSTOMERS!</span>
     <p>As your proud warranty provider we have always spent countless hours making your claims experience as simple,
       engaging and user-friendly as possible! This is why we are excited to announce that our file a claims dashboard and filing process has gone from intuitive, to innovative and now to INGENIOUS! Please welcome our new Virtual Claims Specialist, Jasmine! Jasmine is here to make filing claims and understanding claim terminology as effortless as possible! You will now have the options to file claims with Jasmine, and she will be assisting you every step of the way.</p>
    </div>
    </div>
    <div className="col-md-6">
    <img src={assistantimg} alt="app-icons" />
    </div>
    </div>

   <div className="row">
  <div className="subscribe-section">
    <div className="row align-center">
      <div className="col-md-8">
    <h2>Shop our wide selection of warranties</h2>
    <p>Jacana Warranty offers customers accident coverage and product breakdown coverage for the consumer good.
    Share with your friends in one touch</p>
    </div>

    <div className="col-md-4 align-right">
    <Button>Shop Now</Button>
    </div>
    </div>
  </div>
   </div>

    </div>
</div>


<div className="fifth-section">
<div className="container">
  <div className="row">
  <div className="product-content">
     <h2>The lowest Prices</h2>
     <p>Streamlining the industry. Affording you the lowest prices in the industry!</p>
    </div>
  
    <ul>
    <h3>Choose a Product type</h3>
      <li>Car Mobile</li>
      <li>Camera</li>
      <li>Golf</li>
      <li>Toys</li>
      <li>Appliances</li>
      <li>Laptop</li>
      <li>Desktop</li>
      <li>Home Security</li>
      <li>Houseware</li>
      <li>Jewellery</li>
      <li>Smart phone</li>
      <li>Watches</li>
      <li>Home Theatre</li>
      <li>Floor care</li>
      <li>Personal care</li>
    </ul>
    </div>
    </div>
</div>


<div className="sixth-section">


<div className="container">
  <div className="row align-center">
    <div className="col-md-8">
      <div className="assistant-content">
     <h2>Breakdown and accidental</h2>
     <span>Your Warranty Works for You!</span>
     <p>With breakdown and accidental for up to 5 years, you are completely covered for the long haul!</p>
    </div>
    <ProgressBar now={percentage} label={`Manufacturer (Breakdown Only, Very Short Term)`} />
    <ProgressBar now={percentage1} label={`JACANA EXTENDED WARRANTY (Breakdown & Accidental, Up to 5 years!!!)`} />


    <div className="row icons-row">
     <div className="col-md-4">
     <div className="each-row">
     <TbDeviceMobileCharging/>
        <h3>CRACKED SCREENS</h3>
      </div>
      </div>
      <div className="col-md-4">
        <div className="each-row">
        <BsDroplet/>
        <h3>LIQUID DAMAGE</h3>
        </div>
      </div>
      <div className="col-md-4">
      <div className="each-row">
      <GiFalling/>
        <h3>FALLS & DROPS</h3>
      </div>
      </div>
      <div className="col-md-4">
      <div className="each-row">
      <TbSunglasses/>
        <h3>NORMAL WEAR</h3>
      </div>
      </div>
      <div className="col-md-4">
      <div className="each-row">
      <AiOutlineFire/>
        <h3>FIRE & HEAT</h3>
      </div>
      </div>
      <div className="col-md-4">
      <div className="each-row">
      <MdElectricBolt/>
        <h3>POWER SURGES</h3>
      </div>
     </div>
    </div>
    </div>
    
    </div>


    </div>

</div>


<div className="seventh-section">
<div className="container">
  <div className="row align-center">
  <div className="center-content">
     <h2>Downlaod jacanna app</h2>
     <div className="col-md-12">
    <Button>App Store</Button>
    <Button>Google Play</Button>
    </div>
    </div>
  <div className="col-md-4">
  <div className="icons_row">
  <BsPhone/>
  <h3>SMART PHONES</h3>
  <p>Covering all brands, makes and models.
</p>
    </div>
    <div className="icons_row">
  <TfiGame/>
  <h3>ELECTRONICS</h3>
  <p>MP3, Camera CamCorder, Tablets, Laptops, Desktop Systems, PC Peripheral, Video Gaming Consoles, Portable Products.
</p>
    </div>

    <div className="icons_row">
  <SlScreenDesktop/>
  <h3>HOME THEATRE/TV'S
</h3>
  <p>Home Theatre, Televisions, and even DVD Media. We cover all makes and types.
</p>
    </div>
    
  </div>
  <div className="col-md-4">
<img src={phoneimage} alt="image" className="center-image"/>
  </div>
  <div className="col-md-4">
  <div className="icons_row">
  <CgGym/>
  <h3>SPORTS EQUIPMENT</h3>
  <p>Fitness Equipment, Golfing Equipment, and Cycling Equipment, basically all sports equipment!
</p>
    </div>
    <div className="icons_row">
  <GiBlender/>
  <h3>APPLIANCES</h3>
  <p>Replace, Repair/Replace, or Repair all makes and models.</p>
    </div>
    <div className="icons_row">
  <GiGardeningShears/>
  <h3>HOME/GARDEN/TOOLS</h3>
  <p>Furniture, Floorcare, Housewares, Lawn & Garden, Home Security</p>
    </div>
  </div>
</div>

<div className="row">
  <div className="subscribe-section">
    <div className="row align-center">
      <div className="col-md-8">
    <h2>Shop our wide selection of warranties</h2>
    <p>Jacana Warranty offers customers accident coverage and product breakdown coverage for the consumer good.
    Share with your friends in one touch</p>
    </div>

    <div className="col-md-4 align-right">
    <Button>Shop Now</Button>
    </div>
    </div>
  </div>
   </div>
</div>
</div>


<div className="eight-section">
<div className="container">
  <div className="row align-center">
  <div className="shipping-content">
     <h2>The lowest prices around</h2>
     <span>Streamlining the industry. Affording you the lowest prices in the industry!</span>
     <p>(These terms serve as an agreement paraphrasing, for the full General Service Agreement Click Here)</p>
    </div>
    </div>

    <div className="row margin-t">
    <div className="col-xl-4 col-lg-4 wow fadeInLeft animated" data-wow-delay="100ms">
						<div className="feature-three__single">
							<div className="feature-three__icon insur-icon-svg">
								<span aria-hidden="true" class="  icon-contract"><MdCancelPresentation/></span>							</div>
							<div className="feature-three__content">
								<h3 className="feature-three__sub-title">CANCELLATIONS</h3>
								<p className="feature-three__title">If you cancel your warranty within the first 30 days, you will get a full refund, and it will be sent to you within 10 business days.
                </p>
							</div>
						</div>
					</div>
          <div className="col-xl-4 col-lg-4 wow fadeInLeft animated" data-wow-delay="100ms">
						<div className="feature-three__single">
							<div className="feature-three__icon insur-icon-svg">
              <span aria-hidden="true" class="  icon-contract"><MdOutlineTransferWithinAStation/></span>									</div>
							<div className="feature-three__content">
								<h3 className="feature-three__sub-title">COVERAGE FOLLOWING</h3>
								<p className="feature-three__title">If you upgrade your phone, continuous coverage follows the upgrade. If you sell your product, your warranty follows your product.

</p>
							</div>
						</div>
					</div>
          <div className="col-xl-4 col-lg-4 wow fadeInLeft animated" data-wow-delay="100ms">
						<div className="feature-three__single">
							<div className="feature-three__icon insur-icon-svg">
              <span aria-hidden="true" class="  icon-contract"><AiOutlineFileProtect/></span>								</div>
							<div className="feature-three__content">
								<h3 className="feature-three__sub-title">FAST CLAIM FILING</h3>
								<p className="feature-three__title">Your customer portal allows you to file a claim instantly with instant responses and quick claim adjudication that saves money!

</p>
							</div>
						</div>
					</div>
          <div className="col-xl-4 col-lg-4 wow fadeInLeft animated" data-wow-delay="100ms">
						<div className="feature-three__single">
							<div className="feature-three__icon insur-icon-svg">
              <span aria-hidden="true" class="  icon-contract"><AiOutlineClockCircle/></span>						</div>
							<div className="feature-three__content">
								<h3 className="feature-three__sub-title">TURN AROUND TIME</h3>
								<p className="feature-three__title">We'll have either an authorized on-site service repair specialist at your door, or have a new replacement in your hand within 5 days of your claims request.

</p>
							</div>
						</div>
					</div>
          <div className="col-xl-4 col-lg-4 wow fadeInLeft animated" data-wow-delay="100ms">
						<div className="feature-three__single">
							<div className="feature-three__icon insur-icon-svg">
              <span aria-hidden="true" class="  icon-contract"><FaShippingFast/></span>						</div>
							<div className="feature-three__content">
								<h3 className="feature-three__sub-title">SIMPLE SHIPPING!
</h3>
								<p className="feature-three__title">We guarantee to cover all shipping expenses if the manufacturer doesn’t cover shipping charges!

</p>
							</div>
						</div>
					</div>
          <div className="col-xl-4 col-lg-4 wow fadeInLeft animated" data-wow-delay="100ms">
						<div className="feature-three__single">
							<div className="feature-three__icon insur-icon-svg">
              <span aria-hidden="true" class="  icon-contract"><RxExclamationTriangle/></span>		</div>
							<div className="feature-three__content">
								<h3 className="feature-three__sub-title">NO FRUSTRATING CLAIMS
</h3>
								<p className="feature-three__title">We are limiting the time you spend on the phone, by simplifying the claims adjudication process. Saving you time and frustration!

</p>
							</div>
						</div>
					</div>
    </div>
    </div>
  </div>
  


  <div className="blogs-section">
    <div className="container">
     
    <Blogs/>
      
    </div>

  </div>
    </>
    )
}
}

export default Home; 
