// ==== 1 ====
var length1 = 5;
var width1 = 3;
var areaOfRectangle = length1 * width1;
console.log(areaOfRectangle);
// ==== 2 ====
var length2 = 5;
var width2 = 3;
var perimeterOfRectangle = 2 * (length2 + width2);
console.log(perimeterOfRectangle);
// ==== 3 ====
var radius = 5;
var diameterOfCircle = 2 * radius;
console.log(diameterOfCircle);
var areaOfCircle = 3.14 * radius * radius;
console.log(areaOfCircle);
var circumferenceOfCircle = 2 * 3.14 * radius;
console.log(circumferenceOfCircle);
// ==== 4 ====
var angleA = 80;
var angleB = 65;
var anglesOfCircle = 180 - (80 + 65);
console.log(anglesOfCircle);
// ==== 5 ====
var days = 366;
var sisaHari = days % 365;
var year = days / 365;
var month = sisaHari / 30;
var day = sisaHari % 30;
console.log("".concat(year.toFixed(0), " year ").concat(month.toFixed(0), " month ").concat(day, " day"));
// ==== 6 ====
var date1 = new Date("2022-01-20");
var date2 = new Date("2022-01-22");
var getDaysDate1 = date1.getDay();
var getDaysDate2 = date2.getDay();
console.log(getDaysDate1);
console.log(getDaysDate2);
var diffDays = getDaysDate2 - getDaysDate1;
console.log(diffDays);
