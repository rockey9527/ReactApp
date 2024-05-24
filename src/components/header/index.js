import React, { Component } from "react"
import './header.css'

class Header extends Component {
    render(){
        return (
            <div className="M-heaser">
                {this.props.title}
            </div>
        )
    }
}

export default Header