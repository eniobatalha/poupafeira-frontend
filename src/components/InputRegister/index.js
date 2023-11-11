import React from 'react';

export default function InputRegister({ onChange, placeholder, width = '200px'}) {
  return ( <input onChange={onChange} placeholder={placeholder} style={{border: '1px solid #333', borderRadius: '5px', width}} className={`rounded-full h-[40px] p-3`} />
  );
}
 