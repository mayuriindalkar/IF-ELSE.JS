var readlineSync=require('readline-sync');
var day=readlineSync.question("Enter the day : ");
if (day=="monday") {
  console.log("Rutuja\nMayuri\nSrushti\nAarti\nAlpana\nDhanshree");
}
else if (day=="tuesday") {
  console.log("Neha\nSruti\nAnkita\nAnjali\nAnkita Devkor\nMegha");
}
else if (day=="wednesday") {
  console.log("Shreya\nPratiksha\nTanu\nMuskan\nSweety\nRani");
}
else if (day=="thursday") {
  console.log("Dimpal\nPrachi\nPriyanka\nMonika\nShivani\nPriya");
}
else if (day=="friday") {
  console.log("Sejal\nPihu\nTanuja\nSheetal\nMonika Prajapati\nIshita");
}
else if (day=="saturday") {
  console.log("Shweta\nShreshta\nNishika\nPriti\nAnkita Tandel\nRupa");
}
else if (day=="sunday") {
  console.log("Kamini\nPooja\nMayuri Gaikwad\nKhushboo\nSimran\nAanshika");
}
else {
  console.log("Please enter valid day")
}