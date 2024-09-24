import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './App.css';  // We will add custom CSS here later

function App() {
  const [email, setEmail] = useState('');

  const handleToken = async (token) => {
    const response = await fetch('http://localhost:5000/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, email }),
    });

    if (response.ok) {
      alert('Payment Successful');
    } else {
      alert('Payment Failed');
    }
  };

  return (
    <div className="App">
      <h1>Payment Gateway</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StripeCheckout
        stripeKey="YOUR_STRIPE_PUBLISHABLE_KEY"
        token={handleToken}
        amount={5000}
        name="Payment"
        email={email}
      />
    </div>
  );
}

export default App;
