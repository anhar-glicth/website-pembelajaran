/**
 * APLIKASI WEB PEMBELAJARAN C++ - W3SCHOOLS STYLE
 * WEBSITE BUATAN MUHAMMAD ANHAR SOLIHIN
 * BERSIH, CEPAT, TANPA EMOTICON
 * RESPENSIF: HANDPHONE, IPHONE, TABLET, LAPTOP, MACBOOK
 */

(function () {
  'use strict';

  // State Management
  let currentTopicIndex = 0;
  let activeSearchTerm = '';

  // DOM Elements Cache
  const sidebarContent = document.getElementById('sidebarContent');
  const sidebarSearch = document.getElementById('sidebarSearch');
  const mainSearch = document.getElementById('mainSearch');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const contentContainer = document.getElementById('contentContainer');
  const subNavTrack = document.getElementById('subNavTrack');

  // Helper: Escape HTML
  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Single-pass C++ Syntax Highlighter
  function highlightCpp(code) {
    if (!code) return '';

    const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(#[a-zA-Z_]+(?:<[^>\n]+>|"[^"\n]+"|[^\n]*))|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(\b\d+(?:\.\d+)?\b)|(\b[a-zA-Z_]\w*\b)|(<<|>>|<=|>=|==|!=|\+\+|--|&&|\|\||[+\-*\/%=<>!&|])/g;

    const keywords = new Set([
      'int', 'void', 'double', 'float', 'char', 'string', 'bool', 'return',
      'if', 'else', 'switch', 'case', 'break', 'default', 'while', 'do',
      'for', 'continue', 'const', 'constexpr', 'long', 'sizeof', 'new', 'delete',
      'namespace', 'using', 'true', 'false'
    ]);

    const stdFns = new Set([
      'main', 'cout', 'cin', 'endl', 'getline', 'max', 'min', 'sqrt', 'pow',
      'round', 'ceil', 'floor', 'abs', 'length', 'size', 'vector', 'std',
      'tukarNilai', 'tampilkanSambutan', 'sapaPengguna', 'cetakProfil',
      'hitungLuasPersegi', 'apakahGenap', 'tambah', 'faktorial', 'deretJumlah', 'tambahData', 'cetakInfo'
    ]);

    return code.replace(tokenRegex, (match, comment, directive, str, ch, num, word, op) => {
      if (comment) {
        return `<span class="tok-com">${escapeHtml(comment)}</span>`;
      }
      if (directive) {
        return `<span class="tok-dir">${escapeHtml(directive)}</span>`;
      }
      if (str) {
        return `<span class="tok-str">${escapeHtml(str)}</span>`;
      }
      if (ch) {
        return `<span class="tok-str">${escapeHtml(ch)}</span>`;
      }
      if (num) {
        return `<span class="tok-num">${num}</span>`;
      }
      if (word) {
        if (keywords.has(word)) {
          return `<span class="tok-kw">${word}</span>`;
        }
        if (stdFns.has(word)) {
          return `<span class="tok-fn">${word}</span>`;
        }
        return escapeHtml(word);
      }
      if (op) {
        return `<span class="tok-op">${escapeHtml(op)}</span>`;
      }
      return escapeHtml(match);
    });
  }

  // Initialize Application
  function init() {
    buildSubNavCategories();
    renderSidebar();
    
    // Check URL Hash or default to first topic
    const hash = window.location.hash.replace('#', '');
    const foundIdx = TOPICS_DATA.findIndex(t => t.id === hash);
    if (foundIdx !== -1) {
      currentTopicIndex = foundIdx;
    }
    
    loadTopic(currentTopicIndex);
    setupEventListeners();
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Mobile Drawer Toggle
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleSidebar);
    }
    if (sidebarBackdrop) {
      sidebarBackdrop.addEventListener('click', closeSidebar);
    }

    // Search Listeners
    if (sidebarSearch) {
      sidebarSearch.addEventListener('input', (e) => {
        activeSearchTerm = e.target.value.toLowerCase().trim();
        renderSidebar();
      });
    }

    if (mainSearch) {
      mainSearch.addEventListener('input', (e) => {
        activeSearchTerm = e.target.value.toLowerCase().trim();
        if (sidebarSearch) sidebarSearch.value = e.target.value;
        renderSidebar();
        // If on mobile, open sidebar so user can see results
        if (window.innerWidth <= 768 && activeSearchTerm.length > 0) {
          openSidebar();
        }
      });
    }

    // Hash Change
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      const foundIdx = TOPICS_DATA.findIndex(t => t.id === hash);
      if (foundIdx !== -1 && foundIdx !== currentTopicIndex) {
        currentTopicIndex = foundIdx;
        loadTopic(currentTopicIndex);
      }
    });
  }

  // Build Top Category Bar
  function buildSubNavCategories() {
    if (!subNavTrack) return;
    const categories = [];
    TOPICS_DATA.forEach(t => {
      if (!categories.includes(t.category)) {
        categories.push(t.category);
      }
    });

    subNavTrack.innerHTML = '';
    categories.forEach((cat, index) => {
      const btn = document.createElement('a');
      btn.className = `sub-nav-item ${index === 0 ? 'active' : ''}`;
      btn.textContent = cat;
      btn.href = 'javascript:void(0)';
      btn.addEventListener('click', () => {
        const topicIndex = TOPICS_DATA.findIndex(t => t.category === cat);
        if (topicIndex !== -1) {
          loadTopic(topicIndex);
        }
      });
      subNavTrack.appendChild(btn);
    });
  }

  function updateSubNavActive(category) {
    if (!subNavTrack) return;
    const items = subNavTrack.querySelectorAll('.sub-nav-item');
    items.forEach(item => {
      if (item.textContent === category) {
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Sidebar Render
  function renderSidebar() {
    if (!sidebarContent) return;
    sidebarContent.innerHTML = '';

    const categoriesMap = {};
    TOPICS_DATA.forEach((topic, index) => {
      if (activeSearchTerm) {
        const matchesTitle = topic.title.toLowerCase().includes(activeSearchTerm);
        const matchesCategory = topic.category.toLowerCase().includes(activeSearchTerm);
        const matchesSubtitle = topic.subtitle.toLowerCase().includes(activeSearchTerm);
        if (!matchesTitle && !matchesCategory && !matchesSubtitle) {
          return;
        }
      }

      if (!categoriesMap[topic.category]) {
        categoriesMap[topic.category] = [];
      }
      categoriesMap[topic.category].push({ topic, index });
    });

    const categoryKeys = Object.keys(categoriesMap);
    if (categoryKeys.length === 0) {
      sidebarContent.innerHTML = '<div style="padding: 16px; color: #94a3b8; font-size: 0.88rem;">Tidak ditemukan materi yang cocok.</div>';
      return;
    }

    categoryKeys.forEach(cat => {
      const groupTitle = document.createElement('div');
      groupTitle.className = 'topic-group-title';
      groupTitle.textContent = cat;
      sidebarContent.appendChild(groupTitle);

      categoriesMap[cat].forEach(item => {
        const link = document.createElement('a');
        link.className = `topic-item ${item.index === currentTopicIndex ? 'active' : ''}`;
        link.textContent = item.topic.title;
        link.href = `#${item.topic.id}`;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          loadTopic(item.index);
          if (window.innerWidth <= 768) {
            closeSidebar();
          }
        });
        sidebarContent.appendChild(link);
      });
    });
  }

  // Load Specific Topic
  function loadTopic(index) {
    if (index < 0 || index >= TOPICS_DATA.length) return;
    currentTopicIndex = index;
    const topic = TOPICS_DATA[index];

    // Update Browser URL Hash
    history.replaceState(null, null, `#${topic.id}`);

    // Update active state in sidebar and subnav
    renderSidebar();
    updateSubNavActive(topic.category);

    // Scroll window smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render HTML Content
    renderTopicContent(topic);
  }

  // Render Main Topic Content
  function renderTopicContent(topic) {
    if (!contentContainer) return;

    let sectionsHtml = '';
    topic.sections.forEach(sec => {
      let secBody = '';
      if (sec.content) {
        secBody += `<p>${sec.content}</p>`;
      }
      if (sec.table) {
        secBody += `
          <div class="table-responsive">
            <table class="tutorial-table">
              <thead>
                <tr>
                  ${sec.table.headers.map(h => `<th>${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${sec.table.rows.map(row => `
                  <tr>
                    ${row.map(cell => `<td>${cell}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      sectionsHtml += `
        <div class="content-section">
          <h2>${sec.heading}</h2>
          ${secBody}
        </div>
      `;
    });

    // Embedded Video(s) Player - Play directly inside the page without leaving
    let videoHtml = '';
    const videoList = [];
    if (topic.video) videoList.push(topic.video);
    if (topic.videos && Array.isArray(topic.videos)) videoList.push(...topic.videos);

    if (videoList.length > 0) {
      const isFileProtocol = window.location.protocol === 'file:';

      videoHtml = videoList.map(vid => `
        <div class="video-card">
          <div class="video-card-header">
            <div class="video-card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              <span>${escapeHtml(vid.title)}</span>
            </div>
            <span class="video-badge">Video Materi</span>
          </div>
          ${vid.description ? `<p class="video-card-desc">${escapeHtml(vid.description)}</p>` : ''}

          ${isFileProtocol ? `
            <div class="video-file-alert">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <div>
                <strong>Pemberitahuan Pemutar Video:</strong>
                <p>Anda sedang membuka website via berkas lokal (<code>file:///</code>). Jika YouTube menampilkan <em>Error 153</em>, silakan buka melalui server lokal (XAMPP Apache: <code>http://localhost/c++/</code> atau klik ganda <code>jalankan_website.bat</code>). Anda juga dapat langsung memutar lewat tombol di bawah.</p>
              </div>
            </div>
          ` : ''}

          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/${escapeHtml(vid.youtubeId)}?rel=0&enablejsapi=1" 
              title="${escapeHtml(vid.title)}" 
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>

          <div class="video-footer-actions">
            <a href="https://www.youtube.com/watch?v=${escapeHtml(vid.youtubeId)}" target="_blank" rel="noopener noreferrer" class="btn-watch-youtube">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Buka / Tonton di YouTube
            </a>
            <span class="video-footer-hint">Tersedia tombol pemutaran langsung jika browser memblokir iframe lokal.</span>
          </div>
        </div>
      `).join('');
    }

    // Deep Syntax Anatomy & Compiler Rules Guide
    let syntaxGuideHtml = '';
    if (topic.syntaxGuide) {
      const sg = topic.syntaxGuide;
      let breakdownTableHtml = '';
      if (sg.breakdown && sg.breakdown.length > 0) {
        breakdownTableHtml = `
          <div class="table-responsive">
            <table class="tutorial-table">
              <thead>
                <tr>
                  <th>Komponen Sintaks</th>
                  <th>Peran / Jenis</th>
                  <th>Keterangan Kompiler GCC</th>
                </tr>
              </thead>
              <tbody>
                ${sg.breakdown.map(item => `
                  <tr>
                    <td><code>${escapeHtml(item.token)}</code></td>
                    <td><strong>${escapeHtml(item.role)}</strong></td>
                    <td>${escapeHtml(item.detail)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      let rulesHtml = '';
      if (sg.rules && sg.rules.length > 0) {
        rulesHtml = `
          <h3 style="font-size: 1.05rem; margin-top: 1.25rem;">Aturan Baku Penulisan Sintaks (Compiler Strict Rules):</h3>
          <ul class="syntax-rules-list">
            ${sg.rules.map(r => `<li>${r}</li>`).join('')}
          </ul>
        `;
      }

      let errorsHtml = '';
      if (sg.commonErrors && sg.commonErrors.length > 0) {
        errorsHtml = `
          <h3 style="font-size: 1.05rem; margin-top: 1.25rem;">Kesalahan Sintaks Populer & Solusi (GCC Compiler Troubleshooting):</h3>
          <div class="syntax-error-grid">
            ${sg.commonErrors.map(err => `
              <div class="syntax-error-item">
                <div class="syntax-error-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  ${escapeHtml(err.mistake)}
                </div>
                <div class="syntax-error-snippet"><code>${escapeHtml(err.gccError)}</code></div>
                <div class="syntax-error-fix"><strong>Solusi Perbaikan:</strong> ${err.fix}</div>
              </div>
            `).join('')}
          </div>
        `;
      }

      syntaxGuideHtml = `
        <div class="syntax-guide-box">
          <div class="syntax-guide-header">
            <div class="syntax-guide-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Bedah Anatomi Sintaks C++</span>
            </div>
            <span class="syntax-guide-badge">Penjelasan Tertulis Mendalam</span>
          </div>

          ${sg.format ? `
            <div class="syntax-formula-card">
              <span class="syntax-formula-label">Struktur Rumus Sintaks Baku:</span>
              <code>${escapeHtml(sg.format)}</code>
            </div>
          ` : ''}

          ${breakdownTableHtml}
          ${rulesHtml}
          ${errorsHtml}
        </div>
      `;
    }

    // Example Box (W3Schools Style) - Opens editor in a dedicated new page
    let exampleHtml = '';
    if (topic.example) {
      exampleHtml = `
        <div class="example-box">
          <div class="example-box-header">
            <div class="example-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <span>${topic.example.title}</span>
            </div>
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; background: #e2e8f0; color: #475569; padding: 2px 8px; border-radius: 4px; font-weight: 700;">C++ Standard</span>
          </div>
          <div class="code-wrapper">
            <code>${highlightCpp(topic.example.code)}</code>
          </div>
          <div class="example-box-footer">
            <a href="editor.html?topic=${topic.id}" target="_blank" class="btn-try" id="btnTryCode" style="text-decoration: none;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Coba Sendiri (Halaman Baru)
            </a>
            <button class="btn-copy" id="btnCopyCode">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              Salin Kode
            </button>
          </div>
          <div style="padding: 0 16px 16px 16px; background-color: #ffffff;">
            <div class="output-box">
              <div class="output-title">Hasil Output Program:</div>
              <div class="output-content">${topic.example.output}</div>
            </div>
          </div>
        </div>
      `;
    }

    // Fill-in-the-Blank Syntax Exercise (W3Schools Signature Feature)
    let syntaxExerciseHtml = '';
    if (topic.syntaxExercise) {
      const se = topic.syntaxExercise;
      let blankCounter = 0;
      
      let interactiveCode = escapeHtml(se.codeTemplate);
      interactiveCode = interactiveCode.replace(/___BLANK(?:_(\d+))?___/g, (match, p1) => {
        const idx = p1 !== undefined ? parseInt(p1, 10) : blankCounter++;
        const placeholder = se.placeholder || '...';
        return `<input type="text" class="syntax-blank-input" data-blank-index="${idx}" placeholder="${placeholder}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">`;
      });

      syntaxExerciseHtml = `
        <div class="syntax-drill-box" id="syntaxDrillBox">
          <div class="syntax-drill-header">
            <div class="syntax-drill-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              <span>Latihan Praktik Sintaks C++ (Isi Bagian Kosong)</span>
            </div>
            <span class="syntax-drill-badge">Latihan Interaktif</span>
          </div>
          <div class="syntax-drill-prompt">${escapeHtml(se.instruction)}</div>
          
          <div class="syntax-drill-code-card">
            <pre>${interactiveCode}</pre>
          </div>

          <div class="syntax-drill-actions">
            <button class="btn-drill-check" id="btnCheckDrill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Periksa Jawaban Sintaks
            </button>
            <button class="btn-drill-solution" id="btnShowDrillSolution">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              Kunci Jawaban
            </button>
            <button class="btn-drill-reset" id="btnResetDrill">
              Ulangi Latihan
            </button>
          </div>

          <div class="syntax-drill-feedback" id="drillFeedback"></div>
        </div>
      `;
    }

    // Note Box
    let noteHtml = '';
    if (topic.note) {
      noteHtml = `
        <div class="note-box">
          <div class="note-box-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            ${topic.note.title}
          </div>
          <div class="note-box-body">${topic.note.text}</div>
        </div>
      `;
    }

    // Quiz / Exercise Section
    let quizHtml = '';
    if (topic.quiz) {
      const optionsHtml = topic.quiz.options.map((opt, i) => `
        <label class="quiz-option-label">
          <input type="radio" name="topicQuizOption" value="${i}">
          <span>${opt}</span>
        </label>
      `).join('');

      quizHtml = `
        <div class="exercise-box">
          <div class="exercise-header">
            <div class="exercise-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              Latihan Pemahaman Materi
            </div>
            <span class="exercise-badge">Kuis Pilihan Ganda</span>
          </div>
          <div class="exercise-question">${topic.quiz.question}</div>
          <div class="exercise-options" id="quizOptionsContainer">
            ${optionsHtml}
          </div>
          <div class="exercise-actions">
            <button class="btn-check-quiz" id="btnCheckQuiz">Periksa Jawaban</button>
          </div>
          <div class="quiz-feedback" id="quizFeedback"></div>
        </div>
      `;
    }

    // Navigation Buttons (Prev / Next)
    const prevDisabled = currentTopicIndex === 0;
    const nextDisabled = currentTopicIndex === TOPICS_DATA.length - 1;

    const navButtonsHtml = `
      <div class="page-navigation">
        <button class="page-nav-btn ${prevDisabled ? 'disabled' : 'btn-outline'}" id="btnPrevTopic">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Sebelumnya
        </button>
        <button class="page-nav-btn ${nextDisabled ? 'disabled' : ''}" id="btnNextTopic">
          Selanjutnya
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    `;

    // Combine All
    contentContainer.innerHTML = `
      <div class="breadcrumb">
        <a href="#intro" onclick="window.location.hash='intro'; return false;">Beranda</a>
        <span class="breadcrumb-separator">/</span>
        <span>${topic.category}</span>
        <span class="breadcrumb-separator">/</span>
        <span>${topic.title}</span>
      </div>

      <div class="topic-header">
        <h1 class="topic-main-title">${topic.title}</h1>
        <p class="topic-subtitle">${topic.subtitle}</p>
      </div>

      ${sectionsHtml}
      ${syntaxGuideHtml}
      ${exampleHtml}
      ${videoHtml}
      ${syntaxExerciseHtml}
      ${noteHtml}
      ${quizHtml}
      ${navButtonsHtml}
    `;

    // Attach Event Listeners to New Elements
    attachContentInteractions(topic);
  }

  // Attach Content Specific Interactions
  function attachContentInteractions(topic) {
    // Copy Button
    const btnCopy = document.getElementById('btnCopyCode');
    if (btnCopy && topic.example) {
      btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(topic.example.code).then(() => {
          btnCopy.classList.add('copied');
          btnCopy.innerHTML = `
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Tersalin!
          `;
          setTimeout(() => {
            btnCopy.classList.remove('copied');
            btnCopy.innerHTML = `
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              Salin Kode
            `;
          }, 2000);
        });
      });
    }

    // Syntax Drill Interaction (Fill in the blanks)
    const btnCheckDrill = document.getElementById('btnCheckDrill');
    const btnShowDrillSolution = document.getElementById('btnShowDrillSolution');
    const btnResetDrill = document.getElementById('btnResetDrill');
    const drillFeedback = document.getElementById('drillFeedback');

    if (btnCheckDrill && topic.syntaxExercise && drillFeedback) {
      const se = topic.syntaxExercise;
      const rawAnswers = se.answers || (se.answer ? [se.answer] : []);
      const inputs = document.querySelectorAll('.syntax-blank-input');

      // Enter key triggers check
      inputs.forEach(inp => {
        inp.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            btnCheckDrill.click();
          }
        });
      });

      btnCheckDrill.addEventListener('click', () => {
        let allFilled = true;
        let allCorrect = true;

        inputs.forEach(inp => {
          const idx = parseInt(inp.getAttribute('data-blank-index'), 10);
          const val = inp.value.trim();
          const target = rawAnswers[idx];

          if (!val) {
            allFilled = false;
            inp.classList.remove('input-correct');
            inp.classList.remove('input-wrong');
          } else {
            let isMatch = false;
            if (Array.isArray(target)) {
              isMatch = target.some(ans => ans.trim().toLowerCase() === val.toLowerCase());
            } else if (typeof target === 'string') {
              isMatch = target.trim().toLowerCase() === val.toLowerCase();
            }

            if (isMatch) {
              inp.classList.add('input-correct');
              inp.classList.remove('input-wrong');
            } else {
              inp.classList.add('input-wrong');
              inp.classList.remove('input-correct');
              allCorrect = false;
            }
          }
        });

        if (!allFilled) {
          drillFeedback.className = 'syntax-drill-feedback feedback-error';
          drillFeedback.textContent = 'Peringatan: Harap isi semua bagian kode yang kosong sebelum memeriksa.';
          return;
        }

        if (allCorrect) {
          drillFeedback.className = 'syntax-drill-feedback feedback-success';
          drillFeedback.innerHTML = `<strong>Sintaks Tepat & Benar!</strong> Kode C++ valid dan berhasil diverifikasi. ${se.hint ? escapeHtml(se.hint) : ''}`;
        } else {
          drillFeedback.className = 'syntax-drill-feedback feedback-error';
          drillFeedback.innerHTML = `<strong>Sintaks Belum Tepat.</strong> Periksa kembali kata kunci, tipe data, kurung, atau titik koma Anda. ${se.hint ? '<br><em>Petunjuk: ' + escapeHtml(se.hint) + '</em>' : ''}`;
        }
      });

      if (btnShowDrillSolution) {
        btnShowDrillSolution.addEventListener('click', () => {
          inputs.forEach(inp => {
            const idx = parseInt(inp.getAttribute('data-blank-index'), 10);
            const target = rawAnswers[idx];
            inp.value = Array.isArray(target) ? target[0] : target;
            inp.classList.add('input-correct');
            inp.classList.remove('input-wrong');
          });

          drillFeedback.className = 'syntax-drill-feedback feedback-solution';
          drillFeedback.innerHTML = `<strong>Kunci Jawaban Sintaks C++:</strong> Bagian kosong telah diisi dengan jawaban resmi.<br>${se.solution ? escapeHtml(se.solution) : ''}`;
        });
      }

      if (btnResetDrill) {
        btnResetDrill.addEventListener('click', () => {
          inputs.forEach(inp => {
            inp.value = '';
            inp.classList.remove('input-correct');
            inp.classList.remove('input-wrong');
          });
          drillFeedback.className = 'syntax-drill-feedback';
          drillFeedback.style.display = 'none';
          drillFeedback.textContent = '';
          if (inputs.length > 0) inputs[0].focus();
        });
      }
    }

    // Quiz Check Button
    const btnCheckQuiz = document.getElementById('btnCheckQuiz');
    const quizFeedback = document.getElementById('quizFeedback');
    if (btnCheckQuiz && quizFeedback && topic.quiz) {
      btnCheckQuiz.addEventListener('click', () => {
        const selected = document.querySelector('input[name="topicQuizOption"]:checked');
        if (!selected) {
          quizFeedback.className = 'quiz-feedback incorrect';
          quizFeedback.textContent = 'Peringatan: Silakan pilih salah satu opsi jawaban terlebih dahulu.';
          return;
        }

        const selectedIndex = parseInt(selected.value, 10);
        if (selectedIndex === topic.quiz.correctIndex) {
          quizFeedback.className = 'quiz-feedback correct';
          quizFeedback.innerHTML = `Jawaban Benar! ${topic.quiz.explanation}`;
        } else {
          quizFeedback.className = 'quiz-feedback incorrect';
          quizFeedback.innerHTML = `Jawaban Belum Tepat. Penjelasan: ${topic.quiz.explanation}`;
        }
      });
    }

    // Pagination Buttons
    const btnPrev = document.getElementById('btnPrevTopic');
    const btnNext = document.getElementById('btnNextTopic');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (currentTopicIndex > 0) loadTopic(currentTopicIndex - 1);
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (currentTopicIndex < TOPICS_DATA.length - 1) loadTopic(currentTopicIndex + 1);
      });
    }
  }

  // Sidebar Controls
  function toggleSidebar() {
    sidebar.classList.toggle('open');
    sidebarBackdrop.classList.toggle('active');
  }

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarBackdrop.classList.add('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('active');
  }

  // DOMContentLoaded
  document.addEventListener('DOMContentLoaded', init);
})();
