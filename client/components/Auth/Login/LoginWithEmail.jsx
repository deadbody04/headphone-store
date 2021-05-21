import React, { useCallback, useContext } from 'react'
import {
  Typography,
  Grid,
  Button,
  Link,
  InputLabel,
  FormControl,
  Input,
} from '@material-ui/core'

import { useStyles } from '../AuthStyles/Auth.style'

import { useMutation } from '@apollo/client'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { loginUser } from '../../../utils/_mocks_/auth'
import { AppContext } from '../../../store/providers/AppProvider'
import Snackbar from '@material-ui/core/Snackbar'
import LOGIN_USER from '../../../graphql/mutations/LoginUser'
import { useRouter } from 'next/router'
import MuiAlert from '@material-ui/lab/Alert'

export default function LoginUpWithEmail({ ...props }) {
  const classes = useStyles()
  const router = useRouter()

  const { dispatch } = useContext(AppContext)
  const [login] = useMutation(LOGIN_USER)
  const [openSnack, setOpenSnack] = React.useState(false)
  const { setOpen, setForm } = props

  const homePage = () => {
    router.push('/')
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickChangeState = () => {
    setForm(0)
  }
  const handleClick = () => {
    setOpenSnack(true)
  }

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnack(false)
  }

  function Alert(props) {
    return <MuiAlert variant="filled" {...props} />
  }

  const handleSubmit = useCallback(async (values) => {
    try {
      const data = await loginUser(dispatch, login, values)
      if (data.user) {
        homePage()
        handleClose()
      } else {
        handleClick()
      }
    } catch (error) {
      handleClick()
    }
  }, [])

  const initialValues = {
    identifier: '',
    password: '',
  }

  const validationSchema = yup.object({
    identifier: yup
      .string()
      .email('Please enter correct email')
      .required('Email required'),
    password: yup
      .string()
      .min(6, 'Minimum length - 6')
      .required('Password required'),
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    validateOnMount: true,
  })

  return (
    <main>
      <Grid container className={classes.mainGrid}>
        <Grid item className={classes.container} style={{ marginTop: 0 }}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h1" className={classes.headingSignUp}>
                Log In
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" className={classes.headingLogIn}>
                New to this site?
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  className={classes.linkStyle}
                  onClick={handleClickChangeState}
                >
                  &nbsp;Sign Up
                </Link>
              </Typography>
            </Grid>
            <form className={classes.margin} onSubmit={formik.handleSubmit}>
              <Grid item className={classes.heading}>
                <Typography variant="h2">
                  <FormControl className={classes.margin}>
                    <InputLabel
                      shrink
                      className={
                        formik.touched.identifier && formik.errors.identifier
                          ? classes.labelError
                          : classes.labelText
                      }
                    >
                      Email
                    </InputLabel>
                    <Input
                      id="identifier"
                      onBlur={formik.handleBlur}
                      type="email"
                      name="identifier"
                      value={formik.values.identifier}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.identifier && formik.errors.identifier
                      }
                      className={
                        formik.touched.identifier && formik.errors.identifier
                          ? classes.inputError
                          : classes.inputDefault
                      }
                      disableUnderline={true}
                    />
                    <span className={classes.helperText}>
                      {formik.touched.identifier
                        ? formik.errors.identifier
                        : undefined}
                    </span>
                  </FormControl>
                </Typography>
              </Grid>
              <Grid item className={classes.heading}>
                <Typography variant="h2">
                  <FormControl className={classes.margin}>
                    <InputLabel
                      shrink
                      className={
                        formik.touched.password && formik.errors.password
                          ? classes.labelError
                          : classes.labelText
                      }
                    >
                      Password
                    </InputLabel>
                    <Input
                      id="password"
                      onBlur={formik.handleBlur}
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && formik.errors.password}
                      className={
                        formik.touched.password && formik.errors.password
                          ? classes.inputError
                          : classes.inputDefault
                      }
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
                <div className={classes.passwordSection}>
                  <Link className={classes.forgotPassword} href="#">
                    Forgot password?
                  </Link>
                  <Typography variant="h2">
                    <Button
                      variant="contained"
                      className={classes.logButtonEmail}
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Log in
                    </Button>
                    <Snackbar
                      open={openSnack}
                      autoHideDuration={10000}
                      onClose={handleCloseSnack}
                    >
                      <Alert onClose={handleCloseSnack} severity="error">
                        Wrong login or password
                      </Alert>
                    </Snackbar>
                  </Typography>
                </div>
              </Grid>
            </form>
            <Grid item>
              <div className={classes.line}>
                <Typography variant="h2" className={classes.headingLine}>
                  or log in with
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}
