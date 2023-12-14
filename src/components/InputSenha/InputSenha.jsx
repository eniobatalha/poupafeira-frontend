import React, { useState } from 'react';

export default function InputSenha({ register, placeholder, width = '200px', errors, onChange}) {
  const [inputType, setInputType] = useState('password');

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        {...register('senha', {
          required: 'Campo obrigatório',
          minLength: {
            value: 6,
            message: 'A senha deve ter no mínimo 6 caracteres',
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
            message: 'A senha deve ter no mínimo 6 caracteres usando obrigatoriamente letras e números',
          },
        })}
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
      {errors.senha && (
        <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
          {errors.senha.message}
        </p>
      )}
    </div>
  );
}
