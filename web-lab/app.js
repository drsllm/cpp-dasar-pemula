// ============================================================================
// C++ GUIDED LAB - INTERACTIVE LEARNING LOGIC (JAVASCRIPT)
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnatomy();
  initVariablesModule();
  initOutputModule();
  initInputModule();
  initAritmatikaModule();
  initLogikaModule();
  initArrayModule();
  initKasusModule();
  initQuiz();
  initSourceCodeModule();
});

// ----------------------------------------------------------------------------
// 1. NAVIGATION SYSTEM
// ----------------------------------------------------------------------------
const moduleOrder = [
  'modul-peta',
  'modul-anatomi',
  'modul-variabel',
  'modul-output',
  'modul-input',
  'modul-aritmatika',
  'modul-logika',
  'modul-array',
  'modul-kasus',
  'modul-kuis',
  'modul-source'
];

const moduleMeta = {
  'modul-peta': { title: 'Peta Pembelajaran Dasar C++', desc: 'Panduan langkah demi langkah agar tidak bingung memahami peruntukan tiap baris kode C++.' },
  'modul-anatomi': { title: 'Anatomi Kode C++', desc: 'Memahami apa fungsi #include, using namespace std, int main(), dan return 0.' },
  'modul-variabel': { title: 'Bab 1: Variabel & Tipe Data', desc: 'Mengenal wadah penyimpanan memori RAM: int, double, char, string, dan bool.' },
  'modul-output': { title: 'Bab 2: Menampilkan Hasil (cout)', desc: 'Cara menampilkan teks dan nilai variabel ke layar monitor konsol.' },
  'modul-input': { title: 'Bab 3: Menerima Masukan (cin)', desc: 'Menangkap data masukan keyboard ke dalam variabel menggunakan cin dan getline.' },
  'modul-aritmatika': { title: 'Bab 4: Operasi Perhitungan', desc: 'Operasi matematika dasar, modulus, dan pencegahan error pembagian integer.' },
  'modul-logika': { title: 'Bab 5: Logika & Percabangan', desc: 'Memberi kecerdasan pada program untuk mengambil keputusan dengan if, else if, else.' },
  'modul-array': { title: 'Bab 6: Struktur Data Array', desc: 'Menyimpan sekumpulan data terindeks berurutan mulai dari indeks 0.' },
  'modul-kasus': { title: 'Bab 7: Studi Kasus Terpadu', desc: 'Menggabungkan semua materi dalam satu program nyata: Sistem Rapor Siswa.' },
  'modul-kuis': { title: 'Kuis Pemahaman Kilat', desc: 'Uji daya ingat dan pemahaman konsep sebelum menulis ulang kode di IDE.' },
  'modul-source': { title: 'Kode C++ Lengkap (.cpp)', desc: 'Lihat dan salin kode lengkap belajar_dasar.cpp yang siap dikompilasi.' }
};

function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const jumpCards = document.querySelectorAll('[data-jump]');
  const btnNext = document.getElementById('btn-next-step');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      pindahTab(target);
    });
  });

  jumpCards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-jump');
      pindahTab(target);
    });
  });

  btnNext.addEventListener('click', () => {
    const activeSection = document.querySelector('.content-section.active');
    const currentId = activeSection ? activeSection.id : 'modul-peta';
    const currentIndex = moduleOrder.indexOf(currentId);
    if (currentIndex >= 0 && currentIndex < moduleOrder.length - 1) {
      pindahTab(moduleOrder[currentIndex + 1]);
    } else {
      pindahTab(moduleOrder[0]);
    }
  });
}

function pindahTab(targetId) {
  // Update button active
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-target') === targetId);
  });

  // Update sections
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.toggle('active', sec.id === targetId);
  });

  // Update header text
  const meta = moduleMeta[targetId];
  if (meta) {
    document.getElementById('page-title').textContent = meta.title;
    document.getElementById('page-desc').textContent = meta.desc;
  }

  // Update Next Button Text
  const currentIndex = moduleOrder.indexOf(targetId);
  const btnNext = document.getElementById('btn-next-step');
  if (currentIndex === moduleOrder.length - 1) {
    btnNext.textContent = 'Kembali ke Peta Belajar ↺';
  } else {
    btnNext.textContent = 'Lanjut ke Modul Berikutnya ➔';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ----------------------------------------------------------------------------
// 2. ANATOMI KODE C++ (CLICK TO REVEAL EXPLANATION)
// ----------------------------------------------------------------------------
const anatomyData = {
  1: {
    title: "#include <iostream> (Preprocessor Directive)",
    desc: "Baris ini adalah instruksi awal untuk kompiler agar menyertakan pustaka (library) standar 'iostream' (Input-Output Stream). Tanpa baris ini, komputer TIDAK AKAN MENGERTI apa itu 'cout' (cetak ke layar) dan 'cin' (ambil input keyboard)."
  },
  2: {
    title: "#include <string> (Pustaka Teks)",
    desc: "Menyertakan pustaka untuk tipe data teks (string). Ini memungkinkan kita menyimpan kata, kalimat, atau nama lengkap dengan leluasa."
  },
  3: {
    title: "using namespace std; (Ruang Lingkup Nama)",
    desc: "Di C++, semua fungsi standar berada di dalam wadah bernama 'std' (Standard). Jika tidak ada baris ini, Anda terpaksa harus mengetik 'std::cout' dan 'std::cin' setiap saat. Baris ini mempersingkat hidup kita agar cukup mengetik 'cout' saja!"
  },
  5: {
    title: "int main() (Gerbang Masuk Utama)",
    desc: "Fungsi 'main()' adalah JANTUNG dari setiap program C++. Kapanpun program dijalankan, komputer SELALU mencari dan mulai membaca instruksi pertama kali dari fungsi main ini. Tipe 'int' menandakan bahwa fungsi ini akan mengembalikan kode status berupa angka (biasanya 0)."
  },
  6: {
    title: "// Komentar (Catatan Pengembang)",
    desc: "Tanda garis miring ganda '//' adalah komentar. Apapun yang ditulis setelah '//' akan DIABAIKAN total oleh komputer. Gunakan komentar untuk memberi catatan pengingat bagi diri sendiri atau tim."
  },
  7: {
    title: "cout << \"Halo, Dunia!\" << endl; (Cetak ke Layar)",
    desc: "cout mengalirkan teks \"Halo, Dunia!\" ke monitor melalui operator '<<'. Perintah 'endl' (End Line) membuat kursor berpindah ke baris baru seperti menekan tombol Enter pada keyboard."
  },
  9: {
    title: "return 0; (Laporan Sukses ke Sistem Operasi)",
    desc: "Angka 0 adalah sinyal resmi kepada sistem operasi (Windows/Linux/Mac) bahwa program berhasil menyelesaikan semua tugasnya dengan mulus tanpa adanya error atau crash."
  },
  10: {
    title: "} (Kurung Kurawal Penutup)",
    desc: "Menandai batas akhir dari blok fungsi main(). Semua variabel yang dibuat di dalam kurung kurawal ini akan dibersihkan dari memori RAM setelah program selesai."
  }
};

function initAnatomy() {
  const lines = document.querySelectorAll('.c-line');
  const titleEl = document.getElementById('anatomy-title');
  const descEl = document.getElementById('anatomy-desc');

  lines.forEach(line => {
    line.addEventListener('click', () => {
      lines.forEach(l => l.classList.remove('active'));
      line.classList.add('active');

      const part = line.getAttribute('data-part');
      const data = anatomyData[part];
      if (data) {
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// 3. BAB 1: VARIABEL & SIMULATOR RAM
// ----------------------------------------------------------------------------
function initVariablesModule() {
  const inNama = document.getElementById('sim-var-nama');
  const inUmur = document.getElementById('sim-var-umur');
  const inTinggi = document.getElementById('sim-var-tinggi');
  const inGoldar = document.getElementById('sim-var-goldar');

  function renderMemoryChips() {
    const nama = inNama.value || 'Kosong';
    const umur = inUmur.value || 0;
    const tinggi = inTinggi.value || 0.0;
    const goldar = inGoldar.value || '-';

    const chipsEl = document.getElementById('memory-chips');
    chipsEl.innerHTML = `
      <div class="memory-chip">
        <span class="chip-address">0x7FFE_A10</span>
        <div class="chip-name">string namaSiswa</div>
        <div class="chip-val">"${nama}"</div>
      </div>
      <div class="memory-chip">
        <span class="chip-address">0x7FFE_A18</span>
        <div class="chip-name">int umur</div>
        <div class="chip-val">${umur}</div>
      </div>
      <div class="memory-chip">
        <span class="chip-address">0x7FFE_A1C</span>
        <div class="chip-name">double tinggiBadan</div>
        <div class="chip-val">${parseFloat(tinggi).toFixed(1)}</div>
      </div>
      <div class="memory-chip">
        <span class="chip-address">0x7FFE_A24</span>
        <div class="chip-name">char golonganDarah</div>
        <div class="chip-val">'${goldar}'</div>
      </div>
    `;

    document.getElementById('syntax-preview-var').textContent = 
`string namaSiswa = "${nama}";
int umur = ${umur};
double tinggiBadan = ${parseFloat(tinggi).toFixed(1)};
char golonganDarah = '${goldar}';`;
  }

  [inNama, inUmur, inTinggi, inGoldar].forEach(el => {
    el.addEventListener('input', renderMemoryChips);
  });

  renderMemoryChips();
}

function pilihTipe(tipe) {
  const inNama = document.getElementById('sim-var-nama');
  if (tipe === 'int') {
    alert("Tipe data 'int' digunakan khusus bilangan bulat, seperti umur: 18, tahun: 2024, atau stok barang: 50.");
  } else if (tipe === 'double') {
    alert("Tipe data 'double' digunakan untuk bilangan desimal yang butuh ketelitian tinggi, seperti IPK: 3.85 atau tinggi badan: 172.5 cm.");
  } else if (tipe === 'char') {
    alert("Tipe data 'char' hanya menyimpan 1 karakter dan WAJIB diapit tanda petik tunggal: 'A', 'B', atau '+'.");
  } else if (tipe === 'string') {
    alert("Tipe data 'string' menyimpan kumpulan kalimat dan WAJIB diapit tanda petik ganda: \"Halo Dunia\".");
  } else if (tipe === 'bool') {
    alert("Tipe data 'bool' (Boolean) hanya bernilai true (1) atau false (0), sangat penting untuk logika if-else.");
  }
}

// ----------------------------------------------------------------------------
// 4. BAB 2: OUTPUT (cout)
// ----------------------------------------------------------------------------
function initOutputModule() {
  const t1 = document.getElementById('out-text-1');
  const t2 = document.getElementById('out-text-2');
  const newlineType = document.getElementById('out-newline-type');
  const screen = document.getElementById('terminal-screen-output');
  const syntax = document.getElementById('syntax-preview-out');

  function renderOutput() {
    const val1 = t1.value;
    const val2 = t2.value;
    const isEndl = newlineType.value === 'endl';

    if (isEndl) {
      screen.textContent = `${val1}\n${val2}`;
      syntax.textContent = `cout << "${val1}" << endl;\ncout << "${val2}" << endl;`;
    } else {
      screen.textContent = `${val1}${val2}`;
      syntax.textContent = `cout << "${val1}";\ncout << "${val2}" << endl;`;
    }
  }

  [t1, t2, newlineType].forEach(el => el.addEventListener('input', renderOutput));
  renderOutput();
}

// ----------------------------------------------------------------------------
// 5. BAB 3: INPUT (cin & getline)
// ----------------------------------------------------------------------------
function initInputModule() {
  const inNama = document.getElementById('live-input-nama');
  const inUmur = document.getElementById('live-input-umur');
  const btnRun = document.getElementById('btn-run-input-sim');
  const screen = document.getElementById('terminal-screen-input');

  btnRun.addEventListener('click', () => {
    const nama = inNama.value.trim() || 'Siswa Pemula';
    const umur = inUmur.value || '18';

    screen.textContent = 
`>> [SIMULASI INPUT DITERIMA]
- getline(cin, nama);  => Tersimpan di RAM sebagai: "${nama}"
- cin >> umur;         => Tersimpan di RAM sebagai: ${umur}

>> HASIL EKSEKUSI PROGRAM:
Halo, ${nama}!
Usia Anda terdaftar: ${umur} tahun.
Status: Data berhasil diserap dari keyboard ke variabel memori!`;
  });
}

// ----------------------------------------------------------------------------
// 6. BAB 4: OPERASI ARITMATIKA
// ----------------------------------------------------------------------------
function initAritmatikaModule() {
  const inA = document.getElementById('calc-a');
  const inB = document.getElementById('calc-b');
  const grid = document.getElementById('calc-results');
  const code = document.getElementById('calc-code-preview');

  function calculate() {
    const a = parseInt(inA.value, 10) || 0;
    const b = parseInt(inB.value, 10) || 0;

    const tambah = a + b;
    const kurang = a - b;
    const kali = a * b;
    const bagiInt = b !== 0 ? Math.floor(a / b) : 'Tak Terdefinisi';
    const bagiDes = b !== 0 ? (a / b).toFixed(2) : 'Error (0)';
    const mod = b !== 0 ? (a % b) : 'Error (0)';

    grid.innerHTML = `
      <div class="calc-tile">
        <div class="label">Penjumlahan (+)</div>
        <div class="expr">${a} + ${b}</div>
        <div class="res" style="color: #38bdf8;">${tambah}</div>
      </div>
      <div class="calc-tile">
        <div class="label">Pengurangan (-)</div>
        <div class="expr">${a} - ${b}</div>
        <div class="res" style="color: #c084fc;">${kurang}</div>
      </div>
      <div class="calc-tile">
        <div class="label">Perkalian (*)</div>
        <div class="expr">${a} * ${b}</div>
        <div class="res" style="color: #fbbf24;">${kali}</div>
      </div>
      <div class="calc-tile">
        <div class="label">Bagi Integer (int / int)</div>
        <div class="expr">${a} / ${b}</div>
        <div class="res" style="color: #f87171;">${bagiInt}</div>
      </div>
      <div class="calc-tile">
        <div class="label">Bagi Desimal (double)</div>
        <div class="expr">(double)${a} / ${b}</div>
        <div class="res" style="color: #34d399;">${bagiDes}</div>
      </div>
      <div class="calc-tile">
        <div class="label">Modulus / Sisa (%)</div>
        <div class="expr">${a} % ${b}</div>
        <div class="res" style="color: #38bdf8;">${mod}</div>
      </div>
    `;

    code.textContent = 
`int a = ${a}, b = ${b};
int tambah = a + b;        // Hasil: ${tambah}
int kali   = a * b;        // Hasil: ${kali}
int bagiBulat = a / b;     // Hasil: ${bagiInt} (Desimal dibuang jika sesama int!)
double bagiPresisi = (double)a / b; // Hasil: ${bagiDes}
int sisaBagi = a % b;      // Hasil: ${mod}`;
  }

  inA.addEventListener('input', calculate);
  inB.addEventListener('input', calculate);
  calculate();
}

// ----------------------------------------------------------------------------
// 7. BAB 5: LOGIKA & PERCABANGAN (IF-ELSE)
// ----------------------------------------------------------------------------
function initLogikaModule() {
  const sliderNilai = document.getElementById('slider-nilai');
  const sliderHadir = document.getElementById('slider-hadir');
  const labelNilai = document.getElementById('val-label-nilai');
  const labelHadir = document.getElementById('val-label-hadir');
  const viz = document.getElementById('decision-visualizer');

  function evaluateLogic() {
    const nilai = parseInt(sliderNilai.value, 10);
    const hadir = parseInt(sliderHadir.value, 10);

    labelNilai.textContent = nilai;
    labelHadir.textContent = hadir;

    let badgeClass = '';
    let badgeText = '';
    let reasonText = '';

    if (nilai >= 85 && hadir >= 80) {
      badgeClass = 'grade-a';
      badgeText = 'GRADE A (SANGAT MEMUASKAN)';
      reasonText = `Memenuhi syarat utama: Nilai (${nilai} >= 85) DAN Kehadiran (${hadir}% >= 80%). Blok [IF] dieksekusi!`;
    } else if (nilai >= 70 && hadir >= 75) {
      badgeClass = 'grade-b';
      badgeText = 'GRADE B (LULUS BAIK)';
      reasonText = `Memenuhi syarat kedua: Nilai (${nilai} >= 70) DAN Kehadiran (${hadir}% >= 75%). Blok [ELSE IF ke-1] dieksekusi!`;
    } else if (nilai >= 60 && hadir >= 70) {
      badgeClass = 'grade-c';
      badgeText = 'GRADE C (LULUS CUKUP)';
      reasonText = `Memenuhi syarat ketiga: Nilai (${nilai} >= 60) DAN Kehadiran (${hadir}% >= 70%). Blok [ELSE IF ke-2] dieksekusi!`;
    } else {
      badgeClass = 'failed';
      badgeText = 'TIDAK LULUS (REMEDIAL)';
      reasonText = `Semua kondisi di atas bernilai FALSE. Blok default [ELSE] dieksekusi.`;
    }

    viz.innerHTML = `
      <div class="decision-badge ${badgeClass}">${badgeText}</div>
      <div class="decision-reason">${reasonText}</div>
    `;
  }

  sliderNilai.addEventListener('input', evaluateLogic);
  sliderHadir.addEventListener('input', evaluateLogic);
  evaluateLogic();
}

// ----------------------------------------------------------------------------
// 8. BAB 6: ARRAY DASAR
// ----------------------------------------------------------------------------
let arrayData = [80, 85, 90, 75, 85];
let activeSlotIndex = 0;

function initArrayModule() {
  const container = document.getElementById('array-slots-container');
  const editInput = document.getElementById('arr-edit-val');
  const btnSave = document.getElementById('btn-save-slot');
  const statSum = document.getElementById('arr-stat-sum');
  const statAvg = document.getElementById('arr-stat-avg');

  function renderArray() {
    container.innerHTML = '';
    let sum = 0;

    arrayData.forEach((val, idx) => {
      sum += val;
      const slotEl = document.createElement('div');
      slotEl.className = `arr-slot ${idx === activeSlotIndex ? 'active' : ''}`;
      slotEl.innerHTML = `
        <span class="slot-index">Indeks [${idx}]</span>
        <span class="slot-val">${val}</span>
      `;
      slotEl.addEventListener('click', () => {
        activeSlotIndex = idx;
        editInput.value = arrayData[idx];
        renderArray();
      });
      container.appendChild(slotEl);
    });

    statSum.textContent = sum;
    statAvg.textContent = (sum / arrayData.length).toFixed(2);
  }

  btnSave.addEventListener('click', () => {
    const newVal = parseInt(editInput.value, 10);
    if (!isNaN(newVal)) {
      arrayData[activeSlotIndex] = newVal;
      renderArray();
    }
  });

  renderArray();
}

// ----------------------------------------------------------------------------
// 9. BAB 7: STUDI KASUS TERPADU
// ----------------------------------------------------------------------------
function initKasusModule() {
  const btnGen = document.getElementById('btn-generate-rapor');
  const outScreen = document.getElementById('rapor-terminal-output');

  function generateRapor() {
    const nama = document.getElementById('kasus-nama').value.trim() || 'Ahmad Fauzi';
    const nim = document.getElementById('kasus-nim').value.trim() || '2406012412001';
    const mk1 = parseFloat(document.getElementById('kasus-mk-1').value) || 0;
    const mk2 = parseFloat(document.getElementById('kasus-mk-2').value) || 0;
    const mk3 = parseFloat(document.getElementById('kasus-mk-3').value) || 0;

    const total = mk1 + mk2 + mk3;
    const rata = total / 3;
    let predikat = '';
    let status = '';

    if (rata >= 85) {
      predikat = 'Sangat Baik (A)';
      status = '[ LULUS ]';
    } else if (rata >= 70) {
      predikat = 'Baik (B)';
      status = '[ LULUS ]';
    } else if (rata >= 55) {
      predikat = 'Cukup (C)';
      status = '[ LULUS ]';
    } else {
      predikat = 'Kurang (D / Mengulang)';
      status = '[ TIDAK LULUS ]';
    }

    outScreen.textContent = 
`============================================================
             KARTU HASIL BELAJAR SISWA                      
============================================================
 Nama Siswa : ${nama}
 NIM        : ${nim}
------------------------------------------------------------
 RINCIAN NILAI MATA KULIAH (ARRAY 1 DIMENSI):
  1. Algoritma Dasar     : ${mk1.toFixed(1)}
  2. Struktur Data       : ${mk2.toFixed(1)}
  3. Matematika Diskrit  : ${mk3.toFixed(1)}
------------------------------------------------------------
 Rata-rata Nilai : ${rata.toFixed(2)}
 Predikat Akhir  : ${predikat}
 Status Akhir    : ${status}
============================================================`;
  }

  btnGen.addEventListener('click', generateRapor);
  generateRapor();
}

// ----------------------------------------------------------------------------
// 10. KUIS KILAT PEMAHAMAN
// ----------------------------------------------------------------------------
const quizQuestions = [
  {
    q: "1. Jika Anda ingin menyimpan nama lengkap seseorang yang mengandung spasi, fungsi input C++ mana yang paling tepat?",
    options: [
      { text: "cin >> nama;", correct: false },
      { text: "getline(cin, nama);", correct: true },
      { text: "cout << nama;", correct: false },
      { text: "scanf(nama);", correct: false }
    ],
    explanation: "Fungsi getline(cin, nama) membaca seluruh baris kalimat hingga tombol Enter ditekan, sedangkan 'cin >>' akan berhenti saat menemui spasi pertama."
  },
  {
    q: "2. Berapakah hasil dari ekspresi perhitungan C++ 'int hasil = 7 / 2;' ?",
    options: [
      { text: "3.5", correct: false },
      { text: "3 (angka desimal dibuang karena sesama integer)", correct: true },
      { text: "4", correct: false },
      { text: "Error program", correct: false }
    ],
    explanation: "Di C++, pembagian antara dua bilangan integer (bulat) menghasilkan integer. Desimal .5 dibuang ke bawah menghasilkan 3."
  },
  {
    q: "3. Jika Anda membuat array 'int nilai[5];', berapakah nomor indeks untuk slot data paling terakhir?",
    options: [
      { text: "Indeks [5]", correct: false },
      { text: "Indeks [4]", correct: true },
      { text: "Indeks [1]", correct: false },
      { text: "Indeks [0]", correct: false }
    ],
    explanation: "Indeks C++ selalu dimulai dari 0. Untuk ukuran 5, slotnya adalah [0], [1], [2], [3], dan [4]."
  },
  {
    q: "4. Manakah operator yang digunakan untuk membandingkan apakah dua nilai bernilai SAMA PERSIS?",
    options: [
      { text: "=", correct: false },
      { text: "==", correct: true },
      { text: "!=", correct: false },
      { text: "equals()", correct: false }
    ],
    explanation: "Tanda '=' satu kali adalah operator pengisian nilai (assignment), sedangkan '==' dua kali adalah operator relasional pembanding kesamaan."
  },
  {
    q: "5. Mengapa baris '#include <iostream>' wajib ditulis di bagian paling atas program C++?",
    options: [
      { text: "Agar komputer bisa menggunakan perintah cout dan cin", correct: true },
      { text: "Agar program memiliki warna tampilan bagus", correct: false },
      { text: "Sebagai penutup fungsi main()", correct: false },
      { text: "Untuk menghapus memori RAM", correct: false }
    ],
    explanation: "Pustaka iostream (Input/Output Stream) berisi instruksi agar kompiler mengenali objek aliran cout dan cin."
  }
];

let quizAnswers = {};

function initQuiz() {
  const container = document.getElementById('quiz-wrapper');
  container.innerHTML = '';

  quizQuestions.forEach((item, qIdx) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerHTML = `
      <div class="quiz-q-num">Pertanyaan #${qIdx + 1}</div>
      <div class="quiz-question">${item.q}</div>
      <div class="quiz-options" id="quiz-opts-${qIdx}">
        ${item.options.map((opt, oIdx) => `
          <button class="quiz-opt-btn" onclick="pilihJawaban(${qIdx}, ${oIdx})">${opt.text}</button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-feed-${qIdx}"></div>
    `;
    container.appendChild(card);
  });
}

function pilihJawaban(qIdx, oIdx) {
  if (quizAnswers[qIdx] !== undefined) return; // sudah dijawab

  const item = quizQuestions[qIdx];
  const isCorrect = item.options[oIdx].correct;
  quizAnswers[qIdx] = isCorrect;

  const optsContainer = document.getElementById(`quiz-opts-${qIdx}`);
  const buttons = optsContainer.querySelectorAll('.quiz-opt-btn');

  buttons.forEach((btn, idx) => {
    if (item.options[idx].correct) {
      btn.classList.add('correct');
    } else if (idx === oIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const feedback = document.getElementById(`quiz-feed-${qIdx}`);
  feedback.style.display = 'block';
  if (isCorrect) {
    feedback.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
    feedback.style.color = '#34d399';
    feedback.innerHTML = `<strong>Benar! 🎯</strong> ${item.explanation}`;
  } else {
    feedback.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
    feedback.style.color = '#f87171';
    feedback.innerHTML = `<strong>Kurang tepat!</strong> ${item.explanation}`;
  }

  // Cek apakah semua sudah selesai dijawab
  if (Object.keys(quizAnswers).length === quizQuestions.length) {
    const correctCount = Object.values(quizAnswers).filter(Boolean).length;
    const resBox = document.getElementById('quiz-result-box');
    const title = document.getElementById('quiz-score-title');
    const desc = document.getElementById('quiz-score-desc');

    resBox.style.display = 'block';
    title.textContent = `Skor Anda: ${correctCount} / ${quizQuestions.length} (${(correctCount/quizQuestions.length)*100}%)`;
    if (correctCount === 5) {
      desc.textContent = 'Luar Biasa Sempurna! 🎉 Anda telah memahami seluruh pondasi dasar variabel, tipe data, I/O, logika, dan array!';
    } else if (correctCount >= 3) {
      desc.textContent = 'Kerja Bagus! 👍 Anda sudah menguasai sebagian besar materi. Tinjau kembali penjelasan di atas untuk materi yang keliru.';
    } else {
      desc.textContent = 'Tetap Semangat! 💪 Pelajari kembali materi per bab di lab ini, lalu coba ulangi kuis.';
    }
  }
}

function resetQuiz() {
  quizAnswers = {};
  document.getElementById('quiz-result-box').style.display = 'none';
  initQuiz();
}

// ----------------------------------------------------------------------------
// 11. SOURCE CODE VIEWER & ACTIONS
// ----------------------------------------------------------------------------
const defaultCppCode = `/*
 ============================================================================
  PROGRAM BELAJAR DASAR C++ UNTUK PEMULA (STEP-BY-STEP GUIDED LEARNING)
 ============================================================================
*/

#include <iostream>
#include <string>
#include <iomanip>

using namespace std;

void bersihkanBuffer() {
    cin.clear();
    while (cin.get() != '\\n') {
        continue;
    }
}

void jedaLanjut() {
    cout << "\\n------------------------------------------------------------\\n";
    cout << ">> Tekan [ENTER] untuk melanjutkan panduan...";
    cin.get();
    cout << "------------------------------------------------------------\\n\\n";
}

void modul1_VariabelDanTipeData() {
    cout << "\\n============================================================\\n";
    cout << " [MODUL 1] MENGENAL VARIABEL DAN TIPE DATA\\n";
    cout << "============================================================\\n";
    int umur = 17;
    double tinggiBadan = 168.5;
    char golonganDarah = 'O';
    string namaLengkap = "Ahmad Fauzi";
    bool isAktif = true;

    cout << "- Variabel 'namaLengkap'   (string) bernilai : " << namaLengkap << "\\n";
    cout << "- Variabel 'umur'          (int)    bernilai : " << umur << " tahun\\n";
    cout << "- Variabel 'tinggiBadan'   (double) bernilai : " << tinggiBadan << " cm\\n";
    cout << "- Variabel 'golonganDarah' (char)   bernilai : " << golonganDarah << "\\n";
    cout << "- Variabel 'isAktif'       (bool)   bernilai : " << (isAktif ? "true (Aktif)" : "false (Nonaktif)") << "\\n";
    jedaLanjut();
}

void modul2_MenampilkanHasil() {
    cout << "\\n============================================================\\n";
    cout << " [MODUL 2] CARA MENAMPILKAN HASIL KE LAYAR (OUTPUT)\\n";
    cout << "============================================================\\n";
    string nama = "Budi Santoso";
    int skor = 95;
    cout << "Halo semuanya! Selamat datang di C++.\\n";
    cout << "Pemain: " << nama << " | Skor Awal: " << skor << " poin." << endl;
    jedaLanjut();
}

void modul3_InputData() {
    cout << "\\n============================================================\\n";
    cout << " [MODUL 3] MENGINPUTKAN DATA KE VARIABEL (INPUT)\\n";
    cout << "============================================================\\n";
    string namaLengkap;
    int usia;
    double uangSaku;

    cout << "Silakan ketik Nama Lengkap Anda (boleh pakai spasi): ";
    getline(cin, namaLengkap);

    cout << "Silakan ketik Usia Anda (angka bulat)              : ";
    cin >> usia;

    cout << "Silakan ketik Uang Saku harian Anda (contoh 25000)  : ";
    cin >> uangSaku;
    bersihkanBuffer();

    cout << "\\n--- DATA YANG BERHASIL DITANGKAP OLEH PROGRAM ---\\n";
    cout << "Nama berhasil masuk ke variabel 'namaLengkap' : " << namaLengkap << endl;
    cout << "Usia berhasil masuk ke variabel 'usia'        : " << usia << " tahun" << endl;
    cout << fixed << setprecision(2);
    cout << "Uang saku masuk ke variabel 'uangSaku'        : Rp " << uangSaku << endl;
    jedaLanjut();
}

void modul4_OperasiPerhitungan() {
    cout << "\\n============================================================\\n";
    cout << " [MODUL 4] OPERASI PERHITUNGAN (ARITMATIKA)\\n";
    cout << "============================================================\\n";
    int a, b;
    cout << "Masukkan angka pertama (A) : ";
    cin >> a;
    cout << "Masukkan angka kedua   (B) : ";
    cin >> b;
    bersihkanBuffer();

    cout << "\\nHASIL PERHITUNGAN:\\n";
    cout << "Penjumlahan (" << a << " + " << b << ") = " << (a + b) << endl;
    cout << "Pengurangan (" << a << " - " << b << ") = " << (a - b) << endl;
    cout << "Perkalian   (" << a << " * " << b << ") = " << (a * b) << endl;
    if (b != 0) {
        double bagiDesimal = (double)a / b;
        cout << fixed << setprecision(2);
        cout << "Pembagian   (" << a << " / " << b << ") = " << bagiDesimal << " (desimal)" << endl;
        cout << "Modulus/Sisa (" << a << " % " << b << ") = " << (a % b) << " (sisa bagi)" << endl;
    }
    jedaLanjut();
}

void modul5_LogikaPercabangan() {
    cout << "\\n============================================================\\n";
    cout << " [MODUL 5] LOGIKA DAN PERCABANGAN (PENGAMBILAN KEPUTUSAN)\\n";
    cout << "============================================================\\n";
    double nilaiUjian;
    int persentaseKehadiran;

    cout << "Masukkan Nilai Ujian Siswa (0 - 100) : ";
    cin >> nilaiUjian;
    cout << "Masukkan Kehadiran Siswa (%) (0 - 100) : ";
    cin >> persentaseKehadiran;
    bersihkanBuffer();

    if (nilaiUjian >= 85 && persentaseKehadiran >= 80) {
        cout << "-> KEPUTUSAN: GRADE A (LULUS SANGAT MEMUASKAN!)\\n";
    } else if (nilaiUjian >= 70 && persentaseKehadiran >= 75) {
        cout << "-> KEPUTUSAN: GRADE B (LULUS BAIK)\\n";
    } else if (nilaiUjian >= 60 && persentaseKehadiran >= 70) {
        cout << "-> KEPUTUSAN: GRADE C (LULUS CUKUP)\\n";
    } else {
        cout << "-> KEPUTUSAN: TIDAK LULUS (REMEDIAL / MENGULANG)\\n";
    }
    jedaLanjut();
}

void modul6_ArrayDasar() {
    cout << "\\n============================================================\\n";
    cout << " [MODUL 6] STRUKTUR DATA ARRAY DASAR (1 DIMENSI)\\n";
    cout << "============================================================\\n";
    const int UKURAN = 5;
    int daftarNilai[UKURAN];

    cout << "Silakan masukkan " << UKURAN << " nilai tugas (angka bulat):\\n";
    for (int i = 0; i < UKURAN; i++) {
        cout << "Masukkan nilai untuk indeks [" << i << "] : ";
        cin >> daftarNilai[i];
    }
    bersihkanBuffer();

    int totalNilai = 0;
    for (int i = 0; i < UKURAN; i++) {
        cout << "Data pada indeks [" << i << "] = " << daftarNilai[i] << endl;
        totalNilai += daftarNilai[i];
    }

    double rataRata = (double)totalNilai / UKURAN;
    cout << fixed << setprecision(2);
    cout << "\\nTotal = " << totalNilai << " | Rata-rata = " << rataRata << endl;
    jedaLanjut();
}

void modul7_StudiKasusTerpadu() {
    cout << "\\n============================================================\\n";
    cout << " [MODUL 7] STUDI KASUS TERPADU: SISTEM NILAI MAHASISWA\\n";
    cout << "============================================================\\n";
    string namaSiswa, nimSiswa;
    const int JUMLAH = 3;
    string mapel[JUMLAH] = {"Algoritma Dasar", "Struktur Data", "Matematika Diskrit"};
    double nilai[JUMLAH];

    cout << "Ketik Nama Siswa/Mahasiswa : ";
    getline(cin, namaSiswa);
    cout << "Ketik NIM/Nomor Induk Siswa : ";
    getline(cin, nimSiswa);

    double total = 0.0;
    for (int i = 0; i < JUMLAH; i++) {
        cout << "- Nilai " << mapel[i] << " : ";
        cin >> nilai[i];
        total += nilai[i];
    }
    bersihkanBuffer();

    double rata = total / JUMLAH;
    cout << "\\n============================================================\\n";
    cout << " Nama Siswa : " << namaSiswa << " (NIM: " << nimSiswa << ")\\n";
    cout << " Rata-rata  : " << fixed << setprecision(2) << rata << "\\n";
    cout << " Status     : " << (rata >= 55.0 ? "[ LULUS ]" : "[ TIDAK LULUS ]") << "\\n";
    cout << "============================================================\\n";
    jedaLanjut();
}

int main() {
    int pilihan;
    do {
        cout << "\\n=== MENU PANDUAN DASAR C++ ===\\n";
        cout << "[1] Variabel & Tipe Data\\n";
        cout << "[2] Output (cout)\\n";
        cout << "[3] Input (cin & getline)\\n";
        cout << "[4] Aritmatika\\n";
        cout << "[5] Logika (If-Else)\\n";
        cout << "[6] Array Dasar\\n";
        cout << "[7] Studi Kasus Terpadu\\n";
        cout << "[8] Jalankan Semua Berurutan\\n";
        cout << "[0] Keluar\\n";
        cout << "Pilihan Anda: ";
        if (!(cin >> pilihan)) {
            bersihkanBuffer();
            continue;
        }
        bersihkanBuffer();

        switch (pilihan) {
            case 1: modul1_VariabelDanTipeData(); break;
            case 2: modul2_MenampilkanHasil(); break;
            case 3: modul3_InputData(); break;
            case 4: modul4_OperasiPerhitungan(); break;
            case 5: modul5_LogikaPercabangan(); break;
            case 6: modul6_ArrayDasar(); break;
            case 7: modul7_StudiKasusTerpadu(); break;
            case 8:
                modul1_VariabelDanTipeData();
                modul2_MenampilkanHasil();
                modul3_InputData();
                modul4_OperasiPerhitungan();
                modul5_LogikaPercabangan();
                modul6_ArrayDasar();
                modul7_StudiKasusTerpadu();
                break;
        }
    } while (pilihan != 0);

    return 0;
}`;

let cachedSourceCode = defaultCppCode;

function initSourceCodeModule() {
  const codeDisplay = document.getElementById('full-cpp-code-display');
  const btnCopyHeader = document.getElementById('btn-copy-code');
  const btnCopyFull = document.getElementById('btn-copy-cpp-full');
  const btnDownload = document.getElementById('btn-download-cpp');

  codeDisplay.textContent = defaultCppCode;

  // Coba fetch jika disajikan lewat web server lokal
  fetch('../belajar_dasar.cpp')
    .then(res => {
      if (res.ok) return res.text();
      return defaultCppCode;
    })
    .then(text => {
      cachedSourceCode = text;
      codeDisplay.textContent = text;
    })
    .catch(() => {
      // Gunakan default fallback
      cachedSourceCode = defaultCppCode;
      codeDisplay.textContent = defaultCppCode;
    });

  function copyCode() {
    if (cachedSourceCode) {
      navigator.clipboard.writeText(cachedSourceCode).then(() => {
        alert("Kode C++ berhasil disalin ke clipboard! Anda bisa langsung menempelkannya (paste) di IDE Anda.");
      });
    }
  }

  btnCopyHeader.addEventListener('click', copyCode);
  btnCopyFull.addEventListener('click', copyCode);

  btnDownload.addEventListener('click', () => {
    const blob = new Blob([cachedSourceCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'belajar_dasar.cpp';
    a.click();
    URL.revokeObjectURL(url);
  });
}
