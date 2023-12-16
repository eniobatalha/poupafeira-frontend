import React, { useState } from 'react';

export default function InputLoginSenha({ register, placeholder, width = '200px', errors, onChange}) {
  const [inputType, setInputType] = useState('password');

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <>
      <input
        {...register('senha', {
          required: 'Insira sua senha para logar',
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
        className={`border-current rounded-full w-[${width}] h-[40px] bg-white p-3 my-1.5`}
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
        <p style={{ color: 'white', fontSize: '12px', marginTop: '5px' }}>
          {errors.senha.message}
        </p>
      )}
    </>
  );
}
