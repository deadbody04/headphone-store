import React, { useCallback, useContext, useEffect, useState } from 'react'
import {
  Typography,
  Grid,
  Button,
  Link,
  InputLabel,
  FormControl,
  Input,
  IconButton,
} from '@material-ui/core'

import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Close, Facebook, GTranslate } from '@material-ui/icons'

import { registerUser } from '../../../utils/_mocks_/auth'
import { AppContext } from '../../../store/providers/AppProvider'
import REGISTER_USER from '../../../graphql/mutations/RegisterUser'
import { errorMessage } from '../../../utils/_mocks_/errorMessage'

import { useStyles } from '../AuthStyles/Auth.style'
import Snackbar from '@material-ui/core/Snackbar'

export default function LoginUpWithEmail({ setForm }) {
  const classes = useStyles()

  const { state, dispatch } = useContext(AppContext)
  const [register] = useMutation(REGISTER_USER)
  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const initialValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const validationSchema = yup.object({
    username: yup.string().required('Login required'),
    email: yup
      .string()
      .email('Please enter correct email')
      .required('Email required'),
    password: yup
      .string()
      .min(6, 'Minimum length - 6')
      .required('Password required'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm password'),
  })

  const handleClickChangeState = () => {
    setForm(1)
  }
  const handleSubmit = useCallback(async (values) => {
    try {
      const data = await registerUser(dispatch, register, values)
      if (data.user) {
        return (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  UNDO
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <Close fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        )
      } else {
        return (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  Successful registration
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <Close fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        )
      }
    } catch (error) {
      return (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <Close fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      )
    }
  }, [])

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    validateOnMount: true,
  })

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
            <form className={classes.container} onSubmit={formik.handleSubmit}>
              <Grid item className={classes.heading}>
                <Typography variant="h2">
                  <FormControl
                    className={classes.margin}
                    onSubmit={formik.handleSubmit}
                  >
                    <InputLabel
                      shrink
                      name="username"
                      className={
                        formik.touched.username && formik.errors.username
                          ? classes.labelError
                          : classes.labelText
                      }
                    >
                      Username
                    </InputLabel>
                    <Input
                      variant="contained"
                      onBlur={formik.handleBlur}
                      onSubmit={formik.handleSubmit}
                      className={
                        formik.touched.username && formik.errors.username
                          ? classes.inputError
                          : classes.inputDefault
                      }
                      id="username"
                      type="text"
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      error={formik.touched.username && formik.errors.username}
                      disableUnderline={true}
                    />
                    <span className={classes.helperText}>
                      {formik.touched.username
                        ? formik.errors.username
                        : undefined}
                    </span>
                  </FormControl>
                </Typography>
              </Grid>
              <Grid item className={classes.heading}>
                <Typography variant="h2">
                  <FormControl
                    className={classes.margin}
                    onSubmit={formik.handleSubmit}
                  >
                    <InputLabel
                      shrink
                      name="email"
                      className={
                        formik.touched.email && formik.errors.email
                          ? classes.labelError
                          : classes.labelText
                      }
                    >
                      Email
                    </InputLabel>
                    <Input
                      variant="contained"
                      id="email"
                      type="email"
                      name="email"
                      onBlur={formik.handleBlur}
                      className={
                        formik.touched.email && formik.errors.email
                          ? classes.inputError
                          : classes.inputDefault
                      }
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      disableUnderline={true}
                    />
                    <span className={classes.helperText}>
                      {formik.touched.email ? formik.errors.email : undefined}
                    </span>
                  </FormControl>
                </Typography>
              </Grid>
              <Grid item className={classes.heading}>
                <Typography variant="h2">
                  <FormControl
                    className={classes.margin}
                    onSubmit={formik.handleSubmit}
                  >
                    <InputLabel
                      shrink
                      name="password"
                      className={
                        formik.touched.password && formik.errors.password
                          ? classes.labelError
                          : classes.labelText
                      }
                    >
                      Password
                    </InputLabel>
                    <Input
                      variant="contained"
                      onBlur={formik.handleBlur}
                      className={
                        formik.touched.password && formik.errors.password
                          ? classes.inputError
                          : classes.inputDefault
                      }
                      id="password"
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && formik.errors.password}
                      disableUnderline={true}
                    />
                    <span className={classes.helperText}>
                      {formik.touched.password
                        ? formik.errors.password
                        : undefined}
                    </span>
                  </FormControl>
                </Typography>
              </Grid>
              <Grid item className={classes.heading}>
                <Typography variant="h2">
                  <FormControl
                    className={classes.margin}
                    onSubmit={formik.handleSubmit}
                  >
                    <InputLabel
                      shrink
                      className={
                        formik.touched.passwordConfirm &&
                        formik.errors.passwordConfirm
                          ? classes.labelError
                          : classes.labelText
                      }
                    >
                      Confirm password
                    </InputLabel>
                    <Input
                      variant="contained"
                      onBlur={formik.handleBlur}
                      className={
                        formik.touched.passwordConfirm &&
                        formik.errors.passwordConfirm
                          ? classes.inputError
                          : classes.inputDefault
                      }
                      id="passwordConfirm"
                      type="password"
                      name="passwordConfirm"
                      value={formik.values.passwordConfirm}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.passwordConfirm &&
                        formik.errors.passwordConfirm
                      }
                      disableUnderline={true}
                    />
                    <span className={classes.helperText}>
                      {formik.touched.passwordConfirm
                        ? formik.errors.passwordConfirm
                        : undefined}
                    </span>
                  </FormControl>
                </Typography>
              </Grid>
              <Grid item className={classes.heading}>
                <Typography variant="h2">
                  <Button
                    variant="contained"
                    className={classes.logButtonEmail}
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Sign Up
                  </Button>
                </Typography>
              </Grid>
            </form>
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
                  <Facebook fontSize="large" className={classes.logInIconFa} />
                </Link>
                <Link color="inherit" href="#" underline="none">
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
