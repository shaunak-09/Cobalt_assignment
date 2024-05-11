const axios = require('axios');
const slackSignin = async (req, res) => {
    try{
    // console.log(req.cookies);
   
    const result=await axios.post('https://slack.com/api/openid.connect.token',{
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,
        code: req.query.code,
        redirect_uri: 'https://59eb-2405-201-9001-e097-b4cd-311e-a287-8a4e.ngrok-free.app/api/slack'
    },
    {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    // console.log(result.data);
    // console.log(result.data.access_token);
    req.session.slackToken=result.data.access_token;
    req.session.save();
    // res.cookie('slackToken', JSON.stringify(result.data.access_token));
    console.log(req.session);
    res.redirect(`http://localhost:3000/msgForm/${result.data.access_token}`);

    }
    catch(err){
        console.log(err);
    }
}
module.exports = {slackSignin};