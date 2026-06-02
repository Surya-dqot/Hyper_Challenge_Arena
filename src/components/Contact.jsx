import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="page-container centered-page">
      <h2 className="page-title">Contact Us</h2>
      <p className="description">
        We're here to help! Whether you have a question about the game, encountered a bug, 
        or just want to share your high score, drop us a line below. Our support team 
        is available 24/7.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <Mail className="info-icon" size={32} />
            <h4>Email Us</h4>
            <p>support@shaahenterprises.com</p>
          </div>
          
          <div className="info-card">
            <MapPin className="info-icon" size={32} />
            <h4>Our Studio</h4>
            <p>123 Gaming Boulevard</p>
            <p>Tech District, NY 10001</p>
          </div>
          
          <div className="info-card">
            <Phone className="info-icon" size={32} />
            <h4>Call Us</h4>
            <p>+1 (555) 123-4567</p>
            <p>Mon-Fri, 9am - 5pm EST</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3 className="form-title">Send a Message</h3>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Your Name" required />
            <input type="email" className="form-input" placeholder="Your Email" required />
          </div>
          <select className="form-input">
            <option value="">Select Topic</option>
            <option value="support">Technical Support</option>
            <option value="feedback">Game Feedback</option>
            <option value="business">Business Inquiry</option>
            <option value="other">Other</option>
          </select>
          <textarea className="form-textarea" placeholder="Describe your issue or feedback in detail..." required></textarea>
          
          <button type="submit" className="btn-primary">
            <Send size={18} /> Submit Request
          </button>
        </form>
      </div>

      <section className="faq-section">
        <h3 className="section-title">Frequently Asked Questions</h3>
        <div className="faq-list">
          <div className="faq-item">
            <h4>How do I restore my purchases?</h4>
            <p>Go to the Settings menu in the app and tap "Restore Purchases". Ensure you are logged into the same app store account used for the original purchase.</p>
          </div>
          <div className="faq-item">
            <h4>My game keeps crashing. What should I do?</h4>
            <p>Please try clearing your device cache and ensuring you have the latest version of the game installed. If the issue persists, contact support with your device model and OS version.</p>
          </div>
          <div className="faq-item">
            <h4>Can I transfer my progress to a new device?</h4>
            <p>Yes! As long as you have linked your account to Google Play Games or Apple Game Center, your progress will automatically sync when you log in on a new device.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
