import React, { Component } from 'react'
import { auth } from 'firebase';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    SignUp = (email, password) => {
        try {
            auth
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
            })
        } catch (error) {
            console.log(error.toString(error));
        }
    }
    
    
    render() {
        return (
            <nav className="Header-board">
                <div className="Buttons">
                        <button className="Button">DASHBOARRD</button>
                        <button className="Button">RECIPES</button>
                        <button className="Button">CHALLENGE</button>
                </div>
                <form>
                    <input 
                        name="login" 
                        type="text" 
                        placeholder="Login"
                        onChangeText={email => this.setState({ email })}
                    />
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Password"
                        onChangeText={password => this.setState({ password })}
                    />
                    <button>Submit</button>
                </form>
            </nav>
        )
    }
}
