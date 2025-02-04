import React from 'react'

function R2props(props) {

    

    const showAlert = () =>{
        alert("you click button")
    }

    const sixMonth = () =>{
        alert("4.5 %")

    }

    const oneYear = () =>{
        alert("5.5 %")
        

    }

    const twoYear = () =>{
        alert("6.5 %")
        

    }

    const fiveYear = () =>{
        alert("7.0 %")
        
        
    }
    return (
        <>
        <h1>Know your FD Rate.</h1>


        
        <button onClick={sixMonth}>6 Month</button><br/>
        <button onClick={oneYear}>1 year</button><br/>
        <button onClick={twoYear}>2 years</button><br/>
        <button onClick={fiveYear}>5 years</button><br/>
        </>
    )
}

export default R2props;