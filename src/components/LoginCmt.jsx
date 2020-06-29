import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const LoginCmt = () => {
  const { register, errors, handleSubmit } = useForm();

  const [datos, setDatos] = useState({
    nombre: '',
    password: ''
  });

  const handleInputChange = (e) => {
    //  console.log(e.target.value);
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const onSubmit = (data, e) => {
    console.log(data.nombre);
    e.target.reset();
  };

  const envio = (e) => {
    e.preventDefault();
    console.log(`
    rut : ${datos.nombre}
    password: ${datos.password} `);
  };
  const titulos = {
    titulo: 'USER LOGIN',
    rut: 'rut',
    pass: 'password',
    boton: 'LOGIN'
  };

  return (
    <Fragment>
      <h1> {titulos.titulo} </h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            id="standard-basic"
            label={titulos.rut}
            name="nombre"
            onChange={handleInputChange}
            ref={register({
              required: { value: true, message: ' rut es requerido' }
            })}
          />

          <span>{errors?.nombre?.message}</span>
        </div>
        <div>
          <TextField
            id="standard-basic"
            label={titulos.pass}
            name="password"
            onChange={handleInputChange}
            ref={register({
              required: { value: true, message: ' password es requerido' }
            })}
          />

          <span>{errors?.password?.message}</span>
        </div>
        <div>
          <button type="submit"> {titulos.boton} </button>
        </div>
      </form>
    </Fragment>
  );
};
export default LoginCmt;
