import React from "react";

const arr = ["我是1","我是2","我是3"]
const arrItem = arr.map(item=><li>{item}</li>)

class AppMiddleTest extends React.Component {
    render() {
        return (
            <div className="App_middle"> 我在更裡面 
                <ul>
                    {arrItem}
                </ul>
            </div>
        )
    }
}

export default AppMiddleTest