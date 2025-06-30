// ==== 1 ====
const length1: number = 5;
const width1: number = 3;
const areaOfRectangle: number = length1 * width1;
console.log(areaOfRectangle);

// ==== 2 ====
const length2: number = 5;
const width2: number = 3;
const perimeterOfRectangle = 2 * (length2 + width2);
console.log(perimeterOfRectangle);

// ==== 3 ====
const radius = 5;
const diameterOfCircle = 2 * radius;
console.log(diameterOfCircle);

const areaOfCircle = 3.14 * radius * radius;
console.log(areaOfCircle);

const circumferenceOfCircle = 2 * 3.14 * radius;
console.log(circumferenceOfCircle);

// ==== 4 ====
const angleA = 80;
const angleB = 65;
const anglesOfCircle = 180 - (80 + 65);
console.log(anglesOfCircle);

// ==== 5 ====
const days = 366;
const sisaHari = days % 365;

const year = days / 365;
const month = sisaHari / 30;
const day = sisaHari % 30;

console.log(`${year.toFixed(0)} year ${month.toFixed(0)} month ${day} day`);

// ==== 6 ====
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");

const getDaysDate1 = date1.getDay();
const getDaysDate2 = date2.getDay();

console.log(getDaysDate1);
console.log(getDaysDate2);

const diffDays = getDaysDate2 - getDaysDate1;
console.log(diffDays);
