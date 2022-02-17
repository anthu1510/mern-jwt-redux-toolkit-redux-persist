const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded( {extended: false} ));

// Routes
app.use('/api/auth', require("./routes/userRouter"));

module.exports = app;