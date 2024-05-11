const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User=require('./models/User');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback'
  },
  async function(accessToken, refreshToken, profile, done) {
    try{
        const user=await User.findOne({googleId:profile.id});
        if(user){
            return done(null,{user,accessToken});
        }
        const newUser=new User({
            googleId:profile.id,
            username:profile.displayName,
            email:profile.emails[0].value,
            image:profile.photos[0].value
        });
        await newUser.save();
        return done(null,{newUser,accessToken});
    }
    catch(err){
        return done(err);
    }
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });   
passport.deserializeUser(function(user, done) {
    done(null, user);
  });   