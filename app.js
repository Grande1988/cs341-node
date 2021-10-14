const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const errorController = require('./controllers/error');
const User = require('./models/user');

const PORT = process.env.PORT || 5000;

const corsOptions = {
  orgin: 'https://obscure-spire-89504.herokuapp.com/',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

const MondoDB_URL = process.env.MondoDB_URL || 'mongodb+srv://reddgl:Grande!1988@cluster0.sll31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded((extended: false)));