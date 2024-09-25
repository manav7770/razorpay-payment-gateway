import React from 'react';
import './App.css';
import razorpayLogo from './razorpay-logo.png';  // You'll need to download and add Razorpay logo to your project

function App() {
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
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Payments infrastructure <br /> for the internet
          </h1>
          <p>
            Millions of businesses of all sizes – from startups to large enterprises – use Razorpay’s software and APIs to accept payments, send payouts, and manage their businesses online.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start now</button>
            <button className="btn-secondary">Contact us</button>
          </div>
        </div>
        <div className="hero-image">
          {/* A mockup or placeholder image for the payment form */}
          <img src="https://via.placeholder.com/200" alt="Payment mockup" />
        </div>
      </section>

      <footer className="App-footer">
        <p>&copy; 2024 manavchhattri. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
