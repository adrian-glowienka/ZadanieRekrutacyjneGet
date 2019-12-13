import React, { Component } from 'react'

export default class SelectWeek extends Component {
    render() {
        return (
            <div className="Select">
                <select className="Select-Options">
                    <option selected disabled>Choose Week</option>
                    <option value="A">Week 1</option>
                    <option value="B">Week 2</option>
                    <option value="C">Week 3</option>
                    <option value="D">Week 4</option>
                </select>
            </div>
        )
    }
}
