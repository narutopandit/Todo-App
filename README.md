# Simple To-Do App

A basic **To-Do** web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application allows users to add, view, update, and delete their tasks easily.

---

## Features

- Add new tasks
- View all tasks
- Update existing tasks (mark complete/incomplete)
- Delete tasks
- Responsive design for mobile and desktop

---

## Tech Stack

| Technology | Usage                 |
| ---------- | --------------------- |
| MongoDB    | Database              |
| Express.js | Backend Framework     |
| React.js   | Frontend Library      |
| Node.js    | Server Environment    |
| Mongoose   | MongoDB ODM           |
| Axios      | API Requests          |
| dotenv     | Environment Variables |

---

## Project Structure

```
todo-app/
├── backend/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
├── README.md
└── package.json
```

---

## Installation and Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/narutopandit/Todo-App.git
cd todo-app
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

- Create a `.env` file inside `backend/` with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

-

```env
```

---

## How to Use

1. Open the app in your browser.
2. Add a new task using the input field.
3. Mark tasks as complete or incomplete.
4. Delete tasks once they are no longer needed.

---

## Future Enhancements

- User Authentication (login/signup)
- Filter tasks (e.g., completed, pending)
- Due date and reminders
- Priority labels (High, Medium, Low)
- Dark mode

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

