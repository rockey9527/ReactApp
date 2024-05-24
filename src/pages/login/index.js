import React, { Component } from "react";
import Header from "../../components/header";
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import './login.css'
import { DatePicker } from 'antd';

class Login extends Component {
    goToHome() {
        this.props.history.push('/home')
    }
    render(){
        return (
            <div>
                <Header title="Login Page Header"/>
                
                <h1 className="P-login">
                    This is Login page
                </h1>
                集成Antd<DatePicker />
                <p>login: myData = {this.props.myData}</p>
                
                <button onClick={ this.goToHome.bind(this) }>跳转Home页</button>
                {/* <button onClick={ ()=>{this.props.getData('123456')} }>更改login的myData</button> */}
            </div>
        )
    }
}

 // 把store中的数据映射到组件的props
// const mapStateToProps = (state) => ({
    // myData: state.getIn(['login', 'myData']),
// })

//    // 把store的Dispatch映射到组件的props
//    const mapDispatchToProps = (dispatch) => ({
//        getData(data) {
//            const action = actionCreators.getData(data)
//            dispatch(action)
//        }
//    })

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login