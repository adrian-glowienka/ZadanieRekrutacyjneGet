import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Foot-1">
                    <h1>Running out of products?</h1>
                    <p1>Lorem ipsum dolor sit amet, consect turadipiscing elit.
                     Integer aliquet
                    </p1><br></br>
                    <button>Buy now</button>
                </div>
                <div className="Foot-2">
                    <h1>Bod-e Trainer in your pocket</h1>
                    <p1>Lorem ipsum dolor sit amet, consect turadipiscing elit.
                     Integer aliquet
                    </p1><br></br>
                    <button>iOS</button>
                    <button>Android</button>
                </div>                    
                <div className="Foot-3">
                    <h1>Frequently Asked Questions</h1>
                    <p1>Lorem ipsum dolor sit amet, consect turadipiscing elit.
                     Integer aliquet
                    </p1><br></br>
                    <button>Read FAQs</button>
                </div>
            </div>
        )
    }
}
