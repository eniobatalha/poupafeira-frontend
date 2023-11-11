import React from 'react';

export default function Button({title, onClick, width = '200px', height = '40px'}) {
  return ( <button onClick={onClick} style={{width, height}} className={`flex justify-center items-center rounded-lg bg-[#FAA834] p-3 text-center m-1`}><b>{title}</b></button>
  );
}
 