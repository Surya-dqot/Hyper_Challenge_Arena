import { Target, Zap, Brain, Trophy, Gamepad2 } from 'lucide-react';

export default function MainPage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="logo-container">
          <div className="logo-glow"></div>
          <Target className="logo-icon" />
        </div>

        <div className="title-main">HYPER</div>
        <div className="title-sub">CHALLENGE</div>
        
        <div className="subtitle">PLAY • CHALLENGE • WIN • REPEAT</div>

        <p className="description">
          Dive into Hyper Challenge Arena, a stylish hyper-casual game collection. Challenge your reflexes and memory across 4 exciting mini-games and compete for the top spot—all within a stunning dark and light themed experience.
        </p>

        <div className="button-group">
          <button className="btn-primary">
            Play Now on Play Store
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">4 Exciting Mini-Games</h2>
        <p className="section-subtitle">Test different skills and push your limits.</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <Zap className="feature-icon" size={40} />
            <h3>Reflex Rush</h3>
            <p>Tap targets as fast as they appear. One mistake and you lose your streak. How fast are your fingers?</p>
          </div>
          
          <div className="feature-card">
            <Brain className="feature-icon" size={40} />
            <h3>Memory Matrix</h3>
            <p>Memorize the glowing patterns and repeat them perfectly. The matrix grows larger every round.</p>
          </div>
          
          <div className="feature-card">
            <Gamepad2 className="feature-icon" size={40} />
            <h3>Endless Runner</h3>
            <p>Navigate a neon-lit infinite path. Dodge obstacles, collect power-ups, and survive as long as possible.</p>
          </div>
          
          <div className="feature-card">
            <Trophy className="feature-icon" size={40} />
            <h3>Arena Boss</h3>
            <p>Face off against challenging patterns in a rhythmic boss fight. Only the best survive the Arena.</p>
          </div>
        </div>
      </section>

      {/* Leaderboard/Info Section */}
      <section className="info-section">
        <h2 className="section-title">Compete Globally</h2>
        <div className="info-content">
          <p>
            Hyper Challenge Arena isn't just about personal bests—it's about global domination. 
            Connect your account to climb the daily, weekly, and all-time leaderboards. 
            Earn exclusive badges, unlock new themes for your games, and show off your high scores 
            to players around the world.
          </p>
          <p>
            With our dynamic matchmaking, you can also challenge friends directly to see who has 
            the best reflexes and memory under pressure.
          </p>
          <div className="stats-container">
            <div className="stat-box">
              <h4>1M+</h4>
              <p>Downloads</p>
            </div>
            <div className="stat-box">
              <h4>50K</h4>
              <p>Daily Players</p>
            </div>
            <div className="stat-box">
              <h4>4.8</h4>
              <p>Star Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
