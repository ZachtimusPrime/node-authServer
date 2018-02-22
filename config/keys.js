// env var used in heroku, change the check if deployed somewhere else
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod.js');
} else {
    module.exports = require('./dev.js');
}