import React,{useEffect,useState} from 'react'
import axios from 'axios'
import SlackLogin from 'react-slack-login';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Landingpage() {
    const [userProfile, setUserProfile] = useState(null);
    const [slackToken, setSlackToken] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const parseCookies = (cookieString) => {
            return cookieString.split('; ').reduce((acc, cookie) => {
              const [name, value] = cookie.split('=');
              acc[name] = decodeURIComponent(value);
              return acc;
            }, {});
          };
          const token=localStorage.getItem('slackToken');
          setSlackToken(token)
      
          // Get all cookies
          const cookies = parseCookies(document.cookie);
          console.log(cookies);
      
          // Check if 'userProfile' cookie exists
          if (cookies.userProfile) {
            const userProfileData = JSON.parse(cookies.userProfile);
            console.log(userProfileData);
            setUserProfile(userProfileData);
            localStorage.setItem('token', (userProfileData.accessToken));
          }
          else {
            navigate('/login');
          }

    
    }, [])
    const onFailed = (error) => {
        console.log('Failed to sign in with Slack', error);
    }
 
    
  return (
    <div className='flex justify-evenly items-center h-[100vh] flex-row '>
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden w-[40%]">
      <div className="relative">
        <img src={userProfile?.user?.image} alt="Profile" className="h-64 w-full object-cover rounded-t-lg" />
      </div>
      <div className="px-6 py-10">
        <p className="font-bold text-xl mb-2">{userProfile?.user?.username}</p>
        <p className="text-sm text-gray-700">{userProfile?.user?.email}</p>
      </div>

    </div>

    {/* <SlackLogin
  redirectUrl='https://59eb-2405-201-9001-e097-b4cd-311e-a287-8a4e.ngrok-free.app/api/slack'
  onFailure={onFailed}
  onSuccess={onFailed}
  slackClientId='7100793984468.7095432996021'
  slackUserScope='openid profile'
/> */}
    {!slackToken || slackToken == 'undefined' ? 
    <a
      href="https://slack.com/openid/connect/authorize?scope=openid&amp;response_type=code&amp;
            redirect_uri=https://singularly-enabling-bass.ngrok-free.app/api/slack&amp;
            client_id=7100793984468.7095432996021"
      style={{
        alignItems: 'center',
        color: '#fff',
        backgroundColor: '#4A154B',
        border: '1px solid #ddd',
        borderRadius: '4px',
        display: 'inline-flex',
        fontFamily: 'Lato, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        height: '48px',
        justifyContent: 'center',
        textDecoration: 'none',
        width: '236px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '20px', width: '20px', marginRight: '12px' }}
        viewBox="0 0 122.8 122.8"
      >
        <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path>
        <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path>
        <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path>
        <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path>
      </svg>
      Sign in with Slack
    </a>
    :
    (
        <Link to="/msgForm/msg" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Message</Link>

    )

}
    

        
    </div>
  )
}

export default Landingpage