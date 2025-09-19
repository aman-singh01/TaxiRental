# 🚖 TaxiRental

A full-stack taxi booking application built with **React (Vite)**, **Node.js / Express**, and **MongoDB (Mongoose)**.  
Frontend is deployed on **Vercel**, backend is deployed on **Render**.

---

## ✨ Features

- 🔐 User authentication (login & signup with JWT)
- 📍 Ride booking (pickup & drop locations, date & time)
- 💳 Payment integration (Stripe)
- 👨‍💼 Admin dashboard (manage bookings & drivers)
- 🛡 Security: Helmet, CORS, Validator
- 📂 File uploads with Multer
- 📊 Logging with Morgan

---

## 🛠 Tech Stack

- **Frontend** → React (Vite), Axios, Context API  
- **Backend** → Node.js, Express, MongoDB, Mongoose  
- **Auth** → JWT, Bcrypt  
- **Payments** → Stripe  
- **Deployment** → Vercel (frontend), Render (backend)  

---

## 📂 Project Structure

TaxiRental/
├── backend/
│ ├── server.js
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ └── package.json
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
└── README.md
