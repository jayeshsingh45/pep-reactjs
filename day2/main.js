//simulate basic banking operations such as creating an account.
//depositing money, and withdrawing money using functions

let accounts = []


function createAccount(name,accountNumber,balance){
    accounts.push({accountHolderName:name,accNum:accountNumber,avaliableBalance:balance})
}

function depostMoney(accountNumber,depositeAmount){
    accounts.forEach((account) =>{
        if(account.accNum == accountNumber){
            account.avaliableBalance += depositeAmount
        }
    })
}

function withDrawMoney(accountNumber,withDrawalAmount){
    accounts.forEach((account) => {
        if(account.accNum == accountNumber){
            if(withDrawalAmount <= account.avaliableBalance){
                account.avaliableBalance =  account.avaliableBalance - withDrawalAmount
            }else{
                console.log("Insufficient balance")
            }
        }    
    })                           
}


console.log("Create Account----------------")
createAccount("mohan",10,1000)
createAccount("sohan",11,500)
console.log(accounts)


console.log("deposit money-----------------")
depostMoney(10,50)
console.log(accounts)

console.log("withdraw money----------------")
withDrawMoney(10,70)
console.log(accounts)