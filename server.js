require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const firebaseConfig = {
     apiKey: "AIzaSyA5HSQWx8wS0pY9mYk-8JaZmRdMDmBOtHY",
     authDomain: "signup-login-73409.firebaseapp.com",
     projectId: "signup-login-73409",
     storageBucket: "signup-login-73409.appspot.com",
     messagingSenderId: "253926245879",
     appId: "1:253926245879:web:9b76fea853358e2f411af2",
     measurementId: "G-H1E1TT6JP1"
   };
   
   // Initialize Firebase
   const App = initializeApp(firebaseConfig);
   const analytics = getAnalytics(App);