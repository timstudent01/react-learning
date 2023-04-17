import React, { Component } from "react";
// import {Component} from "react"; 如果是React17之前 會報錯
// 因為會依賴到 React.createElement

class Child extends Component {
    render() {
        return <div className="child">child</div>
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

