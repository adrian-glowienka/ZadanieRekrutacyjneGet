import React, { Component } from 'react';
import SelectWeek from '../SelectWeek/SelectWeek';



export default class Dashboard extends Component {
    render() {
        return (
            <section className="Slider-container">
                <div>
                    <p>YOUR 12 WEEK PROGRESS</p>
                </div>
                <SelectWeek />
                <div>
                    <p>SELECT YOUR PROTEIN OPTIONS</p>
                </div>
            </section>
        )
    }
}
