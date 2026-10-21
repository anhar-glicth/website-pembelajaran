/**
 * DATABASE MATERI PEMBELAJARAN C++ DARI DASAR HINGGA FUNCTION
 * WEBSITE BUATAN MUHAMMAD ANHAR SOLIHIN
 * BAHASA: INDONESIA
 * GAYA: W3SCHOOLS (HIJAU & PUTIH)
 * CATATAN PENTING: TIDAK MENGGUNAKAN EMOTICON APAPUN
 */

var TOPICS_DATA = [
  {
    "id": "intro",
    "category": "Dasar C++",
    "title": "Pengenalan C++",
    "subtitle": "Memahami apa itu C++, sejarah singkat, kegunaan, dan keunggulannya. Website buatan Muhammad Anhar Solihin.",
    "sections": [
      {
        "heading": "Selamat Datang di Tutorial C++",
        "content": "Selamat datang di media pembelajaran pemrograman C++ terstruktur yang disusun untuk memudahkan Anda belajar dari nol hingga tingkat penguasaan fungsi (*functions*). Website ini dibuat oleh <strong>Muhammad Anhar Solihin</strong> dengan kurikulum praktis dan berstandar industri."
      },
      {
        "heading": "Apa Itu C++?",
        "content": "C++ adalah bahasa pemrograman tingkat menengah-tinggi (middle-to-high level) yang dikembangkan oleh Bjarne Stroustrup di Bell Labs pada tahun 1979 sebagai perluasan dari bahasa pemrograman C. Awalnya bahasa ini dinamai \"C with Classes\", kemudian diubah menjadi C++ pada tahun 1983.<br><br>\nTanda \"++\" dalam C++ berasal dari operator increment pada bahasa C, yang melambangkan bahwa C++ adalah versi lanjutan dari C yang dilengkapi dengan dukungan Object-Oriented Programming (OOP)."
      },
      {
        "heading": "Mengapa Mempelajari C++?",
        "content": "C++ adalah salah satu bahasa pemrograman paling populer dan efisien di dunia. Berikut adalah alasan utama mengapa C++ banyak digunakan:\n<ul>\n  <li><strong>Performa Sangat Cepat:</strong> C++ dikompilasi langsung ke kode mesin (machine code), menjadikannya salah satu bahasa paling efisien dari segi penggunaan memori dan kecepatan eksekusi.</li>\n  <li><strong>Kontrol Penuh Atas Perangkat Keras:</strong> C++ memberikan akses langsung ke memori sistem melalui pointer dan manajemen memori manual.</li>\n  <li><strong>Multi-Paradigma:</strong> Mendukung pemrograman prosedural, berorientasi objek (OOP), dan generic programming (templates).</li>\n  <li><strong>Banyak Digunakan di Industri Besar:</strong> Digunakan untuk pembuatan Game Engine (Unreal Engine), Sistem Operasi (Windows, macOS kernel), browser web (Chrome V8 engine), database (MySQL, MongoDB), dan sistem finansial berkecepatan tinggi.</li>\n</ul>"
      },
      {
        "heading": "Perbedaan Antara C dan C++",
        "table": {
          "headers": [
            "Fitur",
            "Bahasa C",
            "Bahasa C++"
          ],
          "rows": [
            [
              "Paradigma",
              "Prosedural murni",
              "Multi-paradigma (Prosedural & Berorientasi Objek)"
            ],
            [
              "Fitur Objek",
              "Tidak mendukung Class & Object",
              "Mendukung Class, Object, Inheritance, Polymorphism"
            ],
            [
              "Input / Output",
              "printf() dan scanf()",
              "std::cout dan std::cin"
            ],
            [
              "Manajemen Memori",
              "malloc() dan free()",
              "new dan delete (serta smart pointers)"
            ],
            [
              "Ekstensi File",
              ".c",
              ".cpp"
            ]
          ]
        }
      }
    ],
    "syntaxGuide": {
      "format": "#include <iostream>\n\nint main() {\n    // Pernyataan kode diakhiri titik koma\n    std::cout << \"Teks Output\";\n    return 0;\n}",
      "breakdown": [
        {
          "token": "#include <iostream>",
          "role": "Preprocessor Directive",
          "detail": "Menyertakan pustaka standar untuk operasi input/output aliran data (stream)."
        },
        {
          "token": "int main()",
          "role": "Fungsi Utama",
          "detail": "Titik gerbang eksekusi pertama dari seluruh program C++ yang dapat dijalankan."
        },
        {
          "token": "{ ... }",
          "role": "Compound Statement Block",
          "detail": "Membatasi cakupan (scope) kode instruksi yang dimiliki oleh fungsi."
        },
        {
          "token": "std::cout",
          "role": "Standard Character Output",
          "detail": "Objek stream yang mengalirkan data keluaran ke layar terminal konsol."
        },
        {
          "token": "return 0;",
          "role": "Return Statement",
          "detail": "Mengembalikan kode status 0 ke sistem operasi menandakan eksekusi berhasil tanpa eror."
        }
      ],
      "rules": [
        "Setiap program C++ yang dapat dieksekusi wajib memiliki tepat satu fungsi bernama main().",
        "Bahasa C++ bersifat case-sensitive: huruf besar dan kecil dianggap berbeda secara mutlak (misal: 'Main' tidak sama dengan 'main').",
        "Setiap baris pernyataan (statement) wajib diakhiri dengan tanda titik koma (;)."
      ],
      "commonErrors": [
        {
          "mistake": "Lupa menyertakan header <iostream>",
          "gccError": "error: 'cout' was not declared in this scope",
          "fix": "Tambahkan baris <code>#include &lt;iostream&gt;</code> di baris paling atas berkas program Anda."
        },
        {
          "mistake": "Menulis nama fungsi utama dengan huruf kapital 'Main()'",
          "gccError": "undefined reference to 'main' / collect2.exe: error: ld returned 1 exit status",
          "fix": "Gunakan huruf kecil murni: <code>int main()</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Program C++ Pertama",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Halo Dunia! Selamat belajar C++ bersama Muhammad Anhar Solihin.\" << std::endl;\n    return 0;\n}",
      "output": "Halo Dunia! Selamat belajar C++ bersama Muhammad Anhar Solihin."
    },
    "syntaxExercise": {
      "instruction": "Lengkapi baris kode program dasar berikut dengan menyertakan pustaka iostream dan nama fungsi utama yang benar:",
      "codeTemplate": "#include <___BLANK_0___>\n\nint ___BLANK_1___() {\n    std::cout << \"Halo C++\";\n    return 0;\n}",
      "answers": [
        "iostream",
        "main"
      ],
      "placeholder": "nama_token",
      "hint": "Pustaka input-output standar adalah iostream, dan fungsi pembuka wajib bernama main.",
      "solution": "Pustaka iostream memuat definisi objek std::cout, dan fungsi int main() adalah pintu masuk eksekusi kode C++."
    },
    "note": {
      "title": "Catatan Sintaks",
      "text": "Setiap baris pernyataan dalam C++ harus diakhiri dengan tanda titik koma (;). C++ juga bersifat case-sensitive, artinya huruf besar dan kecil dianggap berbeda."
    },
    "quiz": {
      "question": "Siapa penemu bahasa pemrograman C++?",
      "options": [
        "Dennis Ritchie",
        "Bjarne Stroustrup",
        "James Gosling",
        "Guido van Rossum"
      ],
      "correctIndex": 1,
      "explanation": "Bjarne Stroustrup mengembangkan C++ di Bell Labs mulai tahun 1979 sebagai perluasan dari bahasa C."
    }
  },
  {
    "id": "get-started",
    "category": "Dasar C++",
    "title": "Persiapan & Instalasi",
    "subtitle": "Menyiapkan compiler dan lingkungan kerja (IDE) untuk menjalankan kode C++.",
    "sections": [
      {
        "heading": "Kebutuhan Lingkungan Kerja C++",
        "content": "Untuk mulai memprogram dalam C++, Anda memerlukan dua perangkat lunak utama:\n<ol>\n  <li><strong>Text Editor atau IDE:</strong> Tempat Anda menulis kode sumber (source code), contohnya Visual Studio Code, CLion, atau Code::Blocks.</li>\n  <li><strong>C++ Compiler:</strong> Program yang menerjemahkan kode sumber C++ (.cpp) menjadi file biner / aplikasi yang dapat dieksekusi (.exe di Windows). Compiler yang populer adalah GCC (g++) dan Clang.</li>\n</ol>"
      },
      {
        "heading": "Compiler Populer Berdasarkan Sistem Operasi",
        "table": {
          "headers": [
            "Sistem Operasi",
            "Compiler Standar",
            "Cara Instalasi"
          ],
          "rows": [
            [
              "Windows",
              "MinGW-w64 (GCC)",
              "Unduh via MSYS2 atau installer MinGW"
            ],
            [
              "macOS",
              "Apple Clang / GCC",
              "Jalankan perintah 'xcode-select --install' di Terminal"
            ],
            [
              "Linux (Ubuntu/Debian)",
              "GCC (g++)",
              "Jalankan 'sudo apt update && sudo apt install build-essential'"
            ]
          ]
        }
      },
      {
        "heading": "Mengompilasi dan Menjalankan Kode Lewat Terminal",
        "content": "Jika Anda menggunakan terminal (Command Prompt, PowerShell, atau Terminal macOS/Linux), perintah untuk mengompilasi file C++ adalah:\n<br><br>\n<div class=\"code-wrapper\"><code>g++ nama_file.cpp -o nama_program</code></div>\n<br>\nKemudian jalankan file hasil kompilasi:\n<ul>\n  <li>Pada Windows: <code>nama_program.exe</code> atau <code>.\\nama_program.exe</code></li>\n  <li>Pada macOS / Linux: <code>./nama_program</code></li>\n</ul>"
      }
    ],
    "syntaxGuide": {
      "format": "g++ [flag_opsi] berkas_sumber.cpp -o nama_program_hasil",
      "breakdown": [
        {
          "token": "g++",
          "role": "Compiler Invocation",
          "detail": "Perintah CLI untuk memanggil compiler GCC khusus bahasa C++."
        },
        {
          "token": "berkas_sumber.cpp",
          "role": "Source File",
          "detail": "File teks kode sumber C++ yang akan dikompilasi."
        },
        {
          "token": "-o",
          "role": "Output Flag",
          "detail": "Menentukan nama file biner yang akan dihasilkan (default a.exe atau a.out jika flag ini dilewati)."
        },
        {
          "token": "-Wall",
          "role": "Warning Flag",
          "detail": "Mengaktifkan seluruh peringatan kompilasi demi kualitas kode yang aman."
        }
      ],
      "rules": [
        "Nama berkas C++ standar wajib berekstensi .cpp.",
        "Proses kompilasi harus menghasilkan kode status 0 (tidak ada error sintaks) sebelum file biner dapat dijalankan.",
        "File executable (.exe) dapat langsung dipanggil dari terminal sistem operasi."
      ],
      "commonErrors": [
        {
          "mistake": "Salah mengetik nama file pada perintah kompilasi",
          "gccError": "fatal error: program.cpp: No such file or directory",
          "fix": "Pastikan Anda berada di direktori yang sama dengan berkas .cpp atau periksa ejaan nama file."
        },
        {
          "mistake": "Mencoba menjalankan file yang gagal dikompilasi",
          "gccError": "The system cannot find the file specified",
          "fix": "Periksa kembali pesan eror g++ dan perbaiki kode sumber hingga kompilasi selesai tanpa galat."
        }
      ]
    },
    "example": {
      "title": "Struktur File C++ Sederhana",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Compiler C++ siap digunakan!\" << endl;\n    return 0;\n}",
      "output": "Compiler C++ siap digunakan!"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi flag opsi compiler terminal untuk menentukan nama output file program:",
      "codeTemplate": "g++ main.cpp ___BLANK_0___ aplikasi_saya",
      "answers": [
        "-o"
      ],
      "placeholder": "flag",
      "hint": "Flag output terdiri dari tanda strip dan satu huruf kecil 'o'.",
      "solution": "Flag -o (output) memerintahkan g++ untuk memberi nama file binary yang dibuat menjadi aplikasi_saya."
    },
    "note": {
      "title": "Tips Produktivitas",
      "text": "Jika Anda menggunakan Visual Studio Code, pasang ekstensi 'C/C++' dari Microsoft dan 'Code Runner' agar Anda dapat mengompilasi serta menjalankan kode hanya dengan satu kali klik."
    },
    "quiz": {
      "question": "Perintah terminal apa yang umum digunakan untuk mengompilasi program C++ dengan GCC?",
      "options": [
        "python main.cpp",
        "gcc-run main.cpp",
        "g++ main.cpp -o main",
        "npm start main.cpp"
      ],
      "correctIndex": 2,
      "explanation": "Perintah 'g++ main.cpp -o main' memerintahkan compiler GCC C++ untuk menerjemahkan main.cpp menjadi file executable bernama main."
    }
  },
  {
    "id": "syntax",
    "category": "Dasar C++",
    "title": "Sintaks & Struktur Dasar",
    "subtitle": "Membedah struktur baris per baris dari sebuah program C++ secara mendalam.",
    "sections": [
      {
        "heading": "Anatomi Program C++ Baris demi Baris",
        "content": "Bahasa C++ adalah bahasa pemrograman terstruktur yang memiliki aturan ketat dalam susunan kodenya. Perhatikan anatomi setiap komponen berikut:\n<ul>\n  <li><code>#include &lt;iostream&gt;</code>: Merupakan <em>preprocessor directive</em> yang memberitahu compiler untuk menyertakan berkas pustaka <em>iostream</em> (Input/Output Stream) sebelum proses kompilasi kode dimulai. Library ini mendefinisikan objek <code>cout</code> dan <code>cin</code>.</li>\n  <li><code>using namespace std;</code>: Memberitahu compiler bahwa kita akan menggunakan simbol-simbol dalam <em>standard namespace</em> tanpa perlu menulis awalan <code>std::</code> pada setiap pemanggilan objek.</li>\n  <li><code>int main() { ... }</code>: Fungsi utama wajib. Seluruh alur jalannya aplikasi C++ selalu diawali dari baris pertama di dalam fungsi <code>main()</code>. Kata <code>int</code> menandakan fungsi ini akan mengembalikan nilai bertipe integer ke sistem operasi.</li>\n  <li><code>{ ... }</code>: Tanda kurung kurawal pembuka dan penutup menandai batas blok pernyataan kode (<em>scope</em>).</li>\n  <li><code>cout &lt;&lt; \"Teks\";</code>: Perintah untuk mengalirkan teks string ke layar konsol menggunakan operator insertion <code>&lt;&lt;</code>.</li>\n  <li><code>return 0;</code>: Menutup fungsi <code>main()</code> dan mengirimkan status kode integer 0 kepada sistem operasi induk, yang menandakan bahwa program sukses dieksekusi tanpa gangguan crash.</li>\n</ul>"
      },
      {
        "heading": "Karakteristik Format-Bebas (Free-Form Syntax)",
        "content": "C++ adalah bahasa <em>free-form</em>, artinya compiler mengabaikan spasi berlebih, tab, maupun baris kosong (newline) di antara token kode. Anda bebas memberi indentasi untuk menjaga kerapian kode. Namun, pemisahan setiap pernyataan instruksi bergantung mutlak pada tanda titik koma (<code>;</code>)."
      },
      {
        "heading": "Aturan Wajib Titik Koma (;)",
        "content": "Setiap instruksi pernyataan (statement) dalam C++ wajib diakhiri dengan tanda titik koma (<code>;</code>). Titik koma berfungsi sebagai penanda akhir perintah bagi parser compiler. Jika titik koma tertinggal, compiler tidak dapat mengetahui di mana instruksi berakhir dan akan mengeluarkan pesan error kompilasi."
      }
    ],
    "syntaxGuide": {
      "format": "#include <iostream>\nusing namespace std;\n\ntipe_kembalian main() {\n    instruksi_pernyataan_1;\n    instruksi_pernyataan_2;\n    return kode_status;\n}",
      "breakdown": [
        {
          "token": "#include",
          "role": "Preprocessor Directive",
          "detail": "Perintah prapemrosesan untuk menyalin file pustaka ke dalam unit kompilasi."
        },
        {
          "token": "<iostream>",
          "role": "Standard Header Library",
          "detail": "Header penyedia class ostream dan istream untuk I/O standar."
        },
        {
          "token": "using namespace std;",
          "role": "Namespace Declaration",
          "detail": "Mengimpor entitas standard library ke scope lokal agar tidak perlu mengetik 'std::'."
        },
        {
          "token": "int main()",
          "role": "Entry Point Function",
          "detail": "Fungsi induk program yang dipanggil runtime sistem saat aplikasi dimulai."
        },
        {
          "token": ";",
          "role": "Statement Terminator",
          "detail": "Tanda baca wajib yang mengakhiri setiap ekspresi pernyataan dalam C++."
        }
      ],
      "rules": [
        "Semua kata kunci C++ (int, return, using, namespace) ditulis dalam huruf kecil murni (lowercase).",
        "Setiap kurung kurawal buka { harus memiliki pasangan kurung kurawal tutup } yang seimbang.",
        "Identifier nama variabel atau fungsi tidak boleh menggunakan kata kunci yang telah direservasi oleh standar C++."
      ],
      "commonErrors": [
        {
          "mistake": "Lupa menyertakan tanda titik koma (;) di akhir pernyataan",
          "gccError": "error: expected ';' before 'return'",
          "fix": "Tambahkan tanda titik koma <code>;</code> di ujung baris pernyataan sebelum kata return."
        },
        {
          "mistake": "Kurung kurawal buka tanpa kurung kurawal tutup penyeimbang",
          "gccError": "error: expected '}' at end of input",
          "fix": "Pastikan seluruh kurung kurawal <code>{ }</code> memiliki pasangan penutup yang lengkap."
        },
        {
          "mistake": "Typo penulisan kata kunci seperti 'using namespaec std;'",
          "gccError": "error: 'namespaec' does not name a type",
          "fix": "Periksa kembali ejaan kata kunci C++: gunakan <code>using namespace std;</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Struktur Lengkap Program C++",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Baris ini adalah kode yang dieksekusi berurutan\n    cout << \"Belajar sintaks dasar C++ bersama Muhammad Anhar Solihin.\" << endl;\n    cout << \"Setiap pernyataan diakhiri dengan tanda titik koma.\" << endl;\n    \n    return 0;\n}",
      "output": "Belajar sintaks dasar C++ bersama Muhammad Anhar Solihin.\nSetiap pernyataan diakhiri dengan tanda titik koma."
    },
    "syntaxExercise": {
      "instruction": "Lengkapi deklarasi namespace standar dan tanda titik koma penutup pada instruksi cetak teks di bawah ini:",
      "codeTemplate": "#include <iostream>\nusing namespace ___BLANK_0___;\n\nint main() {\n    cout << \"Sintaks C++ Terstruktur\"___BLANK_1___\n    return 0;\n}",
      "answers": [
        "std",
        ";"
      ],
      "placeholder": "token",
      "hint": "Nama namespace standar C++ adalah 'std', dan penutup baris pernyataan adalah titik koma ';'.",
      "solution": "Namespace standar C++ bernama 'std', dan setiap pernyataan instruksi dalam C++ wajib diakhiri dengan titik koma (;)."
    },
    "note": {
      "title": "Peringatan Gaya Kode",
      "text": "Meskipun 'using namespace std;' mempermudah pemula, pada proyek skala industri disarankan menggunakan awalan 'std::' secara eksplisit guna menghindari benturan nama fungsi (naming collision)."
    },
    "quiz": {
      "question": "Fungsi apakah yang menjadi titik awal eksekusi program C++?",
      "options": [
        "start()",
        "init()",
        "main()",
        "run()"
      ],
      "correctIndex": 2,
      "explanation": "Setiap program C++ yang dapat dieksekusi harus memiliki fungsi main() sebagai gerbang masuk pertama eksekusi."
    }
  },
  {
    "id": "output",
    "category": "Dasar C++",
    "title": "Output (cout & endl)",
    "subtitle": "Mencetak teks, angka, nilai variabel, dan membuat baris baru ke layar konsol.",
    "sections": [
      {
        "heading": "Objek cout dan Operator Insertion (<<)",
        "content": "Di dalam C++, objek <code>cout</code> (kependekan dari <em>character output</em>) adalah objek standar dari kelas <code>std::ostream</code>. Objek ini digabungkan dengan operator penyisipan (<em>insertion operator</em> <code>&lt;&lt;</code>). Operator ini mengalirkan data di sebelah kanannya ke dalam stream output untuk ditampilkan ke layar monitor."
      },
      {
        "heading": "Chaining (Menggabungkan Banyak Nilai Sekaligus)",
        "content": "Kelebihan utama C++ adalah Anda dapat merangkai beberapa data sekaligus dalam satu baris instruksi menggunakan operator <code>&lt;&lt;</code> beruntun:\n<br><br>\n<div class=\"code-wrapper\"><code>cout &lt;&lt; \"Umur saya: \" &lt;&lt; 21 &lt;&lt; \" tahun\" &lt;&lt; endl;</code></div>"
      },
      {
        "heading": "Membuat Baris Baru: \\n vs endl",
        "content": "Terdapat dua mekanisme utama untuk berpindah ke baris baru:\n<ul>\n  <li><code>\\n</code>: Karakter escape newline. Karakter ini sangat cepat dan hemat sumber daya karena hanya memasukkan karakter baris baru ke dalam buffer tanpa memaksa pengosongan buffer (buffer flush).</li>\n  <li><code>endl</code>: Manipulator I/O standar. Selain menyisipkan karakter baris baru, <code>endl</code> juga langsung memicu fungsi <code>flush</code> pada buffer output. Gunakan <code>endl</code> jika data harus segera tampil seketika ke layar.</li>\n</ul>"
      },
      {
        "heading": "Tabel Karakter Escape Lengkap",
        "table": {
          "headers": [
            "Karakter Escape",
            "Nama Karakter",
            "Kegunaan / Efek"
          ],
          "rows": [
            [
              "\\n",
              "Newline",
              "Membuat baris baru (pindah baris ke bawah)"
            ],
            [
              "\\t",
              "Horizontal Tab",
              "Menyisipkan spasi tabulasi horizontal (perataan kolom)"
            ],
            [
              "\\\\",
              "Backslash",
              "Mencetak karakter garis miring terbalik (\\)"
            ],
            [
              "\\\"",
              "Double Quote",
              "Mencetak tanda kutip ganda (\") di dalam teks string"
            ],
            [
              "\\'",
              "Single Quote",
              "Mencetak tanda kutip tunggal (')"
            ],
            [
              "\\r",
              "Carriage Return",
              "Mengembalikan kursor ke awal baris saat ini"
            ]
          ]
        }
      }
    ],
    "syntaxGuide": {
      "format": "cout << ekspresi_1 << ekspresi_2 << ... << endl;",
      "breakdown": [
        {
          "token": "cout",
          "role": "Output Stream Object",
          "detail": "Objek tujuan aliran keluaran data yang mengarah ke terminal konsol."
        },
        {
          "token": "<<",
          "role": "Stream Insertion Operator",
          "detail": "Operator yang mengalirkan data dari sisi kanan masuk ke objek cout di sisi kiri."
        },
        {
          "token": "\"Teks\"",
          "role": "String Literal",
          "detail": "Rangkaian karakter teks harfiah yang wajib diapit tanda kutip ganda."
        },
        {
          "token": "endl",
          "role": "I/O Manipulator",
          "detail": "Menyisipkan karakter baris baru dan memaksa pembersihan buffer stream (flush)."
        }
      ],
      "rules": [
        "Arah tanda panah operator selalu mengarah ke kiri (<<), menunjukkan arah data mengalir ke objek cout.",
        "Karakter tunggal (char) diapit tanda petik tunggal 'A', sedangkan teks kalimat (string) diapit tanda petik ganda \"Halo\".",
        "Jangan meletakkan tanda kutip di sekitar nama variabel atau angka perhitungan jika ingin mencetak nilainya."
      ],
      "commonErrors": [
        {
          "mistake": "Terbalik menggunakan operator extraction '>>' pada objek cout",
          "gccError": "error: no match for 'operator>>' (operand types are 'std::ostream' and 'const char[5]')",
          "fix": "Gunakan operator insertion <code>&lt;&lt;</code> untuk objek cout, bukan <code>&gt;&gt;</code>."
        },
        {
          "mistake": "Lupa tanda petik ganda pada pencetakan teks kalimat",
          "gccError": "error: 'Halo' was not declared in this scope",
          "fix": "Apit teks dengan tanda petik ganda: <code>cout &lt;&lt; \"Halo\";</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Penggunaan Output dan Escape Sequences",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Baris Pertama\\n\";\n    cout << \"Kolom 1\\tKolom 2\\tKolom 3\\n\";\n    cout << \"Kutipan: \\\"Belajar C++ bersama Muhammad Anhar Solihin\\\"\" << endl;\n    cout << \"Hasil Kalkulasi: 15 * 4 = \" << (15 * 4) << endl;\n    return 0;\n}",
      "output": "Baris Pertama\nKolom 1\tKolom 2\tKolom 3\nKutipan: \"Belajar C++ bersama Muhammad Anhar Solihin\"\nHasil Kalkulasi: 15 * 4 = 60"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi operator insertion dan manipulator baris baru untuk mencetak kalimat dan angka berikut:",
      "codeTemplate": "cout ___BLANK_0___ \"Total Skor: \" << 100 << ___BLANK_1___;",
      "answers": [
        "<<",
        "endl"
      ],
      "placeholder": "simbol/kata",
      "hint": "Gunakan operator << untuk mengalirkan data ke cout, dan manipulator baris baru endl.",
      "solution": "Objek cout menggunakan operator << untuk mengalirkan teks dan nilai angka, lalu ditutup dengan manipulator endl untuk membuat baris baru."
    },
    "note": {
      "title": "Rekomendasi Kinerja",
      "text": "Gunakan '\\n' jika Anda banyak mencetak baris output dalam perulangan intensif karena jauh lebih cepat dibandingkan memanggil 'endl'."
    },
    "quiz": {
      "question": "Apa perbedaan teknis utama antara '\\n' dan 'endl'?",
      "options": [
        "'\\n' hanya berfungsi di Linux, sedangkan 'endl' hanya di Windows",
        "'endl' juga membersihkan/flush buffer output selain membuat baris baru",
        "'endl' tidak bisa digunakan di dalam std::cout",
        "Keduanya sama persis tanpa ada perbedaan apa pun"
      ],
      "correctIndex": 1,
      "explanation": "'endl' menyisipkan karakter baris baru sekaligus menjalankan fungsi pembersihan buffer (flush output buffer)."
    }
  },
  {
    "id": "comments",
    "category": "Dasar C++",
    "title": "Komentar dalam C++",
    "subtitle": "Mendokumentasikan alur program agar mudah dipahami tanpa memengaruhi hasil kompilasi.",
    "sections": [
      {
        "heading": "Fungsi Komentar dalam Kode Sumber",
        "content": "Komentar adalah catatan penjelasan yang ditujukan bagi pembaca manusia (programmer) dan sepenuhnya diabaikan oleh compiler selama proses penerjemahan kode. Komentar berfungsi untuk:\n<ul>\n  <li>Menjelaskan tujuan algoritma atau formula matematis yang kompleks.</li>\n  <li>Mencantumkan identitas pengembang, tanggal rilis, dan lisensi modul (Website buatan Muhammad Anhar Solihin).</li>\n  <li>Menonaktifkan baris kode tertentu secara sementara saat proses pelacakan bug (debugging).</li>\n</ul>"
      },
      {
        "heading": "Dua Jenis Komentar di C++",
        "content": "C++ menyediakan dua format sintaks penulisan komentar:\n<ol>\n  <li><strong>Single-Line Comment (Satu Baris):</strong> Ditandai dengan dua garis miring <code>//</code>. Seluruh karakter dari tanda tersebut hingga ujung baris fisik akan dilewati oleh compiler.</li>\n  <li><strong>Multi-Line Comment (Banyak Baris):</strong> Diawali dengan <code>/*</code> dan diakhiri dengan <code>*/</code>. Sangat praktis untuk mendokumentasikan penjelasan panjang atau mematikan seluruh blok kode besar.</li>\n</ol>"
      }
    ],
    "syntaxGuide": {
      "format": "// Komentar satu baris\n\n/*\n  Komentar multi-baris\n  Baris kedua catatan dokumentasi\n*/",
      "breakdown": [
        {
          "token": "//",
          "role": "Single-Line Comment Delimiter",
          "detail": "Mengabaikan sisa baris kode saat ini hingga bertemu karakter enter (newline)."
        },
        {
          "token": "/*",
          "role": "Multi-Line Comment Opener",
          "detail": "Membuka blok komentar multi-baris."
        },
        {
          "token": "*/",
          "role": "Multi-Line Comment Closer",
          "detail": "Menutup blok komentar multi-baris."
        }
      ],
      "rules": [
        "Komentar multi-baris /* ... */ TIDAK BISA dibuat bersarang (nested). Tanda */ pertama yang ditemui compiler akan langsung menutup komentar.",
        "Komentar yang berada di dalam tanda kutip string ganda (\"// teks\") tidak dianggap sebagai komentar, melainkan teks string literal biasa."
      ],
      "commonErrors": [
        {
          "mistake": "Mencoba membuat komentar multi-baris bersarang (nested comments)",
          "gccError": "error: expected unqualified-id before '/' token",
          "fix": "Hindari meletakkan /* */ di dalam blok /* */ yang lain. Gunakan komentar // untuk menonaktifkan kode sementara."
        }
      ]
    },
    "example": {
      "title": "Contoh Penerapan Komentar",
      "code": "#include <iostream>\nusing namespace std;\n\n/*\n  Program Kalkulasi Transaksi\n  Website: Muhammad Anhar Solihin\n  Tujuan: Menunjukkan dokumentasi komentar yang rapi\n*/\n\nint main() {\n    // Menghitung total nilai belanja\n    int harga = 50000; // Harga per item dalam Rupiah\n    int jumlah = 3;    // Kuantitas pembelian\n    \n    int total = harga * jumlah; // Rumus: harga dikali jumlah\n    cout << \"Total Belanja: Rp \" << total << endl;\n    \n    return 0;\n}",
      "output": "Total Belanja: Rp 150000"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi simbol komentar satu baris dan penutup komentar multi-baris pada kode berikut:",
      "codeTemplate": "___BLANK_0___ Inisialisasi variabel penghitung\nint counter = 0;\n\n/*\n  Modul Kalkulasi Data Statistik\n  Dibuat oleh: Muhammad Anhar Solihin\n___BLANK_1___",
      "answers": [
        "//",
        "*/"
      ],
      "placeholder": "simbol",
      "hint": "Single-line comment diawali dua garis miring // dan penutup multi-baris diakhiri bintang garis miring */.",
      "solution": "Komentar satu baris menggunakan tanda // dan komentar multi-baris wajib ditutup dengan simbol */."
    },
    "note": {
      "title": "Praktik Terbaik",
      "text": "Tulis komentar yang menjelaskan 'MENGAPA' suatu logika dibuat, bukan hanya sekadar mengulang 'APA' yang dilakukan kode yang sudah jelas terbaca."
    },
    "quiz": {
      "question": "Manakah cara penulisan komentar multi-baris yang valid dalam C++?",
      "options": [
        "<!-- Komentar di sini -->",
        "# Komentar di sini",
        "/* Komentar di sini */",
        "// Komentar di sini //"
      ],
      "correctIndex": 2,
      "explanation": "Komentar multi-baris dalam C++ diawali dengan /* dan diakhiri dengan */."
    }
  },
  {
    "id": "variables",
    "category": "Dasar C++",
    "title": "Variabel & Tipe Data",
    "subtitle": "Menyimpan, mengelola, dan memanipulasi data di memori komputer.",
    "sections": [
      {
        "heading": "Konsep Variabel di C++",
        "content": "Variabel adalah wadah di dalam memori komputer (RAM) yang diberi nama unik untuk menyimpan nilai data tertentu. Karena C++ adalah bahasa <em>statically-typed</em>, setiap variabel wajib ditentukan tipe datanya secara eksplisit pada saat dideklarasikan agar compiler dapat mengalokasikan ukuran memori yang tepat."
      },
      {
        "heading": "Tabel Tipe Data Primitif C++",
        "table": {
          "headers": [
            "Tipe Data",
            "Ukuran Memori",
            "Rentang Nilai / Contoh",
            "Keterangan"
          ],
          "rows": [
            [
              "int",
              "4 Byte (32 bit)",
              "-2,147,483,648 s/d 2,147,483,647",
              "Bilangan bulat tanpa pecahan"
            ],
            [
              "long long",
              "8 Byte (64 bit)",
              "-9x10^18 s/d 9x10^18",
              "Bilangan bulat berkapasitas sangat besar"
            ],
            [
              "float",
              "4 Byte (32 bit)",
              "Presisi 6-7 digit desimal (3.14f)",
              "Bilangan pecahan desimal berpresisi tunggal"
            ],
            [
              "double",
              "8 Byte (64 bit)",
              "Presisi 15 digit desimal (3.14159265)",
              "Bilangan pecahan desimal berpresisi ganda"
            ],
            [
              "char",
              "1 Byte (8 bit)",
              "'A', 'z', '9', '#'",
              "Satu karakter ASCII diapit tanda petik tunggal"
            ],
            [
              "bool",
              "1 Byte (8 bit)",
              "true (1) atau false (0)",
              "Nilai logika kebenaran"
            ],
            [
              "string",
              "Dinamis",
              "\"Teks Kalimat\"",
              "Rangkaian teks (pustaka &lt;string&gt;)"
            ]
          ]
        }
      },
      {
        "heading": "Aturan Baku Penamaan Variabel (Identifier Rules)",
        "content": "Compiler C++ memberlakukan aturan ketat untuk penamaan identifier:\n<ul>\n  <li>Hanya boleh memuat huruf alfabet (a-z, A-Z), angka (0-9), dan garis bawah (<em>underscore</em> <code>_</code>).</li>\n  <li><strong>DILARANG diawali dengan angka</strong> (contoh: <code>1nilai</code> adalah ilegal, gunakan <code>nilai1</code>).</li>\n  <li>Tidak boleh menggunakan spasi atau karakter khusus seperti <code>@, $, %, -, +</code>.</li>\n  <li>Tidak boleh menggunakan kata kunci C++ yang sudah direservasi (seperti <code>int, return, for, if, class</code>).</li>\n  <li>Bersifat <em>case-sensitive</em>: variabel <code>skor</code>, <code>Skor</code>, dan <code>SKOR</code> adalah tiga variabel yang berbeda.</li>\n</ul>"
      }
    ],
    "syntaxGuide": {
      "format": "tipe_data nama_variabel = nilai_awal;\n// Atau deklarasi tanpa nilai awal:\ntipe_data nama_variabel;",
      "breakdown": [
        {
          "token": "tipe_data",
          "role": "Type Specifier",
          "detail": "Menentukan jenis data dan ukuran alokasi byte di RAM (int, double, char, string, bool)."
        },
        {
          "token": "nama_variabel",
          "role": "Identifier",
          "detail": "Nama pengenal unik penunjuk lokasi alamat memori."
        },
        {
          "token": "=",
          "role": "Assignment Operator",
          "detail": "Mengisi nilai dari sebelah kanan ke dalam variabel di sebelah kiri."
        },
        {
          "token": "nilai_awal",
          "role": "Literal / Expression",
          "detail": "Data awal yang disimpan saat variabel pertama kali diciptakan (inisialisasi)."
        }
      ],
      "rules": [
        "Variabel lokal yang dideklarasikan tanpa inisialisasi awal akan berisi nilai sampah acak (garbage value).",
        "Tipe data tidak dapat diubah setelah dideklarasikan.",
        "Deklarasi beberapa variabel bertipe sama dapat digabung: int a = 1, b = 2, c = 3;"
      ],
      "commonErrors": [
        {
          "mistake": "Menggunakan variabel sebelum dideklarasikan",
          "gccError": "error: 'total' was not declared in this scope",
          "fix": "Deklarasikan tipe variabel sebelum menggunakannya: <code>int total = 0;</code>."
        },
        {
          "mistake": "Mendeklarasikan ulang variabel dengan nama yang sama di scope yang sama",
          "gccError": "error: redeclaration of 'int nilai'",
          "fix": "Hapus kata kunci tipe data jika hanya ingin memperbarui nilainya: <code>nilai = 90;</code>."
        },
        {
          "mistake": "Mengisi nilai pecahan desimal ke variabel bertipe int",
          "gccError": "warning: conversion from 'double' to 'int' alters value",
          "fix": "Gunakan tipe <code>double</code> atau <code>float</code> untuk angka bertitik desimal."
        }
      ]
    },
    "example": {
      "title": "Contoh Deklarasi Variabel Beragam Tipe",
      "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int umur = 21;\n    double ipk = 3.92;\n    char grade = 'A';\n    bool lulus = true;\n    string nama = \"Muhammad Anhar Solihin\";\n\n    cout << \"Nama Mahasiswa : \" << nama << endl;\n    cout << \"Umur           : \" << umur << \" tahun\" << endl;\n    cout << \"Indeks Prestasi: \" << ipk << endl;\n    cout << \"Grade Predikat : \" << grade << endl;\n    cout << \"Status Kelulusan (1=Lulus): \" << lulus << endl;\n\n    return 0;\n}",
      "output": "Nama Mahasiswa : Muhammad Anhar Solihin\nUmur           : 21 tahun\nIndeks Prestasi: 3.92\nGrade Predikat : A\nStatus Kelulusan (1=Lulus): 1"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi tipe data bilangan bulat dan tipe teks string untuk mendeklarasikan data siswa berikut:",
      "codeTemplate": "___BLANK_0___ nomorInduk = 10425;\n___BLANK_1___ namaSiswa = \"Muhammad Anhar Solihin\";",
      "answers": [
        "int",
        "string"
      ],
      "placeholder": "tipe_data",
      "hint": "Tipe bilangan bulat adalah int dan tipe rangkaian teks adalah string.",
      "solution": "Variabel nomorInduk menggunakan tipe data int untuk bilangan bulat dan namaSiswa menggunakan tipe string untuk teks kalimat."
    },
    "note": {
      "title": "Tips Inisialisasi",
      "text": "Selalu biasakan memberikan nilai awal (inisialisasi) saat mendeklarasikan variabel agar tidak membaca nilai sampah acak (garbage value) dari memori RAM."
    },
    "quiz": {
      "question": "Manakah nama identifier variabel berikut yang SAH (valid) menurut aturan compiler C++?",
      "options": [
        "100_nilai",
        "nilai-siswa",
        "_totalSkor2",
        "int"
      ],
      "correctIndex": 2,
      "explanation": "_totalSkor2 adalah nama variabel yang sah karena diawali dengan underscore dan hanya memuat huruf, angka, serta underscore tanpa tanda strip atau kata kunci."
    }
  },
  {
    "id": "constants",
    "category": "Dasar C++",
    "title": "Konstanta (const)",
    "subtitle": "Membuat variabel hanya-baca (read-only) yang nilainya terkunci permanen.",
    "sections": [
      {
        "heading": "Pengertian Konstanta di C++",
        "content": "Ketika Anda tidak ingin nilai suatu variabel dimodifikasi atau tertimpa oleh operasi kode berikutnya, gunakan kata kunci <code>const</code>. Kata kunci ini mengubah variabel menjadi bersifat <em>read-only</em> (hanya-baca) dan tidak dapat diubah nilainya sepanjang program berjalan."
      },
      {
        "heading": "Mengapa Menggunakan const?",
        "content": "Keuntungan penggunaan konstanta:\n<ul>\n  <li><strong>Mencegah Bug yang Tidak Disengaja:</strong> Menghindari pengubahan nilai penting secara tidak sengaja di tengah kode program yang besar.</li>\n  <li><strong>Keterbacaan Kode Lebih Baik:</strong> Menghilangkan \"magic numbers\" (angka tanpa nama yang membingungkan) dan menggantinya dengan nama deskriptif.</li>\n  <li><strong>Optimasi Kompiler:</strong> Compiler C++ dapat mengoptimalkan penempatan nilai konstanta langsung ke dalam instruksi mesin register.</li>\n</ul>"
      }
    ],
    "syntaxGuide": {
      "format": "const tipe_data NAMA_KONSTANTA = nilai_tetap;",
      "breakdown": [
        {
          "token": "const",
          "role": "Type Qualifier",
          "detail": "Menginstruksikan compiler bahwa variabel ini tidak boleh diubah nilainya setelah inisialisasi."
        },
        {
          "token": "tipe_data",
          "role": "Data Type",
          "detail": "Tipe data dari nilai yang disimpan (int, double, string, dll)."
        },
        {
          "token": "NAMA_KONSTANTA",
          "role": "Constant Identifier",
          "detail": "Konvensi standar industri umumnya menggunakan huruf kapital (UPPERCASE) dengan underscore."
        },
        {
          "token": "= nilai_tetap",
          "role": "Mandatory Initializer",
          "detail": "Nilai awal yang WAJIB langsung diisi saat deklarasi dibuat."
        }
      ],
      "rules": [
        "Variabel const WAJIB langsung diisi nilainya saat dideklarasikan. Mendeklarasikan 'const int x;' tanpa nilai awal akan memicu galat kompilasi.",
        "Mencoba mengubah nilai const di baris berikutnya akan langsung ditolak oleh compiler saat waktu kompilasi (compile-time error)."
      ],
      "commonErrors": [
        {
          "mistake": "Mendeklarasikan variabel const tanpa memberikan nilai awal",
          "gccError": "error: uninitialized const 'MAKSIMAL' [-fpermissive]",
          "fix": "Selalu berikan nilai awal saat deklarasi: <code>const int MAKSIMAL = 100;</code>."
        },
        {
          "mistake": "Mencoba menugaskan nilai baru ke variabel bertipe const",
          "gccError": "error: assignment of read-only variable 'PI'",
          "fix": "Nilai variabel const tidak dapat diubah. Jika nilainya harus dinamis, hapus kata kunci <code>const</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Penggunaan Konstanta",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const double PI = 3.1415926535;\n    const int RADIUS = 14;\n    \n    double luasLingkaran = PI * RADIUS * RADIUS;\n    \n    cout << \"Jari-jari Lingkaran: \" << RADIUS << \" cm\" << endl;\n    cout << \"Luas Lingkaran     : \" << luasLingkaran << \" cm persegi\" << endl;\n    \n    // Baris di bawah ini jika diaktifkan akan memicu compiler error:\n    // PI = 3.14; \n\n    return 0;\n}",
      "output": "Jari-jari Lingkaran: 14 cm\nLuas Lingkaran     : 615.752 cm persegi"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi kata kunci penentu konstanta agar variabel GRAVITASI menjadi variabel read-only:",
      "codeTemplate": "___BLANK_0___ double GRAVITASI = 9.8;\n// Nilai GRAVITASI kini terkunci permanen",
      "answers": [
        "const"
      ],
      "placeholder": "kata_kunci",
      "hint": "Kata kunci untuk membuat konstanta dalam bahasa C++ adalah const.",
      "solution": "Kata kunci const mengunci variabel GRAVITASI menjadi hanya-baca (read-only) sehingga compiler akan menolak segala upaya modifikasi nilainya."
    },
    "note": {
      "title": "Konvensi Penulisan",
      "text": "Meskipun tidak wajib secara sintaksis, merupakan konvensi pemrograman umum untuk menulis nama konstanta dengan huruf kapital semua (misal: PI, MAX_BUFFER, GRAVITASI) agar mudah dibedakan dari variabel biasa."
    },
    "quiz": {
      "question": "Apa yang terjadi jika kita mencoba mengubah nilai variabel yang dideklarasikan dengan 'const'?",
      "options": [
        "Nilai berubah seperti biasa tanpa peringatan",
        "Program tetap jalan tetapi mengeluarkan bunyi beep",
        "Compiler menghasilkan galat (compile-time error) dan program gagal dikompilasi",
        "Nilai variabel otomatis berubah menjadi nol"
      ],
      "correctIndex": 2,
      "explanation": "Compiler C++ akan menolak proses kompilasi dan menampilkan error 'assignment of read-only variable' saat menemukan kode yang mencoba mengubah konstanta."
    }
  },
  {
    "id": "user-input",
    "category": "Dasar C++",
    "title": "Input Pengguna (cin)",
    "subtitle": "Membaca masukan data interaktif dari papan ketik (keyboard) pengguna.",
    "sections": [
      {
        "heading": "Objek cin dan Operator Ekstraksi (>>)",
        "content": "Di dalam C++, input dari pengguna dibaca menggunakan objek <code>cin</code> (<em>character input</em>) dari berkas header <code>&lt;iostream&gt;</code>. Objek ini dipasangkan dengan operator ekstraksi (<em>extraction operator</em> <code>&gt;&gt;</code>) yang mengalirkan data masukan dari keyboard ke dalam variabel."
      },
      {
        "heading": "Input Satu Kata vs Satu Baris Penuh (getline)",
        "content": "Perhatikan perbedaan penting saat membaca input teks string:\n<ul>\n  <li><code>cin &gt;&gt; kata;</code>: Membaca teks hingga menemukan spasi pertama, tab, atau enter. Jika pengguna memasukkan \"Muhammad Anhar\", maka yang tersimpan hanya \"Muhammad\".</li>\n  <li><code>getline(cin, kalimat);</code>: Membaca seluruh teks termasuk spasi hingga pengguna menekan tombol Enter (newline).</li>\n</ul>"
      },
      {
        "heading": "Masalah Buffer Input dan Solusi cin.ignore()",
        "content": "Jika Anda membaca input angka dengan <code>cin &gt;&gt;</code> lalu langsung memanggil <code>getline()</code> pada baris berikutnya, fungsi <code>getline()</code> akan langsung terlewat (terbaca string kosong). Hal ini terjadi karena karakter newline (Enter) masih tertinggal di buffer input. Solusinya, panggil <code>cin.ignore()</code> sebelum memanggil <code>getline()</code>."
      }
    ],
    "syntaxGuide": {
      "format": "// Membaca data angka / satu kata:\ncin >> nama_variabel;\n\n// Membaca satu baris penuh dengan spasi:\ngetline(cin, nama_variabel_string);",
      "breakdown": [
        {
          "token": "cin",
          "role": "Input Stream Object",
          "detail": "Objek representasi aliran masukan standar dari perangkat keyboard konsol."
        },
        {
          "token": ">>",
          "role": "Stream Extraction Operator",
          "detail": "Operator yang mengambil data dari buffer cin dan mengalirkannya ke variabel tujuan di sisi kanan."
        },
        {
          "token": "getline()",
          "role": "Line Reading Function",
          "detail": "Fungsi dari header <string> untuk menangkap seluruh baris kalimat berspasi."
        },
        {
          "token": "cin.ignore()",
          "role": "Buffer Flush Method",
          "detail": "Membuang karakter sisa newline (Enter) yang tertinggal pada buffer input."
        }
      ],
      "rules": [
        "Arah tanda panah operator selalu mengarah ke kanan (>>), menunjukkan arah data dari keyboard masuk ke variabel tujuan.",
        "Variabel penerima harus sudah dideklarasikan terlebih dahulu sebelum digunakan di samping cin >>.",
        "Tipe input yang dimasukkan pengguna harus cocok dengan tipe variabel tujuan."
      ],
      "commonErrors": [
        {
          "mistake": "Terbalik menggunakan operator insertion '<<' pada objek cin",
          "gccError": "error: no match for 'operator<<' in 'std::cin << umur'",
          "fix": "Gunakan operator ekstraksi <code>&gt;&gt;</code> untuk objek cin, bukan <code>&lt;&lt;</code>."
        },
        {
          "mistake": "Input string berspasi terpotong",
          "gccError": "Logika program berjalan tidak sesuai harapan (hanya kata pertama yang tersimpan)",
          "fix": "Gunakan fungsi <code>getline(cin, variabel)</code> untuk membaca kalimat yang mengandung spasi."
        }
      ]
    },
    "example": {
      "title": "Contoh Input Data Pengguna",
      "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string namaLengkap;\n    int tahunLahir;\n\n    cout << \"Masukkan Tahun Lahir Anda: \";\n    cin >> tahunLahir;\n    \n    // Membersihkan sisa newline di buffer sebelum getline\n    cin.ignore(); \n\n    cout << \"Masukkan Nama Lengkap Anda: \";\n    getline(cin, namaLengkap);\n\n    int umur = 2026 - tahunLahir;\n    cout << \"\\nHalo, \" << namaLengkap << \"!\" << endl;\n    cout << \"Perkiraan umur Anda di tahun 2026 adalah: \" << umur << \" tahun.\" << endl;\n\n    return 0;\n}",
      "output": "Masukkan Tahun Lahir Anda: 2005\nMasukkan Nama Lengkap Anda: Muhammad Anhar Solihin\n\nHalo, Muhammad Anhar Solihin!\nPerkiraan umur Anda di tahun 2026 adalah: 21 tahun."
    },
    "syntaxExercise": {
      "instruction": "Lengkapi operator ekstraksi input dan nama variabel penerima nilai angka berikut:",
      "codeTemplate": "int nilaiUjian;\ncout << \"Masukkan nilai ujian: \";\ncin ___BLANK_0___ ___BLANK_1___;",
      "answers": [
        ">>",
        "nilaiUjian"
      ],
      "placeholder": "simbol/nama",
      "hint": "Operator ekstraksi cin mengarah ke kanan (>>) menuju variabel nilaiUjian.",
      "solution": "Perintah cin >> nilaiUjian membaca masukan angka dari keyboard pengguna dan menyimpannya ke variabel nilaiUjian."
    },
    "note": {
      "title": "Peringatan Validasi",
      "text": "Jika pengguna memasukkan huruf ketika program mengharapkan angka pada 'cin >> angka', stream cin akan memasuki kondisi error (fail state) dan menolak input selanjutnya."
    },
    "quiz": {
      "question": "Fungsi apa yang digunakan di C++ untuk membaca teks string yang mengandung spasi secara utuh?",
      "options": [
        "cin.read()",
        "getline(cin, str)",
        "cin >> str",
        "scanf_all(str)"
      ],
      "correctIndex": 1,
      "explanation": "Fungsi getline(cin, str) membaca seluruh baris teks masukan dari pengguna termasuk spasi hingga tombol Enter ditekan."
    }
  },
  {
    "id": "operators",
    "category": "Dasar C++",
    "title": "Operator C++",
    "subtitle": "Operator aritmatika, perbandingan, logika, penugasan, dan prioritas eksekusi.",
    "sections": [
      {
        "heading": "Klasifikasi Operator dalam C++",
        "content": "Operator adalah simbol khusus yang digunakan untuk melakukan operasi pemrosesan data terhadap satu atau lebih operand (nilai atau variabel). Operator di C++ dibagi menjadi beberapa kategori:\n<ol>\n  <li><strong>Operator Aritmatika:</strong> Penjumlahan (<code>+</code>), Pengurangan (<code>-</code>), Perkalian (<code>*</code>), Pembagian (<code>/</code>), Modulus/Sisa Bagi (<code>%</code>).</li>\n  <li><strong>Operator Penugasan (Assignment):</strong> Mengisi nilai (<code>=</code>) serta gabungan (<code>+=, -=, *=, /=, %=</code>).</li>\n  <li><strong>Operator Relasional (Perbandingan):</strong> Sama dengan (<code>==</code>), Tidak sama dengan (<code>!=</code>), Kurang dari (<code>&lt;</code>), Lebih dari (<code>&gt;</code>), Kurang dari sama dengan (<code>&lt;=</code>), Lebih dari sama dengan (<code>&gt;=</code>).</li>\n  <li><strong>Operator Logika:</strong> AND Logika (<code>&&</code>), OR Logika (<code>||</code>), NOT/Negasi Logika (<code>!</code>).</li>\n  <li><strong>Operator Increment & Decrement:</strong> Menambah 1 (<code>++</code>) dan mengurangi 1 (<code>--</code>).</li>\n</ol>"
      },
      {
        "heading": "Perbedaan Penting Pre-Increment vs Post-Increment",
        "content": "<ul>\n  <li><code>++x</code> (Pre-increment): Nilai variabel dinaikkan terlebih dahulu sebesar 1, BARU kemudian nilainya digunakan dalam ekspresi.</li>\n  <li><code>x++</code> (Post-increment): Nilai variabel saat ini digunakan terlebih dahulu dalam ekspresi, BARU kemudian nilainya dinaikkan sebesar 1 di memori.</li>\n</ul>"
      },
      {
        "heading": "Tabel Operator Logika & Truth Table",
        "table": {
          "headers": [
            "Operator",
            "Nama",
            "Aturan Kebenaran",
            "Contoh (a=true, b=false)"
          ],
          "rows": [
            [
              "&&",
              "Logical AND",
              "Bernilai TRUE jika KEDUA kondisi bernilai true",
              "(a && b) -> false"
            ],
            [
              "||",
              "Logical OR",
              "Bernilai TRUE jika SALAH SATU kondisi bernilai true",
              "(a || b) -> true"
            ],
            [
              "!",
              "Logical NOT",
              "Membalik nilai logika (true jadi false, sebaliknya)",
              "(!a) -> false"
            ]
          ]
        }
      }
    ],
    "syntaxGuide": {
      "format": "// Aritmatika & Modulus:\nhasil = a + b * c % d;\n\n// Logika & Relasional:\nbool valid = (x >= 10) && (y != 0);",
      "breakdown": [
        {
          "token": "%",
          "role": "Modulus Operator",
          "detail": "Menghasilkan sisa pembagian bulat. HANYA berlaku untuk tipe bilangan bulat (integral)."
        },
        {
          "token": "==",
          "role": "Equality Comparison",
          "detail": "Memeriksa apakah kedua nilai bernilai sama persis (menghasilkan boolean true/false)."
        },
        {
          "token": "&&",
          "role": "Short-Circuit AND",
          "detail": "Jika operand kiri false, operand kanan tidak akan dievaluasi lagi."
        },
        {
          "token": "||",
          "role": "Short-Circuit OR",
          "detail": "Jika operand kiri true, operand kanan tidak akan dievaluasi lagi."
        }
      ],
      "rules": [
        "Pembagian antar bilangan bulat 7 / 2 menghasilkan 3 (angka di belakang koma dibuang/truncated). Untuk hasil desimal 3.5, minimal satu operand harus bertipe float/double (7.0 / 2).",
        "Jangan tertukar antara operator penugasan '=' dengan operator perbandingan '=='."
      ],
      "commonErrors": [
        {
          "mistake": "Menggunakan operator modulus (%) pada bilangan berkoma (float/double)",
          "gccError": "error: invalid operands of types 'double' and 'int' to binary 'operator%'",
          "fix": "Operator modulus <code>%</code> hanya berlaku untuk tipe integer (bilangan bulat)."
        },
        {
          "mistake": "Menggunakan tanda '=' tunggal di dalam kondisi evaluasi if",
          "gccError": "warning: suggest parentheses around assignment used as truth value",
          "fix": "Gunakan tanda <code>==</code> untuk membandingkan kesamaan nilai."
        }
      ]
    },
    "example": {
      "title": "Contoh Operasi Aritmatika dan Logika",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int totalHari = 25;\n    int minggu = totalHari / 7;\n    int sisaHari = totalHari % 7;\n\n    cout << \"25 Hari = \" << minggu << \" Minggu dan \" << sisaHari << \" Hari\" << endl;\n\n    int nilai = 85;\n    int kehadiran = 90;\n    bool lulus = (nilai >= 75) && (kehadiran >= 80);\n\n    cout << \"Status Kelulusan: \" << (lulus ? \"LULUS\" : \"TIDAK LULUS\") << endl;\n\n    return 0;\n}",
      "output": "25 Hari = 3 Minggu dan 4 Hari\nStatus Kelulusan: LULUS"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi operator sisa bagi (modulus) dan operator logika AND pada pernyataan berikut:",
      "codeTemplate": "int sisaBagi = 17 ___BLANK_0___ 5; // Menghasilkan sisa 2\nbool memenuhiSyarat = (umur >= 17) ___BLANK_1___ (punyaKTP == true);",
      "answers": [
        "%",
        "&&"
      ],
      "placeholder": "operator",
      "hint": "Operator sisa bagi adalah % dan operator logika AND adalah &&.",
      "solution": "Operator % menghitung sisa hasil bagi bulat (17 % 5 = 2), dan operator && mensyaratkan kedua kondisi logika bernilai benar."
    },
    "note": {
      "title": "Aturan Presedensi",
      "text": "Operator perkalian (*) dan pembagian (/) memiliki prioritas lebih tinggi daripada penjumlahan (+) dan pengurangan (-). Selalu gunakan tanda kurung ( ) untuk memperjelas urutan kalkulasi yang Anda inginkan."
    },
    "quiz": {
      "question": "Berapakah hasil keluaran dari operasi C++: 10 + 5 * 2 ?",
      "options": [
        "30",
        "20",
        "25",
        "15"
      ],
      "correctIndex": 1,
      "explanation": "Perkalian (5 * 2 = 10) dieksekusi terlebih dahulu karena memiliki presedensi lebih tinggi daripada penjumlahan, sehingga 10 + 10 = 20."
    }
  },
  {
    "id": "conditions",
    "category": "Percabangan",
    "title": "Percabangan (if, else if, else)",
    "subtitle": "Membuat keputusan logis dan mengendalikan alur eksekusi berdasarkan kondisi.",
    "video": {
      "title": "Video Tutorial: Percabangan (If Else & Switch Case) C++",
      "youtubeId": "t0QmgEFWWTg",
      "description": "Tonton video tutorial percabangan C++ langsung di bawah ini untuk memahami logika keputusan secara visual dan mendalam tanpa harus keluar dari website ini."
    },
    "sections": [
      {
        "heading": "Struktur Logika Percabangan",
        "content": "Percabangan (<em>conditional statement</em>) memungkinkan program menjalankan blok instruksi yang berbeda tergantung pada apakah suatu kondisi bernilai <code>true</code> (benar) atau <code>false</code> (salah). Di C++, keputusan dibuat menggunakan struktur <code>if</code>, <code>else if</code>, dan <code>else</code>."
      },
      {
        "heading": "Sintaks Dasar if, else if, dan else",
        "content": "<ul>\n  <li><code>if (kondisi)</code>: Blok pertama yang dievaluasi. Jika kondisi benar, kodenya dijalankan.</li>\n  <li><code>else if (kondisi)</code>: Kondisi alternatif yang dievaluasi HANYA JIKA kondisi <code>if</code> sebelumnya salah.</li>\n  <li><code>else</code>: Blok penampung terakhir yang akan dieksekusi jika SEMUA kondisi di atasnya bernilai salah.</li>\n</ul>"
      },
      {
        "heading": "Operator Ternary (Shorthand If...Else)",
        "content": "Untuk percabangan sederhana dua arah, Anda dapat menggunakan operator ternary dalam satu baris:\n<br><br>\n<div class=\"code-wrapper\"><code>variabel = (kondisi) ? nilai_jika_true : nilai_jika_false;</code></div>"
      }
    ],
    "syntaxGuide": {
      "format": "if (kondisi_1) {\n    // instruksi jika kondisi_1 benar\n} else if (kondisi_2) {\n    // instruksi jika kondisi_2 benar\n} else {\n    // instruksi default jika semua kondisi salah\n}",
      "breakdown": [
        {
          "token": "if",
          "role": "Conditional Branch Keyword",
          "detail": "Memulai evaluasi logika cabang pertama."
        },
        {
          "token": "( kondisi )",
          "role": "Boolean Expression",
          "detail": "Kondisi di dalam kurung wajib menghasilkan nilai boolean (true/false) atau non-zero."
        },
        {
          "token": "else if",
          "role": "Alternative Branch",
          "detail": "Cabang pilihan berikutnya jika kondisi sebelumnya false."
        },
        {
          "token": "else",
          "role": "Fallback Branch",
          "detail": "Cabang default opsional di akhir jika tidak ada satupun cabang yang memenuhi syarat."
        }
      ],
      "rules": [
        "Kondisi di dalam tanda kurung () wajib ditulis setelah kata kunci if dan else if.",
        "Kata kunci else tidak boleh memiliki tanda kurung kondisi (kondisi dilarang pada else).",
        "Tanda titik koma dilarang diletakkan langsung setelah kurung kondisi: 'if (x > 5);' karena akan membatalkan blok percabangan."
      ],
      "commonErrors": [
        {
          "mistake": "Menulis tanda titik koma tepat setelah kurung kondisi if",
          "gccError": "Logika salah: blok kode di bawahnya akan selalu dieksekusi terlepas dari kondisi",
          "fix": "Hapus tanda titik koma setelah kurung kondisi: gunakan <code>if (x &gt; 5) { ... }</code>."
        },
        {
          "mistake": "Menulis kata kunci 'else' sebelum 'else if'",
          "gccError": "error: 'else if' without a previous 'if'",
          "fix": "Blok <code>else</code> harus selalu berada di urutan paling akhir setelah seluruh <code>else if</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Penentuan Nilai Mahasiswa",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nilai = 88;\n\n    if (nilai >= 90) {\n        cout << \"Predikat: A (Istimewa)\" << endl;\n    } else if (nilai >= 80) {\n        cout << \"Predikat: B (Sangat Baik)\" << endl;\n    } else if (nilai >= 70) {\n        cout << \"Predikat: C (Cukup)\" << endl;\n    } else {\n        cout << \"Predikat: D (Perlu Perbaikan)\" << endl;\n    }\n\n    return 0;\n}",
      "output": "Predikat: B (Sangat Baik)"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi kata kunci percabangan untuk memeriksa kelulusan nilai siswa berikut:",
      "codeTemplate": "int nilaiAkhir = 78;\n\n___BLANK_0___ (nilaiAkhir >= 75) {\n    cout << \"Selamat, Anda Lulus!\";\n} ___BLANK_1___ {\n    cout << \"Silakan mengikuti ujian perbaikan.\";\n}",
      "answers": [
        "if",
        "else"
      ],
      "placeholder": "kata_kunci",
      "hint": "Gunakan kata kunci pembuka percabangan 'if' dan penutup alternatif 'else'.",
      "solution": "Kondisi pertama dievaluasi dengan kata kunci if dan cabang alternatif kegagalan ditampung oleh blok else."
    },
    "note": {
      "title": "Cakupan Blok (Scope)",
      "text": "Variabel yang dideklarasikan di dalam kurung kurawal { } suatu cabang kondisi hanya dapat diakses di dalam blok tersebut (local scope)."
    },
    "quiz": {
      "question": "Kapan blok kode di dalam klausul 'else' akan dijalankan?",
      "options": [
        "Selalu dijalankan setiap kali program berputar",
        "Hanya saat kondisi pada 'if' bernilai benar (true)",
        "Hanya saat SEMUA kondisi pada 'if' dan 'else if' di atasnya bernilai salah (false)",
        "Saat program mengalami error"
      ],
      "correctIndex": 2,
      "explanation": "Klausul else berfungsi sebagai jaring pengaman (fallback) yang hanya dieksekusi apabila seluruh kondisi pengujian sebelumnya tidak ada yang terpenuhi."
    }
  },
  {
    "id": "switch",
    "category": "Percabangan",
    "title": "Percabangan (switch case)",
    "subtitle": "Memilih salah satu dari banyak blok kode untuk dieksekusi secara efisien.",
    "video": {
      "title": "Video Tutorial: Percabangan (If Else & Switch Case) C++",
      "youtubeId": "t0QmgEFWWTg",
      "description": "Tonton kembali penjelasan video materi percabangan switch case untuk melihat demonstrasi alur pemilih menu langsung di sini."
    },
    "sections": [
      {
        "heading": "Penggunaan switch-case",
        "content": "Pernyataan <code>switch</code> digunakan ketika Anda memiliki satu variabel yang ingin dibandingkan nilainya terhadap banyak kemungkinan nilai konstan yang berbeda. Menggunakan <code>switch</code> jauh lebih rapi, terstruktur, dan lebih cepat dieksekusi (menggunakan jump table compiler) dibandingkan menulis rantai <code>if - else if</code> yang terlalu panjang."
      },
      {
        "heading": "Peran Kata Kunci break",
        "content": "Kata kunci <code>break</code> bertugas menghentikan eksekusi dan langsung melompat keluar dari blok switch. Jika <code>break</code> tidak ditulis, program akan mengalami <em>fall-through</em>, yaitu melanjutkan eksekusi case berikutnya secara otomatis meskipun kondisinya tidak cocok."
      },
      {
        "heading": "Keterbatasan switch di C++",
        "content": "Berbeda dengan percabangan <code>if</code> yang fleksibel, ekspresi pada <code>switch</code> di C++ HANYA mendukung tipe integral (seperti <code>int</code>, <code>char</code>, dan <code>enum</code>). C++ tidak mengizinkan switch pada tipe <code>float</code>, <code>double</code>, atau <code>std::string</code>."
      }
    ],
    "syntaxGuide": {
      "format": "switch (ekspresi_integral) {\n    case nilai_konstan_1:\n        // instruksi\n        break;\n    case nilai_konstan_2:\n        // instruksi\n        break;\n    default:\n        // instruksi jika tidak ada case yang cocok\n}",
      "breakdown": [
        {
          "token": "switch",
          "role": "Selection Controller",
          "detail": "Mengevaluasi nilai ekspresi yang akan dicocokkan."
        },
        {
          "token": "case nilai:",
          "role": "Value Match Label",
          "detail": "Label pencocokan nilai literal konstan integer/karakter."
        },
        {
          "token": "break;",
          "role": "Jump Statement",
          "detail": "Menghentikan alur pengujian dan langsung keluar dari kurung kurawal switch."
        },
        {
          "token": "default:",
          "role": "Fallback Case",
          "detail": "Label cadangan yang dieksekusi jika tidak ada satupun case yang cocok."
        }
      ],
      "rules": [
        "Nilai pada setiap label case wajib berupa konstanta waktu kompilasi (compile-time constant), tidak boleh berupa variabel dinamis.",
        "Setiap nilai case harus unik di dalam blok switch yang sama.",
        "Label default bersifat opsional, tetapi sangat disarankan untuk menangani input tak terduga."
      ],
      "commonErrors": [
        {
          "mistake": "Lupa menyertakan perintah 'break;' pada akhir setiap case",
          "gccError": "Logika fall-through: program menjalankan case berikutnya secara tidak sengaja",
          "fix": "Selalu sertakan <code>break;</code> di akhir blok case kecuali jika Anda sengaja memanfaatkan efek fall-through."
        },
        {
          "mistake": "Menggunakan tipe string pada pengujian switch di C++",
          "gccError": "error: switch quantity not an integer",
          "fix": "Gunakan tipe integer/char untuk switch, atau gunakan rantai <code>if (teks == \"a\")</code> jika memproses string."
        }
      ]
    },
    "example": {
      "title": "Contoh Pemilihan Menu dengan Switch",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int pilihanMenu = 2;\n\n    switch (pilihanMenu) {\n        case 1:\n            cout << \"Menu Terpilih: Nasi Goreng Spesial\" << endl;\n            break;\n        case 2:\n            cout << \"Menu Terpilih: Mie Goreng C++ Mantap\" << endl;\n            break;\n        case 3:\n            cout << \"Menu Terpilih: Es Teh Manis\" << endl;\n            break;\n        default:\n            cout << \"Pilihan menu tidak tersedia.\" << endl;\n            break;\n    }\n\n    return 0;\n}",
      "output": "Menu Terpilih: Mie Goreng C++ Mantap"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi kata kunci label case dan perintah penghenti break pada blok switch berikut:",
      "codeTemplate": "int nomorHari = 1;\nswitch (nomorHari) {\n    ___BLANK_0___ 1:\n        cout << \"Hari Senin\";\n        ___BLANK_1___;\n    default:\n        cout << \"Bukan hari Senin\";\n        break;\n}",
      "answers": [
        "case",
        "break"
      ],
      "placeholder": "kata_kunci",
      "hint": "Label pencocokan nilai diawali 'case' dan perintah penghentian blok adalah 'break'.",
      "solution": "Kata kunci case mencocokkan nilai variabel dengan konstanta 1, dan perintah break mencegah eksekusi berlanjut (fall-through) ke blok default."
    },
    "note": {
      "title": "Optimasi Kompiler",
      "text": "Compiler modern C++ menerjemahkan blok switch-case dengan banyak opsi menjadi 'Jump Table' pada level assembly, sehingga pencarian cabang bernilai O(1) konstan sangat cepat."
    },
    "quiz": {
      "question": "Tipe data manakah yang TIDAK BISA digunakan sebagai ekspresi pada switch di C++?",
      "options": [
        "int",
        "char",
        "double",
        "enum"
      ],
      "correctIndex": 2,
      "explanation": "C++ tidak mendukung switch pada tipe data bilangan berkoma (double atau float) karena masalah presisi representasi floating-point di memori."
    }
  },
  {
    "id": "while-loop",
    "category": "Perulangan",
    "title": "Perulangan (while & do-while)",
    "subtitle": "Mengeksekusi blok kode secara berulang selama kondisi tertentu bernilai benar.",
    "video": {
      "title": "Video Tutorial: Perulangan (Looping) C++",
      "youtubeId": "fL8-RZ8Lt60",
      "description": "Tonton video tutorial perulangan C++ langsung di bawah ini untuk melihat demonstrasi animasi perputaran loop dan pembaruan counter."
    },
    "sections": [
      {
        "heading": "Konsep Perulangan while (Entry-Controlled Loop)",
        "content": "Perulangan <code>while</code> mengevaluasi kondisi pengujian TERLEBIH DAHULU di gerbang awal. Jika kondisi bernilai <code>true</code>, blok kode di dalamnya akan dieksekusi. Perulangan akan terus berulang selama kondisi tersebut tetap benar. Jika kondisi sejak awal sudah <code>false</code>, blok kode tidak akan pernah dieksekusi sama sekali."
      },
      {
        "heading": "Perulangan do-while (Exit-Controlled Loop)",
        "content": "Perulangan <code>do-while</code> adalah varian di mana blok kode dijalankan TERLEBIH DAHULU sebanyak satu kali, BARU kemudian kondisinya diperiksa di gerbang keluar. Hal ini menjamin blok kode <code>do-while</code> pasti dieksekusi minimal satu kali meskipun kondisinya bernilai salah sejak awal."
      },
      {
        "heading": "Bahaya Infinite Loop (Perulangan Tak Terbatas)",
        "content": "Sebuah perulangan wajib memiliki ekspresi pembaruan (seperti <code>i++</code> atau <code>i--</code>) yang membawa variabel penguji semakin mendekati kondisi terminasi. Jika pembaruan tertinggal, perulangan tidak akan pernah berhenti (<em>infinite loop</em>) dan menyebabkan program terkunci atau crash."
      }
    ],
    "syntaxGuide": {
      "format": "// While Loop:\nwhile (kondisi_pengujian) {\n    // instruksi\n    pembaruan_counter;\n}\n\n// Do-While Loop:\ndo {\n    // instruksi minimal jalan 1 kali\n    pembaruan_counter;\n} while (kondisi_pengujian);",
      "breakdown": [
        {
          "token": "while",
          "role": "Pre-Condition Loop Keyword",
          "detail": "Memeriksa kondisi di awal sebelum mengizinkan eksekusi isi blok."
        },
        {
          "token": "do",
          "role": "Post-Condition Loop Starter",
          "detail": "Memulai blok perulangan yang dijamin berjalan minimal satu kali."
        },
        {
          "token": "; (pada do-while)",
          "role": "Mandatory Semicolon",
          "detail": "Wajib diletakkan di akhir baris penutup 'while (kondisi);'."
        }
      ],
      "rules": [
        "Pada perulangan while, jika kondisi awal false, isi blok loop tidak dijalankan sama sekali.",
        "Pada perulangan do-while, tanda titik koma (;) di akhir penutup while adalah WAJIB.",
        "Variabel counter loop harus diinisialisasi sebelum memasuki loop."
      ],
      "commonErrors": [
        {
          "mistake": "Lupa menuliskan increment atau decrement pada counter di dalam loop",
          "gccError": "Infinite Loop: program hang/beku dan tidak pernah selesai",
          "fix": "Pastikan counter di-update di setiap putaran: tambahkan <code>counter++;</code>."
        },
        {
          "mistake": "Lupa menulis tanda titik koma di penutup struktur do-while",
          "gccError": "error: expected ';' before '}' token",
          "fix": "Akhiri baris penutup do-while dengan titik koma: <code>} while (kondisi);</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Perulangan while dan do-while",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"=== Demonstrasi While Loop ===\" << endl;\n    int hitung = 1;\n    while (hitung <= 3) {\n        cout << \"Putaran ke-\" << hitung << endl;\n        hitung++; // Pembaruan counter\n    }\n\n    cout << \"\\n=== Demonstrasi Do-While Loop ===\" << endl;\n    int angka = 10;\n    do {\n        cout << \"Nilai angka: \" << angka << \" (Tetap berjalan 1 kali meski kondisi salah)\" << endl;\n        angka++;\n    } while (angka < 5);\n\n    return 0;\n}",
      "output": "=== Demonstrasi While Loop ===\nPutaran ke-1\nPutaran ke-2\nPutaran ke-3\n\n=== Demonstrasi Do-While Loop ===\nNilai angka: 10 (Tetap berjalan 1 kali meski kondisi salah)"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi kata kunci while dan operator increment pada counter agar loop berputar 3 kali:",
      "codeTemplate": "int i = 1;\n___BLANK_0___ (i <= 3) {\n    cout << \"Iterasi: \" << i << endl;\n    i___BLANK_1___;\n}",
      "answers": [
        "while",
        "++"
      ],
      "placeholder": "kata/simbol",
      "hint": "Gunakan kata kunci while dan simbol increment ++.",
      "solution": "Struktur while memeriksa kondisi (i <= 3), dan ekspresi i++ menaikkan nilai counter sebesar 1 pada setiap putaran agar perulangan dapat berakhir."
    },
    "note": {
      "title": "Tips Memilih Loop",
      "text": "Gunakan 'while' jika Anda tidak yakin apakah perulangan perlu dijalankan sejak awal. Gunakan 'do-while' jika ada proses yang wajib tampil minimal 1 kali (seperti menampilkan menu aplikasi interaktif)."
    },
    "quiz": {
      "question": "Apa perbedaan paling mendasar antara 'while' dan 'do-while'?",
      "options": [
        "'while' lebih cepat daripada 'do-while'",
        "'do-while' dijamin dieksekusi minimal 1 kali, sedangkan 'while' bisa tidak dieksekusi sama sekali",
        "'do-while' hanya bisa digunakan untuk menghitung mundur",
        "'while' tidak memerlukan tanda kurung kurawal"
      ],
      "correctIndex": 1,
      "explanation": "Karena pemeriksaan kondisi pada do-while berada di gerbang keluar (exit-controlled), blok kode pasti dieksekusi minimal 1 kali sebelum kondisi dievaluasi."
    }
  },
  {
    "id": "for-loop",
    "category": "Perulangan",
    "title": "Perulangan (for loop)",
    "subtitle": "Mengulang blok instruksi dengan jumlah iterasi yang sudah diketahui secara pasti.",
    "video": {
      "title": "Video Tutorial: Perulangan (Looping) C++",
      "youtubeId": "fL8-RZ8Lt60",
      "description": "Tonton video tutorial perulangan untuk melihat visualisasi langkah for loop, nested loop, dan contoh kasus perulangan langsung di sini."
    },
    "sections": [
      {
        "heading": "Anatomi Header for Loop",
        "content": "Perulangan <code>for</code> sangat ideal ketika Anda sudah mengetahui secara pasti berapa kali suatu blok kode harus dijalankan. Header <code>for</code> menggabungkan 3 komponen vital sekaligus dalam satu baris yang dipisahkan oleh tanda titik koma:\n<br><br>\n<div class=\"code-wrapper\"><code>for (inisialisasi; kondisi; pembaruan) { ... }</code></div>\n<ul>\n  <li><strong>Inisialisasi:</strong> Dijalankan HANYA SATU KALI di awal untuk mendeklarasikan dan memberi nilai variabel pencacah (counter).</li>\n  <li><strong>Kondisi:</strong> Dievaluasi sebelum setiap putaran dimulai. Jika bernilai <code>true</code>, perulangan berlanjut; jika <code>false</code>, perulangan berhenti.</li>\n  <li><strong>Pembaruan (Increment/Decrement):</strong> Dijalankan di akhir setiap putaran untuk mengubah nilai pencacah.</li>\n</ul>"
      },
      {
        "heading": "Range-Based for Loop (Standar Modern C++11)",
        "content": "Mulai C++11, C++ memperkenalkan <em>range-based for loop</em> untuk mengiterasi seluruh elemen koleksi (seperti array) secara otomatis tanpa perlu mengelola variabel indeks manual:\n<br><br>\n<div class=\"code-wrapper\"><code>for (int nilai : arrayAngka) { cout &lt;&lt; nilai; }</code></div>"
      }
    ],
    "syntaxGuide": {
      "format": "for (tipe_counter i = nilai_awal; kondisi_terminasi; ekspresi_pembaruan) {\n    // instruksi perulangan\n}",
      "breakdown": [
        {
          "token": "for",
          "role": "Definite Loop Keyword",
          "detail": "Struktur perulangan kompak berbasis pencacah terpadu."
        },
        {
          "token": "int i = 0",
          "role": "Initialization Statement",
          "detail": "Mendeklarasikan variabel counter lokal yang hanya berlaku di dalam cakupan for."
        },
        {
          "token": "i < batas",
          "role": "Condition Expression",
          "detail": "Uji logika penghenti putaran loop."
        },
        {
          "token": "i++",
          "role": "Iteration Step",
          "detail": "Operasi penambahan/pengurangan nilai variabel pencacah."
        }
      ],
      "rules": [
        "Kedua tanda titik koma (;) di dalam tanda kurung for (; ;) bersifat WAJIB, meskipun salah satu ekspresi dikosongkan.",
        "Variabel pencacah yang dideklarasikan di segmen inisialisasi hanya dikenali di dalam blok for tersebut.",
        "Hati-hati terhadap 'off-by-one error' saat menentukan tanda '<' atau '<='."
      ],
      "commonErrors": [
        {
          "mistake": "Menggunakan tanda koma alih-alih tanda titik koma di header for",
          "gccError": "error: expected ';' before '<' token",
          "fix": "Gunakan tanda titik koma <code>;</code> untuk memisahkan ketiga segmen for: <code>for (int i=0; i&lt;5; i++)</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Penggunaan For Loop Standar dan Range-Based",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"=== Perulangan For Standar ===\" << endl;\n    for (int i = 1; i <= 5; i++) {\n        cout << \"Nomor Urut: \" << i << endl;\n    }\n\n    cout << \"\\n=== Range-Based For Loop (C++11) ===\" << endl;\n    int daftarSkor[] = {90, 85, 78, 92, 88};\n    for (int skor : daftarSkor) {\n        cout << \"Nilai: \" << skor << \" | \";\n    }\n    cout << endl;\n\n    return 0;\n}",
      "output": "=== Perulangan For Standar ===\nNomor Urut: 1\nNomor Urut: 2\nNomor Urut: 3\nNomor Urut: 4\nNomor Urut: 5\n\n=== Range-Based For Loop (C++11) ===\nNilai: 90 | Nilai: 85 | Nilai: 78 | Nilai: 92 | Nilai: 88 | "
    },
    "syntaxExercise": {
      "instruction": "Lengkapi tipe data counter dan tanda titik koma pemisah pada header for loop berikut:",
      "codeTemplate": "for (___BLANK_0___ i = 0; i < 10___BLANK_1___ i++) {\n    cout << i << \" \";\n}",
      "answers": [
        "int",
        ";"
      ],
      "placeholder": "tipe/simbol",
      "hint": "Counter i bertipe integer dan segmen kedua diakhiri tanda titik koma ;.",
      "solution": "Variabel counter dideklarasikan dengan tipe int dan segmen kondisi di dalam kurung for dipisahkan dengan tanda titik koma (;)."
    },
    "note": {
      "title": "Ruang Lingkup Variabel",
      "text": "Variabel yang dideklarasikan di dalam for (seperti 'int i = 0') akan otomatis dihancurkan dari memori begitu perulangan for selesai, sehingga nama 'i' dapat digunakan kembali pada loop berikutnya."
    },
    "quiz": {
      "question": "Berapa kali blok kode berikut akan dieksekusi: for (int i = 0; i < 5; i++) ?",
      "options": [
        "4 kali",
        "5 kali (untuk i = 0, 1, 2, 3, 4)",
        "6 kali",
        "Tak terbatas"
      ],
      "correctIndex": 1,
      "explanation": "Perulangan dimulai dari 0 dan berjalan selama i < 5, sehingga dieksekusi tepat 5 kali untuk nilai i = 0, 1, 2, 3, dan 4."
    }
  },
  {
    "id": "arrays",
    "category": "Struktur Data",
    "title": "Array (Larik)",
    "subtitle": "Menyimpan sekumpulan data bertipe sama dalam satu variabel terindeks.",
    "video": {
      "title": "Video Tutorial: Array (Satu & Multi Dimensi) C++",
      "youtubeId": "U6ailcItsmQ",
      "description": "Tonton video tutorial array C++ langsung di bawah ini untuk melihat ilustrasi alokasi memori berurutan dan contoh manipulasi data array."
    },
    "sections": [
      {
        "heading": "Pengertian dan Karakteristik Array",
        "content": "Array (larik) adalah struktur data dasar yang digunakan untuk menyimpan sekumpulan elemen data yang memiliki tipe data yang sama (homogen) di dalam blok memori komputer yang saling berdampingan secara berurutan (<em>contiguous memory</em>)."
      },
      {
        "heading": "Pengindeksan Berbasis Nol (Zero-Based Indexing)",
        "content": "Setiap elemen di dalam array diakses melalui nomor posisi yang disebut <strong>indeks</strong>. Di C++, pengindeksan selalu dimulai dari angka <strong>0</strong> (nol):\n<ul>\n  <li>Elemen ke-1 disimpan pada indeks <code>[0]</code></li>\n  <li>Elemen ke-2 disimpan pada indeks <code>[1]</code></li>\n  <li>Elemen ke-N disimpan pada indeks <code>[N-1]</code></li>\n</ul>"
      },
      {
        "heading": "Array Multi-Dimensi (Matriks 2D)",
        "content": "Array dua dimensi dapat dibayangkan sebagai tabel yang memiliki baris dan kolom. Cara mendeklarasikannya adalah:\n<br><br>\n<div class=\"code-wrapper\"><code>int matriks[2][3] = { {1, 2, 3}, {4, 5, 6} };</code></div>"
      }
    ],
    "syntaxGuide": {
      "format": "// Deklarasi & Inisialisasi:\ntipe_elemen nama_array[kapasitas] = {val_0, val_1, ...};\n\n// Mengakses / Mengubah Nilai:\nnama_array[indeks] = nilai_baru;",
      "breakdown": [
        {
          "token": "tipe_elemen",
          "role": "Element Type",
          "detail": "Tipe data seragam dari seluruh elemen yang dimuat dalam array."
        },
        {
          "token": "[kapasitas]",
          "role": "Array Size Declarator",
          "detail": "Jumlah slot memori statis yang dipesan (wajib berupa konstanta positif)."
        },
        {
          "token": "{ ... }",
          "role": "Initializer List",
          "detail": "Daftar nilai awal pengisi elemen array."
        },
        {
          "token": "[indeks]",
          "role": "Subscript Operator",
          "detail": "Operator penunjuk indeks posisi elemen yang ingin diakses."
        }
      ],
      "rules": [
        "Ukuran kapasitas array statis C++ bersifat tetap dan tidak dapat diperbesar atau diperkecil saat runtime.",
        "C++ TIDAK melakukan pemeriksaan batas otomatis (bounds checking). Mengakses indeks di luar kapasitas (out-of-bounds) akan memicu galat memori fatal (segmentation fault)."
      ],
      "commonErrors": [
        {
          "mistake": "Mengakses elemen di luar batas ukuran array (Off-by-one / Out-of-bounds)",
          "gccError": "Undefined Behavior / Segmentation Fault (core dumped)",
          "fix": "Jika array berkapasitas 5 elemen, indeks terakhir yang sah adalah <code>[4]</code>, bukan <code>[5]</code>."
        },
        {
          "mistake": "Mengisi initializer list melebihi kapasitas yang dideklarasikan",
          "gccError": "error: too many initializers for 'int [3]'",
          "fix": "Pastikan jumlah data di dalam kurung kurawal tidak melebihi kapasitas array."
        }
      ]
    },
    "example": {
      "title": "Contoh Penggunaan Array 1 Dimensi dan Matriks 2D",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Array 1 Dimensi\n    int nilaiSiswa[5] = {85, 90, 78, 92, 88};\n    cout << \"Nilai Siswa Pertama (indeks 0): \" << nilaiSiswa[0] << endl;\n    cout << \"Nilai Siswa Kelima  (indeks 4): \" << nilaiSiswa[4] << endl;\n\n    // Menghitung jumlah elemen dengan sizeof\n    int jumlahElemen = sizeof(nilaiSiswa) / sizeof(nilaiSiswa[0]);\n    cout << \"Jumlah Elemen Array: \" << jumlahElemen << endl;\n\n    // Matriks 2 Dimensi (2 Baris, 3 Kolom)\n    int matriks[2][3] = {\n        {10, 20, 30},\n        {40, 50, 60}\n    };\n    cout << \"Elemen Matriks Baris 1, Kolom 2: \" << matriks[0][1] << endl;\n\n    return 0;\n}",
      "output": "Nilai Siswa Pertama (indeks 0): 85\nNilai Siswa Kelima  (indeks 4): 88\nJumlah Elemen Array: 5\nElemen Matriks Baris 1, Kolom 2: 20"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi kapasitas ukuran array dan indeks untuk mengambil elemen pertama (angka 10) di bawah ini:",
      "codeTemplate": "int data[___BLANK_0___] = {10, 20, 30, 40};\nint pertama = data[___BLANK_1___];",
      "answers": [
        "4",
        "0"
      ],
      "placeholder": "angka",
      "hint": "Array menampung 4 data, dan elemen pertama selalu berada di indeks 0.",
      "solution": "Array menampung 4 data sehingga dideklarasikan dengan ukuran [4], dan elemen pertama diakses menggunakan indeks [0] sesuai aturan zero-based indexing."
    },
    "note": {
      "title": "Rumus Panjang Array",
      "text": "Untuk mengetahui jumlah elemen array statis secara dinamis, gunakan formula: 'sizeof(arr) / sizeof(arr[0])' yang membagi total ukuran byte array dengan ukuran byte satu elemennya."
    },
    "quiz": {
      "question": "Jika dideklarasikan 'int data[5];', berapakah indeks elemen terakhir yang sah untuk diakses?",
      "options": [
        "4",
        "5",
        "6",
        "1"
      ],
      "correctIndex": 0,
      "explanation": "Karena pengindeksan array C++ dimulai dari 0, array berkapasitas 5 elemen memiliki rentang indeks sah dari 0 sampai 4."
    }
  },
  {
    "id": "pointers-references",
    "category": "Memori & Alamat",
    "title": "Pointer & Reference",
    "subtitle": "Mengakses dan memanipulasi alamat memori komputer secara langsung.",
    "videos": [
      {
        "title": "Video Tutorial: Reference C++",
        "youtubeId": "k7gaSaPUvpA",
        "description": "Tonton penjelasan video konsep reference (alias variabel) langsung di bawah ini."
      },
      {
        "title": "Video Tutorial: Pointer C++",
        "youtubeId": "VPzmwIIKKRQ",
        "description": "Tonton demonstrasi visual konsep pointer, alamat memori RAM, dan dereference langsung di sini."
      }
    ],
    "sections": [
      {
        "heading": "Konsep Alamat Memori (RAM)",
        "content": "Setiap variabel yang Anda buat dalam program disimpan pada lokasi memori tertentu di RAM. Lokasi ini memiliki <strong>alamat memori</strong> berupa angka heksadesimal (contoh: <code>0x7ffee4b1a8ac</code>). Anda dapat melihat alamat memori suatu variabel menggunakan operator <em>address-of</em> (<code>&amp;</code>)."
      },
      {
        "heading": "Pengertian Reference (Alias)",
        "content": "<strong>Reference</strong> adalah nama alias (julukan alternatif) untuk variabel yang sudah ada. Reference dibuat menggunakan simbol <code>&amp;</code> pada deklarasi tipe. Setiap operasi yang dilakukan terhadap reference akan langsung memengaruhi variabel aslinya karena keduanya berbagi alamat memori yang persis sama."
      },
      {
        "heading": "Pengertian Pointer dan Operator Dereference (*)",
        "content": "<strong>Pointer</strong> adalah variabel khusus yang bertugas menyimpan alamat memori dari variabel lain.\n<ul>\n  <li><code>int* ptr = &amp;nilai;</code>: Mendeklarasikan pointer <code>ptr</code> yang menyimpan alamat memori variabel <code>nilai</code>.</li>\n  <li><code>*ptr</code>: Operator <em>dereference</em> (tanda bintang) yang digunakan untuk mengambil atau memanipulasi nilai asli yang berada di alamat yang ditunjuk pointer.</li>\n</ul>"
      }
    ],
    "syntaxGuide": {
      "format": "// Reference (Alias Langsung):\ntipe_data& alias = variabel_asli;\n\n// Pointer (Penyimpan Alamat Memori):\ntipe_data* ptr = &variabel_asli;\n// Mengambil nilai melalui pointer (Dereference):\n*ptr;",
      "breakdown": [
        {
          "token": "& (pada variabel)",
          "role": "Address-of Operator",
          "detail": "Mengambil alamat fisik memori RAM dari suatu variabel."
        },
        {
          "token": "tipe*",
          "role": "Pointer Type Declarator",
          "detail": "Menyatakan bahwa variabel ini adalah variabel penampung alamat memori."
        },
        {
          "token": "* (pada pointer)",
          "role": "Dereference Operator",
          "detail": "Mengakses dan membaca/menulis data langsung di alamat yang ditunjuk."
        },
        {
          "token": "tipe&",
          "role": "Reference Declarator",
          "detail": "Menciptakan alias langsung terhadap entitas variabel yang sudah ada."
        }
      ],
      "rules": [
        "Reference WAJIB langsung diinisialisasi saat dibuat dan tidak bisa diarahkan ulang ke variabel lain.",
        "Pointer yang belum memiliki target sebaiknya diinisialisasi dengan 'nullptr'.",
        "Tipe pointer harus sama dengan tipe variabel yang ditunjuknya (misal: int* hanya untuk int)."
      ],
      "commonErrors": [
        {
          "mistake": "Dereference pada pointer kosong (Null Pointer Dereference)",
          "gccError": "Segmentation fault (core dumped)",
          "fix": "Pastikan pointer menunjuk ke alamat variabel yang valid sebelum menggunakan operator <code>*ptr</code>."
        },
        {
          "mistake": "Lupa menyertakan operator '&' saat mengisi pointer",
          "gccError": "error: invalid conversion from 'int' to 'int*'",
          "fix": "Gunakan operator <code>&amp;</code> untuk memberikan alamat memori: <code>int* ptr = &amp;angka;</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Penggunaan Pointer dan Reference",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int makananPokok = 100;\n    \n    // 1. Reference (Alias)\n    int& refMakanan = makananPokok;\n    refMakanan = 150; // Mengubah makananPokok menjadi 150\n    cout << \"Nilai makananPokok via ref: \" << makananPokok << endl;\n\n    // 2. Pointer\n    int* ptr = &makananPokok;\n    cout << \"Alamat Memori (ptr)       : \" << ptr << endl;\n    cout << \"Nilai Memori (*ptr)       : \" << *ptr << endl;\n\n    // Mengubah nilai lewat dereference pointer\n    *ptr = 200;\n    cout << \"Nilai Baru makananPokok   : \" << makananPokok << endl;\n\n    return 0;\n}",
      "output": "Nilai makananPokok via ref: 150\nAlamat Memori (ptr)       : 0x61ff08\nNilai Memori (*ptr)       : 150\nNilai Baru makananPokok   : 200"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi operator address-of (&) untuk mengisi pointer dan operator dereference (*) untuk mencetak nilainya:",
      "codeTemplate": "int skor = 95;\nint* ptrSkor = ___BLANK_0___skor; // Mengambil alamat memori\ncout << \"Isi skor via pointer: \" << ___BLANK_1___ptrSkor; // Membaca nilai",
      "answers": [
        "&",
        "*"
      ],
      "placeholder": "simbol",
      "hint": "Simbol & mengambil alamat memori dan simbol * membaca nilai dari pointer.",
      "solution": "Operator & (address-of) mengambil alamat memori variabel skor, dan operator * (dereference) mengambil nilai asli yang berada di alamat tersebut."
    },
    "note": {
      "title": "nullptr vs NULL",
      "text": "Pada standar C++ modern (C++11 ke atas), selalu gunakan 'nullptr' ketimbang 'NULL' atau '0' untuk menandai pointer kosong karena lebih aman dari segi type-safety."
    },
    "quiz": {
      "question": "Operator apakah yang digunakan untuk mengambil alamat memori dari sebuah variabel?",
      "options": [
        "* (tanda bintang)",
        "& (ampersand / address-of)",
        "-> (tanda panah)",
        "% (persen)"
      ],
      "correctIndex": 1,
      "explanation": "Operator & (address-of) digunakan untuk mendapatkan alamat lokasi memori di RAM tempat suatu variabel tersimpan."
    }
  },
  {
    "id": "functions",
    "category": "Fungsi (Functions)",
    "title": "Pengenalan Fungsi",
    "subtitle": "Membuat blok kode terstruktur yang modular, reusable, dan rapi.",
    "video": {
      "title": "Video Tutorial: Pengenalan Fungsi (Functions) C++",
      "youtubeId": "uUTJ53sktck",
      "description": "Tonton video tutorial fungsi C++ di bawah ini untuk memahami struktur fungsi dan modularitas kode secara komprehensif."
    },
    "sections": [
      {
        "heading": "Mengapa Fungsi Sangat Penting?",
        "content": "Fungsi (<em>function</em>) adalah blok kode terorganisir yang dirancang untuk menyelesaikan tugas spesifik. Menggunakan fungsi menerapkan prinsip <strong>DRY (Don't Repeat Yourself)</strong>: Anda menulis kode logika satu kali, dan dapat memanggilnya berkali-kali dari bagian program mana pun tanpa duplikasi."
      },
      {
        "heading": "Deklarasi (Prototype) vs Definisi Fungsi",
        "content": "Di dalam C++, compiler membaca kode secara berurutan dari atas ke bawah.\n<ul>\n  <li>Jika fungsi didefinisikan DI BAWAH fungsi <code>main()</code>, Anda WAJIB membuat <strong>prototipe fungsi (declaration)</strong> di atas <code>main()</code>.</li>\n  <li>Jika fungsi didefinisikan langsung DI ATAS fungsi <code>main()</code>, deklarasi prototipe tidak lagi diperlukan.</li>\n</ul>"
      },
      {
        "heading": "Tipe Fungsi void",
        "content": "Jika suatu fungsi hanya bertugas melakukan aksi (seperti mencetak teks ke layar) dan tidak menghasilkan nilai kalkulasi apa pun untuk dikembalikan, gunakan tipe kembalian <code>void</code>."
      }
    ],
    "syntaxGuide": {
      "format": "// Prototipe Fungsi:\ntipe_kembalian namaFungsi(parameter);\n\n// Definisi Fungsi:\ntipe_kembalian namaFungsi(parameter) {\n    // blok instruksi fungsi\n    return nilai; // jika bukan tipe void\n}",
      "breakdown": [
        {
          "token": "tipe_kembalian",
          "role": "Return Type Specifier",
          "detail": "Tipe data hasil kembalian (int, double, string, void jika tidak menghasilkan nilai)."
        },
        {
          "token": "namaFungsi",
          "role": "Function Identifier",
          "detail": "Nama pemanggil fungsi (diawali huruf kecil / camelCase)."
        },
        {
          "token": "( parameter )",
          "role": "Parameter List",
          "detail": "Variabel penerima argumen masukan fungsi."
        },
        {
          "token": "return",
          "role": "Return Statement",
          "detail": "Mengembalikan nilai ke pemanggil dan mengakhiri eksekusi fungsi."
        }
      ],
      "rules": [
        "Fungsi harus dideklarasikan atau didefinisikan sebelum dipanggil di dalam main().",
        "Pemanggilan fungsi WAJIB menyertakan tanda kurung buka-tutup '()', misal: sapa();.",
        "Fungsi bertipe void dilarang mengembalikan nilai (return nilai; adalah error kompilasi)."
      ],
      "commonErrors": [
        {
          "mistake": "Memanggil fungsi yang didefinisikan di bawah main() tanpa membuat prototipe",
          "gccError": "error: 'hitungTotal' was not declared in this scope",
          "fix": "Tulis deklarasi prototipe <code>void hitungTotal();</code> di atas fungsi <code>main()</code>."
        },
        {
          "mistake": "Lupa menyertakan tanda kurung saat memanggil fungsi",
          "gccError": "statement cannot resolve address of overloaded function",
          "fix": "Sertakan tanda kurung saat memanggil fungsi: <code>sambut();</code> bukan <code>sambut;</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Pembuatan dan Pemanggilan Fungsi",
      "code": "#include <iostream>\nusing namespace std;\n\n// Deklarasi Prototipe Fungsi\nvoid tampilkanPesan();\n\nint main() {\n    cout << \"Program dimulai dari fungsi main().\" << endl;\n    \n    // Pemanggilan fungsi\n    tampilkanPesan();\n    tampilkanPesan();\n    \n    cout << \"Program selesai.\" << endl;\n    return 0;\n}\n\n// Definisi Fungsi\nvoid tampilkanPesan() {\n    cout << \">> Halo! Ini adalah pesan dari fungsi buatan Muhammad Anhar Solihin.\" << endl;\n}",
      "output": "Program dimulai dari fungsi main().\n>> Halo! Ini adalah pesan dari fungsi buatan Muhammad Anhar Solihin.\n>> Halo! Ini adalah pesan dari fungsi buatan Muhammad Anhar Solihin.\nProgram selesai."
    },
    "syntaxExercise": {
      "instruction": "Lengkapi tipe fungsi tanpa nilai kembalian dan pemanggilan fungsinya di fungsi main:",
      "codeTemplate": "___BLANK_0___ beriSalam() {\n    cout << \"Selamat Datang di Portal Pembelajaran C++\" << endl;\n}\n\nint main() {\n    beriSalam___BLANK_1___;\n    return 0;\n}",
      "answers": [
        "void",
        "()"
      ],
      "placeholder": "kata/simbol",
      "hint": "Fungsi tanpa return bernilai void, dan pemanggilan fungsi menyertakan kurung ().",
      "solution": "Fungsi yang tidak mengembalikan nilai menggunakan tipe void, dan fungsi dipanggil menggunakan namanya diikuti tanda kurung buka-tutup ()."
    },
    "note": {
      "title": "Standar Penamaan",
      "text": "Gunakan kata kerja deskriptif untuk nama fungsi (misal: hitungGaji(), cetakLaporan(), validasiInput()) agar kode mudah dipahami alurnya."
    },
    "quiz": {
      "question": "Tipe kembalian (return type) apa yang digunakan untuk fungsi yang TIDAK mengembalikan nilai?",
      "options": [
        "null",
        "int",
        "void",
        "empty"
      ],
      "correctIndex": 2,
      "explanation": "Kata kunci 'void' digunakan untuk menandakan bahwa suatu fungsi hanya menjalankan aksi instruksi tanpa mengembalikan nilai data apapun."
    }
  },
  {
    "id": "function-parameters",
    "category": "Fungsi (Functions)",
    "title": "Parameter & Argumen",
    "subtitle": "Mengirimkan data masukan dinamis ke dalam fungsi saat dipanggil.",
    "video": {
      "title": "Video Tutorial: Parameter Fungsi C++",
      "youtubeId": "uUTJ53sktck",
      "description": "Tonton bagian penjelasan parameter fungsi pada video tutorial ini untuk melihat contoh pengiriman argumen multiparameter."
    },
    "sections": [
      {
        "heading": "Parameter vs Argumen",
        "content": "Istilah parameter dan argumen sering digunakan berdampingan:\n<ul>\n  <li><strong>Parameter:</strong> Variabel yang tercantum di dalam tanda kurung pada <em>definisi/deklarasi</em> fungsi.</li>\n  <li><strong>Argumen:</strong> Nilai nyata aktual yang <em>dikirimkan</em> ke dalam fungsi pada saat fungsi tersebut dipanggil di kode program.</li>\n</ul>"
      },
      {
        "heading": "Parameter Default (Default Arguments)",
        "content": "C++ memungkinkan Anda menentukan nilai bawaan (default) pada parameter. Jika pemanggil fungsi tidak menyuplai argumen untuk parameter tersebut, nilai default akan otomatis digunakan.\n<br><br>\n<div class=\"code-wrapper\"><code>void cetakSalam(string negara = \"Indonesia\") { ... }</code></div>"
      }
    ],
    "syntaxGuide": {
      "format": "void namaFungsi(tipe_1 param_1, tipe_2 param_2 = nilai_default) {\n    // kode fungsi menggunakan param_1 dan param_2\n}",
      "breakdown": [
        {
          "token": "tipe_data param",
          "role": "Formal Parameter",
          "detail": "Deklarasi variabel lokal penampung data kiriman."
        },
        {
          "token": "= nilai_default",
          "role": "Default Argument Specifier",
          "detail": "Nilai cadangan jika pemanggil tidak mengirim argumen."
        }
      ],
      "rules": [
        "Parameter dengan nilai default WAJIB diletakkan di urutan paling kanan (paling akhir) dari daftar parameter.",
        "Jumlah dan tipe data argumen yang dikirimkan pemanggil harus cocok dengan deklarasi parameter fungsi."
      ],
      "commonErrors": [
        {
          "mistake": "Meletakkan parameter default sebelum parameter wajib tanpa default",
          "gccError": "error: default argument missing for parameter 2 of 'void hitung(int a, int b)'",
          "fix": "Pindahkan parameter default ke posisi paling akhir: <code>void hitung(int b, int a = 10)</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Fungsi dengan Parameter dan Default Argument",
      "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// Fungsi dengan 2 parameter (satu parameter memiliki default value)\nvoid sapaMahasiswa(string nama, string prodi = \"Teknik Informatika\") {\n    cout << \"Halo, \" << nama << \"! Selamat datang di Program Studi \" << prodi << \".\" << endl;\n}\n\nint main() {\n    // Memanggil dengan menyuplai kedua argumen\n    sapaMahasiswa(\"Muhammad Anhar Solihin\", \"Sistem Komputer\");\n\n    // Memanggil hanya dengan satu argumen (menggunakan default prodi)\n    sapaMahasiswa(\"Ahmad Solihin\");\n\n    return 0;\n}",
      "output": "Halo, Muhammad Anhar Solihin! Selamat datang di Program Studi Sistem Komputer.\nHalo, Ahmad Solihin! Selamat datang di Program Studi Teknik Informatika."
    },
    "syntaxExercise": {
      "instruction": "Lengkapi deklarasi tipe parameter teks dan argumen string pada pemanggilan fungsi berikut:",
      "codeTemplate": "void perkenalan(___BLANK_0___ nama) {\n    cout << \"Nama saya adalah \" << nama << endl;\n}\n\nint main() {\n    perkenalan(___BLANK_1___);\n    return 0;\n}",
      "answers": [
        "string",
        "\"Anhar\""
      ],
      "placeholder": "tipe/argumen",
      "hint": "Tipe parameter nama adalah string dan argumen teks diapit tanda petik dua \"Anhar\".",
      "solution": "Parameter nama bertipe data string dan nilai teks yang dikirimkan sebagai argumen wajib diapit tanda kutip ganda (\"Anhar\")."
    },
    "note": {
      "title": "Aturan Penempatan",
      "text": "Jika Anda memisahkan prototipe dan definisi fungsi, nilai default parameter hanya boleh dituliskan pada baris prototipe fungsi di atas."
    },
    "quiz": {
      "question": "Di manakah parameter dengan nilai default harus diletakkan dalam daftar parameter fungsi?",
      "options": [
        "Harus selalu di paling kiri (urutan pertama)",
        "Boleh diletakkan di posisi mana saja secara acak",
        "Harus selalu di urutan paling kanan (posisi akhir)",
        "Hanya boleh jika fungsi memiliki satu parameter saja"
      ],
      "correctIndex": 2,
      "explanation": "Parameter default wajib diletakkan di urutan paling akhir (paling kanan) agar compiler tidak ambigu dalam mencocokkan argumen posisional."
    }
  },
  {
    "id": "function-return",
    "category": "Fungsi (Functions)",
    "title": "Nilai Kembalian (Return)",
    "subtitle": "Mengembalikan hasil proses kalkulasi dari fungsi kepada pemanggilnya.",
    "sections": [
      {
        "heading": "Kata Kunci return",
        "content": "Jika fungsi bertugas melakukan perhitungan matematika, analisis data, atau validasi kondisi, fungsi tersebut harus mengembalikan nilai kepada pemanggilnya menggunakan kata kunci <code>return</code>. Tipe data dari nilai yang dikembalikan harus sesuai dengan tipe kembalian yang dideklarasikan di depan nama fungsi."
      },
      {
        "heading": "Pola Early Return",
        "content": "Pernyataan <code>return</code> secara instan menghentikan eksekusi fungsi dan langsung melompat kembali ke baris pemanggil. Pola <em>early return</em> sering digunakan oleh programmer profesional untuk menghentikan fungsi lebih awal jika ditemukan input yang tidak valid, sehingga menghindari sarang percabangan <code>if</code> yang terlalu dalam."
      }
    ],
    "syntaxGuide": {
      "format": "tipe_kembalian namaFungsi(parameter) {\n    // kalkulasi\n    return hasil_kalkulasi;\n}",
      "breakdown": [
        {
          "token": "tipe_kembalian",
          "role": "Non-Void Type",
          "detail": "Menyatakan jenis data yang dihasilkan (int, double, bool, string)."
        },
        {
          "token": "return nilai;",
          "role": "Return Statement",
          "detail": "Mengirimkan data hasil komputasi dan mengembalikan kendali ke baris pemanggil."
        }
      ],
      "rules": [
        "Fungsi non-void WAJIB mengembalikan nilai pada SEMUA kemungkinan jalur percabangan (semua cabang if-else harus memiliki return).",
        "Instruksi kode apa pun yang ditulis di bawah baris 'return;' dalam blok yang sama tidak akan pernah dieksekusi (unreachable code)."
      ],
      "commonErrors": [
        {
          "mistake": "Lupa menuliskan pernyataan return pada fungsi non-void",
          "gccError": "warning: control reaches end of non-void function [-Wreturn-type]",
          "fix": "Pastikan fungsi mengembalikan nilai bertipe cocok sebelum blok kurung tutup fungsi."
        },
        {
          "mistake": "Mengembalikan nilai pada fungsi yang dideklarasikan bertipe void",
          "gccError": "error: return-statement with a value, in function returning 'void'",
          "fix": "Hapus nilai di belakang kata return, atau ubah tipe kembalian fungsi menjadi non-void."
        }
      ]
    },
    "example": {
      "title": "Contoh Fungsi Mengembalikan Nilai Kalkulasi",
      "code": "#include <iostream>\nusing namespace std;\n\n// Fungsi menghitung luas persegi panjang\nint hitungLuas(int panjang, int lebar) {\n    int luas = panjang * lebar;\n    return luas; // Mengembalikan nilai bertipe int\n}\n\n// Fungsi memeriksa kelulusan\nbool cekLulus(int nilai) {\n    if (nilai >= 75) {\n        return true;  // Early return jika lulus\n    }\n    return false;     // Return jika tidak lulus\n}\n\nint main() {\n    int p = 10, l = 5;\n    int hasilLuas = hitungLuas(p, l);\n    cout << \"Luas Persegi Panjang (\" << p << \" x \" << l << \") = \" << hasilLuas << \" cm2\" << endl;\n\n    int nilaiMahasiswa = 82;\n    if (cekLulus(nilaiMahasiswa)) {\n        cout << \"Status: Mahasiswa dinyatakan Lulus!\" << endl;\n    }\n\n    return 0;\n}",
      "output": "Luas Persegi Panjang (10 x 5) = 50 cm2\nStatus: Mahasiswa dinyatakan Lulus!"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi tipe kembalian bilangan bulat dan kata kunci pengembalian hasil perkalian pada fungsi berikut:",
      "codeTemplate": "___BLANK_0___ perkalian(int a, int b) {\n    ___BLANK_1___ a * b;\n}",
      "answers": [
        "int",
        "return"
      ],
      "placeholder": "kata_kunci",
      "hint": "Tipe pengembalian adalah int dan kata kunci pengembalian adalah return.",
      "solution": "Fungsi perkalian menghasilkan bilangan bulat sehingga bertipe int, dan kata kunci return mengembalikan hasil perkalian (a * b) ke fungsi pemanggil."
    },
    "note": {
      "title": "Pemeriksaan Tipe",
      "text": "Compiler C++ akan secara otomatis melakukan konversi implisit jika memungkinkan (misal mengonversi int ke double), namun konversi yang berpotensi memotong data (seperti double ke int) akan memicu peringatan."
    },
    "quiz": {
      "question": "Apa yang terjadi pada baris instruksi kode yang ditulis persis di bawah baris 'return 10;' di dalam fungsi yang sama?",
      "options": [
        "Akan tetap dieksekusi secara normal",
        "Akan dieksekusi sebelum return dijalankan",
        "Tidak akan pernah dieksekusi sama sekali (unreachable code)",
        "Membuat sistem crash seketika"
      ],
      "correctIndex": 2,
      "explanation": "Pernyataan return secara instan memutus aliran eksekusi fungsi dan mengembalikan kendali ke fungsi pemanggil, sehingga kode di bawahnya tidak akan pernah disentuh."
    }
  },
  {
    "id": "function-pass-by-reference",
    "category": "Fungsi (Functions)",
    "title": "Pass by Reference",
    "subtitle": "Mengubah variabel asli fungsi pemanggil dan mengoptimalkan performa memori.",
    "video": {
      "title": "Video Tutorial: Pass by Reference C++",
      "youtubeId": "k7gaSaPUvpA",
      "description": "Tonton penjelasan mendalam tentang mekanisme Pass by Reference pada video materi ini langsung di dalam website."
    },
    "sections": [
      {
        "heading": "Pass by Value vs Pass by Reference",
        "content": "Secara default, argumen di C++ dikirimkan secara <strong>Pass by Value</strong> (nilai diduplikasi/dicopy ke memori baru). Perubahan apa pun di dalam fungsi TIDAK AKAN memengaruhi variabel asli di fungsi pemanggil.<br><br>\nSebaliknya, pada <strong>Pass by Reference</strong> (menggunakan simbol <code>&amp;</code>), fungsi menerima alamat langsung dari variabel asli pemanggil. Segala perubahan nilai di dalam fungsi akan secara instan mengubah variabel aslinya."
      },
      {
        "heading": "Keuntungan Efisiensi Memori (const Reference)",
        "content": "Saat mengirimkan data berukuran besar (seperti <code>std::string</code> panjang, array objek, atau vector), Pass by Value akan menyalin seluruh memori data tersebut sehingga boros waktu dan RAM. Dengan menggunakan <strong>const reference</strong> (<code>const string&amp; teks</code>), data tidak disalin sama sekali (sangat cepat), sekaligus terlindungi dari modifikasi yang tidak disengaja."
      }
    ],
    "syntaxGuide": {
      "format": "// Mengubah data asli pemanggil:\nvoid ubahData(tipe_data& paramRef) {\n    paramRef = nilai_baru;\n}\n\n// Efisien tanpa copy dan hanya-baca (read-only):\nvoid bacaData(const tipe_data& paramRef) {\n    // paramRef hanya bisa dibaca\n}",
      "breakdown": [
        {
          "token": "tipe&",
          "role": "Reference Parameter",
          "detail": "Menerima argumen sebagai referensi alias ke variabel pemanggil asli."
        },
        {
          "token": "const tipe&",
          "role": "Const Reference Parameter",
          "detail": "Melewatkan alamat asli demi performa cepat tanpa duplikasi memori, namun melarang perubahan nilai."
        }
      ],
      "rules": [
        "Argumen yang dikirimkan ke parameter reference biasa (non-const) WAJIB berupa variabel (lvalue), tidak boleh berupa nilai angka harfiah (misal tukar(10, 20) adalah ilegal).",
        "Setiap modifikasi terhadap parameter reference akan mengubah isi variabel asli secara permanen."
      ],
      "commonErrors": [
        {
          "mistake": "Mengirimkan nilai literal langsung ke parameter non-const reference",
          "gccError": "error: cannot bind non-const lvalue reference of type 'int&' to an rvalue of type 'int'",
          "fix": "Kirimkan variabel nyata, bukan angka literal langsung: simpan dulu angka ke variabel: <code>int x = 10; tukar(x);</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Menukar Nilai Dua Variabel (Swap Algorithm)",
      "code": "#include <iostream>\nusing namespace std;\n\n// Fungsi menukar dua variabel menggunakan Pass by Reference\nvoid tukar(int& a, int& b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10;\n    int y = 99;\n\n    cout << \"Sebelum Ditukar : x = \" << x << \", y = \" << y << endl;\n    \n    // Memanggil fungsi tukar\n    tukar(x, y);\n\n    cout << \"Setelah Ditukar : x = \" << x << \", y = \" << y << endl;\n\n    return 0;\n}",
      "output": "Sebelum Ditukar : x = 10, y = 99\nSetelah Ditukar : x = 99, y = 10"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi simbol reference (&) pada kedua parameter fungsi penukar berikut agar nilai variabel pemanggil berhasil ditukar:",
      "codeTemplate": "void tukarNilai(int___BLANK_0___ x, int___BLANK_1___ y) {\n    int temp = x;\n    x = y;\n    y = temp;\n}",
      "answers": [
        "&",
        "&"
      ],
      "placeholder": "simbol",
      "hint": "Gunakan simbol ampersand & di sebelah tipe data parameter untuk menerima secara reference.",
      "solution": "Simbol & pada deklarasi parameter (int& x, int& y) menjadikan parameter sebagai referensi langsung ke variabel asli pemanggil sehingga nilai keduanya berhasil tertukar permanen."
    },
    "note": {
      "title": "Standar Industri",
      "text": "Dalam C++ profesional, objek non-primitif (seperti string dan class) hampir selalu dikirimkan menggunakan 'const Tipe&' untuk performa optimal berkecepatan tinggi."
    },
    "quiz": {
      "question": "Apa tujuan utama menggunakan 'const tipe&' pada parameter fungsi untuk objek data besar?",
      "options": [
        "Agar objek dapat dihapus otomatis dari memori",
        "Menghindari duplikasi memori (sangat cepat) sekaligus menjamin data tidak diubah di dalam fungsi",
        "Memaksa fungsi mengembalikan nilai berupa string",
        "Mengizinkan fungsi mengubah nilai variabel asli tanpa izin"
      ],
      "correctIndex": 1,
      "explanation": "const tipe& menggabungkan kecepatan pass by reference (tanpa alokasi copy baru) dengan keamanan immutability (data tidak dapat diubah)."
    }
  },
  {
    "id": "function-overloading",
    "category": "Fungsi (Functions)",
    "title": "Overloading Fungsi",
    "subtitle": "Memberikan nama fungsi yang sama untuk operasi dengan tipe atau jumlah parameter berbeda.",
    "sections": [
      {
        "heading": "Konsep Polimorfisme Waktu Kompilasi",
        "content": "<strong>Function Overloading</strong> adalah fitur C++ di mana dua atau lebih fungsi dapat memiliki <strong>nama yang sama persis</strong>, asalkan daftar parameternya berbeda (baik berbeda tipe data parameternya, maupun berbeda jumlah parameternya)."
      },
      {
        "heading": "Bagaimana Compiler Memilih Fungsi?",
        "content": "Saat program dikompilasi, compiler C++ melakukan teknik yang disebut <em>Name Mangling</em>. Compiler secara otomatis mencocokkan tipe dan jumlah argumen yang dikirim pemanggil dengan tanda tangan fungsi (<em>signature</em>) yang paling tepat."
      },
      {
        "heading": "Aturan Penting Overloading",
        "content": "Dua fungsi <strong>TIDAK DAPAT</strong> dioverload HANYA berdasarkan perbedaan tipe nilai kembalian (<em>return type</em>)-nya saja. Perbedaan wajib terletak pada tipe atau jumlah parameter masukan."
      }
    ],
    "syntaxGuide": {
      "format": "// Overloading berdasarkan tipe parameter:\nint jumlah(int a, int b);\ndouble jumlah(double a, double b);\n\n// Overloading berdasarkan jumlah parameter:\nint jumlah(int a, int b, int c);",
      "breakdown": [
        {
          "token": "namaFungsi yang sama",
          "role": "Overloaded Identifier",
          "detail": "Nama fungsi seragam untuk operasi sejenis."
        },
        {
          "token": "(daftar_parameter)",
          "role": "Function Signature",
          "detail": "Kombinasi unik dari tipe dan kuantitas parameter yang membedakan satu fungsi dari fungsi lainnya."
        }
      ],
      "rules": [
        "Fungsi yang dioverload wajib memiliki perbedaan pada tipe parameter atau jumlah parameternya.",
        "Perbedaan hanya pada tipe kembalian (return type) saja adalah ILEGAL dan memicu eror kompilasi."
      ],
      "commonErrors": [
        {
          "mistake": "Hanya membedakan return type tanpa mengubah parameter",
          "gccError": "error: ambiguating new declaration of 'double hitung()'",
          "fix": "Ubah tipe atau jumlah parameter masukan fungsi agar compiler dapat membedakannya."
        },
        {
          "mistake": "Pemanggilan ambigu di mana compiler bingung memilih overloading",
          "gccError": "error: call of overloaded 'tambah(int, double)' is ambiguous",
          "fix": "Lakukan type-casting eksplisit pada argumen pemanggil: <code>tambah(int(5), int(4.5))</code>."
        }
      ]
    },
    "example": {
      "title": "Contoh Function Overloading Sederhana",
      "code": "#include <iostream>\nusing namespace std;\n\n// Versi 1: Menjumlahkan dua integer\nint tambah(int a, int b) {\n    return a + b;\n}\n\n// Versi 2: Menjumlahkan dua bilangan pecahan desimal\ndouble tambah(double a, double b) {\n    return a + b;\n}\n\n// Versi 3: Menjumlahkan tiga integer\nint tambah(int a, int b, int c) {\n    return a + b + c;\n}\n\nint main() {\n    cout << \"tambah(5, 10)       = \" << tambah(5, 10) << endl;\n    cout << \"tambah(4.5, 3.2)    = \" << tambah(4.5, 3.2) << endl;\n    cout << \"tambah(1, 2, 3)     = \" << tambah(1, 2, 3) << endl;\n\n    return 0;\n}",
      "output": "tambah(5, 10)       = 15\ntambah(4.5, 3.2)    = 7.7\ntambah(1, 2, 3)     = 6"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi tipe data kembalian dan tipe parameter kedua untuk fungsi overloading penjumlahan bilangan desimal (double):",
      "codeTemplate": "int gabung(int a, int b) {\n    return a + b;\n}\n\n___BLANK_0___ gabung(double a, ___BLANK_1___ b) {\n    return a + b;\n}",
      "answers": [
        "double",
        "double"
      ],
      "placeholder": "tipe_data",
      "hint": "Fungsi kedua bekerja dengan tipe pecahan presisi ganda double.",
      "solution": "Fungsi overloading kedua menggunakan tipe data double baik pada return type maupun parameternya untuk menangani penjumlahan bilangan pecahan."
    },
    "note": {
      "title": "Manfaat Desain Kode",
      "text": "Overloading membuat API kode Anda ramah pengguna (programmer-friendly) karena pengguna tidak perlu mengingat banyak nama berbeda seperti tambahInt(), tambahDouble(), dan tambahTigaInt()."
    },
    "quiz": {
      "question": "Apakah dua fungsi C++ yang memiliki parameter sama persis tetapi hanya berbeda return type (misal: 'int uji(int x)' dan 'double uji(int x)') diperbolehkan?",
      "options": [
        "Ya, diperbolehkan dan sangat dianjurkan",
        "Tidak, compiler akan mengeluarkan pesan error 'ambiguating new declaration'",
        "Hanya diperbolehkan di sistem operasi Linux",
        "Hanya diperbolehkan jika fungsinya bersifat static"
      ],
      "correctIndex": 1,
      "explanation": "C++ tidak mengizinkan overloading fungsi hanya berdasarkan tipe kembalian (return type) karena compiler tidak dapat menentukan fungsi mana yang dipanggil pada baris pemanggilan sederhana seperti 'uji(10);'."
    }
  },
  {
    "id": "recursion",
    "category": "Fungsi (Functions)",
    "title": "Rekursi (Recursion)",
    "subtitle": "Teknik pemanggilan fungsi terhadap dirinya sendiri untuk memecahkan masalah bertahap.",
    "sections": [
      {
        "heading": "Pengertian Fungsi Rekursif",
        "content": "<strong>Rekursi</strong> adalah teknik pemrograman di mana suatu fungsi memanggil dirinya sendiri secara langsung atau tidak langsung untuk menyelesaikan sub-masalah yang lebih kecil hingga mencapai kondisi paling mendasar."
      },
      {
        "heading": "Dua Komponen Wajib Fungsi Rekursif",
        "content": "Setiap fungsi rekursif yang benar wajib memiliki:\n<ol>\n  <li><strong>Base Case (Kondisi Penghenti):</strong> Kondisi batas di mana fungsi TIDAK LAGI memanggil dirinya sendiri, melainkan langsung mengembalikan nilai dasar. Tanpa base case, fungsi akan memanggil dirinya tanpa henti hingga kehabisan memori tumpukan.</li>\n  <li><strong>Recursive Call (Langkah Rekursif):</strong> Pemanggilan diri sendiri dengan argumen yang nilainya semakin mengecil dan bergerak mendekati base case.</li>\n</ol>"
      },
      {
        "heading": "Call Stack dan Bahaya Stack Overflow",
        "content": "Setiap kali fungsi dipanggil, sistem komputer mengalokasikan frame memori di area <em>Call Stack</em>. Jika rekursi terlalu dalam tanpa penghenti, area stack ini akan penuh dan memicu galat kritis <strong>Stack Overflow</strong> yang menyebabkan aplikasi crash seketika."
      }
    ],
    "syntaxGuide": {
      "format": "tipe_hasil rekursif(parameter) {\n    // 1. Base Case (Kondisi Berhenti):\n    if (kondisi_berhenti) {\n        return nilai_dasar;\n    }\n    // 2. Recursive Step (Mengecilkan masalah):\n    return operasi(rekursif(parameter_mengecil));\n}",
      "breakdown": [
        {
          "token": "Base Case",
          "role": "Termination Guard",
          "detail": "Kondisi batas penghenti rantai rekursi."
        },
        {
          "token": "Recursive Step",
          "role": "Self Invocation",
          "detail": "Pemanggilan kembali fungsi dengan argumen yang semakin tereduksi mendekati kondisi batas."
        }
      ],
      "rules": [
        "Fungsi rekursif WAJIB memiliki minimal satu base case yang dapat dicapai.",
        "Parameter pada setiap pemanggilan rekursif harus bergerak mendekati base case.",
        "Hindari rekursi terlalu dalam untuk menghindari habisnya memori call stack."
      ],
      "commonErrors": [
        {
          "mistake": "Lupa menyertakan Base Case pada fungsi rekursif",
          "gccError": "Stack Overflow (Segmentation fault: core dumped)",
          "fix": "Sediakan kondisi <code>if (n &lt;= 1) return nilai;</code> di awal fungsi rekursif."
        }
      ]
    },
    "example": {
      "title": "Contoh Fungsi Rekursif Menghitung Faktorial dan Fibonacci",
      "code": "#include <iostream>\nusing namespace std;\n\n// Fungsi rekursif menghitung faktorial (n!)\n// Contoh: 5! = 5 * 4 * 3 * 2 * 1 = 120\nint faktorial(int n) {\n    // Base Case\n    if (n <= 1) {\n        return 1;\n    }\n    // Recursive Step\n    return n * faktorial(n - 1);\n}\n\n// Fungsi rekursif menghitung deret Fibonacci ke-n\nint fibonacci(int n) {\n    if (n <= 0) return 0;\n    if (n == 1) return 1;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nint main() {\n    int angka = 5;\n    cout << \"Faktorial dari \" << angka << \"! = \" << faktorial(angka) << endl;\n    cout << \"Fibonacci ke-7 = \" << fibonacci(7) << endl;\n\n    return 0;\n}",
      "output": "Faktorial dari 5! = 120\nFibonacci ke-7 = 13"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi kata kunci return pada base case dan pemanggilan rekursif pada fungsi faktorial berikut:",
      "codeTemplate": "int hitungFaktorial(int n) {\n    if (n <= 1) {\n        ___BLANK_0___ 1; // Base case\n    }\n    return n * ___BLANK_1___(n - 1); // Pemanggilan rekursif\n}",
      "answers": [
        "return",
        "hitungFaktorial"
      ],
      "placeholder": "kata/nama_fungsi",
      "hint": "Base case mengembalikan nilai 1 dengan kata return, dan langkah rekursif memanggil kembali fungsi hitungFaktorial.",
      "solution": "Base case mengembalikan nilai 1 menggunakan pernyataan return 1, dan langkah rekursif memanggil kembali hitungFaktorial(n - 1) hingga mencapai kondisi berhenti."
    },
    "note": {
      "title": "Rekursi vs Iterasi",
      "text": "Meskipun rekursi seringkali menghasilkan kode yang elegan dan ringkas secara matematis, perulangan biasa (iterasi for/while) umumnya lebih cepat dan lebih hemat memori karena tidak membebani alokasi call stack sistem."
    },
    "quiz": {
      "question": "Apa konsekuensi fatal jika fungsi rekursif TIDAK memiliki Base Case (kondisi penghenti)?",
      "options": [
        "Fungsi akan mengembalikan nilai null",
        "Terjadi Stack Overflow dan program crash seketika karena kehabisan memori call stack",
        "Compiler menolak proses kompilasi kode",
        "Program otomatis mengubah dirinya menjadi for loop"
      ],
      "correctIndex": 1,
      "explanation": "Tanpa base case, fungsi akan memanggil dirinya terus-menerus hingga tumpukan memori (call stack) penuh melampaui batas sistem, memicu Stack Overflow (Segmentation Fault)."
    }
  },
  {
    "id": "video-gallery",
    "category": "Media Pembelajaran",
    "title": "Galeri Video Pembelajaran",
    "subtitle": "Koleksi lengkap 6 video tutorial pembelajaran C++ yang disematkan langsung di dalam website buatan Muhammad Anhar Solihin.",
    "sections": [
      {
        "heading": "Pusat Media Pembelajaran Interaktif",
        "content": "Halaman ini merangkum seluruh video materi pembelajaran C++ dari dasar hingga tingkat fungsi. Seluruh video dapat diputar langsung di dalam halaman ini tanpa perlu berpindah tab atau meninggalkan website.<br><br>\nVideo materi ini disusun oleh <strong>Muhammad Anhar Solihin</strong> untuk melengkapi penjelasan tertulis dan latihan interaktif yang telah Anda pelajari."
      }
    ],
    "videos": [
      {
        "title": "1. Video Tutorial Percabangan (Branching / Conditional Statements)",
        "youtubeId": "t0QmgEFWWTg",
        "description": "Membahas konsep dan implementasi logika percabangan if, else if, else, operator ternary, dan switch case."
      },
      {
        "title": "2. Video Tutorial Perulangan (Looping / Iteration)",
        "youtubeId": "fL8-RZ8Lt60",
        "description": "Membahas tuntas konsep perulangan while, do-while, for loop, serta pencegahan infinite loop."
      },
      {
        "title": "3. Video Tutorial Fungsi (Functions)",
        "youtubeId": "uUTJ53sktck",
        "description": "Membahas struktur fungsi, deklarasi prototipe, parameter masukan, dan pengembalian nilai (return)."
      },
      {
        "title": "4. Video Tutorial Array (Larik Data)",
        "youtubeId": "U6ailcItsmQ",
        "description": "Membahas alokasi memori berurutan, indeks berbasis nol, serta array multi-dimensi."
      },
      {
        "title": "5. Video Tutorial Reference",
        "youtubeId": "k7gaSaPUvpA",
        "description": "Membahas konsep reference sebagai alias variabel dan pemanfaatannya pada Pass by Reference."
      },
      {
        "title": "6. Video Tutorial Pointer",
        "youtubeId": "VPzmwIIKKRQ",
        "description": "Membahas memori RAM, operator address-of (&), dan operator dereference (*)."
      }
    ],
    "syntaxGuide": {
      "format": "// Rangkuman Sintaks Inti C++:\n#include <iostream>\nusing namespace std;\n\nvoid proses(int& ref, int* ptr) {\n    ref += *ptr;\n}\n\nint main() {\n    int a = 10, b = 20;\n    proses(a, &b);\n    cout << \"Hasil: \" << a << endl;\n    return 0;\n}",
      "breakdown": [
        {
          "token": "int& ref",
          "role": "Pass by Reference",
          "detail": "Menerima variabel asli secara efisien tanpa duplikasi memori."
        },
        {
          "token": "int* ptr",
          "role": "Pointer Argument",
          "detail": "Menerima alamat memori variabel penunjuk."
        },
        {
          "token": "&b",
          "role": "Address Passing",
          "detail": "Mengirimkan alamat memori variabel b ke pointer penerima."
        }
      ],
      "rules": [
        "Seluruh kode sumber C++ wajib memiliki fungsi main() sebagai titik awal eksekusi.",
        "Setiap kurung kurawal buka { harus ditutup dengan kurung kurawal tutup }.",
        "Setiap baris instruksi diakhiri tanda titik koma (;)."
      ],
      "commonErrors": [
        {
          "mistake": "Mencampur aduk sintaks C++ dengan bahasa lain",
          "gccError": "error: expected primary-expression before ...",
          "fix": "Gunakan panduan sintaks baku C++ yang telah dirangkum di setiap modul website ini."
        }
      ]
    },
    "example": {
      "title": "Rangkuman Program Terintegrasi",
      "code": "#include <iostream>\nusing namespace std;\n\n// Rangkuman sintaks fungsi, perulangan, percabangan, dan array\nvoid tampilkanHasil(int arr[], int ukuran) {\n    cout << \"Daftar Nilai Siswa: \";\n    for (int i = 0; i < ukuran; i++) {\n        cout << arr[i] << \" \";\n    }\n    cout << endl;\n}\n\nint main() {\n    int dataNilai[3] = {80, 92, 85};\n    tampilkanHasil(dataNilai, 3);\n    return 0;\n}",
      "output": "Daftar Nilai Siswa: 80 92 85 "
    },
    "syntaxExercise": {
      "instruction": "Lengkapi penutup kurung dan titik koma pada pemanggilan fungsi cetak berikut:",
      "codeTemplate": "tampilkanHasil(dataNilai, 3___BLANK_0______BLANK_1___",
      "answers": [
        ")",
        ";"
      ],
      "placeholder": "simbol",
      "hint": "Tutup kurung parameter dengan ')' dan akhiri pernyataan instruksi dengan titik koma ';'.",
      "solution": "Setiap pemanggilan fungsi ditutup dengan kurung tutup ')' dan wajib diakhiri dengan tanda titik koma (;)."
    },
    "note": {
      "title": "Informasi Akses",
      "text": "Jika browser Anda membatasi pemutaran iframe karena protokol berkas lokal (file:///), Anda dapat membuka melalui Apache XAMPP (http://localhost/c++/) atau mengklik tombol 'Buka / Tonton di YouTube' di bawah setiap video."
    },
    "quiz": {
      "question": "Berapa jumlah total materi video tutorial yang tersedia di galeri media pembelajaran ini?",
      "options": [
        "3 video",
        "5 video",
        "6 video",
        "10 video"
      ],
      "correctIndex": 2,
      "explanation": "Terdapat 6 video materi tutorial C++ lengkap yang mencakup Percabangan, Looping, Function, Array, Reference, dan Pointer."
    }
  },
  {
    "id": "quiz-comprehensive",
    "category": "Evaluasi & Latihan",
    "title": "Evaluasi Akhir & Kuis Menyeluruh",
    "subtitle": "Uji pemahaman komprehensif Anda terhadap seluruh materi pemrograman C++ dari dasar hingga function.",
    "sections": [
      {
        "heading": "Uji Kompetensi Pemrograman C++",
        "content": "Selamat! Anda telah mempelajari seluruh kurikulum pemrograman C++ dari dasar pengenalan, sintaks, variabel, operator, percabangan, perulangan, array, pointer, reference, hingga fungsi. Kerjakan latihan evaluasi akhir di bawah ini untuk menguji kemahiran Anda."
      }
    ],
    "syntaxGuide": {
      "format": "// Format Pemrograman Modular Standar Industri:\n#include <iostream>\nusing namespace std;\n\n// 1. Prototype\nint kuadrat(int x);\n\n// 2. Main\nint main() {\n    int n = 5;\n    cout << n << \" kuadrat = \" << kuadrat(n) << endl;\n    return 0;\n}\n\n// 3. Definisi\nint kuadrat(int x) {\n    return x * x;\n}",
      "breakdown": [
        {
          "token": "Prototipe",
          "role": "Interface Declaration",
          "detail": "Mendeklarasikan antarmuka fungsi di awal file."
        },
        {
          "token": "main()",
          "role": "Driver Code",
          "detail": "Mengorkestrasi alur logika dan pemanggilan fungsi."
        },
        {
          "token": "Definisi",
          "role": "Implementation",
          "detail": "Memuat logika komputasi nyata."
        }
      ],
      "rules": [
        "Tulis kode yang modular, beri nama variabel deskriptif, dan jaga konsistensi indentasi.",
        "Selalu periksa batas array dan inisialisasi pointer sebelum penggunaan."
      ],
      "commonErrors": [
        {
          "mistake": "Mengabaikan warning compiler GCC saat kompilasi",
          "gccError": "warning: unused variable / warning: comparison between signed and unsigned",
          "fix": "Biasakan menyalakan flag <code>-Wall</code> dan bersihkan seluruh warning hingga kode terbebas dari peringatan."
        }
      ]
    },
    "example": {
      "title": "Contoh Program C++ Lengkap Berstruktur Standar",
      "code": "#include <iostream>\nusing namespace std;\n\nint hitungTotal(const int arr[], int ukuran) {\n    int total = 0;\n    for (int i = 0; i < ukuran; i++) {\n        total += arr[i];\n    }\n    return total;\n}\n\nint main() {\n    int data[4] = {10, 25, 15, 50};\n    int hasil = hitungTotal(data, 4);\n    \n    cout << \"Total Akumulasi: \" << hasil << endl;\n    return 0;\n}",
      "output": "Total Akumulasi: 100"
    },
    "syntaxExercise": {
      "instruction": "Lengkapi kata kunci return dan fungsi utama program C++ berikut:",
      "codeTemplate": "int main() {\n    cout << \"Selamat Anda telah menyelesaikan materi C++!\" << endl;\n    ___BLANK_0___ ___BLANK_1___;\n}",
      "answers": [
        "return",
        "0"
      ],
      "placeholder": "kata/angka",
      "hint": "Tutup fungsi main dengan return kode status 0.",
      "solution": "Fungsi int main() ditutup dengan instruksi return 0; untuk melaporkan ke sistem operasi bahwa seluruh proses berjalan dengan sukses."
    },
    "note": {
      "title": "Sertifikasi Belajar Mandiri",
      "text": "Setelah menyelesaikan materi ini, Anda siap melanjutkan ke topik C++ tingkat lanjut seperti Pemrograman Berorientasi Objek (Class, Object, Inheritance, Polymorphism) dan Standard Template Library (STL: vector, map, algorithm)."
    },
    "quiz": {
      "question": "Apakah konsep yang memungkinkan dua fungsi memiliki nama yang sama dengan tipe atau jumlah parameter berbeda?",
      "options": [
        "Function Overriding",
        "Function Overloading",
        "Function Recursion",
        "Inline Function"
      ],
      "correctIndex": 1,
      "explanation": "Function Overloading adalah kemampuan dalam C++ untuk mendefinisikan beberapa fungsi dengan nama yang sama persis namun berbeda tanda tangan parameternya."
    }
  }
];
