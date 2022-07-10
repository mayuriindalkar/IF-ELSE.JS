var a=require('readline-sync');
var age=a.questionInt("Enter the number : ");
if (age>=25){
    console.log("I'm legally drinking")
}else if (age>=24){
    console.log("I'm legally marriage")
}else if (age>=21){
    console.log("I'm legally driver")
}else if (age>=18){
    console.log("I'm legally votter")
}else if (age>=5){
    console.log("I'm go to school")
}else  {
    console.log("under 5year")
}