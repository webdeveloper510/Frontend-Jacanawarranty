import React from "react"
import styled from "styled-components"
import Vimeo from "@u-wave/react-vimeo"
import Button from 'react-bootstrap/Button';
import IframePlayer from "player-iframe-video";
export default function BackgroundVideo() {
 
  return (
     
    <>

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

