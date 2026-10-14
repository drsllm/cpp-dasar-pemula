# ============================================================================
# RUNNER & SIMULATOR C++ DASAR (UNTUK TERMINAL)
# ============================================================================
# Skrip ini mensimulasikan alur persis dari program 'belajar_dasar.cpp'
# sehingga siswa bisa langsung mencoba interaksi panduannya di terminal komputer ini
# tanpa harus menunggu instalasi compiler g++/Dev-C++ selesai terlebih dahulu.
# ============================================================================

import sys
import time

def jeda():
    print("\n" + "-"*60)
    input(">> Tekan [ENTER] untuk melanjutkan panduan...")
    print("-" * 60 + "\n")

def modul1():
    print("\n" + "="*60)
    print(" [MODUL 1] MENGENAL VARIABEL DAN TIPE DATA")
    print("="*60)
    print("KONSEP DASAR:")
    print("Variabel adalah sebuah 'wadah' bernama di dalam memori komputer (RAM)")
    print("yang digunakan untuk menyimpan data. Setiap wadah memiliki 'Tipe Data'")
    print("yang menentukan jenis data apa yang boleh disimpan di dalamnya.\n")

    print("5 TIPE DATA DASAR C++ YANG WAJIB DIKETAHUI:")
    print(" 1. int    : Bilangan bulat (contoh: 20, -5, 100)")
    print(" 2. double : Bilangan desimal/pecahan presisi tinggi (contoh: 3.14, 85.5)")
    print(" 3. char   : Satu karakter tunggal diapit petik satu (contoh: 'A', '9')")
    print(" 4. string : Teks atau kumpulan karakter diapit petik dua (contoh: \"Budi\")")
    print(" 5. bool   : Nilai logika boolean (true / false)\n")

    print("--- CONTOH SINTAKS DI C++ ---")
    print("int umur = 17;")
    print("double tinggiBadan = 168.5;")
    print("char golonganDarah = 'O';")
    print('string namaLengkap = "Ahmad Fauzi";')
    print("bool isAktif = true;\n")

    namaLengkap = "Ahmad Fauzi"
    umur = 17
    tinggiBadan = 168.5
    golonganDarah = 'O'
    isAktif = True

    print("HASIL PENYIMPANAN DI MEMORI:")
    print(f"- Variabel 'namaLengkap'   (string) bernilai : {namaLengkap}")
    print(f"- Variabel 'umur'          (int)    bernilai : {umur} tahun")
    print(f"- Variabel 'tinggiBadan'   (double) bernilai : {tinggiBadan} cm")
    print(f"- Variabel 'golonganDarah' (char)   bernilai : {golonganDarah}")
    print(f"- Variabel 'isAktif'       (bool)   bernilai : {isAktif} (Aktif)")
    jeda()

def modul2():
    print("\n" + "="*60)
    print(" [MODUL 2] CARA MENAMPILKAN HASIL KE LAYAR (OUTPUT)")
    print("="*60)
    print("KONSEP DASAR:")
    print("Untuk menampilkan tulisan atau nilai variabel ke layar, C++ menggunakan")
    print("perintah 'cout' (dibaca: see-out) dengan operator penyisipan '<<'.\n")

    print("KOMPONEN PENTING:")
    print(' - cout << "teks"   : Menampilkan teks langsung.')
    print(' - cout << variabel : Menampilkan isi dari variabel.')
    print(' - endl atau \'\\n\'   : Membuat baris baru (enter/newline).')
    print(' - Penggabungan (Chaining): Anda bisa merangkai beberapa \'<<\' sekaligus.\n')

    print("--- CONTOH SINTAKS DI C++ ---")
    print('cout << "Halo Dunia!" << endl;')
    print('cout << "Nama: " << "Andi" << ", Umur: " << 19 << endl;\n')

    print("HASIL EKSEKUSI:")
    print("Halo semuanya! Selamat datang di C++.")
    print("Pemain: Budi Santoso | Skor Awal: 95 poin.")

    print("\nCATATAN PERBEDAAN 'endl' dan '\\n':")
    print("'\\n' hanya membuat baris baru, sedangkan 'endl' membuat baris baru")
    print("sekaligus membersihkan buffer output (flush buffer).")
    jeda()

def modul3():
    print("\n" + "="*60)
    print(" [MODUL 3] MENGINPUTKAN DATA KE VARIABEL (INPUT)")
    print("="*60)
    print("KONSEP DASAR:")
    print("Program yang interaktif membutuhkan masukan (input) dari pengguna.")
    print("C++ menyediakan 'cin' (dibaca: see-in) dengan operator ekstraksi '>>'.\n")

    print("ATURAN PENTING INPUT C++:")
    print(" 1. cin >> variabel      : Bagus untuk angka atau kata tunggal (tanpa spasi).")
    print(" 2. getline(cin, string) : WAJIB digunakan jika teks mengandung spasi.")
    print("------------------------------------------------------------")

    nama = input("Silakan ketik Nama Lengkap Anda (boleh pakai spasi): ")
    while True:
        try:
            usia = int(input("Silakan ketik Usia Anda (angka bulat)              : "))
            break
        except ValueError:
            print("Harap masukkan angka bulat untuk usia!")

    while True:
        try:
            uang = float(input("Silakan ketik Uang Saku harian Anda (contoh 25000)  : "))
            break
        except ValueError:
            print("Harap masukkan angka desimal/bulat!")

    print("\n--- DATA YANG BERHASIL DITANGKAP PROGRAM ---")
    print(f"Nama berhasil masuk ke variabel 'namaLengkap' : {nama}")
    print(f"Usia berhasil masuk ke variabel 'usia'        : {usia} tahun")
    print(f"Uang saku masuk ke variabel 'uangSaku'        : Rp {uang:,.2f}")
    jeda()

def modul4():
    print("\n" + "="*60)
    print(" [MODUL 4] OPERASI PERHITUNGAN (ARITMATIKA)")
    print("="*60)
    print("Operator Aritmatika:")
    print(" + : Penjumlahan | - : Pengurangan | * : Perkalian")
    print(" / : Pembagian   | % : Modulus (sisa hasil bagi)\n")

    while True:
        try:
            a = int(input("Masukkan angka pertama (A) : "))
            b = int(input("Masukkan angka kedua   (B) : "))
            break
        except ValueError:
            print("Harap masukkan angka bulat!")

    print("\nHASIL PERHITUNGAN:")
    print(f"Penjumlahan ({a} + {b}) = {a + b}")
    print(f"Pengurangan ({a} - {b}) = {a - b}")
    print(f"Perkalian   ({a} * {b}) = {a * b}")
    if b != 0:
        print(f"Pembagian   ({a} / {b}) = {a / b:.2f} (desimal)")
        print(f"Modulus     ({a} % {b}) = {a % b} (sisa bagi)")
    else:
        print("Pembagian & Modulus tidak bisa dijalankan karena pembagi adalah 0!")

    print("\nCATATAN KHUSUS C++:")
    print("Di C++, jika variabel bertipe 'int' dibagi 'int', angka desimalnya dibuang!")
    print("Contoh: 5 / 2 = 2. Agar menjadi 2.5, gunakan konversi: (double)5 / 2.")
    jeda()

def modul5():
    print("\n" + "="*60)
    print(" [MODUL 5] LOGIKA DAN PERCABANGAN (IF - ELSE)")
    print("="*60)
    print("Operator Relasional: >, <, >=, <=, == (sama dengan), != (tidak sama)")
    print("Operator Logika    : && (AND), || (OR), ! (NOT)\n")

    while True:
        try:
            nilai = float(input("Masukkan Nilai Ujian Siswa (0 - 100)  : "))
            hadir = int(input("Masukkan Kehadiran Siswa (%) (0 - 100) : "))
            break
        except ValueError:
            print("Input tidak valid!")

    print("\nEVALUASI LOGIKA PROGRAM:")
    if nilai >= 85 and hadir >= 80:
        print("-> KEPUTUSAN: GRADE A (LULUS SANGAT MEMUASKAN!)")
        print("   Kondisi terpenuhi: Nilai >= 85 DAN Kehadiran >= 80%")
    elif nilai >= 70 and hadir >= 75:
        print("-> KEPUTUSAN: GRADE B (LULUS BAIK)")
        print("   Kondisi terpenuhi: Nilai >= 70 DAN Kehadiran >= 75%")
    elif nilai >= 60 and hadir >= 70:
        print("-> KEPUTUSAN: GRADE C (LULUS CUKUP)")
        print("   Kondisi terpenuhi: Nilai >= 60 DAN Kehadiran >= 70%")
    else:
        print("-> KEPUTUSAN: TIDAK LULUS (REMEDIAL / MENGULANG)")
        print("   Kondisi tidak terpenuhi untuk standar kelulusan.")
    jeda()

def modul6():
    print("\n" + "="*60)
    print(" [MODUL 6] STRUKTUR DATA ARRAY DASAR (1 DIMENSI)")
    print("="*60)
    print("Array adalah kumpulan data dengan tipe sama yang disimpan berurutan.")
    print("INGAT: Indeks array di C++ SELALU dimulai dari 0!\n")

    print("+----------+----------+----------+----------+----------+")
    print("| Indeks 0 | Indeks 1 | Indeks 2 | Indeks 3 | Indeks 4 |")
    print("+----------+----------+----------+----------+----------+")
    print("|   [?]    |   [?]    |   [?]    |   [?]    |   [?]    |")
    print("+----------+----------+----------+----------+----------+\n")

    arr = []
    print("Silakan masukkan 5 nilai tugas ke dalam array:")
    for i in range(5):
        while True:
            try:
                v = int(input(f"Masukkan nilai untuk slot indeks [{i}] : "))
                arr.append(v)
                break
            except ValueError:
                print("Masukkan angka bulat!")

    print("\nMEMBACA DATA ARRAY DENGAN PERULANGAN (FOR LOOP):")
    total = 0
    for idx, val in enumerate(arr):
        print(f"Data pada indeks [{idx}] = {val}")
        total += val

    rata = total / len(arr)
    print(f"\nTotal Nilai Keseluruhan = {total}")
    print(f"Rata-rata Nilai         = {rata:.2f}")
    jeda()

def modul7():
    print("\n" + "="*60)
    print(" [MODUL 7] STUDI KASUS TERPADU (SISTEM NILAI MAHASISWA)")
    print("="*60)
    nama = input("Ketik Nama Siswa/Mahasiswa : ")
    nim = input("Ketik NIM/Nomor Induk Siswa : ")

    mapel = ["Algoritma Dasar", "Struktur Data", "Matematika Diskrit"]
    nilai = []

    print("\nMasukkan nilai untuk 3 mata kuliah (skala 0 - 100):")
    total = 0.0
    for m in mapel:
        while True:
            try:
                skor = float(input(f"- Nilai {m:20} : "))
                nilai.append(skor)
                total += skor
                break
            except ValueError:
                print("Masukkan angka valid!")

    rata = total / len(mapel)
    if rata >= 85.0:
        predikat = "Sangat Baik (A)"
        lulus = True
    elif rata >= 70.0:
        predikat = "Baik (B)"
        lulus = True
    elif rata >= 55.0:
        predikat = "Cukup (C)"
        lulus = True
    else:
        predikat = "Kurang (D / Mengulang)"
        lulus = False

    print("\n" + "="*60)
    print("             KARTU HASIL BELAJAR SISWA                      ")
    print("="*60)
    print(f" Nama Siswa : {nama}")
    print(f" NIM        : {nim}")
    print("-" * 60)
    print(" RINCIAN NILAI MATA KULIAH:")
    for i, m in enumerate(mapel):
        print(f"  {i+1}. {m:20}: {nilai[i]:.1f}")
    print("-" * 60)
    print(f" Rata-rata Nilai : {rata:.2f}")
    print(f" Predikat Akhir  : {predikat}")
    print(f" Status Akhir    : {'[ LULUS ]' if lulus else '[ TIDAK LULUS ]'}")
    print("="*60)
    jeda()

def main():
    while True:
        print("\n" + "="*60)
        print("     LAB PANDUAN BELAJAR PEMROGRAMAN C++ DASAR (TERMINAL)    ")
        print("="*60)
        print(" Pilih modul yang ingin dipelajari langkah demi langkah:     ")
        print(" [1] Variabel & Tipe Data                                   ")
        print(" [2] Menampilkan Hasil / Output (cout)                      ")
        print(" [3] Menginputkan Data ke Variabel (cin & getline)          ")
        print(" [4] Operasi Perhitungan / Aritmatika                       ")
        print(" [5] Logika dan Percabangan (If-Else)                       ")
        print(" [6] Struktur Data Array Dasar                              ")
        print(" [7] Studi Kasus Terpadu (Menggabungkan Semua Konsep)       ")
        print(" [8] Jalankan Semua Modul Berurutan (Rekomendasi Pemula)   ")
        print(" [0] Keluar                                                 ")
        print("="*60)
        pilihan = input(" Masukkan nomor pilihan Anda (0 - 8): ").strip()

        if pilihan == '1':
            modul1()
        elif pilihan == '2':
            modul2()
        elif pilihan == '3':
            modul3()
        elif pilihan == '4':
            modul4()
        elif pilihan == '5':
            modul5()
        elif pilihan == '6':
            modul6()
        elif pilihan == '7':
            modul7()
        elif pilihan == '8':
            modul1()
            modul2()
            modul3()
            modul4()
            modul5()
            modul6()
            modul7()
        elif pilihan == '0':
            print("\nTerima kasih telah belajar dasar C++! Selamat berlatih.\n")
            break
        else:
            print("\nPilihan tidak valid! Ketik angka antara 0 hingga 8.")

if __name__ == "__main__":
    main()
