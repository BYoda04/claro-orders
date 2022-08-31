import React from 'react';
import dg from '../../imgs/dg.webp';
import claro from '../../imgs/claro.webp';

const Navtop = () => {
  return (
    <div className='navBx'>
      <div className='logoBx'>
        <div>
          <img src={dg} alt='dg-logo'/>
        </div>
        <div>
          <img src={claro} alt='distribuidor-autorizado'/>
        </div>
      </div>
    </div>
  );
};

export default Navtop;