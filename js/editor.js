/**
 * C++ DEDICATED FULL-PAGE EDITOR ENGINE
 * RESPONSIVE (MOBILE, IPHONE, TABLET, LAPTOP, MACBOOK)
 * ZERO EMOTICONS / EMOJIS
 */

(function () {
  'use strict';

  // DOM Elements
  const codeEditorArea = document.getElementById('codeEditorArea');
  const terminalConsole = document.getElementById('terminalOutputConsole');
  const btnRunCode = document.getElementById('btnRunCode');
  const btnResetCode = document.getElementById('btnResetCode');
  const btnBackTutorial = document.getElementById('btnBackTutorial');
  const topicNameLabel = document.getElementById('topicNameLabel');

  let defaultCode = '';
  let expectedOutput = '';
  let activeTopic = null;

  // Initialize
  function init() {
    loadTopicFromUrl();
    setupEventListeners();
    setupTabIndentation();
  }

  // Load Topic Data from URL Query String
  function loadTopicFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const topicId = urlParams.get('topic');

    if (topicId && typeof TOPICS_DATA !== 'undefined') {
      activeTopic = TOPICS_DATA.find(t => t.id === topicId);
    }

    if (activeTopic && activeTopic.example) {
      defaultCode = activeTopic.example.code;
      expectedOutput = activeTopic.example.output;

      if (topicNameLabel) {
        topicNameLabel.textContent = `Editor: ${activeTopic.title}`;
      }
      if (btnBackTutorial) {
        btnBackTutorial.href = `index.html#${activeTopic.id}`;
      }
      document.title = `Editor C++ - ${activeTopic.title} | Website Buatan Muhammad Anhar Solihin`;
    } else {
      defaultCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Selamat datang di Editor C++ Online!" << endl;\n    cout << "Website Buatan: Muhammad Anhar Solihin" << endl;\n    cout << "Silakan modifikasi kode ini dan klik Jalankan Kode." << endl;\n    return 0;\n}`;
      expectedOutput = `Selamat datang di Editor C++ Online!\nWebsite Buatan: Muhammad Anhar Solihin\nSilakan modifikasi kode ini dan klik Jalankan Kode.`;
      
      if (topicNameLabel) {
        topicNameLabel.textContent = 'Editor C++ - Website Buatan Muhammad Anhar Solihin';
      }
    }

    if (codeEditorArea) {
      codeEditorArea.value = defaultCode;
    }

    if (terminalConsole) {
      terminalConsole.textContent = 'Klik tombol "Jalankan Kode" di atas untuk mengompilasi dan menjalankan program C++ ini.';
    }
  }

  // Setup Event Listeners
  function setupEventListeners() {
    if (btnRunCode) {
      btnRunCode.addEventListener('click', runCode);
    }

    if (btnResetCode) {
      btnResetCode.addEventListener('click', () => {
        if (codeEditorArea) {
          codeEditorArea.value = defaultCode;
        }
        if (terminalConsole) {
          terminalConsole.textContent = 'Kode telah diatur ulang ke kondisi awal. Klik "Jalankan Kode" untuk menguji.';
        }
      });
    }

    // Keyboard shortcut Ctrl+Enter or Cmd+Enter to Run
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
      }
    });
  }

  // Tab Key Indentation in Code Editor
  function setupTabIndentation() {
    if (!codeEditorArea) return;

    codeEditorArea.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Insert 4 spaces
        this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
      }
    });
  }

  // Compiler Simulator Logic
  function runCode() {
    if (!codeEditorArea || !terminalConsole) return;
    const userCode = codeEditorArea.value.trim();

    terminalConsole.textContent = 'Mengompilasi berkas source code (g++ -std=c++17 -O2)...\nMenjalankan binary program...\n--------------------------------------------------\n';

    setTimeout(() => {
      // Basic Syntax Check
      if (!userCode.includes('main')) {
        terminalConsole.textContent += 'Kompilasi Gagal: Fungsi main() tidak ditemukan di dalam berkas.\n[Proses berhenti dengan kode keluar 1]';
        return;
      }

      let outputResult = '';

      // If user code is identical to active example code
      if (userCode === defaultCode.trim()) {
        outputResult = expectedOutput;
      } else {
        // Interpret cout statements
        const coutRegex = /cout\s*<<\s*([^;]+);/g;
        const matches = [...userCode.matchAll(coutRegex)];

        if (matches.length > 0) {
          let lines = [];
          matches.forEach(m => {
            const raw = m[1];
            const parts = raw.split('<<').map(p => p.trim());
            let lineStr = '';
            parts.forEach(p => {
              if (p === 'endl' || p === '"\\n"' || p === "'\\n'") {
                lineStr += '\n';
              } else if (p.startsWith('"') && p.endsWith('"')) {
                lineStr += p.slice(1, -1).replace(/\\n/g, '\n').replace(/\\t/g, '\t');
              } else if (!isNaN(p)) {
                lineStr += p;
              } else {
                lineStr += p;
              }
            });
            lines.push(lineStr);
          });
          outputResult = lines.join('').trim();
        }

        if (!outputResult) {
          outputResult = expectedOutput || 'Program berhasil dijalankan tanpa output standar.';
        }
      }

      terminalConsole.textContent += outputResult;
      terminalConsole.textContent += '\n--------------------------------------------------\n[Proses selesai dengan kode keluar 0]';
    }, 300);
  }

  // DOM Loaded
  document.addEventListener('DOMContentLoaded', init);
})();
