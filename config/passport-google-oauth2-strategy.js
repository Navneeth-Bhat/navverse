const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
//crypto for passwords
const crypto = require('crypto');
const User = require('../models/user');
//new strategy for google auth
passport.use(new googleStrategy({
    clientID:"209647732618-m81r21nve9ooshonldb1o856f5cfl2jb.apps.googleusercontent.com",
    clientSecret:"wuB6l1lQ1g2zR9C9MZzmsCFW",
    callbackURL:"http://localhost:8000/users/auth/google/callback",
},
function(accessToken,refreshToken,profile,done){
    //find user
    User.findOne({email:profile.emails[0].value}).exec(function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(profile);
        if(user){
            //if found set user as request.user
            return done(null,user);
        }else{
            //not found, create and set as request.user(signin.user)
            User.create({
                name: profile.displayName,
                email:profile.emails[0].value,
                password:crypto.randomBytes(20).toString('hex')
            },function(err,user){
                if(err){
                    console.log(err)
                    return
                }
                return done(null,user);
            })
        }
    })
}
))

module.exports = passport