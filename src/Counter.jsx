import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    function handdleAdd() {
        const newCount = count + 1;
        setCount(newCount)
    }
    function handleRemove(){
        const newCount = count - 1 ;
        setCount(newCount)
    }

    // console.log(count)
    return (
        <div style={{border:'2px solid blue'}}>
            <h2>Counter: {count}</h2>
            <button onClick={handdleAdd}>add</button>
            <button onClick={handleRemove}>Reduce</button>
        </div>
    )
}