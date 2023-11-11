import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Voltar({rota = ''}) {
    return (
        <div>
            <Link href={`/${rota}`}>
                <div className='flex justify-start items-start w-[100vw] p-3'>
                    <FontAwesomeIcon color='#FAA834' className='self-start' size='2x' icon={faArrowLeft} />
                </div>
            </Link>
        </div>
    )
}
