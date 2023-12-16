import React from 'react';
import Link from 'next/link';
import nookies from 'nookies'
import { Box, Modal, Paper } from '@mui/material';
import Button from '../Button';
import styled from '@emotion/styled';

const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% - 125px);
`

export default function Logout({ rota = '' }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    console.log('logout')
    try {
      localStorage.clear();
      nookies.destroy(null, "auth.token", null);

    } catch (error) {
      console.error("logout error", error);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <ModalDiv>
          <Paper className='w-[250px] flex flex-col justify-center items-center p-3'>
            <h1>Você tem certeza que quer sair?</h1>
            <div className='flex justify-center items-center'>
              <Button width="100px" title='Logout' onClick={handleLogout} />
              <div onClick={handleClose} style={{ border: '1px solid #254969', borderRadius: '20px', color: '#254969' }} className='w-[100px] h-[40px] text-[12px] flex justify-center items-center my-6'><b>CANCELAR</b></div>
            </div>
          </Paper>
          
        </ModalDiv>
      </Modal>
      {/* <Link href={`/${rota}`} onClick={handleOpen}> */}
      <div onClick={handleOpen} className='flex justify-start items-start w-[100vw] p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAA834" className="w-9 h-9">
          <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>

      </div>
    </div>
  );
}
