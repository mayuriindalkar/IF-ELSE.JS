BALANCE = "20000"
console.log("* WELCOME TO ATM *")
console.log(BALANCE,"Balance In Your Account")
const readlineSync=require("readline-sync")
var Atm_card=readlineSync.question("Enter Your Atm Card : ")
if (Atm_card=="Card"){
    var language=readlineSync.question("Enter the language : ")
    if (language=="hindi" || "english" || "marathi"){
        var account=readlineSync.question("Enter The Account Type : ")
        if (account=="saving" || account=="current"){
            var pin_code=readlineSync.questionInt("Enter the pin code : ")
            if (pin_code==1234 || 3636 || 3621){
                var amount_cash=readlineSync.questionInt("Enter the amount cash : ")
                if (amount_cash>0 && amount_cash<20000){
                    console.log(amount_cash, "Withdraw Money")
                    console.log(20000 - amount_cash,"Remaining Money In Account")
                } else{
                    console.log(amount_cash,"This Is Not Your Account")
                }
            } else {
                console.log("Wrong Pin")
            }
        } else {
            console.log("Enter Proper Account Name")
        }
    } else {
        console.log("Language Not In List")
    }
} else {
    console.log("Insert Correct ATM_CARD")
}