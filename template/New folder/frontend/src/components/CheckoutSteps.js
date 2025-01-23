import React from 'react';

export default function CheckoutSteps(props) {
  const steps = ['Sign-In', 'Shipping', 'Payment', 'Place Order'];

  return (
    <div className="row checkout-steps">
      {steps.map((step, index) => (
        <div
          key={step}
          className={props[`step${index + 1}`] ? 'active' : ''}
        >
          {step}
        </div>
      ))}
    </div>
  );
}
