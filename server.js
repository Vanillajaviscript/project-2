require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const blogRoutes = require('./routes/blogRoutes');
const PORT = process.env.PORT || 8080;
const morgan = require('morgan');
const blog = require('./models/blogSeed');
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
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use('/blogs', blogRoutes);

//Routes
app.get("/", (req, res) => {
    res.redirect("/blogs");
});
app.get('/about', (req, res) => {
    res.render("about", {title: "About"});
});

//Listener
app.listen(PORT, () => {
    console.log(`Server is live on port:${PORT}`);
});