import React,{Component} from "react";

export default class EventBind extends Component {
    render() {
        return (
            <div>
                <input/>
                <button onClick={()=>{
                    console.log("click")
                }}>add</button>
            </div>
        )
    }
}