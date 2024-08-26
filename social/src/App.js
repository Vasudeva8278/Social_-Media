import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';

import HomePage from './pages/HomePage';

import Register from './components/auth/Register';
import ProfilePage from './pages/Profilepage';

function App() {
  return (
    
    <Router>
      <h1>vasudevc</h1>
      <Routes>
        
        
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
