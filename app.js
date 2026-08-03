
const app = {
    state: {
        mode: 'study', 
        allQ: questions,
        currQ: [],
        currentIndex: 0,
        history: [], 
        answers: {}, 
        bookmarks: JSON.parse(localStorage.getItem('ctdl_bookmarks') || '[]'),
        timer: 0,
        interval: null,
        filter: 'all',
        isSubmitting: false
    },
    
    // Cache DOM Elements for performance
    els: {},

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.initTheme();
        this.initRipple();
    },

    cacheDOM() {
        const get = id => document.getElementById(id);
        this.els = {
            body: document.body,
            setupScreen: get('setup-screen'),
            workspace: get('workspace'),
            resultScreen: get('result-screen'),
            sidebar: get('sidebar'),
            sidebarOverlay: get('sidebar-overlay'),
            qGrid: get('q-grid'),
            inpSearch: get('inp-search'),
            timeGroup: get('time-group'),
            modeRadios: document.querySelectorAll('input[name="mode"]'),
            filterChips: document.querySelectorAll('.chip'),
            
            // Question area
            txtProgress: get('txt-progress'),
            txtPercent: get('txt-percent'),
            barProgress: get('bar-progress'),
            txtTimer: get('txt-timer'),
            badgeChapter: get('badge-chapter'),
            badgeDiff: get('badge-diff'),
            btnBookmark: get('btn-bookmark'),
            qText: get('q-text'),
            qImage: get('q-image'),
            qOptions: get('q-options'),
            feedbackBox: get('feedback-box'),
            skeletonLoader: get('skeleton-loader'),
            questionArea: get('question-area'),
            
            // Modals
            imgModal: get('img-modal'),
            modalImgContent: get('modal-img-content'),
            confirmModal: get('confirm-modal'),
            btnSubmit: get('btn-submit')
        };
    },

    bindEvents() {
        // Theme & Fullscreen
        document.getElementById('btn-theme').addEventListener('click', () => this.toggleTheme());
        document.getElementById('btn-fullscreen').addEventListener('click', () => this.toggleFullscreen());
        document.getElementById('btn-export').addEventListener('click', () => this.exportResults());

        // Sidebar Mobile
        document.getElementById('btn-toggle-sidebar').addEventListener('click', () => this.toggleSidebar(true));
        document.getElementById('btn-close-sidebar').addEventListener('click', () => this.toggleSidebar(false));
        this.els.sidebarOverlay.addEventListener('click', () => this.toggleSidebar(false));

        // Setup form
        this.els.modeRadios.forEach(el => {
            el.addEventListener('change', (e) => {
                this.els.timeGroup.classList.toggle('hidden', e.target.value !== 'exam');
            });
        });

        // Search & Filter (Debounced Search)
        let searchTimeout;
        this.els.inpSearch.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => this.renderSidebar(e.target.value), 300);
        });

        this.els.filterChips.forEach(c => {
            c.addEventListener('click', () => {
                this.els.filterChips.forEach(el => el.classList.remove('active'));
                c.classList.add('active');
                this.state.filter = c.dataset.filter;
                this.renderSidebar(this.els.inpSearch.value);
            });
        });

        // Image Modal
        this.els.qImage.addEventListener('click', (e) => {
            this.els.modalImgContent.innerHTML = e.currentTarget.innerHTML;
            this.openModal('img-modal');
        });
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', (e) => this.closeModal(e.target.closest('.modal').id));
        });

        // Keyboard Shortcuts
        window.addEventListener('keydown', (e) => this.handleShortcuts(e));
    },

    initTheme() {
        if (localStorage.getItem('ctdl_theme') === 'dark') this.els.body.classList.add('dark-mode');
    },

    toggleTheme() {
        const isDark = this.els.body.classList.toggle('dark-mode');
        localStorage.setItem('ctdl_theme', isDark ? 'dark' : 'light');
    },

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => console.log(err));
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    },

    initRipple() {
        document.addEventListener('click', function(e) {
            const target = e.target.closest('.ripple-effect');
            if (!target) return;
            const circle = document.createElement('span');
            const diameter = Math.max(target.clientWidth, target.clientHeight);
            const radius = diameter / 2;
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - target.getBoundingClientRect().left - radius}px`;
            circle.style.top = `${e.clientY - target.getBoundingClientRect().top - radius}px`;
            circle.classList.add('ripple-span');
            target.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
        });
    },

    toggleSidebar(force) {
        const isOpen = force !== undefined ? force : !this.els.sidebar.classList.contains('open');
        this.els.sidebar.classList.toggle('open', isOpen);
        this.els.sidebarOverlay.classList.toggle('open', isOpen);
    },

    openModal(id) { document.getElementById(id).classList.remove('hidden'); },
    closeModal(id) { document.getElementById(id).classList.add('hidden'); },

    startQuiz() {
        const chapter = document.getElementById('sel-chapter').value;
        const diff = document.getElementById('sel-difficulty').value;
        const count = parseInt(document.getElementById('sel-count').value);
        this.state.mode = document.querySelector('input[name="mode"]:checked').value;
        
        let filtered = this.state.allQ;
        if (chapter !== 'all') filtered = filtered.filter(q => q.chapter === chapter);
        if (diff !== 'all') filtered = filtered.filter(q => q.difficulty === diff);
        
        if (filtered.length === 0) return alert("Không tìm thấy câu hỏi phù hợp!");

        // Shuffle
        filtered.sort(() => Math.random() - 0.5);
        this.state.currQ = filtered.slice(0, count);

        this.prepareWorkspace();
    },

    loadReview(type) {
        let list = [];
        if (type === 'bookmark') {
            list = this.state.allQ.filter(q => this.state.bookmarks.includes(q.id));
            if(list.length===0) return alert("Bạn chưa Bookmark câu nào!");
        } else if (type === 'wrong') {
            const hist = JSON.parse(localStorage.getItem('ctdl_wrong_hist') || '[]');
            list = this.state.allQ.filter(q => hist.includes(q.id));
            if(list.length===0) return alert("Tuyệt vời, bạn chưa có câu sai nào trong lịch sử!");
        }
        
        this.state.mode = 'study';
        this.state.currQ = list;
        this.prepareWorkspace();
    },

    prepareWorkspace() {
        this.state.currentIndex = 0;
        this.state.history = [];
        this.state.answers = {};
        this.state.timer = 0;
        this.state.isSubmitting = false;
        clearInterval(this.state.interval);

        this.els.setupScreen.classList.add('hidden');
        this.els.resultScreen.classList.add('hidden');
        this.els.workspace.classList.remove('hidden');
        
        if (this.state.mode === 'exam') {
            this.state.timer = parseInt(document.getElementById('inp-time').value) * 60;
            this.state.interval = setInterval(() => {
                this.state.timer--;
                this.updateTimerUI();
                if (this.state.timer <= 0) this.submitQuiz();
            }, 1000);
        } else {
            this.state.interval = setInterval(() => {
                this.state.timer++;
                this.updateTimerUI();
            }, 1000);
        }
        
        this.renderSidebar();
        this.loadQuestion(0);
    },

    updateTimerUI() {
        const m = Math.floor(Math.abs(this.state.timer) / 60).toString().padStart(2, '0');
        const s = (Math.abs(this.state.timer) % 60).toString().padStart(2, '0');
        this.els.txtTimer.innerText = `${m}:${s}`;
    },

    renderSidebar(search = '') {
        const fragment = document.createDocumentFragment();
        const sLower = search.toLowerCase();
        
        this.state.currQ.forEach((q, idx) => {
            // Apply Filters efficiently
            if (sLower && !q.question.toLowerCase().includes(sLower) && q.id != search) return;
            const ans = this.state.answers[q.id];
            if (this.state.filter === 'bookmark' && !this.state.bookmarks.includes(q.id)) return;
            if (this.state.filter === 'unattempted' && ans) return;
            if (this.state.filter === 'correct' && ans !== q.correctAnswer) return;
            if (this.state.filter === 'wrong' && (!ans || ans === q.correctAnswer)) return;

            const btn = document.createElement('button');
            btn.className = `q-btn ripple-effect ${idx === this.state.currentIndex ? 'active' : ''}`;
            btn.innerText = idx + 1;
            btn.setAttribute('aria-label', `Đi tới câu ${idx + 1}`);
            
            if (this.state.bookmarks.includes(q.id)) btn.classList.add('bookmarked');
            btn.innerHTML += '<i class="fas fa-star bm-icon"></i>';

            if (ans) {
                if (this.state.mode === 'exam') btn.classList.add('selected');
                else btn.classList.add(ans === q.correctAnswer ? 'correct' : 'wrong');
            }

            btn.onclick = () => {
                this.loadQuestion(idx);
                if(window.innerWidth <= 768) this.toggleSidebar(false);
            };
            fragment.appendChild(btn);
        });
        
        this.els.qGrid.innerHTML = '';
        this.els.qGrid.appendChild(fragment);
    },

    loadQuestion(index) {
        if (index < 0 || index >= this.state.currQ.length) return;
        
        // Push to history if different
        if (this.state.history[this.state.history.length-1] !== this.state.currentIndex) {
            this.state.history.push(this.state.currentIndex);
        }

        this.state.currentIndex = index;
        const q = this.state.currQ[index];
        const ans = this.state.answers[q.id];

        // UI Skeleton Effect for smooth transition
        this.els.questionArea.classList.add('hidden');
        this.els.skeletonLoader.classList.remove('hidden');

        setTimeout(() => {
            this.els.skeletonLoader.classList.add('hidden');
            this.els.questionArea.classList.remove('hidden');
            
            // Header Progress
            const answeredCount = Object.keys(this.state.answers).length;
            this.els.txtProgress.innerText = `${answeredCount}/${this.state.currQ.length}`;
            this.els.txtPercent.innerText = `${Math.round((answeredCount / this.state.currQ.length)*100)}%`;
            this.els.barProgress.style.width = `${((index+1) / this.state.currQ.length) * 100}%`;
            
            this.els.badgeChapter.innerText = q.chapter;
            this.els.badgeDiff.innerText = q.difficulty;
            
            // Bookmark state
            const isBm = this.state.bookmarks.includes(q.id);
            this.els.btnBookmark.innerHTML = isBm ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
            this.els.btnBookmark.classList.toggle('active', isBm);
            this.els.btnBookmark.onclick = () => this.toggleBookmark(q.id);

            // Content
            this.els.qText.innerHTML = `Câu ${index+1}: ${q.question}`;
            
            if (q.image && quizImages[q.image]) {
                this.els.qImage.innerHTML = quizImages[q.image];
                this.els.qImage.classList.remove('hidden');
            } else {
                this.els.qImage.classList.add('hidden');
            }

            // Options rendering (Azota Style)
            const frag = document.createDocumentFragment();
            q.options.forEach(opt => {
                const char = opt.charAt(0);
                const text = opt.substring(3); // Remove "A. "
                
                const btn = document.createElement('button');
                btn.className = 'opt-btn ripple-effect';
                btn.setAttribute('aria-label', `Chọn đáp án ${char}`);
                btn.innerHTML = `<span class="opt-char">${char}</span><span class="opt-text">${text}</span>`;
                
                // States
                if (ans) {
                    if (this.state.mode === 'exam' && ans === char) btn.classList.add('selected');
                    if (this.state.mode === 'study') {
                        if (char === q.correctAnswer) btn.classList.add('correct');
                        else if (ans === char) btn.classList.add('wrong');
                    }
                }

                btn.onclick = () => this.selectAnswer(q, char);
                frag.appendChild(btn);
            });
            this.els.qOptions.innerHTML = '';
            this.els.qOptions.appendChild(frag);

            // Feedback rendering
            if (this.state.mode === 'study' && ans) {
                this.els.feedbackBox.className = `feedback-box ${ans === q.correctAnswer ? 'correct' : 'wrong'}`;
                this.els.feedbackBox.innerHTML = `
                    <div class="feedback-title">
                        <i class="fas ${ans === q.correctAnswer ? 'fa-check-circle' : 'fa-times-circle'}"></i> 
                        ${ans === q.correctAnswer ? 'Chính xác!' : `Sai! Đáp án đúng là: ${q.correctAnswer}`}
                    </div>
                    <div class="explanation">${q.explanation}</div>`;
            } else {
                this.els.feedbackBox.classList.add('hidden');
            }
            
            // NOTE: Xóa logic ẩn nút nộp bài (Nút luôn hiển thị)
            // this.els.btnSubmit.classList.toggle('hidden', Object.keys(this.state.answers).length !== this.state.currQ.length);
            
            // Re-render sidebar active state
            this.renderSidebar(this.els.inpSearch.value);
            
        }, 150); // Fast 150ms skeleton for perceptual smoothness
    },

    selectAnswer(q, char) {
        if (this.state.mode === 'study' && this.state.answers[q.id]) return; 
        
        this.state.answers[q.id] = char;
        this.loadQuestion(this.state.currentIndex); 
        
        // Auto next in exam mode
        if (this.state.mode === 'exam' && this.state.currentIndex < this.state.currQ.length - 1) {
            setTimeout(() => this.nav('next'), 400); // Wait for ripple
        }
    },

    toggleBookmark(id) {
        if (this.state.bookmarks.includes(id)) {
            this.state.bookmarks = this.state.bookmarks.filter(x => x !== id);
        } else {
            this.state.bookmarks.push(id);
        }
        localStorage.setItem('ctdl_bookmarks', JSON.stringify(this.state.bookmarks));
        this.loadQuestion(this.state.currentIndex);
    },

    nav(action) {
        let ni = this.state.currentIndex;
        if (action === 'first') ni = 0;
        if (action === 'last') ni = this.state.currQ.length - 1;
        if (action === 'prev') ni = Math.max(0, ni - 1);
        if (action === 'next') ni = Math.min(this.state.currQ.length - 1, ni + 1);
        if (action === 'back') {
            if (this.state.history.length > 0) {
                ni = this.state.history.pop();
                this.state.history.pop(); 
            }
        }
        this.loadQuestion(ni);
    },

    handleShortcuts(e) {
        if(['TEXTAREA','INPUT'].includes(e.target.tagName)) return;
        
        const key = e.key.toUpperCase();
        if (key === 'ARROWLEFT') this.nav('prev');
        if (key === 'ARROWRIGHT') this.nav('next');
        
        const q = this.state.currQ[this.state.currentIndex];
        if (['A','B','C','D'].includes(key)) {
            const opt = q.options.find(o => o.startsWith(key));
            if(opt) this.selectAnswer(q, key);
        }
    },

    confirmSubmit() {
        const unans = this.state.currQ.length - Object.keys(this.state.answers).length;
        if(unans > 0) {
            document.getElementById('confirm-desc').innerHTML = `Bạn còn <b>${unans}</b> câu chưa trả lời.<br>Bạn có chắc muốn nộp bài?`;
            this.openModal('confirm-modal');
        } else {
            this.submitQuiz(); // Nộp ngay nếu đã trả lời hết
        }
    },

    submitQuiz() {
        if (this.state.isSubmitting) return;
        this.state.isSubmitting = true;
        this.closeModal('confirm-modal');
        clearInterval(this.state.interval);
        
        let correctCount = 0;
        let wrongArr = [];
        let chapterStats = {};

        this.state.currQ.forEach(q => {
            if(!chapterStats[q.chapter]) chapterStats[q.chapter] = { total: 0, correct: 0 };
            chapterStats[q.chapter].total++;

            if (this.state.answers[q.id] === q.correctAnswer) {
                correctCount++;
                chapterStats[q.chapter].correct++;
            } else {
                wrongArr.push(q.id);
            }
        });

        // Update Wrong History
        let hist = JSON.parse(localStorage.getItem('ctdl_wrong_hist') || '[]');
        hist = [...new Set([...hist, ...wrongArr])];
        localStorage.setItem('ctdl_wrong_hist', JSON.stringify(hist));

        const pct = (correctCount / this.state.currQ.length) * 100;
        const score10 = (correctCount / this.state.currQ.length) * 10;
        
        let rank = "Yếu";
        if(pct >= 90) rank = "Xuất sắc";
        else if(pct >= 80) rank = "Giỏi";
        else if(pct >= 65) rank = "Khá";
        else if(pct >= 50) rank = "Trung bình";

        // Switch Screen
        this.els.workspace.classList.add('hidden');
        this.els.resultScreen.classList.remove('hidden');
        document.getElementById('btn-export').classList.remove('hidden');
        
        // Populate Dashboard
        document.getElementById('res-score').innerText = score10.toFixed(1);
        document.getElementById('res-circle').setAttribute('stroke-dasharray', `${pct}, 100`);
        document.getElementById('res-circle').style.stroke = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
        
        document.getElementById('res-correct').innerText = correctCount;
        document.getElementById('res-wrong').innerText = this.state.currQ.length - correctCount;
        document.getElementById('res-time').innerText = this.els.txtTimer.innerText;
        document.getElementById('res-rank').innerText = rank;
        document.getElementById('res-rank').style.color = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';

        // Chapter Analysis
        let html = '';
        let minPct = 100; let weakChap = '';
        for (const [chap, st] of Object.entries(chapterStats)) {
            const cpct = Math.round((st.correct / st.total) * 100);
            if(cpct < minPct) { minPct = cpct; weakChap = chap; }
            html += `
                <div class="ana-row">
                    <span>${chap}</span>
                    <div class="prog-wrap"><div class="prog-fill ${cpct<50?'weak-fill':''}" style="width:${cpct}%"></div></div>
                    <span class="${cpct < 50 ? 'weak-text':''}">${cpct}%</span>
                </div>`;
        }
        if(minPct < 100) html += `<div style="margin-top:16px; color:var(--danger); font-size:0.95rem"><i class="fas fa-exclamation-triangle"></i> Gợi ý ôn tập thêm: <b>${weakChap}</b></div>`;
        document.getElementById('chapter-analysis').innerHTML = html;
    },

    reviewFromResults(type) {
        this.els.resultScreen.classList.add('hidden');
        this.loadReview(type);
    },

    exportResults() {
        let txt = "KẾT QUẢ LUYỆN THI CTDL & GT\n";
        txt += "------------------------------\n";
        txt += `Điểm: ${document.getElementById('res-score').innerText}/10\n`;
        txt += `Thời gian: ${document.getElementById('res-time').innerText}\n\n`;
        txt += "CHI TIẾT:\n";
        
        this.state.currQ.forEach((q, i) => {
            const ans = this.state.answers[q.id] || "Chưa làm";
            const res = ans === q.correctAnswer ? "ĐÚNG" : "SAI";
            txt += `Câu ${i+1} (ID: ${q.id}) - ${q.chapter}\n`;
            txt += `Đề: ${q.question}\n`;
            txt += `Bạn chọn: ${ans} -> ${res}\n`;
            txt += `Đáp án đúng: ${q.correctAnswer}\n`;
            txt += `Giải thích: ${q.explanation}\n\n`;
        });

        const blob = new Blob([txt], {type: "text/plain;charset=utf-8"});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = "KetQua_CTDL.txt";
        a.click();
    }
};

app.init();
