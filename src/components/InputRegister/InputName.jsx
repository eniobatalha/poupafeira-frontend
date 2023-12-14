import React from 'react';

export default function InputNome({ register , placeholder, width = '200px', onChange}) {

  return ( 
   <>
         <input 
        {...register('nome', {
          required: 'Este campo é obrigatório'
        })} 
        placeholder={placeholder} 
        onChange={onChange}
        style={{border: '1px solid #333', borderRadius: '5px', width}} 
        className={`rounded-full h-[40px] p-3`} 
      />
   </>
  );
}
 