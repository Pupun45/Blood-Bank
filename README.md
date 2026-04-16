# 🩸 Blood Bank Management System

![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![Vite](https://img.shields.io/badge/Frontend-Vite-purple)

A full-stack web application developed to streamline blood donation, requests, and availability services. This platform acts as a bridge between blood donors and those in crucial need of blood. Built using a **React + Vite** frontend and a robust **Express.js + MongoDB** backend.

**Developed by: Jyoti Ranjan Behera**

🔗 **Live Webpage:** [https://blood-doner-finder.netlify.app/](https://blood-doner-finder.netlify.app/)  
🔗 **Source Code:** [https://github.com/Pupun45/Blood-Bank](https://github.com/Pupun45/Blood-Bank)

---

## 🌟 Key Features

- ✅ **Home Page**: Overview of the platform, mission, and live notifications.
- 👨‍⚕️ **About & Gallery**: Details about the organization, past events, and community impact.
- 🔎 **Real-time Blood Availability**: View current available blood stock across different localized centers.
- 🩸 **Request Blood**: Users in need can securely submit a blood request form.
- 💖 **Donate Blood**: Allows volunteers to register as donors in the system seamlessly.
- 🔐 **User Authentication**: Login/Signup functionality to manage and preserve user sessions.
- 💬 **Contact Integration**: Custom contact form to engage directly with the platform's support group.

---

## 🛠 Tech Stack

| Layer     | Technology                  | Description                               |
|-----------|-----------------------------|-------------------------------------------|
| **Frontend**  | React 19, Vite, Bootstrap   | Blazing fast client-side application.     |
| **Backend**   | Node.js, Express.js         | REST API Server & Route Management.       |
| **Database**  | MongoDB Atlas & Mongoose    | Cloud NoSQL database for secure data.     |

---

## 📂 Project Structure

This project uses a split structure separating the client and server concerns:

```text
Blood-Bank/
├── Frontend/           # React + Vite Client Application
│   ├── src/            # Components, Pages, Assets
│   ├── .env            # Frontend environment variables
│   └── package.json    # Frontend dependencies and scripts
│
└── Backends/           # Express.js Server
    ├── Controlers/     # Route controllers & logic
    ├── Models/         # Mongoose User & Form schemas
    ├── Routers/        # API endpoints definitions
    ├── .env            # Backend environment variables
    └── server.js       # Main entry point for the backend
```

---

## 🚀 Setup & Installation Instructions

Follow these instructions to set up the project locally. You will need [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/Pupun45/Blood-Bank.git
cd Blood-Bank
```

### 2. Backend Setup
Navigate to the `Backends` directory and install the dependencies.
```bash
cd Backends
npm install
```

Create a `.env` file in the `Backends` directory with the following variables:
```env
PORT=4000
MONGO_URI=mongodb+srv://<your_db_username>:<your_db_password>@cluster1.bcy9igb.mongodb.net/Blood-Bank
```

Start the backend server:
```bash
# Starts the server on http://localhost:4000
npm start 

# OR for development use nodemon
nodemon server.js
```

### 3. Frontend Setup
Open a new terminal window, navigate to the `Frontend` directory, and install dependencies.
```bash
cd Frontend
npm install
```

Create a `.env` file in the `Frontend` directory with the following variables so the frontend knows where the backend API lives:
```env
VITE_API_BASE_URL=http://localhost:4000
```

Start the frontend development server:
```bash
# Starts the frontend on http://localhost:5173
npm run dev
```

---

## 🤝 Contributing
Contributions, issues, and feature requests are always welcome! Feel free to check the [issues page](https://github.com/Pupun45/Blood-Bank/issues) if you want to contribute.

## 📝 License
This project is open-source and free to use.
