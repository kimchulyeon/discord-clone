// [1];
const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// [2] authRoutes.js 서버 라우트
const authRoutes = require('./routes/authRoutes');

// [1]
const PORT = process.env.PORT || process.env.API_PORT;

// [1]
const app = express();
app.use(express.json());
app.use(cors());

// [2] register the Routes
// http://localhost:5002/api/auth ~
app.use('/api/auth', authRoutes);

// [1]
const server = http.createServer(app);

// [1]
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('database connection failed. Server not started');
    console.log(err);
  });
