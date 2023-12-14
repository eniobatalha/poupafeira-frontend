import React, { useState } from 'react';

export default function ConfirmacaoSenha({ register, placeholder, width = '200px', watch,errors ,onChange}) {
  const [inputType, setInputType] = useState('password');

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const senha = watch('senha', '');

  return (
    <div style={{ position: 'relative' }}>
      <input
         {...register('confirmarSenha', {
            required: 'Campo obrigatório',
            validate: {
              matchesSenha: (value) => value === senha || 'As senhas não coincidem',
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

      {errors.confirmarSenha && (
        <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
          {errors.confirmarSenha.message}
        </p>
      )}

    </div>
  );
}
