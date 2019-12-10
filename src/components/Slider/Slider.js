import React, { Component } from 'react';
import SimpleSlider from '../SimpleSlider/SimpleSlider';


export default class Slider extends Component {
    render() {
        return (
            <section className="Slider-container">
                <div>
                    <p>YOUR 12 WEEK PROGRESS</p>
                </div>
                <div>
                    <SimpleSlider />
                </div>
                <div>
                    <p>SELECT YOUR PROTEIN OPTIONS</p>
                </div>
            </section>
        )
    }
}
