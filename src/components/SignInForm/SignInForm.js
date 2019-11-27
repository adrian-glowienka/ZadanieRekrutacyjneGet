import React, { Component } from 'react'

export default class SignInForm extends Component {
    render() {
        return (
<form className="Sign-in">
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
        )
    }
}
