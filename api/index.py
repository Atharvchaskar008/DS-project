import json
import os
import random
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from linked_list import LinkedList
from stack import Stack
from queue import Queue

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend integration

# Data Structure 1: Python List (Question Bank)
questions_file = os.path.join(os.path.dirname(__file__), 'questions.json')
with open(questions_file, 'r') as f:
    question_bank = json.load(f)

# Data Structure 2: Linked List (Practice History)
history_list = LinkedList()

# Data Structure 3: Stack (Previous Question)
previous_stack = Stack()

# Data Structure 4: Queue (Mock Interview)
mock_queue = Queue()
mock_score = 0


# ==========================================
# QUESTION BANK HELPER FUNCTIONS (Python List)
# ==========================================

def get_all_questions():
    """Returns all questions from the question bank list."""
    return question_bank


def get_question_by_id(question_id):
    """Finds and returns a question by its unique ID."""
    for q in question_bank:
        if q["id"] == question_id:
            return q
    return None


def get_questions_by_tech_stack(tech_stack):
    """Filters questions by tech stack (case-insensitive)."""
    if tech_stack.lower() == 'all':
        return question_bank
    result = []
    for q in question_bank:
        if q["tech_stack"].lower() == tech_stack.lower():
            result.append(q)
    return result


def get_questions_by_topic(topic):
    """Filters questions by topic (case-insensitive)."""
    result = []
    for q in question_bank:
        if q["topic"].lower() == topic.lower():
            result.append(q)
    return result


def get_questions_by_difficulty(difficulty):
    """Filters questions by difficulty (case-insensitive)."""
    result = []
    for q in question_bank:
        if q["difficulty"].lower() == difficulty.lower():
            result.append(q)
    return result


# ==========================================
# QUESTION BANK FLASK ROUTES
# ==========================================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/', methods=['GET'])
def home():
    if request.headers.get('Accept') and 'text/html' in request.headers.get('Accept') and not request.is_json:
        return send_from_directory(BASE_DIR, 'index.html')
    return jsonify({"message": "InterviewPrep Backend Running"})


@app.route('/index.html', methods=['GET'])
def serve_index():
    return send_from_directory(BASE_DIR, 'index.html')


@app.route('/style.css', methods=['GET'])
def serve_css():
    return send_from_directory(BASE_DIR, 'style.css')


@app.route('/script.js', methods=['GET'])
def serve_js():
    return send_from_directory(BASE_DIR, 'script.js')


# 1. GET /questions -> Get all questions
@app.route('/questions', methods=['GET'])
def get_questions():
    return jsonify(get_all_questions())


# 2. GET /questions/<id> -> Get one question
@app.route('/questions/<int:id>', methods=['GET'])
def get_question_by_id_route(id):
    question = get_question_by_id(id)
    if question:
        return jsonify(question)
    return jsonify({"error": "Question not found"}), 404


# 3. GET /questions/stack/<tech_stack> -> Get questions for a selected tech stack
@app.route('/questions/stack/<tech_stack>', methods=['GET'])
def get_by_tech_stack_route(tech_stack):
    return jsonify(get_questions_by_tech_stack(tech_stack))


# 4. GET /questions/topic/<topic> -> Get questions for a selected topic
@app.route('/questions/topic/<topic>', methods=['GET'])
def get_by_topic_route(topic):
    return jsonify(get_questions_by_topic(topic))


# 5. GET /questions/difficulty/<difficulty> -> Get questions for a selected difficulty
@app.route('/questions/difficulty/<difficulty>', methods=['GET'])
def get_by_difficulty_route(difficulty):
    return jsonify(get_questions_by_difficulty(difficulty))


# ==========================================
# OTHER DATA STRUCTURE ROUTES
# ==========================================

# --- Practice History APIs (Linked List) ---
@app.route('/practice', methods=['POST'])
def add_practice():
    data = request.get_json() or {}
    history_list.append(data)
    return jsonify({"message": "Practice record added", "history": history_list.get_all()}), 201


@app.route('/history', methods=['GET'])
def get_history():
    return jsonify(history_list.get_all())


# --- Previous Question APIs (Stack) ---
@app.route('/visit', methods=['POST'])
def visit_question():
    data = request.get_json() or {}
    question_id = data.get("question_id")
    if question_id is not None:
        previous_stack.push(question_id)
        return jsonify({"message": f"Visited question {question_id}"}), 201
    return jsonify({"error": "question_id required"}), 400


@app.route('/previous', methods=['GET'])
def get_previous_question():
    item = previous_stack.pop()
    if item is None:
        return jsonify({"message": "No previously visited questions", "item": None}), 404
    return jsonify({"message": "Returned to previous question", "item": item})


@app.route('/current', methods=['GET'])
def get_current_question():
    item = previous_stack.peek()
    if item is None:
        return jsonify({"message": "No currently visited questions", "item": None}), 404
    return jsonify({"message": "Current top question", "item": item})


# --- Mock Interview APIs (Queue) ---
@app.route('/interview/start', methods=['POST'])
def start_interview():
    global mock_queue, mock_score
    mock_queue = Queue()
    mock_score = 0
    
    # Pick 5 random questions from the bank
    if len(question_bank) >= 5:
        selected_questions = random.sample(question_bank, 5)
    else:
        selected_questions = question_bank
        
    for q in selected_questions:
        mock_queue.enqueue(q)
        
    return jsonify({"message": "Mock interview started with 5 questions"}), 201


@app.route('/interview/next', methods=['GET'])
def next_interview_question():
    question = mock_queue.dequeue()
    if question is None:
        return jsonify({"message": "No more questions in the interview"}), 404
    return jsonify(question)


@app.route('/interview/answer', methods=['POST'])
def answer_interview_question():
    global mock_score
    data = request.get_json() or {}
    if data.get("correct") is True:
        mock_score += 1
    return jsonify({"message": "Answer recorded", "current_score": mock_score})


@app.route('/interview/result', methods=['GET'])
def interview_result():
    return jsonify({"score": mock_score, "total": 5})


if __name__ == '__main__':
    app.run(debug=True, port=5000)
