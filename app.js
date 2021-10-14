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

};