const router = require('express').Router();
const passport = require('passport');
const {postMessage}=require('./controllers/postMessage');
const {slackSignin}=require('./controllers/slackSignin');



router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
  async (req, res) => {
     res.cookie('userProfile',JSON.stringify(req.user)); 
    // console.log(req.session.userProfile);
    res.redirect('http://localhost:3000/');
    // res.json(req.user)
  });

router.get('/auth/logout', (req, res) => {
    req.logout();
    // req.session.destroy();
    res.redirect('http://localhost:3000/login');
});

router.post('/slack/msg',postMessage);
router.get('/slack',slackSignin);



module.exports = router;