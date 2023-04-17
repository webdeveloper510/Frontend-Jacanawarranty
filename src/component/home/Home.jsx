
import React from "react";
import Vimeo from '@u-wave/react-vimeo';
import 'react-multi-carousel/lib/styles.css';
import BackgroundVideo from '../backgroundvideo/backgroundvideo';
import Scrollbar from "./Scrollbar";


const Home = () => {

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
<h2>MASSIVE SAVINGS TO YOU!</h2>
<p>What does all this mean?</p>
<p>The Jacana Warranty App eliminates the dealer markup, which in turn passes <br></br>
Tremendous savings directly to the end user, the consumer.</p>
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








    </>
    )
}


export default Home; 