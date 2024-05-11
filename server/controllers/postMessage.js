const { WebClient } = require('@slack/web-api');
const axios=require('axios');


 const postMessage=async (req, res) => {
    try{
        // console.log(req.session);
        // console.log(req.cookies);
    const token = req.body.token;
    const apptoken=process.env.SLACK_TOKEN;
    const web = new WebClient(apptoken);
    console.log(token);
    const user = await axios.get('https://slack.com/api/openid.connect.userInfo', {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Bearer ${token}`
  }
});
     console.log(user);

    const result = await web.chat.postMessage({
        text: `New User Joined\nName:${user.data.name}`,
        channel: req.body.channel_name,
      });
    
    res.json("Message Sent!").status(200);
    }
    catch(err){
        console.log(err);
        res.json(err).status(500);
    }
}



module.exports = {postMessage};