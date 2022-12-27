import './App.css';
import Main from './components/Main';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <GoogleOAuthProvider clientId="1030940212866-9kjok0j0jlsk208su1d9mochm5p5n1pg.apps.googleusercontent.com">
      <Main />
    </GoogleOAuthProvider>
    
  );
}


export default App;
