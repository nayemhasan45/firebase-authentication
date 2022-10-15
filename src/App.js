import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.init';

const call = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleAuth = () => {
    signInWithPopup(call, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error:', error);
      })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleAuth}>google sign in</button>
    </div>
  );
}

export default App;
