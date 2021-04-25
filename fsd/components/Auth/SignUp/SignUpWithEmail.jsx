import {
  Typography,
  Grid,
  Button,
  Link,
  InputLabel,
  FormControl,
  IconButton,
} from '@material-ui/core'
import React from 'react'
import { useStyles, CssEmailField } from '../Login/LoginWithEmail.style'
import { Close, Facebook, GTranslate } from '@material-ui/icons'

export default function LoginUpWithEmail({ setForm }) {
  const classes = useStyles()
  const handleClickChangeState = () => {
    setForm(1)
  }
  const handleClickClose = () => {
    setForm(0)
  }

  return (
    <main>
      <Grid className={classes.mainGrid}>
        <Grid item className={classes.container}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h1" className={classes.headingSignUp}>
                Sign Up
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
                  &nbsp;Log In
                </Link>
              </Typography>
            </Grid>
            <Grid item className={classes.heading}>
              <Typography variant="h2">
                <FormControl className={classes.margin}>
                  <InputLabel shrink className={classes.labelText}>
                    Email
                  </InputLabel>
                  <CssEmailField variant="contained" />
                </FormControl>
              </Typography>
            </Grid>
            <Grid item className={classes.heading}>
              <Typography variant="h2">
                <FormControl className={classes.margin}>
                  <InputLabel shrink className={classes.labelText}>
                    Password
                  </InputLabel>
                  <CssEmailField variant="contained" />
                </FormControl>
              </Typography>
            </Grid>
            <Grid item className={classes.heading}>
              <Typography variant="h2">
                <Button variant="contained" className={classes.logButtonEmail}>
                  Sign Up
                </Button>
              </Typography>
            </Grid>
            <Grid item className={classes.heading}>
              <div className={classes.line}>
                <Typography variant="h2" className={classes.headingLine}>
                  or sign up with
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.logInSection}>
                <Link color="inherit" href="#" underline="none">
                  {' '}
                  <Facebook fontSize="large" className={classes.logInIconFa} />
                </Link>
                <Link color="inherit" href="#" underline="none">
                  {' '}
                  <GTranslate
                    fontSize="large"
                    className={classes.logInIconGoo}
                  />
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}
