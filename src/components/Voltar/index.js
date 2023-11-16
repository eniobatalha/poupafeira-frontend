import React from 'react';
import Link from 'next/link';

export default function Voltar({ rota = '' }) {
    return (
        <div>
            <Link href={`/${rota}`}>
                <div className='flex justify-start items-start w-[100vw] p-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAA834" class="w-9 h-9">
                    <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
                </svg>
                </div>
            </Link>
        </div>
    );
}
