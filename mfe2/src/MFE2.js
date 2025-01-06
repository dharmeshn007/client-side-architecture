import React from 'react';
import './MFE2.scss';

const MFE2 = () => (
  <div className="mfe2">
    <h2>Premium Payment</h2>
    <form>
      <label>
        Policy Number:
        <input type="text" required />
      </label>
      <label>
        Amount:
        <input type="number" required />
      </label>
      <button type="submit">Pay Now</button>
    </form>
  </div>
);

export default MFE2;
