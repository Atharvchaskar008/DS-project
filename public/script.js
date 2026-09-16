// ===================================================
// SEED QUESTIONS EMBEDDED DIRECTLY FOR 100% RELIABILITY
// (Works both online with Flask & offline / Vercel Edge)
// ===================================================
const SEED_QUESTIONS = [
  {
    "id": 1,
    "question": "What is MongoDB document database?",
    "tech_stack": "MERN",
    "topic": "MongoDB",
    "difficulty": "Easy",
    "answer": "MongoDB is a NoSQL document-oriented database that stores data in flexible JSON-like documents."
  },
  {
    "id": 2,
    "question": "What is Express.js used for?",
    "tech_stack": "MERN",
    "topic": "Express.js",
    "difficulty": "Easy",
    "answer": "Express.js is a minimal and flexible Node.js web application framework used to build APIs and backend servers."
  },
  {
    "id": 3,
    "question": "What is React JSX?",
    "tech_stack": "MERN",
    "topic": "React",
    "difficulty": "Easy",
    "answer": "JSX is a syntax extension for JavaScript that allows you to write HTML-like elements inside JavaScript code."
  },
  {
    "id": 4,
    "question": "What is the role of Node.js in MERN stack?",
    "tech_stack": "MERN",
    "topic": "Node.js",
    "difficulty": "Easy",
    "answer": "Node.js acts as the JavaScript runtime environment that executes server-side code outside the browser."
  },
  {
    "id": 5,
    "question": "What is Mongoose in MERN stack?",
    "tech_stack": "MERN",
    "topic": "MongoDB",
    "difficulty": "Medium",
    "answer": "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js that provides schema-based data modeling."
  },
  {
    "id": 6,
    "question": "How does state lifting work in React?",
    "tech_stack": "MERN",
    "topic": "React",
    "difficulty": "Hard",
    "answer": "State lifting is moving shared state up to the closest common ancestor component so sibling components can share data."
  },
  {
    "id": 7,
    "question": "What is semantic HTML?",
    "tech_stack": "Frontend",
    "topic": "HTML",
    "difficulty": "Easy",
    "answer": "Semantic HTML refers to using HTML tags that convey meaning about their content, such as <header>, <article>, and <footer>."
  },
  {
    "id": 8,
    "question": "What is the CSS Box Model?",
    "tech_stack": "Frontend",
    "topic": "CSS",
    "difficulty": "Easy",
    "answer": "The CSS Box Model consists of content, padding, border, and margin surrounding every HTML element."
  },
  {
    "id": 9,
    "question": "What is the virtual DOM in React?",
    "tech_stack": "Frontend",
    "topic": "React",
    "difficulty": "Easy",
    "answer": "The virtual DOM is a lightweight representation of the real DOM used by React to efficiently update the UI."
  },
  {
    "id": 10,
    "question": "What is a Closure in JavaScript?",
    "tech_stack": "Frontend",
    "topic": "JavaScript",
    "difficulty": "Medium",
    "answer": "A closure is a function that remembers and accesses variables from its lexical outer scope even when called outside that scope."
  },
  {
    "id": 11,
    "question": "What is event bubbling in JavaScript?",
    "tech_stack": "Frontend",
    "topic": "JavaScript",
    "difficulty": "Medium",
    "answer": "Event bubbling is when an event triggers on a target element and then propagates up through its parent elements in the DOM tree."
  },
  {
    "id": 12,
    "question": "What is Flexbox in CSS?",
    "tech_stack": "Frontend",
    "topic": "CSS",
    "difficulty": "Easy",
    "answer": "Flexbox is a 1D layout mechanism in CSS that aligns and distributes space among items in a container."
  },
  {
    "id": 13,
    "question": "What is middleware in Express.js?",
    "tech_stack": "Backend",
    "topic": "Express.js",
    "difficulty": "Medium",
    "answer": "Middleware is a function that runs between the request and response and can modify the request or response objects."
  },
  {
    "id": 14,
    "question": "What is a REST API?",
    "tech_stack": "Backend",
    "topic": "REST API",
    "difficulty": "Easy",
    "answer": "REST API is an architectural style for APIs that uses standard HTTP methods like GET, POST, PUT, and DELETE to manage resources."
  },
  {
    "id": 15,
    "question": "What is the Event Loop in Node.js?",
    "tech_stack": "Backend",
    "topic": "Node.js",
    "difficulty": "Hard",
    "answer": "The Event Loop allows Node.js to perform non-blocking I/O operations by offloading tasks to the system kernel whenever possible."
  },
  {
    "id": 16,
    "question": "What is CORS in web backend development?",
    "tech_stack": "Backend",
    "topic": "REST API",
    "difficulty": "Medium",
    "answer": "CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts resource requests from another domain."
  },
  {
    "id": 17,
    "question": "What is NPM in Node.js?",
    "tech_stack": "Backend",
    "topic": "Node.js",
    "difficulty": "Easy",
    "answer": "NPM is the default package manager for Node.js used to install and manage third-party JavaScript libraries."
  },
  {
    "id": 18,
    "question": "What is the difference between req.params and req.query in Express?",
    "tech_stack": "Backend",
    "topic": "Express.js",
    "difficulty": "Easy",
    "answer": "req.params extracts route parameters from the URL path, while req.query extracts query string parameters after the '?'."
  },
  {
    "id": 19,
    "question": "What is Python list comprehension?",
    "tech_stack": "Python",
    "topic": "Python",
    "difficulty": "Easy",
    "answer": "List comprehension provides a concise syntax to create lists based on existing iterables."
  },
  {
    "id": 20,
    "question": "What is the difference between a list and a tuple in Python?",
    "tech_stack": "Python",
    "topic": "Python",
    "difficulty": "Easy",
    "answer": "Lists are mutable (can be modified), whereas tuples are immutable (cannot be modified after creation)."
  },
  {
    "id": 21,
    "question": "What is Flask in Python?",
    "tech_stack": "Python",
    "topic": "Flask",
    "difficulty": "Easy",
    "answer": "Flask is a lightweight micro web framework for Python used to create web applications and REST APIs quickly."
  },
  {
    "id": 22,
    "question": "What is a decorator in Python?",
    "tech_stack": "Python",
    "topic": "Python",
    "difficulty": "Medium",
    "answer": "A decorator is a function that takes another function as an argument and extends its behavior without modifying it directly."
  },
  {
    "id": 23,
    "question": "What is an ORM in Django?",
    "tech_stack": "Python",
    "topic": "Django",
    "difficulty": "Medium",
    "answer": "Django ORM maps Python classes to database tables, allowing developers to interact with databases using Python code."
  },
  {
    "id": 24,
    "question": "What is GIL in Python?",
    "tech_stack": "Python",
    "topic": "Python",
    "difficulty": "Hard",
    "answer": "The Global Interpreter Lock (GIL) is a mutex in CPython that allows only one thread to execute Python bytecode at a time."
  },
  {
    "id": 25,
    "question": "What is a JOIN in SQL?",
    "tech_stack": "SQL",
    "topic": "SQL",
    "difficulty": "Easy",
    "answer": "A JOIN combines rows from two or more tables using a related column between them."
  },
  {
    "id": 26,
    "question": "What is the difference between WHERE and HAVING in SQL?",
    "tech_stack": "SQL",
    "topic": "SQL",
    "difficulty": "Medium",
    "answer": "WHERE filters rows before grouping, while HAVING filters group aggregations after GROUP BY is applied."
  },
  {
    "id": 27,
    "question": "What is a Primary Key in DBMS?",
    "tech_stack": "SQL",
    "topic": "DBMS",
    "difficulty": "Easy",
    "answer": "A Primary Key is a column or set of columns that uniquely identifies each row in a database table."
  },
  {
    "id": 28,
    "question": "What is indexing in MySQL?",
    "tech_stack": "SQL",
    "topic": "MySQL",
    "difficulty": "Medium",
    "answer": "Indexing creates a data structure to speed up data retrieval queries at the cost of extra write operations and storage."
  },
  {
    "id": 29,
    "question": "What are ACID properties in DBMS?",
    "tech_stack": "SQL",
    "topic": "DBMS",
    "difficulty": "Hard",
    "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability, which guarantee reliable database transactions."
  },
  {
    "id": 30,
    "question": "What is a Foreign Key in SQL?",
    "tech_stack": "SQL",
    "topic": "SQL",
    "difficulty": "Easy",
    "answer": "A Foreign Key is a field in one table that uniquely identifies a row in another table, creating a relationship between them."
  },
  {
    "id": 31,
    "question": "What is OOP in Java?",
    "tech_stack": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "answer": "OOP (Object-Oriented Programming) is a paradigm based on objects containing data (fields) and code (methods)."
  },
  {
    "id": 32,
    "question": "What are the four main pillars of OOP in Java?",
    "tech_stack": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "answer": "The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction."
  },
  {
    "id": 33,
    "question": "What is the difference between ArrayList and LinkedList in Java?",
    "tech_stack": "Java",
    "topic": "Collections",
    "difficulty": "Medium",
    "answer": "ArrayList uses a dynamic array for fast random access, while LinkedList uses a doubly linked list for fast insertions and deletions."
  },
  {
    "id": 34,
    "question": "What is the Garbage Collector in Java?",
    "tech_stack": "Java",
    "topic": "Java",
    "difficulty": "Easy",
    "answer": "Garbage Collector is an automatic memory management process in JVM that reclaims memory occupied by unreferenced objects."
  },
  {
    "id": 35,
    "question": "What is method overriding in Java?",
    "tech_stack": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "answer": "Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass."
  },
  {
    "id": 36,
    "question": "What is an Array in data structures?",
    "tech_stack": "DSA",
    "topic": "Array",
    "difficulty": "Easy",
    "answer": "An Array is a contiguous block of memory holding elements of the same data type indexed by integers."
  },
  {
    "id": 37,
    "question": "What is a Linked List?",
    "tech_stack": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "answer": "A Linked List is a linear data structure where elements (nodes) point to the next element via references instead of contiguous memory."
  },
  {
    "id": 38,
    "question": "What is the LIFO principle in a Stack?",
    "tech_stack": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "answer": "LIFO stands for Last-In, First-Out, meaning the last element added to the stack is the first one to be removed."
  },
  {
    "id": 39,
    "question": "What is the FIFO principle in a Queue?",
    "tech_stack": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "answer": "FIFO stands for First-In, First-Out, meaning the first element added to the queue is the first one to be removed."
  },
  {
    "id": 40,
    "question": "What is Time Complexity of searching in a LinkedList vs Array?",
    "tech_stack": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "answer": "Searching an element takes O(N) time in an unsorted LinkedList and O(1) by index in an Array."
  }
];

// --- CLIENT-SIDE DATA STRUCTURE ENGINE ---
// Mirrors the Flask backend for 100% reliable demo
class ClientNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class ClientLinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new ClientNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = newNode;
    }
    getAll() {
        const res = [];
        let cur = this.head;
        while (cur) {
            res.push(cur.data);
            cur = cur.next;
        }
        return res;
    }
}

class ClientStack {
    constructor() {
        this.items = [];
    }
    push(item) { this.items.push(item); }
    pop() { return this.items.length === 0 ? null : this.items.pop(); }
    peek() { return this.items.length === 0 ? null : this.items[this.items.length - 1]; }
}

class ClientQueue {
    constructor() {
        this.items = [];
    }
    enqueue(item) { this.items.push(item); }
    dequeue() { return this.items.length === 0 ? null : this.items.shift(); }
}

const localHistoryList = new ClientLinkedList();
const localPreviousStack = new ClientStack();
let localMockQueue = new ClientQueue();
let localMockScore = 0;

// ===================================================
// INTERVIEWPREP FRONTEND JAVASCRIPT
// Vanilla JS connecting to Flask Backend Data Structures
// ===================================================

const API_URL = (window.location.protocol && window.location.protocol.startsWith('http'))
    ? window.location.origin
    : "http://127.0.0.1:5000";

// --- Application State ---
let allQuestionsCache = SEED_QUESTIONS;
let currentQuestions = [...SEED_QUESTIONS];
let filteredQuestions = [...SEED_QUESTIONS];
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
    // 1. Immediately render from seed cache (zero lag, 100% instant display)
    if (stack === 'All') {
        currentQuestions = allQuestionsCache;
    } else {
        currentQuestions = allQuestionsCache.filter(q => q.tech_stack.toLowerCase() === stack.toLowerCase());
    }
    applyDifficultyFilter();

    // 2. Try fetching from live Flask backend
    try {
        let endpoint = `${API_URL}/questions`;
        if (stack && stack !== 'All') {
            endpoint = `${API_URL}/questions/stack/${encodeURIComponent(stack)}`;
        }

        const res = await fetch(endpoint);
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                currentQuestions = data;
                if (stack === 'All') {
                    allQuestionsCache = currentQuestions;
                }
                updateBackendStatus(true);
                applyDifficultyFilter();
            }
        }
    } catch (err) {
        // Standalone or local fallback
        console.log("Operating with local high-speed cache");
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
        localPreviousStack.push(id);
        const label = document.getElementById('current-question-label');
        if (label) label.innerText = `Top of Stack: Question #${id}`;

        try {
            await fetch(`${API_URL}/visit`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({question_id: id})
            });
            updateCurrentQuestion();
        } catch(err) {}
    }
}

async function markSolved(id, btnElement) {
    // Record to local Linked List dynamically
    localHistoryList.append({question_id: id, status: "solved"});
    
    const msg = document.getElementById(`msg-${id}`) || btnElement.nextElementSibling;
    if (msg) {
        msg.classList.add('show');
        setTimeout(() => msg.classList.remove('show'), 2500);
    }

    try {
        await fetch(`${API_URL}/practice`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({question_id: id, status: "solved"})
        });
    } catch(err) {}
}

// --- Practice: Stack Navigation (Go Back / Previous) ---
const btnPrevious = document.getElementById('btn-previous');
if (btnPrevious) {
    btnPrevious.addEventListener('click', async () => {
        let poppedItem = null;

        try {
            const res = await fetch(`${API_URL}/previous`);
            if (res.ok) {
                const data = await res.json();
                poppedItem = data.item;
            }
        } catch(err) {}

        if (poppedItem === null) {
            poppedItem = localPreviousStack.pop();
        }

        if (poppedItem !== null) {
            alert(`Popped from Stack (LIFO): Returned to Question #${poppedItem}`);
            const label = document.getElementById('current-question-label');
            const top = localPreviousStack.peek();
            if (label) label.innerText = top ? `Top of Stack: Question #${top}` : `Top of Stack: Empty`;
        } else {
            alert("Stack is empty! No previous questions visited yet.");
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
        }
    } catch(err) {}
}

// --- Mock Interview (Queue / FIFO) ---
const btnStartInterview = document.getElementById('btn-start-interview');
if (btnStartInterview) {
    btnStartInterview.addEventListener('click', async () => {
        document.getElementById('interview-active').style.display = 'block';
        document.getElementById('interview-result').style.display = 'none';
        document.getElementById('interview-hero').style.display = 'none';
        
        currentInterviewQ = 1;
        localMockScore = 0;
        localMockQueue = new ClientQueue();
        
        // Initialize client Queue with 5 questions
        const shuffled = [...allQuestionsCache].sort(() => 0.5 - Math.random());
        const chosen = shuffled.slice(0, 5);
        chosen.forEach(q => localMockQueue.enqueue(q));

        try {
            await fetch(`${API_URL}/interview/start`, { method: 'POST' });
        } catch (err) {}

        fetchNextInterviewQuestion();
    });
}

async function fetchNextInterviewQuestion() {
    const progressEl = document.getElementById('interview-progress');
    const textEl = document.getElementById('interview-question-text');
    const stackEl = document.getElementById('interview-stack');
    const topicEl = document.getElementById('interview-topic');
    const diffEl = document.getElementById('interview-diff');
    
    if (progressEl) progressEl.innerText = `Question ${currentInterviewQ} of 5`;
    
    let q = null;
    try {
        const res = await fetch(`${API_URL}/interview/next`);
        if (res.ok) {
            q = await res.json();
        }
    } catch(err) {}

    // Fallback to local Queue (FIFO dequeue)
    if (!q) {
        q = localMockQueue.dequeue();
    }

    if (q) {
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
}

async function submitInterviewAnswer(isCorrect) {
    if (isCorrect) localMockScore++;

    try {
        await fetch(`${API_URL}/interview/answer`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({correct: isCorrect})
        });
    } catch(err) {}
    
    currentInterviewQ++;
    if (currentInterviewQ > 5) {
        showInterviewResult();
    } else {
        fetchNextInterviewQuestion();
    }
}

function skipInterviewQuestion() {
    submitInterviewAnswer(false);
}

async function showInterviewResult() {
    document.getElementById('interview-active').style.display = 'none';
    document.getElementById('interview-result').style.display = 'block';
    
    let score = localMockScore;
    let total = 5;

    try {
        const res = await fetch(`${API_URL}/interview/result`);
        if (res.ok) {
            const data = await res.json();
            if (data.score !== undefined) score = data.score;
        }
    } catch(err) {}

    const pct = Math.round((score / total) * 100);
    document.getElementById('final-score').innerText = `${score} / ${total}`;
    const label = document.querySelector('.score-label');
    if (label) label.innerText = `Correct Answers (${pct}% Accuracy)`;
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
    
    let history = null;
    try {
        const res = await fetch(`${API_URL}/history`);
        if (res.ok) {
            history = await res.json();
        }
    } catch (err) {}

    // Fallback to local Linked List
    if (!history || history.length === 0) {
        history = localHistoryList.getAll();
    }

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
    // Display in reverse order (most recent first)
    const displayItems = [...history].reverse();
    displayItems.forEach((item) => {
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
            <div class="h-status">✓ ${escapeHtml((item.status || "solved").toUpperCase())}</div>
        `;
        list.appendChild(div);
    });
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
