import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "../../styles/slider.css"
import slider1 from "../../images/slider_1.jpg"
import slider2 from "../../images/slider_2.jpg"
import slider3 from "../../images/slider_3.jpg"
import slider4 from "../../images/slider_4.jpg"
import slider5 from "../../images/slider_5.jpg"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  return (
    <AutoplaySlider
      organicArrows={false}
      fillParent={true}
      mobileTouch={true}
      play={true}
      cancelOnInteraction={false}
      interval={5000}
      infinite={true}
    >
      <div style={{ background: `url(${slider1}) center center/cover` }} />
      <div style={{ background: `url(${slider2}) center center/cover` }} />
      <div style={{ background: `url(${slider3}) center center/cover` }} />
      <div style={{ background: `url(${slider4}) center center/cover` }} />
      <div style={{ background: `url(${slider5}) center center/cover` }} />
    </AutoplaySlider>
  )
}

export default Slider
