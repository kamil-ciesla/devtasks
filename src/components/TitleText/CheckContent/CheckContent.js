import React, { useState } from 'react';

export const CheckContent = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <div style={{ border: '2px solid red', padding: '2rem' }}>
        {isOn ? 'turned on' : 'turned off'}
      </div>
      <button onClick={() => setIsOn(!isOn)}>Kamil Cieśla - dev tasks</button>
    </div>
  );
};
