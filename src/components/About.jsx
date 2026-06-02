import { Target, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="page-container centered-page">
      <h2 className="page-title">About Hyper Challenge Arena</h2>
      <p className="description">
        Hyper Challenge Arena is the ultimate destination for fast-paced, reflex-testing mini-games. 
        Designed to push your skills to the limit, our collection of games will challenge your memory, 
        reaction time, and precision.
      </p>

      <div className="contact-grid" style={{ marginTop: '3rem' }}>
        <div className="info-card">
          <Target className="info-icon" size={32} />
          <h4>Our Mission</h4>
          <p>To deliver pure, unadulterated fun through simple yet incredibly challenging gameplay mechanics that anyone can pick up but only a few can master.</p>
        </div>
        
        <div className="info-card">
          <Users className="info-icon" size={32} />
          <h4>The Team</h4>
          <p>We are a passionate team of indie developers who love arcade-style games. We believe in high-quality, responsive design and addictive gameplay loops.</p>
        </div>
        
        <div className="info-card">
          <Zap className="info-icon" size={32} />
          <h4>The Technology</h4>
          <p>Built with modern web technologies to ensure lightning-fast performance across all devices, providing a seamless experience whether you're on desktop or mobile.</p>
        </div>
      </div>
    </div>
  );
}
