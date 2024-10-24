// Mendeklarasikan variabel dengan nilai baru
let nomorPemain = 45; // Mengubah nomor pemain
let posisi1 = "";
let posisi2 = "";
let posisi3 = "";

// Memeriksa posisi berdasarkan nomor pemain
if (nomorPemain % 2 === 0 && nomorPemain >= 30 && nomorPemain <= 60) {
    posisi1 = "Gelandang";
    posisi2 = "Berhak dipilih menjadi Kapten Tim";
} else if (nomorPemain % 2 === 0) {
    posisi1 = "Gelandang";
} else if (nomorPemain % 3 === 0 && nomorPemain % 5 === 0 && nomorPemain < 50) {
    posisi1 = "Bek Kanan";
    posisi2 = "Penjaga Gawang";
    posisi3 = "Playmaker";
} else if (nomorPemain % 3 === 0 && nomorPemain < 50) {
    posisi1 = "Bek Kanan";
    posisi2 = "Penjaga Gawang";
} else if (nomorPemain % 3 === 0) {
    posisi1 = "Bek Kanan";
} else {
    posisi1 = "Penyerang";
}

// Menampilkan hasil
console.log(
    "Nomor pemain " + nomorPemain + " digunakan oleh posisi:\n" +
    "Posisi 1: " + posisi1 + "\n" +
    "Posisi 2: " + posisi2 + "\n" +
    "Posisi 3: " + posisi3 + "\n"
);