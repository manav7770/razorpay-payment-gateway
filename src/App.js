import React, { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';
import razorpayLogo from './razorpay-logo.png';
import xImage from './x.png';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={razorpayLogo} alt="Razorpay" className="logo" />
          <ul className="nav-links">
            <li>Products</li>
            <li>Use cases</li>
            <li>Developers</li>
            <li>Company</li>
            <li>Pricing</li>
          </ul>
          <button className="sign-in">Sign in</button>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="animate__animated animate__fadeInLeft">
            Payments infrastructure <br /> for the internet
          </h1>
          <p className="animate__animated animate__fadeInLeft animate__delay-1s">
            Millions of businesses of all sizes – from startups to large enterprises – use Razorpay’s software and APIs to accept payments, send payouts, and manage their businesses online.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start now</button>
            <button className="btn-secondary">Contact sales</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={xImage} alt="Payment mockup" className="animate__animated animate__fadeInRight" />
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Razorpay is committed to providing the best payment solutions for businesses worldwide. With our comprehensive suite of payment products, we enable businesses to accept payments, automate payouts, and manage their finances effectively.
        </p>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Have any questions? Reach out to us at <a href="mailto:support@razorpay.com">support@razorpay.com</a>.
        </p>
      </section>

      <footer className="App-footer">
        <p>&copy; 2024 Razorpay. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
