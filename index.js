const express = require('express');
require('./services/passport.js');

const app = express();
require('./routes/authRoutes.js')(app);
app.listen(5000);