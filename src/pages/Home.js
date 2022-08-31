import React, { useState } from 'react';
import logo from '../imgs/claro-logo.webp'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cardbox from '../components/card-box/Cardbox';

const Home = () => {

  const { register, handleSubmit, reset } = useForm();
  const defaultValues = { dni: '' }
  const [orders,setOrders] = useState(null);
  const [err,setErr] = useState(false);

  const submit =async data=>{

    if (!data.dni.trim() || data.dni.trim().length < 8) {
      setErr(true);
    };

    try {
      const res = await axios.get(`http://localhost:4001/api/v1/orders/get/${data.dni.trim()}`);
      setOrders(res.data.orders);
      reset(defaultValues)
    } catch (error) {
      console.log(error);
    }
  };

  const change = value=>{
    value.value = value.value.replace(/[^0-9]/g,'')
    if (value.value.length >= 8) {
        return value.value = value.value.slice(0,8) 
    }
  };

  const reload = ()=>{
    window.location.reload();
  };

  return (
    <div className='main'>
      {
        orders ?
        <>
          {
            orders.length === 0 ?
            <div className='messageBx' onClick={()=>reload()}>
              <ion-icon name="reload-outline"></ion-icon>
              <span>No cuentas con pedidos en Claro actualmente</span>
            </div> :
            orders?.map(order=>(
              <Cardbox order={order} key={order.id}/>
            ))
          }
        </> :
        <form onSubmit={handleSubmit(submit)}>
          <div className='imgBx'>
            <img src={logo} alt='claro-logo'/>
          </div>
          <label className='form-label' htmlFor='dni'>Busque su orden ingresando su DNI:</label>
          <input type='number' className='form-control' id='dni' {...register('dni')} required onChange={e=>change(e.target)}/>
          {
            err ?
            <label className='infoBx' htmlFor='dni'>
              <ion-icon name="information-circle-outline"></ion-icon>
              <span>El campo del DNI no puede estar vacio y solo admite numeros</span>
            </label> :
            <></>
          }
          <button className='btn btn-primary'>BUSCAR</button>
        </form>
      }
    </div>
  );
};

export default Home;