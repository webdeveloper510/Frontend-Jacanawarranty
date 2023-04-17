import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Phone from '../../assets/img/home/phone.jpg';
import computer from '../../assets/img/home/computer-1.jpg';
import TABLETS from '../../assets/img/home/tablet.jpg';
import APPLIANCES from '../../assets/img/home/appliances (1).jpg';
import TELEVISIONS from '../../assets/img/home/television.jpg';
import GAMING from '../../assets/img/home/video.jpg';
import { RiSmartphoneLine } from "react-icons/ri";
import { IoMdLaptop } from "react-icons/io";
import { FiTablet } from "react-icons/fi";
import { MdOutlineKitchen } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { TbDeviceGamepad2 } from "react-icons/tb";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 992, min: 420 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 420, min: 0 },
    items: 2,

  }
};

class Scrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const { mobile } = this.props;
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform} = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value === 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
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


        <div class="image-container increase-size">

          <div class="image-container-text" draggable={false}>
          <RiSmartphoneLine />
          <h2 className="heading_name">Phones</h2>
         
        {/* <img src={Phone} alt="phone"  /> */}
  
          </div>
		 
        </div>
       <div class="image-container increase-size" >

          <div class="image-container-text"  draggable={false} 
>
          <IoMdLaptop/>
          <h2 className="heading_name">Laptops</h2>
          
        {/* <img src={computer} alt="computer"  /> */}
  
          </div>
		 
        </div>
		
				<div class="image-container increase-size">

          <div class="image-container-text" draggable={false}>
          <FiTablet/>
          <h2 className="heading_name">Tablets</h2>
         
        {/* <img src={TABLETS} alt="TABLETS"  /> */}
          </div>
		 
        </div>

       <div class="image-container increase-size">

          <div class="image-container-text" draggable={false}>
          <MdOutlineKitchen/>
          <h2 className="heading_name">Appliances</h2>
          
        {/* <img src={APPLIANCES} alt="APPLIANCES"  /> */}
  
          </div>
		 
        </div>

       <div class="image-container increase-size">

          <div class="image-container-text" draggable={false}>
          <RiComputerLine/>
          <h2 className="heading_name">Televisions</h2>
        {/* <img src={TELEVISIONS} alt="TELEVISIONS"  /> */}
        
          </div>
		 
        </div>
        <div class="image-container increase-size">

<div class="image-container-text" draggable={false}>
<TbDeviceGamepad2/>
<h2 className="heading_name">Gaming</h2>

        {/* <img src={GAMING} alt="GAMING"  /> */}

</div>

</div>
      </Carousel>
    );
  }
}

export default Scrollbar;