const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
require('dotenv').config();
const session = require('express-session');
const routes = require('./routes');
const PORT = process.env.PORT || 8000;
const cors=require('cors');
const cookieParser=require('cookie-parser');



const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: 'mysecretkey',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3600000,secure: false, httpOnly: true }
  }))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({origin:'*',credentials: true}));

require('./auth')

app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to database');
}).catch(err => {
    console.log('Error connecting to database', err);
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});