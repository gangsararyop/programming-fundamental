// ====== If Statement ======
const age1: number = 16;

if (age1 >= 17) {
  console.log("Punya KTP");
} else {
  console.log("Tidak punya KTP");
}

const grade: string = "B";

// A -> Excellent
// B -> Great
// C -> Good
// D -> Bad

if (grade === "A") {
  console.log("Excellent");
} else if (grade === "B") {
  console.log("Great");
} else if (grade === "C") {
  console.log("Good");
} else {
  console.log("Bad");
}

// ====== Switch Statement ======

const fruit: string = "Banana";

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

// ===== Ternary Operator =====

const age2: number = 17;

// if (age1 >= 17) {
//   console.log("Punya KTP");
// } else {
//   console.log("Tidak punya KTP");
// }

// (conditional) ? (true condition) : (false condition)
age2 >= 17 ? console.log("Punya KTP") : console.log("Tidak punya KTP");
