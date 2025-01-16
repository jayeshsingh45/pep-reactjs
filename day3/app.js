// function myFunc(x,y=5,z=10){
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }

// myFunc(1,undefined,null)


function restPara(x,y,...z){
    console.log(x)
    console.log(y)
    console.log(z)
}

// restPara(10,15,"hello",20,30)


//spread operator
function spreadOperator(a,b,...args){
    console.log(a)
    console.log(b)

    console.log(args)

}

spreadOperator(1,2,3,4,5)



