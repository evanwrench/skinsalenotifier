import { GoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';

const Login = () => {

    const loginSuccess = (response) => { 
      fetch("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + gapi.client.getToken().access_token)
      .then((response) => response.json())
      .then((user) => {
        console.log(user.email);
      });

      // Update check marks?
    }

    const loginFail = (response) => {
        console.log("failure");
    }

  return (
    <div>
        <GoogleLogin
        onSuccess={loginSuccess}
        onError={loginFail}
        />;
    </div>
  )
}

export default Login