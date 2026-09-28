// Array of Object berisi data mahasiswa
const mahasiswa = [
    {
        nim: "001",
        nama: "Ani",
        tugas: 90,
        quiz: 85,
        uts: 75,
        uas: 80,
        nilaiAkhir: 81.5
    },
    {
        nim: "002",
        nama: "Budi",
        tugas: 85,
        quiz: 75,
        uts: 60,
        uas: 70,
        nilaiAkhir: 71
    },
    {
        nim: "003",
        nama: "Cika",
        tugas: 90,
        quiz: 70,
        uts: 80,
        uas: 85,
        nilaiAkhir: 81.5
    },
    {
        nim: "004",
        nama: "Dodi",
        tugas: 90,
        quiz: 80,
        uts: 75,
        uas: 70,
        nilaiAkhir: 77.5
    },
    {
        nim: "005",
        nama: "Erna",
        tugas: 80,
        quiz: 85,
        uts: 90,
        uas: 80,
        nilaiAkhir: 84
    }
];


// Function 1: Menentukan grade mahasiswa
function tentukanGrade(nilai) {
    if (nilai >= 80) {
        return "A";
    } else if (nilai >= 70) {
        return "B";
    } else if (nilai >= 60) {
        return "C";
    } else {
        return "D";
    }
}


// Function 2: Menghitung rata-rata nilai akhir
function hitungRataRata(data) {
    let total = 0;

    for (const m of data) {
        total += m.nilaiAkhir;
    }

    return total / data.length;
}


// Menampilkan data mahasiswa ke Console
console.log("=== DAFTAR NILAI MAHASISWA ===");

for (const m of mahasiswa) {

    const grade = tentukanGrade(m.nilaiAkhir);

    // Operator perbandingan dan logika
    if (m.nilaiAkhir >= 70 && grade !== "D") {
        console.log(
            `${m.nim} - ${m.nama} | Nilai: ${m.nilaiAkhir} | Grade: ${grade} | LULUS`
        );
    } else {
        console.log(
            `${m.nim} - ${m.nama} | Nilai: ${m.nilaiAkhir} | Grade: ${grade} | TIDAK LULUS`
        );
    }
}


// Menghitung rata-rata
const rataRata = hitungRataRata(mahasiswa);

console.log(`Rata-rata nilai akhir: ${rataRata.toFixed(2)}`);