const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate(
            'google', {
                scope: ['profile','email']
            }
        )
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/logout', (req, res) => {
        req.logout();   // logout() provided by passport.js
        res.send(req.user);
    });

    app.get('/currentUser', (req, res) => {
        res.send(req.user);
    });
};
