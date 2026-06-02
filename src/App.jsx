import { Target } from 'lucide-react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Standard Website Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-brand" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Target className="brand-icon" size={24} />
          <span>HYPER CHALLENGE</span>
        </Link>
        
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/privacy-policy" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Privacy Policy
          </NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {/* Standard Footer */}
      <footer className="footer">
        <p>&copy; 2026 Hyper Challenge Arena. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

