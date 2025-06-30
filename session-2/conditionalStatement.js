// ====== If Statement ======
var age1 = 16;
if (age1 >= 17) {
    console.log("Punya KTP");
}
else {
    console.log("Tidak punya KTP");
}
var grade = "D";
// A -> Excellent
// B -> Great
// C -> Good
// D -> Bad
if (grade === "A") {
    console.log("Excellent");
}
else if (grade === "B") {
    console.log("Great");
}
else if (grade === "C") {
    console.log("Good");
}
else {
    console.log("Bad");
}
// ====== Switch Statement ======
var fruit = "Banana";
// Papayas -> 10.000
// Banana -> 20.000
// Watermelon -> 50.000
// Apple -> 15.000
switch (fruit) {
    case "Papayas":
        console.log("Harga = 10.000");
        break;
    case "Banana":
        console.log("Harga = 20.000");
        break;
    case "Watermelon":
        console.log("Harga = 50.000");
        break;
    case "Apple":
        console.log("Harga = 15.000");
        break;
    default:
        console.log("Belum tercantum harga");
}
