var a=require("readline-sync")
var season=a.question("Enter The Season : ")
switch (season){
    case "summer":
        console.log("i want ice-cream")
        break
    case "ranny":
        console.log("i want rancote")
        break
    case "winter":
        console.log("i want jarking")
        break
    default:
        console.log("noting")
        break
}