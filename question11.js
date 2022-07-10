// The given character is an uppercase letter or lowercase letter or a digit or a special character.

// var a=3;
// if (a>="a" && a<="z"){
//     console.log(a,"lower case")
// }
// else if (a>="A" && a<="Z"){
//     console.log(a,"upper case")
// }
// else if(a>="0" && a<="9"){
//     console.log(a,"digit")
// }
// else{
//     console.log(a,"special characters")
// }

// var numbers1=[4,9];
// var numbers2=numbers1.map(myFunction);
// console.log(numbers2);
// function myFunction(value,index,array){
//     return value*2;
// }

function printArray(a)
{
    var len=a.length,i=0;
    if (len==0)
    console.log("empty array");
    else {
        do{
            console.log(a[i]);

        }while (++i<len)
    }
}