require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const PORT = process.env.PORT || 8080;
const morgan = require('morgan');
const app = express();
app.set('view engine', 'ejs');
//DB Connection
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

//Routes
app.get("/", (req, res) => {
    res.send('root is working')
})

//Listener
app.listen(PORT, () => {
    console.log(`Server is live on port:${PORT}`);
});