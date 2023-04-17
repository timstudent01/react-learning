import React, { Component } from "react";
// import {Component} from "react"; 如果是React17之前 會報錯
// 因為會依賴到 React.createElement
import "./css/index.css"
class Child extends Component {
    static classObj = {
        fontSize: "20px",
    }
    render() {
        const obj = {
            background:"pink"
        }
        return (
            <div  style={obj}>child
                <div style={Child.classObj}>
                    我是20大小字體
                </div>
                <div style={{background:"aqua"}}>
                    {/*注意 這邊第一個{} 代表我們要使用JSX了*/}
                    嗨
                </div>
                <div className={"test"}>
                    外部css
                </div>
            </div>

        )
    }
}

class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>Navbar</h1>
                <Child></Child>
            </div>
        )
    }
}

function Swiper() {
    return (
        <h1>Swiper</h1>
    )
}

const Tabbar = () => {
    return (
        <div>Tabbar</div>
    )
}


export default class ComponentHolder extends Component {

    render() {
        return (
            <div className="component_holder">
                我是箝套組件
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}

