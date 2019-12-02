import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Foot">
                    <h1><b>Running out of products?</b></h1>
                        <p1>Lorem ipsum dolor sit amet, consect turadipiscing elit.
                        Integer aliquet
                        </p1><br></br><br></br>
                    <div className="Button-Bottom">
                        <button className="Button-Bottom-Prop">Buy now</button>
                    </div>
                </div>
                <div className="Foot">
                    <h1><b>Bod-e Trainer in your pocket</b></h1>
                        <p1>Lorem ipsum dolor sit amet, consect turadipiscing elit.
                        Integer aliquet
                        </p1><br></br><br></br>
                    <div className="Telephone">
                        <button className="Button-Bottom-Prop">iOS</button><br></br>
                        <button className="Button-Bottom-Prop">Android</button>
                    </div>
                </div>                    
                <div className="Foot">
                    <h1><b>Frequently Asked Questions</b></h1>
                        <p1>Lorem ipsum dolor sit amet, consect turadipiscing elit.
                        Integer aliquet
                        </p1><br></br><br></br>
                    <div className="Button-Bottom">   
                        <button className="Button-Bottom-Prop">Read FAQs</button>
                    </div> 
                </div>
            </div>
        )
    }
}
