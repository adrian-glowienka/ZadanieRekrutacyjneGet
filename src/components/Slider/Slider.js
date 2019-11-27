import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <section className="Slider-container">
                <div>
                    <p>YOUR 12 WEEK PROGRESS</p>
                </div>
                <div className="Slider">
                    <p1>Week 1</p1>
                    <p2>Week 2</p2>
                    <p3>Week 3</p3>
                    <p4>Week 4</p4>
                </div>
                <div className="Arrows">
                    <i className="Prev"></i>
                    <i className="Next"></i>
                </div>
                <div>
                    <p>SELECT YOUR PROTEIN OPTIONS</p>
                </div>
            </section>
        )
    }
}
