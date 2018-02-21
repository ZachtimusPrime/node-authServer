const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js')
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    // on Google sign-in
    (accessToken, refreshToken, profile, done) => {
        
        // check to see if user exists based on id
        User.findOne({ id: profile.id }).then(existingUser => {
            // if no existing user in database, create one
            if (!existingUser) {
                new User({
                    id: profile.id,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    occupation: profile._json.occupation,
                    gender: profile.gender
                }).save();
            }
        })
    })
);