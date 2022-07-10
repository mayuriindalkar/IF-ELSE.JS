//max number between two or three number :

// var name=require("readline-sync")
// first=name.questionInt("enter the first number : ")
// second=name.questionInt("enter the second number : ")
// third=name.questionInt("enter the third number : ")
// if (first>second){
//     console.log(first,"first is max number")
// }
// else{
//     console.log(second,"second is max number")
// }


var name=require("readline-sync")
first=name.questionInt("enter the first number : ")
second=name.questionInt("enter the second number : ")
third=name.questionInt("enter the third number : ")
if (first>second && first>third){
    console.log(first,"First is max number")
}
else if (second>first && second>third){
    console.log(second,"second is max number")
}
else{
    console.log(third,"third is max number")
}