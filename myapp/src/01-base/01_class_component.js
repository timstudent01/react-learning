// class Test {
//     constructor(){
//         this.a = 1
//         this.b = 3
//     }
//     testA() {
//         console.log("testA")
//     }
//     testB(){
//         console.log(this.b);
//     }
// }

// class ChildTest extends Test {
//     testA(){
//         console.log("testC");
//     }
// }

// const obj = new Test()
// const childObj = new ChildTest()
// console.log(obj.a);
// obj.testA()
// obj.testB()
// console.log(childObj.a);
// childObj.testA();
// childObj.testB();

import React from "react";
import AppMiddleTest from "./01_middle_component";
class App extends React.Component {
    render() {
        return (
            <div className="App">
                我是App 01_class_component 組件
                <AppMiddleTest />
            </div>
        )
    }
}

export default App

