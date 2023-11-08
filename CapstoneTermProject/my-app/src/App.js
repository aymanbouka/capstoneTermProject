import logo from './logo.svg';
import './App.css';
import Welcome from './components/auth/Welcome';
import Home from './components/auth/Home';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import AuthDetails from './components/AuthDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="Home" element={<Home />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;