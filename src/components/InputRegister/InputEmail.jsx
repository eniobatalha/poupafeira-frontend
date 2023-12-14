import React from 'react';

export default function InputEmail({ register, placeholder, width = '200px' , errors,onChange }) {
  return ( 
    <>
      <input 
        {...register('email', {
          required: 'Este campo é obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Endereço de e-mail inválido'
          }
        })} 
        onChange={onChange}
        placeholder={placeholder} 
        style={{border: '1px solid #333', borderRadius: '5px', width}} 
        className={`rounded-full h-[40px] p-3`} 
      />
      {errors.email && (
        <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
          {errors.email.message}
        </p>
      )}
    </>
  );
}
