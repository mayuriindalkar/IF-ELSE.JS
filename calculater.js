var readlineSync = require('readline-sync');
var num=readlineSync.questionInt("Enter the number : ");
var num1=readlineSync.questionInt("Enter the number : ");
var symbol=readlineSync.questionInt("Enter a symbol : ");
if (symbol==="+"){
    console.log(num+num1)
}
else if (symbol=="-"){
    console.log(num-num1)
}
else if (symbol=="*"){
    console.log(num*num1)
}
else if (symbol=="/"){
    console.log(num/num1)
}
else if (symbol=="%"){
    console.log(num%num1)
}
else if (symbol=="++"){
    console.log(num++)
}
else if (symbol=="--"){
    console.log(--num)
}
else if (symbol=="=="){
    console.log(num==num1)
}
else if (symbol=="==="){
    console.log(num===num1)
}
else if (symbol=="!="){
    console.log(num!=num1)
}
else if (symbol==">"){
    console.log(num>num1)
}
else if (symbol=="<"){
    console.log(num<num1)
}
else if (symbol=="<="){
    console.log(num<=num1)
}
else if (symbol==">="){
    console.log(num>=num1)
}
else if (symbol=="+="){
    console.log(num+=num1)
}
else if (symbol=="-="){
    console.log(num-=num1)
}
else if (symbol=="*="){
    console.log(num*=num1)
}
else if (symbol=="/="){
    console.log(num/=num1)
}
else if (symbol=="%="){
    console.log(num%=num1)
}
else if (symbol=="**="){
    console.log(num**=num1)
}
else if (symbol=="&&"){
    console.log(num&&num1)
}
else if (symbol=="||"){
    console.log(num||num1)
}
else if (symbol=="!"){
    console.log(num!=num1)
}
else{
    console.log("This is not symbol")
}