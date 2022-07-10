var a = require('readline-sync');
var food = a.question("Enter The Day : ");
var foods = a.question("Enter A Time : ")
if (food=="monday"){
    if (foods=="breakfast"){
        console.log("maggi")
    }else if(foods=="lunch"){
        console.log("chole,batore,dal,rice")
    }else if(foods=="snacks"){
        console.log("bel")
    }else{
        console.log("panner,puri,pulav")
    }
}else if(food=="tuesday"){
    if (foods=="breakfast"){
        console.log("vada pav")
    }else if(foods=="lunch"){
        console.log("pulav")
    }else if(foods=="snacks"){
        console.log("biscult")
    }else{
        console.log("gavar,roti")
    }
}else if(food=="wednesday"){
    if (foods=="breakfast"){
        console.log("alu parathe")
    }else if(foods=="lunch"){
        console.log("gavar,roti")
    }else if(foods=="snacks"){
        console.log("bhadan")
    }else{
        console.log("panner,puri,pulav")
    }
}else{
    if(foods=="breakfast"){
        console.log("pohe")
    }else if(foods=="lunch"){
        console.log("bhendi,roti")
    }else if(foods=="snacks"){
        console.log("namkin")
    }else{
        console.log("rajma,roti")
    }
}

