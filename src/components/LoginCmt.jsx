import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  makeStyles,
  Grid,
  Card,
  FormControl,
  Button
} from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    backgroundColor: '#5c6bc0',
    height: '100%',
    width: '100%'
  },
  gridCampos: {
    backgroundColor: '#d1c4e9',
    height: '150%',
    width: '100%',
    padding: 30
  },
  gridCard: {
    backgroundColor: 'white',
    height: '40%',
    width: '60%'
  },
  gridBoton: {
    marginTop: 20,
    backgroundColor: '#89A5B0'
  },
  boton: {
    backgroundColor: '#89A5B0'
  }
});

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
    console.log(`rut : ${data.nombre}
     pass: ${data.password} `);

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

  const classes = useStyle();

  return (
    <Fragment>
      <Grid
        className={classes.root}
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <h1> {titulos.titulo} </h1>

        <Grid
          className={classes.gridCard}
          container
          alignItems="center"
          justify="center"
        >
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Grid container className={classes.gridCampos}>
              <TextField
                fullWidth
                id="standard-basic"
                label={titulos.rut}
                name="nombre"
                onChange={handleInputChange}
                inputRef={register({
                  required: { value: true, message: ' rut es requerido' }
                })}
              />

              <span>{errors?.nombre?.message}</span>

              <TextField
                fullWidth
                error={errors?.password ? true : false}
                id="standard-basic"
                label={
                  errors?.password ? errors?.password?.message : titulos.pass
                }
                name="password"
                onChange={handleInputChange}
                inputRef={register({
                  required: {
                    value: true,
                    message: 'el password es requerido '
                  }
                })}
              />

              {/* <span>{errors?.password?.message}</span> */}
            </Grid>
            <Grid className={classes.gridBoton}>
              <Button
                fullWidth
                component="button"
                type="submit"
                variant="contained"
                className={classes.boton}
              >
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default LoginCmt;
