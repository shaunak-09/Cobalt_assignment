const axios = require('axios');
const slackSignin = async (req, res) => {
    try{
    const result=await axios.post('https://slack.com/api/openid.connect.token',{
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,
        code: req.query.code,
        redirect_uri: 'https://singularly-enabling-bass.ngrok-free.app/api/slack',
    },
    {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    res.redirect(`http://localhost:3000/msgForm/${result.data.access_token}`);
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {slackSignin};