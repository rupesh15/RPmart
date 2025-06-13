import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginScreen from './components/loginScreen.tsx';
import SignupScreen from './components/signUp.tsx';

function App() {
  return(
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<LoginScreen />} />
     <Route path="/Login" element={<LoginScreen />} />
     <Route path="/signup" element={<SignupScreen />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
