# Website Pembelajaran Pemrograman C++

Website media pembelajaran terstruktur untuk mempelajari bahasa pemrograman C++ dari tingkat dasar hingga fungsi (*functions*). Dirancang dengan antarmuka bergaya W3Schools (warna hijau `#04AA6D` dan putih), bersih tanpa emoticon, responsif di seluruh perangkat (smartphone, tablet, laptop, MacBook), serta menggunakan pengantar Bahasa Indonesia yang formal dan jelas.

**Pengembang:** Muhammad Anhar Solihin  
**Lisensi Proyek:** Open Source  

---

## Fitur Utama

1. **Kurikulum Terstruktur (23 Modul Lengkap):**
   - **Dasar C++:** Pengenalan, Persiapan & Instalasi MinGW/GCC, Sintaks & Struktur Dasar, Output (`cout` & `endl`), Komentar, Variabel & Tipe Data, Konstanta (`const`), Input Pengguna (`cin`), Operator (Aritmatika, Logika, Relasional).
   - **Percabangan:** `if`, `else if`, `else`, Operator Ternary, dan `switch-case`.
   - **Perulangan:** `while`, `do-while`, dan `for loop` (standar & range-based).
   - **Struktur Data & Memori:** Array 1D & 2D (Matriks), Pointer, dan Reference.
   - **Fungsi (Functions):** Pengenalan Fungsi, Parameter & Nilai Default, Nilai Kembalian (`return`), Pass by Reference (`&`), Function Overloading, dan Rekursi.
   - **Media & Evaluasi:** Galeri 6 Video Tutorial Pembelajaran terintegrasi dan Evaluasi Kuis Komprehensif.

2. **Bedah Anatomi Sintaks C++ & Troubleshooting Eror Kompiler GCC:**
   - Struktur rumus sintaks baku (*syntax blueprint*).
   - Tabel dekonstruksi komponen token dan kata kunci.
   - Aturan baku kompiler (*compiler strict rules*).
   - Panduan analisis eror kompilasi nyata GCC (misal: *missing semicolon*, *undeclared identifier*, *out-of-bounds array*, *null pointer*, dll) beserta solusi perbaikannya.

3. **Latihan Praktik Sintaks Interaktif (Fill-in-the-Blank Drills):**
   - Latihan melengkapi kode C++ langsung di browser seperti fitur khas W3Schools.
   - Dilengkapi tombol *Periksa Jawaban Sintaks* dengan verifikasi warna otomatis (hijau/merah), tombol *Kunci Jawaban*, dan tombol *Ulangi Latihan*.

4. **Editor C++ Interaktif Mandiri di Halaman Baru (`editor.html`):**
   - Halaman editor kode penuh dengan tata letak split-screen (50% editor kode sumber dan 50% terminal output simulasi GCC).
   - Dilengkapi fitur indentasi tombol Tab, penomoran baris, pewarnaan sintaks, pintasan keyboard `Ctrl + Enter` untuk menjalankan kode, dan tombol kembali ke modul tutorial.

5. **Pemutar Video Tutorial YouTube Tersemat:**
   - 6 video pembelajaran yang disematkan langsung di dalam halaman materi dan galeri video tanpa perlu keluar dari website.
   - Dilengkapi tombol tautan alternatif jika browser membatasi iframe lokal.

6. **Desain Bersih & Responsif:**
   - 100% bebas dari emoticon dan unicode emoji.
   - Tampilan optimal di smartphone (Android & iPhone), tablet (iPad), laptop, maupun monitor desktop beresolusi tinggi.

---

## Struktur Direktori

```text
├── index.html              # Halaman utama aplikasi tutorial C++
├── editor.html             # Halaman editor C++ mandiri
├── jalankan_website.bat    # Batch launcher server HTTP lokal (port 8080)
├── README.md               # Dokumentasi proyek
├── css/
│   ├── style.css           # Desain sistem W3Schools, komponen tutorial & latihan
│   └── editor.css          # Desain split-screen editor C++
└── js/
    ├── topics.js           # Basis data 23 topik materi, bedah sintaks, video, latihan, dan kuis
    ├── app.js              # Logika aplikasi SPA, navigasi, verifikasi latihan sintaks, pencarian
    └── editor.js           # Mesin simulasi compiler C++ dan editor kode
```

---

## Cara Menjalankan Secara Lokal

### Metode 1: Menggunakan XAMPP (Apache)
1. Letakkan folder ini di direktori `c:/xampp/htdocs/c++`.
2. Nyalakan modul **Apache** melalui XAMPP Control Panel.
3. Buka browser dan akses alamat:
   ```text
   http://localhost/c++/
   ```

### Metode 2: Menggunakan File Batch Otomatis
1. Klik ganda berkas `jalankan_website.bat`.
2. Browser akan otomatis terbuka pada alamat:
   ```text
   http://localhost:8080/
   ```

### Metode 3: Membuka Langsung Berkas HTML
Anda juga dapat membuka berkas `index.html` langsung di browser web apa pun (Google Chrome, Microsoft Edge, Safari, Firefox).
