import React, { Fragment, useState } from 'react';

const Login = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    password: ''
  });

  const handleInputChange = (e) => {
    //  console.log(e.target.value);
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const envio = (e) => {
    e.preventDefault();
    console.log(`
    rut : ${datos.nombre}
    password: ${datos.password} `);
  };

  return (
    <Fragment>
      <h1>Login</h1>
      <form action="" onSubmit={envio}>
        <div>
          <label>rut</label>
          <input type="text" name="nombre" onChange={handleInputChange} />
        </div>
        <div>
          <label>password</label>
          <input type="text" name="password" onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">enviar</button>
        </div>
      </form>
    </Fragment>
  );
};
export default Login;
