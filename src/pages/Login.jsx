import React from 'react';
import { Grid, Container, makeStyles, Card } from '@material-ui/core';
import LoginCmt from '../components/LoginCmt';

const useStyle = makeStyles({
  root: {
    backgroundColor: '#e0f2f1',
    height: '100vh'
  },
  grid: {
    height: '65%'
  }
});

export default function Login() {
  const classes = useStyle();
  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid component={Card} item xs={6} className={classes.grid}>
          <LoginCmt></LoginCmt>
        </Grid>
      </Grid>
    </>
  );
}
