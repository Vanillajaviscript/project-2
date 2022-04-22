require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const app = express();
app.set('view engine', 'ejs');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + " is mongo not running?"));
db.on('connected', () => console.log("MongoDB Connected!"));
db.on('disconnected', () => console.log("MongoDB Disconnected!"));

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));