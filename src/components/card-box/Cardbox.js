import React from 'react';

const Cardbox = ({order}) => {

  const monthArray = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const day = new Date(order?.installation).getDate();
  const month = new Date(order?.installation).getMonth();
  const progress = order?.status;

  return (
    <div className='cardBx'>
      <div className='title'>
        <h2>Cliente: {order.completName}</h2>
        <p>Servicio: {order.service}</p>
        <p>Fecha de Instalacion: {day} de {monthArray[month]}</p>
      </div>
      <div className='progressBx'>
        <div className={ progress === 'active' || progress === 'delivered' || progress === 'completed' ? 'completed' : '' }>
          <ion-icon name="checkmark-done-outline"></ion-icon>
          <span>Activo</span>
        </div>
        <span></span>
        <div className={ progress === 'delivered' || progress === 'completed' ? 'completed' : '' }>
          <ion-icon name="hourglass-outline"></ion-icon>
          <span>En proceso</span>
        </div>
        <span></span>
        <div className={ progress === 'completed' ? 'completed' : '' }>
          <ion-icon name="thumbs-up-outline"></ion-icon>
          <span>Entregado</span>
        </div>
      </div>
    </div>
  );
};

export default Cardbox;