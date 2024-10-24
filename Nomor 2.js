// Mendeklarasikan variabel dengan nilai baru
let skorTesCoding = 75; // Mengubah skor tes coding
let skorWawancara = "A"; // Mengubah skor wawancara
let statusTesCoding = "";
let statusWawancara = "";

// Memeriksa hasil tes coding
if (skorTesCoding > 90) {
    statusTesCoding = "LULUS";
    console.log("Hasil Tes Coding: " + statusTesCoding);
} else if (skorTesCoding >= 75) {
    statusTesCoding = "DIPERTIMBANGKAN";
    console.log("Hasil Tes Coding: " + statusTesCoding);
} else {
    statusTesCoding = "TIDAK LULUS";
    console.log("Hasil Tes Coding: " + statusTesCoding);
}

// Memeriksa hasil wawancara
if (skorWawancara === "A" || skorWawancara === "B" || skorWawancara === "C") {
    statusWawancara = "LULUS";
    console.log("Hasil Wawancara: " + statusWawancara);
} else {
    statusWawancara = "TIDAK LULUS";
    console.log("Hasil Wawancara: " + statusWawancara);
}

// Menentukan hasil akhir
if (statusTesCoding === "LULUS" && statusWawancara === "LULUS") {
    console.log("Selamat, Kamu berhasil diterima sebagai Programmer Junior!");
} else if (statusTesCoding === "DIPERTIMBANGKAN" && statusWawancara === "LULUS") {
    console.log("Selamat, Kamu berpeluang menjadi Programmer Junior. Tunggu konfirmasi selanjutnya.");
} else {
    console.log("Maaf, Kamu belum berhasil diterima sebagai Programmer Junior.");
}