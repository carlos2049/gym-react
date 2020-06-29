import React from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import LoginCmt from '../components/LoginCmt';

const useStyle = makeStyles({
  root: {
    backgroundColor: '#e0f2f1'
  }
});

export default function Login() {
  const classes = useStyle();
  return (
    <>
      <Grid>
        <Container className={classes.root}>
          <LoginCmt></LoginCmt>
        </Container>
      </Grid>
    </>
  );
}
