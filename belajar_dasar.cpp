/*
 ============================================================================
  PROGRAM BELAJAR DASAR C++ UNTUK PEMULA (STEP-BY-STEP GUIDED LEARNING)
 ============================================================================
  Tujuan:
  Program ini dirancang khusus untuk pemula agar memahami konsep fundamental
  pemrograman tanpa kebingungan. Setiap bagian kode dilengkapi penjelasan detail,
  sehingga saat Anda berpindah ke IDE (seperti Dev-C++, Code::Blocks, VS Code)
  atau menulis ulang kode, Anda tahu persis fungsi dan peruntukannya.

  Topik yang dipelajari:
  1. Variabel dan Tipe Data (Wadah penyimpanan dalam memori)
  2. Menampilkan Hasil / Output (std::cout)
  3. Menginputkan Data ke Variabel (std::cin & getline)
  4. Operasi Perhitungan / Aritmatika (+, -, *, /, %)
  5. Logika dan Percabangan (if, else if, else, operator relasional & logika)
  6. Struktur Data Array Dasar (Indeks 0, deklarasi, akses, dan perulangan)
  7. Studi Kasus Terpadu (Menggabungkan semua materi dalam satu studi kasus nyata)
 ============================================================================
*/

// [PANDUAN 1: PREPROCESSOR DIRECTIVE]
// Baris di bawah ini menyertakan pustaka standar input-output C++.
// Tanpa iostream, kita tidak bisa menggunakan cout (cetak) atau cin (input).
#include <iostream>

// Pustaka untuk memanipulasi string (teks).
#include <string>

// Pustaka untuk mengatur format tampilan (misal: membatasi angka desimal).
#include <iomanip>

// [PANDUAN 2: NAMESPACE]
// Memberitahu kompiler agar kita tidak perlu mengetik "std::" berulang kali.
// Contoh: cukup menulis "cout" bukan "std::cout".
using namespace std;

// Fungsi pembantu untuk membersihkan buffer input (mencegah bug saat cin bertemu getline)
void bersihkanBuffer() {
    cin.clear();
    // Abaikan karakter hingga enter (\n)
    while (cin.get() != '\n') {
        continue;
    }
}

// Fungsi pembantu untuk memberi jeda agar siswa bisa membaca materi
void jedaLanjut() {
    cout << "\n------------------------------------------------------------\n";
    cout << ">> Tekan [ENTER] untuk melanjutkan panduan...";
    cin.get();
    cout << "------------------------------------------------------------\n\n";
}

// ============================================================================
// MODUL 1: VARIABEL DAN TIPE DATA
// ============================================================================
void modul1_VariabelDanTipeData() {
    cout << "\n============================================================\n";
    cout << " [MODUL 1] MENGENAL VARIABEL DAN TIPE DATA\n";
    cout << "============================================================\n";
    cout << "KONSEP DASAR:\n";
    cout << "Variabel adalah sebuah 'wadah' bernama di dalam memori komputer (RAM)\n";
    cout << "yang digunakan untuk menyimpan data. Setiap wadah memiliki 'Tipe Data'\n";
    cout << "yang menentukan jenis data apa yang boleh disimpan di dalamnya.\n\n";

    cout << "5 TIPE DATA DASAR C++ YANG WAJIB DIKETAHUI:\n";
    cout << " 1. int    : Bilangan bulat (contoh: 20, -5, 100)\n";
    cout << " 2. double : Bilangan desimal/pecahan presisi tinggi (contoh: 3.14, 85.5)\n";
    cout << " 3. char   : Satu karakter tunggal diapit petik satu (contoh: 'A', '9', '+')\n";
    cout << " 4. string : Teks atau kumpulan karakter diapit petik dua (contoh: \"Budi\")\n";
    cout << " 5. bool   : Nilai logika boolean (true = 1, false = 0)\n\n";

    cout << "--- CONTOH PENULISAN KODE DALAM C++ ---\n";
    cout << "int umur = 17;\n";
    cout << "double tinggiBadan = 168.5;\n";
    cout << "char golonganDarah = 'O';\n";
    cout << "string namaLengkap = \"Ahmad Fauzi\";\n";
    cout << "bool isAktif = true;\n\n";

    // Deklarasi dan inisialisasi nyata dalam variabel C++
    int umur = 17;
    double tinggiBadan = 168.5;
    char golonganDarah = 'O';
    string namaLengkap = "Ahmad Fauzi";
    bool isAktif = true;

    cout << "HASIL PENYIMPANAN DI MEMORI:\n";
    cout << "- Variabel 'namaLengkap'   (string) bernilai : " << namaLengkap << "\n";
    cout << "- Variabel 'umur'          (int)    bernilai : " << umur << " tahun\n";
    cout << "- Variabel 'tinggiBadan'   (double) bernilai : " << tinggiBadan << " cm\n";
    cout << "- Variabel 'golonganDarah' (char)   bernilai : " << golonganDarah << "\n";
    cout << "- Variabel 'isAktif'       (bool)   bernilai : " << (isAktif ? "true (Aktif)" : "false (Nonaktif)") << "\n";

    jedaLanjut();
}

// ============================================================================
// MODUL 2: MENAMPILKAN HASIL / OUTPUT (std::cout)
// ============================================================================
void modul2_MenampilkanHasil() {
    cout << "\n============================================================\n";
    cout << " [MODUL 2] CARA MENAMPILKAN HASIL KE LAYAR (OUTPUT)\n";
    cout << "============================================================\n";
    cout << "KONSEP DASAR:\n";
    cout << "Untuk menampilkan tulisan atau nilai variabel ke layar, C++ menggunakan\n";
    cout << "perintah 'cout' (dibaca: see-out) dengan operator penyisipan '<<'.\n\n";

    cout << "KOMPONEN PENTING:\n";
    cout << " - cout << \"teks\"   : Menampilkan teks langsung.\n";
    cout << " - cout << variabel : Menampilkan isi dari variabel.\n";
    cout << " - endl atau '\\n'   : Membuat baris baru (enter/newline).\n";
    cout << " - Penggabungan (Chaining): Anda bisa merangkai beberapa '<<' sekaligus.\n\n";

    cout << "--- CONTOH PENULISAN KODE ---\n";
    cout << "cout << \"Halo Dunia!\" << endl;\n";
    cout << "cout << \"Nama saya: \" << \"Andi\" << \", Umur: \" << 19 << endl;\n\n";

    cout << "HASIL EKSEKUSI LANGSUNG:\n";
    string nama = "Budi Santoso";
    int skor = 95;
    cout << "Halo semuanya! Selamat datang di C++.\n";
    cout << "Pemain: " << nama << " | Skor Awal: " << skor << " poin." << endl;

    cout << "\nCATATAN PERBEDAAN 'endl' dan '\\n':\n";
    cout << "'\\n' hanya membuat baris baru, sedangkan 'endl' membuat baris baru\n";
    cout << "sekaligus membersihkan buffer output (flush buffer).\n";

    jedaLanjut();
}

// ============================================================================
// MODUL 3: MENGINPUTKAN DATA KE VARIABEL (std::cin & getline)
// ============================================================================
void modul3_InputData() {
    cout << "\n============================================================\n";
    cout << " [MODUL 3] MENGINPUTKAN DATA KE VARIABEL (INPUT)\n";
    cout << "============================================================\n";
    cout << "KONSEP DASAR:\n";
    cout << "Program yang interaktif membutuhkan masukan (input) dari pengguna.\n";
    cout << "C++ menyediakan 'cin' (dibaca: see-in) dengan operator ekstraksi '>>'.\n\n";

    cout << "ATURAN PENTING INPUT C++:\n";
    cout << " 1. cin >> variabel      : Bagus untuk angka atau kata tunggal (tanpa spasi).\n";
    cout << " 2. getline(cin, string) : WAJIB digunakan jika teks mengandung spasi\n";
    cout << "                           (contoh: nama lengkap atau alamat).\n\n";

    cout << "--- MARI KITA COBA SECARA LANGSUNG ---\n";

    string namaLengkap;
    int usia;
    double uangSaku;

    cout << "Silakan ketik Nama Lengkap Anda (boleh pakai spasi): ";
    getline(cin, namaLengkap);

    cout << "Silakan ketik Usia Anda (angka bulat)              : ";
    cin >> usia;

    cout << "Silakan ketik Uang Saku harian Anda (contoh 25000)  : ";
    cin >> uangSaku;

    // Bersihkan sisa newline di buffer agar tidak mengganggu proses berikutnya
    bersihkanBuffer();

    cout << "\n--- DATA YANG BERHASIL DITANGKAP OLEH PROGRAM ---\n";
    cout << "Nama berhasil masuk ke variabel 'namaLengkap' : " << namaLengkap << endl;
    cout << "Usia berhasil masuk ke variabel 'usia'        : " << usia << " tahun" << endl;
    cout << fixed << setprecision(2);
    cout << "Uang saku masuk ke variabel 'uangSaku'        : Rp " << uangSaku << endl;

    cout << "\nPENJELASAN:\n";
    cout << "Data yang Anda ketik dari keyboard diserap oleh 'cin' lalu disimpan\n";
    cout << "ke dalam wadah variabel masing-masing di memori RAM.\n";

    jedaLanjut();
}

// ============================================================================
// MODUL 4: OPERASI PERHITUNGAN (ARITMATIKA)
// ============================================================================
void modul4_OperasiPerhitungan() {
    cout << "\n============================================================\n";
    cout << " [MODUL 4] OPERASI PERHITUNGAN (ARITMATIKA)\n";
    cout << "============================================================\n";
    cout << "KONSEP DASAR:\n";
    cout << "Komputer dapat melakukan perhitungan matematika menggunakan operator:\n";
    cout << " +  : Penjumlahan\n";
    cout << " -  : Pengurangan\n";
    cout << " *  : Perkalian\n";
    cout << " /  : Pembagian (Perhatian: integer/integer menghasilkan integer!)\n";
    cout << " %  : Modulus (Sisa hasil bagi, khusus bilangan bulat)\n\n";

    cout << "--- COBA LAKUKAN PERHITUNGAN DUA ANGKA ---\n";
    int a, b;
    cout << "Masukkan angka pertama (A) : ";
    cin >> a;
    cout << "Masukkan angka kedua   (B) : ";
    cin >> b;
    bersihkanBuffer();

    int tambah = a + b;
    int kurang = a - b;
    int kali   = a * b;

    cout << "\nHASIL PERHITUNGAN:\n";
    cout << "Penjumlahan (" << a << " + " << b << ") = " << tambah << endl;
    cout << "Pengurangan (" << a << " - " << b << ") = " << kurang << endl;
    cout << "Perkalian   (" << a << " * " << b << ") = " << kali << endl;

    if (b != 0) {
        // Pembagian dengan konversi tipe data (type casting) agar menghasilkan desimal akurat
        double bagiDesimal = (double)a / b;
        int sisaBagi = a % b;
        cout << fixed << setprecision(2);
        cout << "Pembagian   (" << a << " / " << b << ") = " << bagiDesimal << " (desimal)" << endl;
        cout << "Modulus/Sisa (" << a << " % " << b << ") = " << sisaBagi << " (sisa bagi)" << endl;
    } else {
        cout << "Pembagian & Modulus tidak dapat dihitung karena pembagi (B) bernilai 0!\n";
    }

    cout << "\nCATATAN PENTING PEMULA:\n";
    cout << "Jika menulis '5 / 2' di C++, hasilnya adalah 2 (bukan 2.5) karena keduanya int.\n";
    cout << "Agar hasilnya 2.5, gunakan salah satu bilangan desimal: '5.0 / 2' atau '(double)a / b'.\n";

    jedaLanjut();
}

// ============================================================================
// MODUL 5: MENJALANKAN LOGIKA DAN PERCABANGAN (IF - ELSE)
// ============================================================================
void modul5_LogikaPercabangan() {
    cout << "\n============================================================\n";
    cout << " [MODUL 5] LOGIKA DAN PERCABANGAN (PENGAMBILAN KEPUTUSAN)\n";
    cout << "============================================================\n";
    cout << "KONSEP DASAR:\n";
    cout << "Program tidak selalu berjalan lurus. Komputer dapat mengambil keputusan\n";
    cout << "berdasarkan suatu KONDISI (bernilai true atau false).\n\n";

    cout << "OPERATOR RELASIONAL:\n";
    cout << " >  (lebih besar), < (lebih kecil), >= (lebih besar sama dengan),\n";
    cout << " <= (lebih kecil sama dengan), == (sama dengan), != (tidak sama dengan)\n\n";

    cout << "OPERATOR LOGIKA:\n";
    cout << " && (AND) : bernilai benar JIKA SEMUA kondisi benar\n";
    cout << " || (OR)  : bernilai benar JIKA SALAH SATU kondisi benar\n";
    cout << " !  (NOT) : membalikkan kondisi (true jadi false, false jadi true)\n\n";

    cout << "--- COBA SIMULASI KELULUSAN UJIAN ---\n";
    double nilaiUjian;
    int persentaseKehadiran;

    cout << "Masukkan Nilai Ujian Siswa (0 - 100) : ";
    cin >> nilaiUjian;
    cout << "Masukkan Kehadiran Siswa (%) (0 - 100) : ";
    cin >> persentaseKehadiran;
    bersihkanBuffer();

    cout << "\nEVALUASI LOGIKA PROGRAM:\n";

    // Struktur If - Else If - Else bertingkat
    if (nilaiUjian >= 85 && persentaseKehadiran >= 80) {
        cout << "-> KEPUTUSAN: GRADE A (LULUS SANGAT MEMUASKAN!)\n";
        cout << "   Alasan: Nilai >= 85 DAN Kehadiran >= 80% terpenuhi.\n";
    }
    else if (nilaiUjian >= 70 && persentaseKehadiran >= 75) {
        cout << "-> KEPUTUSAN: GRADE B (LULUS BAIK)\n";
        cout << "   Alasan: Nilai >= 70 DAN Kehadiran >= 75% terpenuhi.\n";
    }
    else if (nilaiUjian >= 60 && persentaseKehadiran >= 70) {
        cout << "-> KEPUTUSAN: GRADE C (LULUS CUKUP)\n";
        cout << "   Alasan: Nilai >= 60 DAN Kehadiran >= 70% terpenuhi.\n";
    }
    else {
        cout << "-> KEPUTUSAN: TIDAK LULUS (REMEDIAL / MENGULANG)\n";
        cout << "   Alasan: Salah satu atau kedua syarat kelulusan tidak tercapai.\n";
    }

    cout << "\nBEDAH STRUKTUR KODE:\n";
    cout << " if (kondisi) {\n";
    cout << "     // Dijalankan jika kondisi benar (true)\n";
    cout << " } else if (kondisi_lain) {\n";
    cout << "     // Dijalankan jika kondisi pertama salah dan kondisi ini benar\n";
    cout << " } else {\n";
    cout << "     // Dijalankan jika semua kondisi di atas salah\n";
    cout << " }\n";

    jedaLanjut();
}

// ============================================================================
// MODUL 6: STRUKTUR DATA ARRAY DASAR
// ============================================================================
void modul6_ArrayDasar() {
    cout << "\n============================================================\n";
    cout << " [MODUL 6] STRUKTUR DATA ARRAY DASAR (1 DIMENSI)\n";
    cout << "============================================================\n";
    cout << "KONSEP DASAR:\n";
    cout << "Jika Anda punya 5 nilai siswa, Anda tidak perlu membuat 5 variabel terpisah\n";
    cout << "(nilai1, nilai2, nilai3, ...). Anda cukup membuat 1 ARRAY!\n";
    cout << "Array adalah sekumpulan data bertipe sama yang disimpan berurutan di memori.\n\n";

    cout << "ATURAN EMAS ARRAY DALAM C++:\n";
    cout << " Indeks array SELALU DIMULAI DARI 0, BUKAN 1!\n";
    cout << " Jika ukuran array = 5, maka nomor indeksnya adalah: [0], [1], [2], [3], [4].\n\n";

    cout << "--- VISUALISASI KOTAK MEMORI ARRAY ---\n";
    cout << "+----------+----------+----------+----------+----------+\n";
    cout << "| Indeks 0 | Indeks 1 | Indeks 2 | Indeks 3 | Indeks 4 |\n";
    cout << "+----------+----------+----------+----------+----------+\n";
    cout << "|  Nilai   |  Nilai   |  Nilai   |  Nilai   |  Nilai   |\n";
    cout << "+----------+----------+----------+----------+----------+\n\n";

    cout << "--- COBA INPUT NILAI KE DALAM ARRAY ---\n";
    const int UKURAN = 5;
    int daftarNilai[UKURAN]; // Deklarasi array bertipe int dengan kapasitas 5 elemen

    cout << "Silakan masukkan " << UKURAN << " nilai tugas (angka bulat):\n";
    for (int i = 0; i < UKURAN; i++) {
        cout << "Masukkan nilai untuk indeks [" << i << "] : ";
        cin >> daftarNilai[i];
    }
    bersihkanBuffer();

    cout << "\nMEMBACA DATA DARI ARRAY DENGAN PERULANGAN (FOR LOOP):\n";
    int totalNilai = 0;
    for (int i = 0; i < UKURAN; i++) {
        cout << "Data pada indeks [" << i << "] = " << daftarNilai[i] << endl;
        totalNilai += daftarNilai[i];
    }

    double rataRata = (double)totalNilai / UKURAN;
    cout << "\nRINGKASAN OPERASI ARRAY:\n";
    cout << "Total Nilai Keseluruhan = " << totalNilai << endl;
    cout << fixed << setprecision(2);
    cout << "Rata-rata Nilai         = " << rataRata << endl;

    cout << "\nSINTAKS PENTING PADA ARRAY:\n";
    cout << " - Deklarasi : int arr[5];           -> Menyiapkan 5 slot kosong\n";
    cout << " - Mengisi   : arr[0] = 90;          -> Mengisi slot pertama dengan angka 90\n";
    cout << " - Mengambil : cout << arr[0];       -> Menampilkan isi slot pertama\n";

    jedaLanjut();
}

// ============================================================================
// MODUL 7: STUDI KASUS TERPADU (MENGGABUNGKAN SELURUH MATERI)
// ============================================================================
void modul7_StudiKasusTerpadu() {
    cout << "\n============================================================\n";
    cout << " [MODUL 7] STUDI KASUS TERPADU: SISTEM NILAI MAHASISWA\n";
    cout << "============================================================\n";
    cout << "Mari kita gabungkan seluruh konsep yang sudah dipelajari:\n";
    cout << " [1] Variabel & Tipe data : string nama, int nim, double nilai, bool status\n";
    cout << " [2] Output (cout)        : Menampilkan instruksi dan kartu laporan\n";
    cout << " [3] Input (cin/getline)  : Menerima biodata dan skor\n";
    cout << " [4] Aritmatika           : Menghitung total dan rata-rata nilai\n";
    cout << " [5] Logika (If-Else)     : Menentukan status Kelulusan & Predikat\n";
    cout << " [6] Array                : Menyimpan 3 komponen nilai mata kuliah\n";
    cout << "------------------------------------------------------------\n\n";

    string namaSiswa;
    string nimSiswa;
    const int JUMLAH_MAPEL = 3;
    string namaMapel[JUMLAH_MAPEL] = {"Algoritma Dasar", "Struktur Data", "Matematika Diskrit"};
    double nilaiMapel[JUMLAH_MAPEL];

    cout << "Ketik Nama Siswa/Mahasiswa : ";
    getline(cin, namaSiswa);

    cout << "Ketik NIM/Nomor Induk Siswa : ";
    getline(cin, nimSiswa);

    cout << "\nMasukkan nilai untuk 3 mata kuliah (skala 0 - 100):\n";
    double total = 0.0;
    for (int i = 0; i < JUMLAH_MAPEL; i++) {
        cout << "- Nilai " << namaMapel[i] << " : ";
        cin >> nilaiMapel[i];
        total += nilaiMapel[i];
    }
    bersihkanBuffer();

    double rataRata = total / JUMLAH_MAPEL;
    string predikat;
    bool lulus = false;

    // Logika Pengambilan Keputusan
    if (rataRata >= 85.0) {
        predikat = "Sangat Baik (A)";
        lulus = true;
    } else if (rataRata >= 70.0) {
        predikat = "Baik (B)";
        lulus = true;
    } else if (rataRata >= 55.0) {
        predikat = "Cukup (C)";
        lulus = true;
    } else {
        predikat = "Kurang (D / Mengulang)";
        lulus = false;
    }

    // Tampilkan Hasil Akhir Berbentuk Laporan Rapi
    cout << "\n============================================================\n";
    cout << "             KARTU HASIL BELAJAR SISWA                      \n";
    cout << "============================================================\n";
    cout << " Nama Siswa : " << namaSiswa << "\n";
    cout << " NIM        : " << nimSiswa << "\n";
    cout << "------------------------------------------------------------\n";
    cout << " RINCIAN NILAI MATA KULIAH:\n";
    for (int i = 0; i < JUMLAH_MAPEL; i++) {
        cout << "  " << (i + 1) << ". " << left << setw(20) << namaMapel[i]
             << ": " << fixed << setprecision(1) << nilaiMapel[i] << "\n";
    }
    cout << "------------------------------------------------------------\n";
    cout << " Rata-rata Nilai : " << fixed << setprecision(2) << rataRata << "\n";
    cout << " Predikat Akhir  : " << predikat << "\n";
    cout << " Status Akhir    : " << (lulus ? "[ LULUS ]" : "[ TIDAK LULUS ]") << "\n";
    cout << "============================================================\n";

    jedaLanjut();
}

// ============================================================================
// FUNGSI UTAMA (MAIN FUNCTION)
// Setiap program C++ SELALU dimulai dan dieksekusi pertama kali dari 'main()'.
// ============================================================================
int main() {
    int pilihan;

    do {
        cout << "\n";
        cout << "============================================================\n";
        cout << "     LAB PANDUAN BELAJAR PEMROGRAMAN C++ DASAR              \n";
        cout << "============================================================\n";
        cout << " Pilih modul yang ingin dipelajari langkah demi langkah:     \n";
        cout << " [1] Variabel & Tipe Data                                   \n";
        cout << " [2] Menampilkan Hasil / Output (cout)                      \n";
        cout << " [3] Menginputkan Data ke Variabel (cin & getline)          \n";
        cout << " [4] Operasi Perhitungan / Aritmatika                       \n";
        cout << " [5] Logika dan Percabangan (If-Else)                       \n";
        cout << " [6] Struktur Data Array Dasar                              \n";
        cout << " [7] Studi Kasus Terpadu (Menggabungkan Semua Konsep)       \n";
        cout << " [8] Jalankan Semua Modul Berurutan (Rekomendasi Pemula)   \n";
        cout << " [0] Keluar dari Program                                    \n";
        cout << "============================================================\n";
        cout << " Masukkan nomor pilihan Anda (0 - 8): ";

        if (!(cin >> pilihan)) {
            cout << "\nInput tidak valid! Harap masukkan angka 0-8.\n";
            bersihkanBuffer();
            continue;
        }

        bersihkanBuffer();

        switch (pilihan) {
            case 1:
                modul1_VariabelDanTipeData();
                break;
            case 2:
                modul2_MenampilkanHasil();
                break;
            case 3:
                modul3_InputData();
                break;
            case 4:
                modul4_OperasiPerhitungan();
                break;
            case 5:
                modul5_LogikaPercabangan();
                break;
            case 6:
                modul6_ArrayDasar();
                break;
            case 7:
                modul7_StudiKasusTerpadu();
                break;
            case 8:
                cout << "\nMenjalankan seluruh modul pembelajaran secara bertahap...\n";
                modul1_VariabelDanTipeData();
                modul2_MenampilkanHasil();
                modul3_InputData();
                modul4_OperasiPerhitungan();
                modul5_LogikaPercabangan();
                modul6_ArrayDasar();
                modul7_StudiKasusTerpadu();
                break;
            case 0:
                cout << "\nTerima kasih telah belajar dasar C++!\n";
                cout << "Kunci menjadi programmer andal adalah konsistensi dan banyak berlatih.\n";
                break;
            default:
                cout << "\nPilihan nomor " << pilihan << " tidak tersedia. Silakan pilih 0-8.\n";
                break;
        }

    } while (pilihan != 0);

    return 0; // Mengindikasikan bahwa program berjalan sukses hingga akhir
}
