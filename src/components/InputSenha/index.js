import React, { useState } from 'react';

export default function InputSenha({ onChange, placeholder, width = '200px' }) {
  const [inputType, setInputType] = useState('password');

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        onChange={onChange}
        type={inputType}
        placeholder={placeholder}
        style={{ border: '1px solid #333', borderRadius: '5px', width }}
        className={`rounded-full h-[40px] p-3`}
      />
      <button
        type="button"
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={togglePasswordVisibility}
      >
      </button>
    </div>
  );
}
