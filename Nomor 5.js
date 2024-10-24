// Mendeklarasikan variabel dengan nilai baru
let usia = 20; // Mengubah usia menjadi 5 tahun
let tinggiBadan = 156; // Mengubah tinggi badan menjadi 115 cm
let biayaMasuk = 0;

// Memeriksa biaya masuk berdasarkan usia
if (usia < 2) {
    console.log("Dilarang masuk, anak terlalu kecil.");
} else if (usia >= 2 && usia <= 4) {
    biayaMasuk = 30000; // Mengubah biaya untuk usia 2-4 tahun
    if (tinggiBadan > 80) {
        biayaMasuk += 10000; // Mengubah biaya tambahan untuk tinggi badan
    }
    console.log("Biaya masuk untuk usia " + usia + " tahun dengan tinggi " + tinggiBadan + " cm adalah Rp."
                 + biayaMasuk);
} else if (usia > 4 && usia <= 8) {
    biayaMasuk = 40000; // Mengubah biaya untuk usia 5-8 tahun
    if (tinggiBadan > 110) {
        biayaMasuk += 15000; // Mengubah biaya tambahan untuk tinggi badan
    }
    console.log("Biaya masuk untuk usia " + usia + " tahun dengan tinggi " + tinggiBadan + " cm adalah Rp."
                 + biayaMasuk);
} else if (usia > 8 && usia <= 12) {
    biayaMasuk = 50000; // Mengubah biaya untuk usia 9-12 tahun
    if (tinggiBadan > 130) {
        biayaMasuk += 20000; // Mengubah biaya tambahan untuk tinggi badan
    }
    console.log("Biaya masuk untuk usia " + usia + " tahun dengan tinggi " + tinggiBadan + " cm adalah Rp."
                 + biayaMasuk);
} else {
    biayaMasuk = 80000; // Mengubah biaya untuk usia di atas 12 tahun
    if (tinggiBadan > 150) {
        biayaMasuk += 15000; // Mengubah biaya tambahan untuk tinggi badan
    }
    console.log("Biaya masuk untuk usia " + usia + " tahun dengan tinggi " + tinggiBadan + " cm adalah Rp."
                 + biayaMasuk);
}