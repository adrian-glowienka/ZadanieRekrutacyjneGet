import React, { Component } from 'react'
import { auth } from 'firebase';
import MediaQuery from 'react-responsive'

export default class Header extends Component {
       
        state = {
            email: "",
            password: ""
        }
    

        handleInputChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
          };
        
          handleSubmit = (event) => {
            event.preventDefault();
            const { email, password } = this.state;
        
            
            auth.createUserWithEmailAndPassword(email, password)
              .then((user) => {
                this.props.history.push('/');
              })
              .catch((error) => {
                this.setState({ error: error });
              });
          };
    
    
    render() {
        const { email, password } = this.state;
        return (
            <nav className="Header-board">
              <MediaQuery minDeviceWidth={320} device={{ deviceWidth: 480 }}></MediaQuery>
                <div className="Buttons">
                        <button className="Button-Top-Active">DASHBOARRD</button>
                        <button className="Button-Top">RECIPES</button>
                        <button className="Button-Top">CHALLENGE</button>
                </div>
            <form>
              <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
              />
              <button className="Button-Submit"onClick={this.handleSubmit}>Submit</button>
            </form>
            </nav>
        )
    }
}
