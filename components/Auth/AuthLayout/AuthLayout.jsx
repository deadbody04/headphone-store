import { Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../SignUp/SignUp.style'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'

export default function AuthLayout() {
  const classes = useStyles()

  return (
    <main>
      <Grid className={classes.mainGrid}>
        {' '}
        {form === 1 ? (
          <SignUp setForm={setForm} />
        ) : (
          <Login setForm={setForm} />
        )}{' '}
      </Grid>
    </main>
  )
}
