import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsPhone } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";
import { SlScreenTablet } from "react-icons/sl";
import { GiBlender } from "react-icons/gi";
import { RxLaptop } from "react-icons/rx";
import { TfiGame } from "react-icons/tfi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 992, min: 420 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 420, min: 0 },
    items: 2,

  }
};

class Scrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
   
    return (
        
      <Carousel
        ssr={false}
        ref={el => (this.Carousel = el)}
        partialVisible={false}
        autoPlay={true}
        infinite={true}
        //customTransition="all .5"
        transitionDuration={300}
        //customButtonGroup={<CustomSlider />}
        itemClass="image-item"
        itemAriaLabel="Image-aria-label"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={nextSlide => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: -0 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
      >


        <div className="image-container increase-size">

          <div className="image-container-text" draggable={false}>
          <BsPhone/>
          <h2 className="heading_name">Phones</h2>
         
        {/* <img src={Phone} alt="phone"  /> */}
  
          </div>
		 
        </div>
       <div className="image-container increase-size" >

          <div className="image-container-text"  draggable={false} 
>
          <BsLaptop/>
          <h2 className="heading_name">Laptops</h2>
          
        {/* <img src={computer} alt="computer"  /> */}
  
          </div>
		 
        </div>
		
				<div className="image-container increase-size">

          <div className="image-container-text" draggable={false}>
          <SlScreenTablet/>
          <h2 className="heading_name">Tablets</h2>
         
        {/* <img src={TABLETS} alt="TABLETS"  /> */}
          </div>
		 
        </div>

       <div className="image-container increase-size">

          <div className="image-container-text" draggable={false}>
          <GiBlender/>
          <h2 className="heading_name">Appliances</h2>
          
        {/* <img src={APPLIANCES} alt="APPLIANCES"  /> */}
  
          </div>
		 
        </div>

       <div className="image-container increase-size">

          <div className="image-container-text" draggable={false}>
          <RxLaptop/>
          <h2 className="heading_name">Televisions</h2>
        {/* <img src={TELEVISIONS} alt="TELEVISIONS"  /> */}
        
          </div>
		 
        </div>
        <div className="image-container increase-size">

<div className="image-container-text" draggable={false}>
<TfiGame/>
<h2 className="heading_name">Gaming</h2>

        {/* <img src={GAMING} alt="GAMING"  /> */}

</div>

</div>
      </Carousel>
    );
  }
}

export default Scrollbar;