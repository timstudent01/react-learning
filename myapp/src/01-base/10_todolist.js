import React, {Component, useCallback, useEffect, useState} from "react";

export default function App() {
    const [value,setValue] = useState("")
    const [list,setList] = useState(["123","456"])
    const handleValueChange= useCallback((e)=>{
        setValue(e.target.value)
        },[])

    const handleClick = useCallback(()=> {
        setList((prevList)=>[...prevList, value])
    },[value])

    useEffect(()=>{
        console.log('Component did mount')
    },[])

    return (
        <div>
            <input value={value} onChange={handleValueChange}/>
            <button onClick={handleClick}> add
            </button>
            <ul>
                {list.map((el,idx)=>{
                    return <li key={idx}>idx{idx},el:{el}</li>
                })}
            </ul>
        </div>
    )

}
