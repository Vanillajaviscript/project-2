require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const app = express();
