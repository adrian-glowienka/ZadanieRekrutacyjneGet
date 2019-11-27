import React, { Component } from 'react'

export default class WeekBoard extends Component {
    render() {
        return (
            <main className="Board">
                <div className="Time-form">
                    <p>Workout</p>
                </div>
                <section className="Days-section">
                    <div className="Days-week">
                        <h1>DAY 64</h1>
                    </div>
                    <div className="Days-week">
                        <h1>DAY 65</h1>
                    </div>
                    <div>
                        <h1>DAY 66</h1>
                    </div>
                    <div>
                        <h1>DAY 67</h1>
                    </div>
                    <div>
                        <h1>DAY 68</h1>
                    </div>
                    <div>
                        <h1>DAY 69</h1>
                    </div>
                    <div>
                        <h1>DAY 70</h1>
                    </div>
                </section>
            </main>
        )
    }
}
