const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,               
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const formDataRoutes = require('./routes/formData')

app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/formData', formDataRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT,() =>{
  console.log(`server running ${PORT}`);
})

module.exports = app;