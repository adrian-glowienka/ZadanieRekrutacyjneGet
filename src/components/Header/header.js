import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className="Header-board">
                <ul>
                    <li>DASCHBOARD</li>
                    <li>RECIPES</li>
                    <li>CHALLENGE</li>
                </ul>
                <form>
                    <input 
                        name="login" 
                        type="text" 
                        placeholder="Login"
                    />
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Password"
                    />
                    <button>Submit</button>
                </form>
            </nav>
        )
    }
}
