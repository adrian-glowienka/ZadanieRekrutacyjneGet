import React, { Component } from 'react'

export default class Header extends Component {
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
