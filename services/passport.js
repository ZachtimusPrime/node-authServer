const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js')
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    // on Google sign-in
    (accessToken, refreshToken, profile, done) => {
        
        // check to see if user exists based on id
        User.findOne({ id: profile.googleId }).then(existingUser => {
            // if no existing user in database, create one
            if (!existingUser) {
                new User({
                    googleId: profile.id,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    occupation: profile._json.occupation,
                    gender: profile.gender
                }).save().then(user => done(null, user));
            } else {
                done(null, existingUser);
            }
        });
    })
);