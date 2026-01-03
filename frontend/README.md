# Contact Management Web App (MERN Stack)

A simple Contact Management web application built as a Web Developer interview task.  
The project demonstrates core MERN stack fundamentals including form handling, API creation, MongoDB integration, and frontend-backend communication.

---

## Tech Stack

**Frontend**
- React.js (Vite)
- Tailwind CSS
- useState for state management

**Backend**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose

---

## Features

### Contact Form
- Fields: Name, Email, Phone, Message
- Client-side validation
  - Name and Phone are required
  - Email format validation
- Submit button disabled when form is invalid

### Backend API
- `POST /api/contacts`  
  Stores contact details in MongoDB
- `GET /api/contacts`  
  Fetches all submitted contacts

### Database
- MongoDB used for persistent storage
- Schema-based validation using Mongoose

### UI
- Responsive layout
- Clean and minimal design using Tailwind CSS
- Contacts displayed dynamically without page reload

---

## Project Structure

Contact-Form/
│
├── backend/
│ ├── models/
│ │ └── Contact.js
│ ├── routes/
│ │ └── contacts.js
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── vite.config.js



---

## Environment Variables

Create a `.env` file in the **backend** directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/contactform
PORT=5000

Installation & Setup
Backend
cd backend
npm install
npm start
http://localhost:5000

Frontend
cd frontend
npm install
npm run dev
http://localhost:5173
