import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        <div className="Slider">
                    <div className="Slide-1">
                        <h1>Week 1</h1>
                    </div>
                    <div className="Slide-2">
                        <h1>Week 2</h1>
                    </div>
                    <div className="Slide-3">
                        <h1>Week 3</h1>
                    </div>
                    <div className="Slide-4">
                        <h1>Week 4</h1>
                    </div>
                </div>
        </Slider>
      </div>
    );
  }
}