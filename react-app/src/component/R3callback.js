import React,{useEffect, useState} from 'react'

function R3callback() {
    const [count,setCount] = useState(0)

    const [calculator, setCalculator] = useState(0)

    useEffect(() =>{
        setCalculator(() => count * 2)
    },[count])
    


    return (
        <>
            <p>count: {count}</p>
            <button onClick={setCount(() => count+1)}>Count</button>

            <p>Calculation {calculator}</p>
        </>
    )
}

export default R3callback;