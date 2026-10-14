# 🚀 Paket Lengkap Pembelajaran Pemrograman C++ untuk Pemula

Panduan ini dibuat secara khusus untuk membantu pemula memahami **7 pilar dasar pemrograman** langkah demi langkah, sehingga tidak lagi merasa bingung atau kewalahan saat pertama kali melihat kode program di dalam sebuah IDE.

---

## 📂 Struktur Berkas dalam Proyek Ini

```text
cpp-dasar-pemula/
├── belajar_dasar.cpp              # Program C++ utama (lengkap dengan penjelasan per baris)
├── jalankan_simulasi_terminal.py  # Simulator terminal (langsung jalan via Python tanpa instal compiler)
├── README.md                      # Panduan lengkap petunjuk belajar dan kompilasi
└── web-lab/                       # Aplikasi Web Interaktif (Visual Lab di Browser)
    ├── index.html                 # Halaman utama visual lab
    ├── style.css                  # Tema modern developer dark mode
    └── app.js                     # Simulasi interaktif, kalkulator, visualisasi RAM, & kuis
```

---

## 🎯 7 Pilar Utama yang Dipelajari

| No | Modul | Konsep Inti | Peruntukan di Dunia Nyata |
|:--:|:---|:---|:---|
| **1** | **Variabel & Tipe Data** | `int`, `double`, `char`, `string`, `bool` | Menyediakan 'wadah' di memori RAM untuk menyimpan data program. |
| **2** | **Menampilkan Hasil** | `std::cout <<`, `endl`, `\n` | Menampilkan pesan instruksi atau hasil kalkulasi ke layar monitor. |
| **3** | **Menerima Masukan** | `std::cin >>`, `std::getline(cin, str)` | Menangkap ketikan pengguna dari papan ketik (keyboard). |
| **4** | **Operasi Perhitungan** | `+`, `-`, `*`, `/`, `%`, Type Casting | Melakukan operasi matematika, diskon, skor, atau rumus fisika/keuangan. |
| **5** | **Logika & Percabangan** | `if`, `else if`, `else`, `&&`, `||`, `==` | Mengambil keputusan otomatis berdasarkan syarat atau kondisi tertentu. |
| **6** | **Struktur Data Array** | Array 1D: `tipe data[ukuran]`, indeks `[0]` | Mengelompokkan banyak data bertipe sama (misal: daftar 5 nilai siswa). |
| **7** | **Studi Kasus Terpadu** | Menggabungkan seluruh materi 1 - 6 | Membangun Sistem Rapor Siswa dengan penghitungan rata-rata dan predikat. |

---

## 🖥️ Cara Menjalankan Program

Anda memiliki **3 cara fleksibel** untuk menggunakan paket belajar ini:

### Cara 1: Buka Laboratorium Web Interaktif (Paling Direkomendasikan untuk Memahami Konsep)
Laboratorium web ini menyajikan visualisasi memori RAM komputer secara langsung, diagram percabangan `if-else`, kalkulator aritmatika interaktif, hingga kuis pemahaman kilat.

1. Buka folder `web-lab/`.
2. Klik ganda berkas `index.html` (akan langsung terbuka di browser seperti Chrome, Edge, atau Firefox tanpa instalasi apa pun).
3. Anda bisa mencoba mengubah input di layar, menggeser slider nilai, dan melihat bagaimana komputer mengeksekusi logika kode di balik layar.

---

### Cara 2: Menjalankan Program Asli C++ (`belajar_dasar.cpp`) di IDE

Pilihlah salah satu cara sesuai aplikasi yang ada di komputer Anda:

#### Opsi A: Menggunakan OnlineGDB (Tanpa Instal Aplikasi Apapun)
1. Buka situs [https://www.onlinegdb.com/online_c++_compiler](https://www.onlinegdb.com/online_c++_compiler).
2. Salin seluruh isi berkas `belajar_dasar.cpp` lalu tempel (paste) ke editor di web tersebut.
3. Klik tombol hijau **Run (F9)** di bagian atas. Program interaktif akan langsung berjalan di layar bawah!

#### Opsi B: Menggunakan Dev-C++ / Code::Blocks
1. Buka aplikasi Dev-C++ atau Code::Blocks.
2. Pilih menu **File ➔ Open**, lalu arahkan ke berkas `belajar_dasar.cpp`.
3. Klik menu **Execute ➔ Compile & Run** (atau tekan tombol `F11` di Dev-C++).

#### Opsi C: Menggunakan Terminal / GCC (MinGW / Clang)
Jika sudah terpasang compiler GCC/MinGW di sistem:
```bash
# 1. Masuk ke direktori
cd "C:\Users\Anak Soleh\.gemini\antigravity-ide\scratch\cpp-dasar-pemula"

# 2. Kompilasi file C++
g++ -o belajar_dasar.exe belajar_dasar.cpp

# 3. Jalankan hasilnya
.\belajar_dasar.exe
```

---

### Cara 3: Menjalankan Simulator Terminal Langsung (`jalankan_simulasi_terminal.py`)

Jika komputer Anda belum memiliki compiler C++ tetapi ingin segera berlatih alur terminal langkah demi langkah, cukup jalankan skrip Python yang sudah kami sertakan:

```powershell
python "C:\Users\Anak Soleh\.gemini\antigravity-ide\scratch\cpp-dasar-pemula\jalankan_simulasi_terminal.py"
```

Skrip ini memiliki menu dan alur interaktif yang **100% identik** dengan `belajar_dasar.cpp`.

---

## ⚠️ 4 Perangkap Pemula yang Sering Terjadi di C++

1. **Tertukar antara `=` dan `==`**:
   - `a = 10;` artinya **isi** variabel `a` dengan angka 10 (Assignment).
   - `if (a == 10)` artinya **cek** apakah isi `a` bernilai 10 (Comparison).

2. **Perangkap Pembagian Integer (`5 / 2 = 2`)**:
   - Di C++, jika bilangan bulat dibagi bilangan bulat, angka desimal di belakang koma akan **dibuang ke bawah**.
   - Solusi: ubah salah satu menjadi desimal: `5.0 / 2` atau `(double)a / b`.

3. **Perangkap Spasi pada Input (`cin >>`)**:
   - `cin >> nama;` hanya membaca kata sampai menemukan spasi pertama (jika mengetik "Budi Santoso", yang terbaca hanya "Budi").
   - Solusi: gunakan `getline(cin, nama);` untuk menangkap seluruh kalimat hingga tombol Enter.

4. **Indeks Array Dimulai dari 0**:
   - Array berkapasitas 5 (`int data[5]`) memiliki nomor slot: `data[0]`, `data[1]`, `data[2]`, `data[3]`, dan `data[4]`.
   - Mengakses `data[5]` adalah kesalahan (di luar batas memori / *out of bounds*).
