import React from "react"
import styled from "styled-components"
import Vimeo from "@u-wave/react-vimeo"
import Button from 'react-bootstrap/Button';
import IframePlayer from "player-iframe-video";
export default function BackgroundVideo() {
 
  return (
     
    <>
  
  {/* <Vimeo
  video="529949088"
  height={500}
  loop={true}
  responsive
  width={1920}
 
  autoplay
/> */}
      {/* <VideoContainer>
        <Video
          background={true}
          height={500}
          loop={true}
          responsive
          video="529949088"
          width={1920}
        />
      </VideoContainer> */}
      {/* <Overlay /> */}
      <div className="text_banner">
        <div className="container">
        <div className="row">
        <h1 className="main_text">The <span><b>best</b></span> warranty coverage,<br></br>with <strong><span>hassle-free</span></strong> claims at the <strong><span>lowest price!</span></strong></h1>
        </div>
        <div className="row">
          <div className="top-banner-btns">
        <Button>Download app</Button>
        <Button>Shop Warranties</Button>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}

// const VideoContainer = styled.div`
//   bottom: 0;
//   left: 0;
//   min-height: 100%;
//   min-width: 100%;
//   object-fit: cover;
//   object-position: center;
//   position: fixed;
//   right: 0;
//   top: 0;
//   z-index: -1;
// `

// const Video = styled(props => <Vimeo {...props} />)`
//   height: 46.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
//   left: 50%;
//   min-height: 500px;
//   min-width: 177.77vh; // for a 16:9 aspect ratio, 16/9*100 = 177.77
//   position: absolute;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   width: 100vw;
// `

// {/*
// For a nice vintage and darkening effect
// */}

// const Overlay = styled.div`
//   background-color:rgb(0 0 0 / 67%);
//   bottom: 0;
//   box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
//   left: 0;
//   min-height: 100%;
//   min-width: 100%;
//   object-fit: cover;
//   object-position: center;
//   position: absolute;
//   right: 0;
//   top: 0;
//   z-index: -1;
// `