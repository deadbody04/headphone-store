import React, { useCallback, useContext } from 'react'
import {
  Typography,
  Grid,
  Button,
  Link,
  InputLabel,
  FormControl,
  Input,
  Snackbar,
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Facebook, GTranslate } from '@material-ui/icons'

import { registerUser } from '../../../utils/_mocks_/auth'
import { AppContext } from '../../../store/providers/AppProvider'
import REGISTER_USER from '../../../graphql/mutations/RegisterUser'

import { useStyles } from '../AuthStyles/Auth.style'

export default function SignUpWithEmail({ ...props }) {
  const classes = useStyles()
  const router = useRouter()

  const { dispatch } = useContext(AppContext)
  const [register] = useMutation(REGISTER_USER)
  const { setForm, setOpen } = props
  const [openSnack, setOpenSnack] = React.useState(false)

  const homePage = () => {
    router.push('/')
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickChangeState = () => {
    setForm(1)
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

  const handleSubmit = useCallback(async (values) => {
    try {
      const data = await registerUser(dispatch, register, values)
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
                  <Snackbar
                    open={openSnack}
                    autoHideDuration={10000}
                    onClose={handleCloseSnack}
                  >
                    <Alert onClose={handleCloseSnack} severity="error">
                      Email or username already taken
                    </Alert>
                  </Snackbar>
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
