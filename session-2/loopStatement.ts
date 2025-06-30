// ===== For loop =====
// for (let i = 0; i < 10; i++) {
//   console.log("1. Hello ke = ", i);
// }

// ===== While loop =====
let ii: number = 0;

// While -> mengecek kondisi terlebih dahulu -> jika true, jalankan -> jika false, tidak dijalankan sama sekali
while (ii < 5) {
  if (ii === 3) {
    ii++;
    // break;
    continue;
  }

  console.log("2. Hello ke : ", ii);

  ii++;
}

// 1 -> i = 0
// 2 -> i = 1
// ....
// n -> i = n - 1

// ===== Do... While loop =====
let iii: number = 0;

// do... while loop -> menjalankan kode terlebih dahulu -> melakukan pengecekan kondisi while nya -> jika true, jalankan lagi -> jika false, berhenti
// do {
//   // Proses yang setidaknya berjalan sekali, walaupun kondisi di dalam while false
//   console.log("do", iii);
//   iii++;
// } while (iii > 10);

// iii -> 0
// Pengecekan kondisi di while
// true -> melakukan perulangan
// false -> tidak melakukan perulangan
