const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js')

// load mongooseDB models
require('./models/mongoose/user.js');

// load passport
require('./services/passport.js');

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes.js')(app);
app.listen(5000);