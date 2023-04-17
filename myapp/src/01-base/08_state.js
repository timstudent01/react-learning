import React, { Component, useState } from "react";

// export default class App extends Component {
//     render() {
//         const [Text,setText]=useState("收藏")
//         return (
//             <div>
//                 <h1>歡迎來到React開發</h1>
//                 <button onClick={()=>{setText(Text="取消收藏")}}>{text}</button>
//             </div>
//         )
//     }
// }

export default function App() {
    const [Text, setText] = useState("收藏")
    const imageNames = [];

    for (let i = 1; i <= 54; i++) {
      const imageName = `2019_${i.toString().padStart(3, '0')}.jpg`;
      imageNames.push(imageName);
    }
    
    return (
        <div>
            <h1>歡迎來到React開發</h1>
            <button onClick={() => { setText(Text === "收藏" ? "取消收藏" : "收藏") }}>{Text}</button>
            {imageNames.map((imageName, index) => (
                <img key={index} style={{ width: "200px" }} src={`https://fs.daoyidh.com/static/tltc/village/2019/${imageName}`} />
            ))}


        </div >
    )
}