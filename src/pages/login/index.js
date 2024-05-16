import React, { Component } from "react";
import './login.css'

class Login extends Component {
    goToHome() {
        this.props.history.push('/home')
    }
    render(){
        return (
            <div>
                <h1 className="P-login">
                    This is Login page
                </h1>
                <button onClick={ this.goToHome.bind(this) }>
                    跳转Home页
                </button>
            </div>
        )
    }
}

export default Login