let user=require("readline-sync")
var year1=user.questionInt("enter current year : ")
var year2=user.questionInt("enter born year : ")
if (year1>year2){
    console.log(year1-year2)
}else if (year1===year1){
    console.log("she/he is born",year1,"year")
}else{
    console.log(year2-year1)
}