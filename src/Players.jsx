import { useState } from "react"

export default function Players(){
    const [team, setCount] = useState(11);

    const hanndleBtn = () => {
        const newCount = team + 1 ;
        setCount(newCount)
    }
    function handlebtn2(){
        setCount (team -1)
    }
    const playersStyle = {
        margin: '20px',
        border: '2px solid purple',
        borderRadius: '15px',
        padding: '20px'
    }
    return (
        <div style={playersStyle}>
            <h3>Players:{team} </h3>
            <button onClick={hanndleBtn}>add</button>
            <button onClick={handlebtn2}>Remove</button>
        </div>
    )
}