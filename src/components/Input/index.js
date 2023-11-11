import React from 'react';

export default function Input({ onChange, placeholder, width = '200px'}) {
  return ( <input onChange={onChange} placeholder={placeholder} className={`border-current rounded-full w-[${width}] h-[40px] bg-white p-3 my-1.5`} />
  );
}
 