const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');

const app = express();

// SERVICES ------------------------------------------------

// load mongooseDB models
require('./models/mongoose/user.js');

// load passport
require('./services/passport.js');

mongoose.connect(keys.mongoURI);

// MIDDLEWARE ----------------------------------------------

// extracts cookie data and assigns to req.session
app.use(
    cookieSession({
        maxAge: 1 * 24 * 60 * 60 * 1000,    // 1 day in milliseconds
        keys: [keys.cookieKey]
    })
);

// pulls user id out of req.session
app.use(passport.initialize());
app.use(passport.session());

// ROUTES & STARTUP ----------------------------------------
require('./routes/authRoutes.js')(app);
app.listen(5000);