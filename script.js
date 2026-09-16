// ===================================================
// INTERVIEWPREP FRONTEND JAVASCRIPT
// Vanilla JS connecting to Flask Backend Data Structures
// ===================================================

const API_URL = (window.location.protocol && window.location.protocol.startsWith('http'))
    ? window.location.origin
    : "http://127.0.0.1:5000";

// --- Application State ---
let allQuestionsCache = [];
let currentQuestions = [];
let filteredQuestions = [];
let currentInterviewQ = 1;
let selectedStack = "All";
let selectedDiff = "All";

// --- Theme Management (White & Black default) ---
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    // Check saved theme preference
    const savedTheme = localStorage.getItem('interviewprep-theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerText = '☀️ Light';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerText = '🌙 Dark';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('interviewprep-theme', 'light');
            themeToggle.innerText = '🌙 Dark';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('interviewprep-theme', 'dark');
            themeToggle.innerText = '☀️ Light';
        }
    });
}

// --- Navigation Tabs ---
document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const targetId = e.target.getAttribute('data-target');
        document.querySelectorAll('main > section').forEach(sec => sec.style.display = 'none');
        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.style.display = 'block';

        if (targetId === 'history-section') loadHistory();
    });
});

// --- Practice: Tech Stack Selection ---
document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
        e.target.classList.add('selected');
        
        selectedStack = e.target.getAttribute('data-stack');
        loadQuestions(selectedStack);
    });
});

// --- Practice: Difficulty Filters ---
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        selectedDiff = e.target.getAttribute('data-diff');
        applyDifficultyFilter();
    });
});

// --- Fetch & Load Questions ---
async function loadQuestions(stack) {
    const list = document.getElementById('questions-list');
    const meta = document.getElementById('question-meta');
    list.innerHTML = '<div class="loading-state">Fetching questions...</div>';
    if (meta) meta.innerText = 'Loading...';

    try {
        let endpoint = `${API_URL}/questions`;
        if (stack && stack !== 'All') {
            endpoint = `${API_URL}/questions/stack/${encodeURIComponent(stack)}`;
        }

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        
        currentQuestions = await res.json();
        
        // Cache full list if it was 'All'
        if (stack === 'All') {
            allQuestionsCache = currentQuestions;
        }

        // Update backend status indicator
        updateBackendStatus(true);
        applyDifficultyFilter();
    } catch (err) {
        console.warn("Backend fetch failed, attempting fallback...", err);
        updateBackendStatus(false);
        
        // If we have cached questions or fallback
        if (allQuestionsCache.length > 0) {
            if (stack === 'All') {
                currentQuestions = allQuestionsCache;
            } else {
                currentQuestions = allQuestionsCache.filter(q => q.tech_stack.toLowerCase() === stack.toLowerCase());
            }
            applyDifficultyFilter();
        } else {
            // Try fetching questions.json statically as safe fallback
            try {
                const staticRes = await fetch('questions.json');
                allQuestionsCache = await staticRes.json();
                if (stack === 'All') {
                    currentQuestions = allQuestionsCache;
                } else {
                    currentQuestions = allQuestionsCache.filter(q => q.tech_stack.toLowerCase() === stack.toLowerCase());
                }
                applyDifficultyFilter();
            } catch (fallbackErr) {
                list.innerHTML = `
                    <div class="empty-state">
                        <p style="font-weight: 600; margin-bottom: 0.5rem; color: #DC2626;">Unable to reach Flask Backend</p>
                        <p style="font-size: 0.85rem;">Make sure the server is running on <code>http://127.0.0.1:5000</code> via <code>python app.py</code>.</p>
                        <button class="secondary-btn" style="margin-top: 1rem;" onclick="loadQuestions('${stack}')">Retry Connection</button>
                    </div>
                `;
            }
        }
    }
}

function applyDifficultyFilter() {
    if (selectedDiff === 'All') {
        filteredQuestions = currentQuestions;
    } else {
        filteredQuestions = currentQuestions.filter(q => q.difficulty.toLowerCase() === selectedDiff.toLowerCase());
    }
    renderQuestions();
}

// --- Render Question Cards ---
function renderQuestions() {
    const list = document.getElementById('questions-list');
    const meta = document.getElementById('question-meta');
    
    const count = filteredQuestions.length;
    const stackLabel = selectedStack === 'All' ? 'All Tech Stacks' : `${selectedStack} Stack`;
    if (meta) meta.innerText = `${count} question${count === 1 ? '' : 's'} · ${stackLabel}`;

    if (count === 0) {
        list.innerHTML = `<div class="empty-state">No questions found for "${selectedStack}" with "${selectedDiff}" difficulty.</div>`;
        return;
    }

    list.innerHTML = '';
    filteredQuestions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const diffClass = `diff-${q.difficulty.toLowerCase()}`;
        
        card.innerHTML = `
            <div class="question-row">
                <div style="flex: 1;">
                    <span class="q-number">QUESTION #${String(q.id).padStart(2, '0')}</span>
                    <h4 class="q-title">${escapeHtml(q.question)}</h4>
                    <div class="meta-row">
                        <span class="tag" style="font-weight: 600;">${escapeHtml(q.tech_stack)}</span>
                        <span class="tag">${escapeHtml(q.topic)}</span>
                        <span class="tag ${diffClass}">${escapeHtml(q.difficulty)}</span>
                    </div>
                </div>
            </div>
            
            <button class="secondary-btn btn-view-answer" onclick="toggleAnswer(${q.id}, this)">View Answer</button>
            
            <div class="answer-panel" id="answer-${q.id}">
                <p>${escapeHtml(q.answer)}</p>
                <div style="display:flex; align-items:center; gap: 0.5rem;">
                    <button class="primary-btn" onclick="markSolved(${q.id}, this)">Mark as Solved</button>
                    <span class="success-msg" id="msg-${q.id}">✓ Solved & Recorded</span>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

// --- Practice: Interactions ---
async function toggleAnswer(id, btnElement) {
    const panel = document.getElementById(`answer-${id}`);
    if (!panel) return;

    if (panel.style.display === 'block') {
        panel.style.display = 'none';
        btnElement.innerText = "View Answer";
    } else {
        panel.style.display = 'block';
        btnElement.innerText = "Hide Answer";
        
        // Push question ID to Stack (LIFO visit)
        try {
            await fetch(`${API_URL}/visit`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({question_id: id})
            });
            updateCurrentQuestion();
        } catch(err) {
            console.warn("Could not push visit to Stack", err);
        }
    }
}

async function markSolved(id, btnElement) {
    try {
        const res = await fetch(`${API_URL}/practice`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({question_id: id, status: "solved"})
        });
        
        const msg = document.getElementById(`msg-${id}`) || btnElement.nextElementSibling;
        if (msg) {
            msg.classList.add('show');
            setTimeout(() => msg.classList.remove('show'), 2500);
        }
    } catch(err) {
        console.error("Failed to add to practice history", err);
    }
}

// --- Practice: Stack Navigation (Go Back / Previous) ---
const btnPrevious = document.getElementById('btn-previous');
if (btnPrevious) {
    btnPrevious.addEventListener('click', async () => {
        try {
            const res = await fetch(`${API_URL}/previous`);
            if (res.ok) {
                const data = await res.json();
                alert(`Popped from Stack: Returned to Question #${data.item}`);
                updateCurrentQuestion();
            } else {
                alert("Stack is empty! No previous questions visited yet.");
            }
        } catch(err) {
            console.error("Stack previous call failed", err);
        }
    });
}

async function updateCurrentQuestion() {
    try {
        const res = await fetch(`${API_URL}/current`);
        const label = document.getElementById('current-question-label');
        if (res.ok) {
            const data = await res.json();
            if (label) label.innerText = `Top of Stack: Question #${data.item}`;
        } else {
            if (label) label.innerText = `Top of Stack: Empty`;
        }
    } catch(err) {}
}

// --- Mock Interview (Queue / FIFO) ---
const btnStartInterview = document.getElementById('btn-start-interview');
if (btnStartInterview) {
    btnStartInterview.addEventListener('click', async () => {
        try {
            const res = await fetch(`${API_URL}/interview/start`, { method: 'POST' });
            if (!res.ok) throw new Error("Failed to start interview");
            
            document.getElementById('interview-active').style.display = 'block';
            document.getElementById('interview-result').style.display = 'none';
            document.getElementById('interview-hero').style.display = 'none';
            
            currentInterviewQ = 1;
            fetchNextInterviewQuestion();
        } catch (err) {
            alert("Could not start interview. Make sure the backend is running!");
            console.error(err);
        }
    });
}

async function fetchNextInterviewQuestion() {
    const progressEl = document.getElementById('interview-progress');
    const textEl = document.getElementById('interview-question-text');
    const stackEl = document.getElementById('interview-stack');
    const topicEl = document.getElementById('interview-topic');
    const diffEl = document.getElementById('interview-diff');
    
    if (progressEl) progressEl.innerText = `Question ${currentInterviewQ} of 5`;
    
    try {
        const res = await fetch(`${API_URL}/interview/next`);
        if (res.ok) {
            const q = await res.json();
            if (textEl) textEl.innerText = q.question;
            if (stackEl) stackEl.innerText = q.tech_stack;
            if (topicEl) topicEl.innerText = q.topic;
            if (diffEl) {
                diffEl.innerText = q.difficulty;
                diffEl.className = `tag diff-${q.difficulty.toLowerCase()}`;
            }
            
            const textarea = document.querySelector('#interview-active textarea');
            if (textarea) textarea.value = '';
        } else {
            showInterviewResult();
        }
    } catch(err) {
        console.error("Error fetching next interview question", err);
    }
}

async function submitInterviewAnswer(isCorrect) {
    try {
        await fetch(`${API_URL}/interview/answer`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({correct: isCorrect})
        });
        
        currentInterviewQ++;
        if (currentInterviewQ > 5) {
            showInterviewResult();
        } else {
            fetchNextInterviewQuestion();
        }
    } catch(err) {
        console.error("Failed to submit interview answer", err);
    }
}

function skipInterviewQuestion() {
    submitInterviewAnswer(false);
}

async function showInterviewResult() {
    document.getElementById('interview-active').style.display = 'none';
    document.getElementById('interview-result').style.display = 'block';
    
    try {
        const res = await fetch(`${API_URL}/interview/result`);
        const data = await res.json();
        const score = data.score || 0;
        const total = data.total || 5;
        const pct = Math.round((score / total) * 100);
        
        document.getElementById('final-score').innerText = `${score} / ${total}`;
        const label = document.querySelector('.score-label');
        if (label) label.innerText = `Correct Answers (${pct}% Accuracy)`;
    } catch(err) {
        console.error("Failed to load interview result", err);
    }
}

const btnPracticeAgain = document.getElementById('btn-practice-again');
if (btnPracticeAgain) {
    btnPracticeAgain.addEventListener('click', () => {
        document.getElementById('interview-result').style.display = 'none';
        document.getElementById('interview-hero').style.display = 'block';
        document.getElementById('btn-start-interview').click();
    });
}

const btnBackToQuestions = document.getElementById('btn-back-to-questions');
if (btnBackToQuestions) {
    btnBackToQuestions.addEventListener('click', () => {
        document.getElementById('interview-result').style.display = 'none';
        document.getElementById('interview-hero').style.display = 'block';
        const practiceTab = document.querySelector('.nav-link[data-target="practice-section"]');
        if (practiceTab) practiceTab.click();
    });
}

// --- History (Linked List) ---
async function loadHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = '<div class="loading-state">Loading your practice history...</div>';
    
    try {
        const res = await fetch(`${API_URL}/history`);
        if (!res.ok) throw new Error("History fetch failed");
        
        const history = await res.json();
        
        if (!history || history.length === 0) {
            list.innerHTML = `
                <div class="empty-state">
                    <p style="font-weight: 600; margin-bottom: 0.25rem;">No practice history yet</p>
                    <p style="font-size: 0.85rem;">Questions marked as "Solved" in the Practice section will be added to your Linked List.</p>
                </div>
            `;
            return;
        }

        list.innerHTML = '';
        // Display in chronological order or reverse order (recent first)
        const displayItems = [...history].reverse();
        displayItems.forEach((item, idx) => {
            // Find question details if cached
            const qDetail = allQuestionsCache.find(q => q.id === item.question_id);
            const title = qDetail ? qDetail.question : `Question #${item.question_id}`;
            const stack = qDetail ? `${qDetail.tech_stack} · ${qDetail.topic}` : `ID: ${item.question_id}`;

            const div = document.createElement('div');
            div.className = 'history-item';
            div.innerHTML = `
                <div>
                    <div class="h-title">${escapeHtml(title)}</div>
                    <div class="h-subtitle">${escapeHtml(stack)}</div>
                </div>
                <div class="h-status">✓ ${escapeHtml(item.status.toUpperCase())}</div>
            `;
            list.appendChild(div);
        });
    } catch (err) {
        list.innerHTML = '<div class="empty-state">Error loading history from server. Ensure Flask backend is running.</div>';
    }
}

// --- Status Indicator Helper ---
function updateBackendStatus(online) {
    const el = document.getElementById('backend-status');
    if (!el) return;
    if (online) {
        el.innerText = "Backend Online";
        el.style.color = "var(--text-muted)";
    } else {
        el.innerText = "Backend Offline";
        el.style.color = "#DC2626";
    }
}

// --- HTML Escaping for Safety ---
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// --- Initial Page Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Automatically load all questions on page load so questions appear immediately!
    loadQuestions('All');
    updateCurrentQuestion();
});
