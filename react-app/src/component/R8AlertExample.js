import React from 'react'
import { R9HelperUtility2 } from './R9HelperUtility'

function R8AlertExample() {

    const showAlert = () =>{
        alert("Hello User")
    }

    return (
        <>
            <button onClick={showAlert}>Click to show alert</button>
            <R9HelperUtility2/>
        </>
    )
}

export default R8AlertExample