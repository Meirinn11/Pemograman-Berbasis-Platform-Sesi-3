// Mendeklarasikan variabel dengan nilai baru
let durasiLari = 20; // Mengubah durasi lari menjadi 20 menit
let durasiPushUp = 15; // Mengubah durasi push-up menjadi 15 menit
let durasiPlank = 10; // Mengubah durasi plank menjadi 10 menit

// Mengubah nilai kalori per menit untuk masing-masing latihan
const kaloriLariPerMenit = 10; // Kalori per menit saat lari
const kaloriPushUpPerMenit = 7; // Kalori per menit saat push-up
const kaloriPlankPerMenit = 4; // Kalori per menit saat plank

// Menghitung total kalori yang terbakar untuk masing-masing latihan
let totalKaloriLari = durasiLari * kaloriLariPerMenit;
let totalKaloriPushUp = durasiPushUp * kaloriPushUpPerMenit;
let totalKaloriPlank = durasiPlank * kaloriPlankPerMenit;

// Menghitung total kalori yang terbakar
let totalKalori = totalKaloriLari + totalKaloriPushUp + totalKaloriPlank;

// Menampilkan hasil
console.log("Total kalori yang terbakar setelah olahraga:");
console.log("Lari: " + totalKaloriLari + " kalori");
console.log("Push-up: " + totalKaloriPushUp + " kalori");
console.log("Plank: " + totalKaloriPlank + " kalori");
console.log("Total kalori yang terbakar: " + totalKalori + " kalori");
