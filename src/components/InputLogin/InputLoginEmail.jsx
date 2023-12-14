import React from 'react';

export default function InputLoginEmail({register, onChange, placeholder, width = '200px',errors}) {
  return ( 
    <>
    <input
    {...register('email', {
      required: 'Insira seu Email para Logar',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Endereço de e-mail inválido'
      }
    })} 
    onChange={onChange} 
    placeholder={placeholder} 
    className={`border-current rounded-full w-[${width}] h-[40px] bg-white p-3 my-1.5`}
     />
     {errors.email && (
      <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
        {errors.email.message}
      </p>
    )}
    </>
  );
}
 