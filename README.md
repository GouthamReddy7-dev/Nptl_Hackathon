# Smart Doubt AI Assistant (RAG-based Chatbot)

A **full‑stack AI-powered doubt‑solving system** built using **LangChain, Google Gemini, FAISS, Flask, React, and MongoDB**.

The system answers student doubts using **Retrieval Augmented Generation (RAG)** over **CSV + TXT data**. If an answer is **not found**, it responds with a **strict fallback message** and automatically **forwards the doubt to the teacher dashboard**.

---

## 🚀 Features

* 🤖 AI chatbot powered by **Google Gemini (gemini-2.5-flash)**
* 📚 Knowledge base from **CSV (FAQs) + TXT (class transcripts)**
* 🔎 FAISS vector search with HuggingFace embeddings
* 🧠 Strict prompt control (no hallucination)
* ❌ If answer not found → auto escalation to teacher
* 🧑‍🎓 Student Chat UI (React)
* 🧑‍🏫 Admin Dashboard to view unanswered doubts
* 🗄️ MongoDB to store unanswered questions

---

## 🧠 System Architecture

```
React Chatbot  ───▶  Flask RAG API  ───▶  FAISS + Gemini
     │                      │
     │                      └── If NOT found
     ▼
Teacher Dashboard  ◀── MongoDB (unanswered doubts)
```

---

## 🛠️ Tech Stack

### Backend (AI + API)

* Python
* Flask
* Flask-CORS
* LangChain
* LangChain Community
* LangChain Google GenAI
* Google Gemini API (gemini-2.5-flash)
* FAISS
* HuggingFace Sentence Transformers

### Frontend (React)

* React
* Axios
* React Router DOM

### Admin / Server (Node.js)

* Node.js
* Express.js
* Mongoose
* CORS

### Database

* MongoDB

---

## 📁 Project Structure

```
project/
│── backend/
│   ├── app.py
│   ├── react_faq_75_questions.csv
│   ├── transscript.txt
│   ├── RAG_index/
│
│── frontend/
│   ├── Chatbot.jsx
│   ├── Dashboard.jsx
│   ├── App.jsx
│
│── admin-server/
│   ├── server.js
│
│── README.md
```

---

## ⚙️ Backend Setup (RAG API)

### 1️⃣ Install Dependencies

```bash
pip install flask flask-cors langchain langchain-community langchain-google-genai faiss-cpu sentence-transformers
```

### 2️⃣ Add Google Gemini API Key

```python
apikey = "YOUR_GOOGLE_API_KEY"
```

### 3️⃣ Knowledge Sources

* `react_faq_75_questions.csv` → FAQ-based data
* `transscript.txt` → Paragraph / transcript data

Both are combined into **one FAISS vector store**.

---

## 🧠 Prompt Logic (Strict Fallback)

If the answer is **not present in retrieved context**, the bot replies with **exactly**:

```
sorry i couldnot find it i will send it to teacher
```

This ensures:

* ❌ No hallucination
* 📩 Automatic escalation

---

## 🌐 Flask API Endpoint

### POST `/Senddata`

**Request:**

```json
{
  "datas": "What is React?"
}
```

**Response:**

```json
{
  "result": "React is a JavaScript library for building UI"
}
```

---

## 🎨 Frontend Setup (React)

### Install dependencies

```bash
npm install axios react-router-dom
```

### Routes

| Route    | Component |
| -------- | --------- |
| `/`      | Chatbot   |
| `/admin` | Dashboard |

---

## 📊 Admin Dashboard (Teacher View)

* Displays **unanswered student doubts**
* Data fetched from MongoDB
* Status shown as **UNANSWERED**

---

## 🗄️ Admin Server (MongoDB)

### Install dependencies

```bash
npm install express mongoose cors
```

### MongoDB

```text
Database: question_Db
Collection: questions
```

---

## 🔄 Auto Escalation Flow

1. Student asks a question
2. RAG system searches CSV + TXT
3. ❌ If not found
4. Bot replies with fallback message
5. Question saved to MongoDB
6. Teacher sees it in Dashboard

---

## ✅ Final Output Behavior

| Scenario         | Bot Response                                         |
| ---------------- | ---------------------------------------------------- |
| Answer found     | Normal AI answer                                     |
| Answer NOT found | `sorry i couldnot find it i will send it to teacher` |

---

## 📌 Future Improvements

* Teacher reply feature
* Notification system
* Authentication
* Answer confidence score
* File upload for new knowledge

---

## 🧑‍💻 Author

Built as a **Smart Classroom AI Assistant** using RAG principles.

---

⭐ If you like this project, give it a star and feel free to extend it!
