// Write a Python program to get the next day of a given date.

// var name=require("readline-sync")
// que=name.question("enter the name")
// if (name==="srushti"){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }


var name=require("readline-sync")
year=name.questionInt("enter the year : ")
month=name.questionInt("enter the month : ")
day=name.questionInt("enter the day : ")
if (year<=2022 && month<12 && day<31){
    console.log(year,"/",month,"/",day+1)
}
else{
    console.log(year==year+1,"/",month=="1","/",day=="1")
}