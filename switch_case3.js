var a = require('readline-sync');
var day = a.question("Enter The Day : ");
switch (day) {
    case "sunday":
        console.log("It's a Sunday");
        break;
    case 2:
        console.log("It's a Monday");
        break;
    case 3:
        console.log("It's a Tuesday");
        break;
    case 4:
        console.log("It's a Wensday");
        break;
    case 5:
        console.log("It's a Thursday");
        break;
    case 6:
        console.log("It's a Friday");
        break;
    case 7:
        console.log("It's a Saturday");
        break;
    default:
        console.log("Invalid Day");
}