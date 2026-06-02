import { useState } from 'react';
import { Target } from 'lucide-react';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <MainPage />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="app-container">
      {/* Standard Website Navbar */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => setCurrentPage('main')}>
          <Target className="brand-icon" size={24} />
          <span>HYPER CHALLENGE</span>
        </div>
        
        <div className="nav-links">
          <button 
            className={`nav-link ${currentPage === 'main' ? 'active' : ''}`}
            onClick={() => setCurrentPage('main')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contact')}
          >
            Contact
          </button>
          <button 
            className={`nav-link ${currentPage === 'privacy' ? 'active' : ''}`}
            onClick={() => setCurrentPage('privacy')}
          >
            Privacy Policy
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Standard Footer */}
      <footer className="footer">
        <p>&copy; 2026 Hyper Challenge Arena. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
