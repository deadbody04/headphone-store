import { Typography, Grid, Button, Link, IconButton } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../AuthStyles/Sigin.Login.style'

export default function SignUp({ setForm }) {
  const classes = useStyles()

  const handleClickChangeState = () => {
    setForm(1)
  }
  const handleClickChangeStateToSign = () => {
    setForm(2)
  }

  return (
    <>
      <Grid item className={classes.container}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h1" className={classes.headingSignUp}>
              Sign up
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" className={classes.headingLogIn}>
              Already a member?
              <Link
                href="#"
                color="inherit"
                underline="none"
                className={classes.linkStyle}
                onClick={handleClickChangeState}
              >
                &nbsp;Log in
              </Link>
            </Typography>
          </Grid>
          <Grid item className={classes.heading}>
            <Typography variant="h2">
              <Button
                variant="contained"
                className={classes.logButton}
                style={{
                  background: '#4285F4',
                  border: 'solid 1px #4285F4',
                }}
                href={`&{process.env.STRAPI_API_URL}/connect/google`}
              >
                Sign up with Google
              </Button>
            </Typography>
          </Grid>
          <Grid item className={classes.heading}>
            <Typography variant="h2">
              <Button
                variant="contained"
                className={classes.logButton}
                style={{
                  background: '#3A558E',
                  border: 'solid 1px #3A558E',
                }}
                href={`&{process.env.STRAPI_API_URL}/connect/vk`}
              >
                Sign up with VKontakte
              </Button>
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.line}>
              <Typography variant="h2" className={classes.headingLine}>
                or
              </Typography>
            </div>
          </Grid>
          <Grid item className={classes.heading}>
            <Typography variant="h2">
              <Button
                variant="contained"
                className={classes.logButtonEmail}
                onClick={handleClickChangeStateToSign}
              >
                Sign up with email
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
