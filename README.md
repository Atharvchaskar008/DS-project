# InterviewPrep — Technical Interview Preparation Platform

> A minimal, high-performance web application designed to demonstrate the practical application of **Core Data Structures** in modern software engineering.

---

## 📌 Project Overview

**InterviewPrep** is a technical interview preparation platform where users can practice curated interview questions across modern technologies, track their solved questions, navigate recently viewed questions, and participate in timed mock interview sessions.

Rather than using generic database abstractions, the platform is engineered to demonstrate the real-world application of **four fundamental Data Structures**:

1. **Python List / Array** → Question Bank (Fast indexing and multi-criteria filtering)
2. **Singly Linked List** → Practice History (Dynamic, append-only chronological history)
3. **Stack (LIFO)** → Visited Questions Navigation (Backwards traversal of recently opened questions)
4. **Queue (FIFO)** → Mock Interview Session (Order-preserving question delivery)

---

## 🏗️ Clean Project Structure

All redundant files and duplicate folders have been removed. Every file in the repository serves a clear purpose:

```text
DS-project/
├── app.py                # Main Flask REST API server & static asset handler
├── linked_list.py        # Custom Singly Linked List class (Node & LinkedList)
├── stack.py              # Custom Stack class (LIFO: push, pop, peek, is_empty)
├── queue.py              # Custom Queue class (FIFO: enqueue, dequeue, is_empty, size)
├── questions.json        # 40 seed technical questions across 7 tech stacks
├── index.html            # Single-Page frontend UI (White & Black Developer Tool Design)
├── style.css             # Monochrome styling system with Light/Dark mode toggle
├── script.js             # Client-side state manager & data structure engine
├── requirements.txt      # Python backend dependencies (Flask, Flask-CORS, Gunicorn)
├── .gitignore            # Git ignore file for temporary artifacts
└── README.md             # Complete project documentation & viva explanation guide
```

---

## 🧠 Data Structure Mapping & Real-World Justification

| Data Structure | Implementation File | Application Feature | Why This Data Structure? | Time Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Array / Python List** | `app.py` & `questions.json` | **Question Bank** | Questions have unique IDs and require rapid $O(1)$ random access, filtering by technology, and iteration. | Access: $O(1)$<br>Search: $O(n)$ |
| **Singly Linked List** | `linked_list.py` | **Practice History** | History grows dynamically with each solved question. Appending to a linked list avoids array reallocations in memory. | Append: $O(n)$ or $O(1)$<br>Traversal: $O(n)$ |
| **Stack (LIFO)** | `stack.py` | **Previous Questions** | Enforces **Last In, First Out**. When a candidate examines multiple questions, clicking "Previous" walks backwards to the most recently visited question. | Push: $O(1)$<br>Pop: $O(1)$<br>Peek: $O(1)$ |
| **Queue (FIFO)** | `queue.py` | **Mock Interview** | Enforces **First In, First Out**. When a mock interview starts, questions are loaded into a queue and served strictly in the order they arrived. | Enqueue: $O(1)$<br>Dequeue: $O(1)$ |

---

## 🚀 Tech Stacks Included in Question Bank

The platform includes **40 interview questions** evenly distributed across 7 industry-standard tech stacks:

1. **MERN Stack** — MongoDB, Express.js, React, Node.js
2. **Frontend** — Semantic HTML5, Modern CSS, JavaScript ES6+, React Hooks
3. **Backend** — Node.js runtime, RESTful APIs, Middleware, Asynchronous programming
4. **Python** — Language fundamentals, List comprehensions, Flask, Django ORM, GIL
5. **SQL & Databases** — Queries, JOINs, Indexing, Normalization, Transactions (ACID)
6. **Java** — Object-Oriented Programming (OOP), JVM architecture, Collections framework
7. **DSA Fundamentals** — Arrays, Singly Linked Lists, Stacks, Queues, Time Complexity

---

## 📡 Complete REST API Documentation

All backend endpoints are built using Flask and return standardized JSON responses:

### 1. Question Bank APIs (Array)
- `GET /` → Health check or serves `index.html`.
- `GET /questions` → Retrieves all 40 questions from the question bank.
- `GET /questions/<id>` → Retrieves a single question by its numeric ID.
- `GET /questions/stack/<tech_stack>` → Filters questions by technology (`MERN`, `Python`, `SQL`, etc.).
- `GET /questions/topic/<topic>` → Filters questions by topic (`React`, `Flask`, `OOP`, etc.).
- `GET /questions/difficulty/<difficulty>` → Filters by difficulty (`Easy`, `Medium`, `Hard`).

### 2. Practice History APIs (Linked List)
- `POST /practice` → Appends a solved question record to the Linked List.
  ```json
  { "question_id": 1, "status": "solved" }
  ```
- `GET /history` → Traverses the Linked List and returns the complete history array.

### 3. Recent Questions Navigation APIs (Stack)
- `POST /visit` → Pushes a viewed question ID to the top of the Stack.
  ```json
  { "question_id": 5 }
  ```
- `GET /current` → Peeks at the top question ID without removing it.
- `GET /previous` → Pops the top question ID from the Stack and returns it (LIFO).

### 4. Mock Interview APIs (Queue)
- `POST /interview/start` → Enqueues 5 random questions into the Queue and resets score to 0.
- `GET /interview/next` → Dequeues the next question in FIFO order.
- `POST /interview/answer` → Submits question status and increments score if correct:
  ```json
  { "correct": true }
  ```
- `GET /interview/result` → Returns the final score and total questions:
  ```json
  { "score": 4, "total": 5 }
  ```

---

## 💻 Running the Project Locally

### Prerequisites
- Python 3.8 or higher
- Modern Web Browser (Chrome, Edge, Firefox, Safari)

### Step 1: Clone Repository
```bash
git clone https://github.com/Atharvchaskar008/DS-project.git
cd DS-project
```

### Step 2: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 3: Start Flask Server
```bash
python app.py
```

### Step 4: Open in Browser
Visit **`http://127.0.0.1:5000`** in your browser.

---

## 🌐 Deployment

### Deploy on Vercel
1. Fork or push this repository to GitHub.
2. Log into [vercel.com](https://vercel.com) and import **`DS-project`**.
3. Leave all default settings (Framework: *Other*, Root Directory: `./`).
4. Click **Deploy**. Vercel will automatically publish the static frontend on its global Edge CDN.

### Deploy on GitHub Pages
1. Go to your repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment > Branch**, select **`main`** and folder **`/(root)`**.
3. Click **Save**. Your site will be live at `https://<username>.github.io/DS-project/` in 30 seconds.

---

## 🎓 Viva & Evaluator Q&A Guide (For College Presentation)

**Q1: Why did you use a Linked List for Practice History instead of an Array?**
> *"An Array requires contiguous memory allocation and dynamic resizing when elements grow beyond its initial capacity. A Singly Linked List allocates memory on-demand node by node, which is ideal for history logs where records are continuously appended."*

**Q2: Why did you choose a Stack for recent question navigation?**
> *"A Stack operates on the LIFO (Last In, First Out) principle. When a user explores multiple questions in sequence ($Q_1 \to Q_5 \to Q_{10}$), clicking 'Previous' must take them to the most recently opened question ($Q_{10}$) first, which is identical to the call-stack behavior in web browsers."*

**Q3: How does the Queue demonstrate FIFO in the Mock Interview?**
> *"In a real-world interview session, questions must be answered in the strict order they were scheduled. When the session starts, questions are enqueued. As the candidate proceeds, questions are dequeued one-by-one from the front of the queue, ensuring first-in questions are served first."*

---

## 📄 License
This project is open-source and built for educational purposes. Feel free to use and adapt it for learning Data Structures and Web Development.
