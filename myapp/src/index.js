import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./01-base/01_class_component"
const root = ReactDOM.createRoot(document.querySelector("#root"))
const arr = ["嗨", "123","I am Terry"]
const arrItem = arr.map((item) => {
    return <li>{item}</li>
    }
)
root.render(
    <React.StrictMode>
        <div className="class" id="id">
            hello world
            <ul>
                {arrItem}
            </ul>
        </div>
        <div>
            <App/>
        </div>
    </React.StrictMode>
)