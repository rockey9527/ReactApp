import React, { Component } from "react";
import Header from "../../components/header";
import './home.css'

class Home extends Component {
    goToLogin() {
        this.props.history.push('/login')
    }
    render(){
        return (
            <div>
                <Header title="Home Page Header"/>
                <h1 className="P-home">
                    This is home page
                </h1>
                <button onClick={ this.goToLogin.bind(this) }>
                    跳转Login页
                </button>
            </div>
        )
    }
}
 export default Home