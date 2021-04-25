import { withStyles, makeStyles } from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core'
import React from 'react'

export const CssEmailField = withStyles((theme) => ({
  root: {
    border: '0',
    width: '100%',
    'label + &': {
      marginTop: theme.spacing(2),
      color: '#FFF',
      '&:focus': {
        color: '#FFF',
      },
    },
  },
  input: {
    color: '#FFF',
    borderRadius: 0,
    position: 'relative',
    borderBottom: '1px solid #B0B0B0',
    fontSize: 16,
    paddingLeft: 2,
    '&:focus': {
      borderBottom: '1px solid #D0B48F !important',
    },
    '&:hover': {
      borderBottom: '1px solid #FFF',
    },
  },
}))(InputBase)

export const useStyles = makeStyles((theme) => ({
  labelText: {
    fontSize: 20,
    color: '#AFAFAF',
    '&.Mui-focused': {
      color: '#AFAFAF',
    },
  },
  mainGrid: {
    minWidth: '100%',
    height: '100vh',
    background: '#2D2D2D',
    color: '#FFF',
  },
  margin: {
    width: '100%',
  },
  container: {
    width: 325,
    position: 'relative',
    top: 'calc(50% - 230px)',
    margin: 'auto',
  },
  headingSignUp: {
    fontSize: 48,
    font: 'var(--ttlFnt,var(--font_2))',
    marginBottom: 20,
    width: '100%',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#FDFDFD',
    textDecoration: 'underline',
    '&:hover': {
      opacity: '0.8',
      transition: ' opacity .2s ease-in-out',
    },
  },
  passwordSection: {
    marginTop: 10,
  },
  logInSection: {
    marginTop: 25,
  },
  logInIconFa: {
    color: '#3B5998',
    marginRight: 20,
  },
  logInIconGoo: {
    color: '#FFF',
    fontSize: 30,
    marginRight: 20,
  },
  headingLogIn: {
    textDecoration: 'none',
    letterSpacing: 0.3,
    font: 'var(--fnt,var(--font_8))',
    fontSize: 16,
    marginBottom: 25,
  },
  linkStyle: {
    color: '#D9C0A1',
  },
  headingLine: {
    margin: '0 auto',
    font: 'var(--fnt,var(--font_8))',
    fontSize: 16,
    marginTop: 25,
    color: '#B0B0B0',
    backgroundColor: '#2D2D2D',
    width: 120,
    height: 40,
    zIndex: 100,
  },
  line: {
    width: 320,
    textAlign: 'center',
    height: 13,
    borderBottom: '1px solid #B0B0B0',
  },
  heading: {
    marginTop: 10,
    width: '100%',
  },
  closeButton: {
    position: 'fixed',
    touchAction: 'manipulation',
    top: 60,
    right: 60,
    background: 'none',
  },
  logButtonEmail: {
    margin: 'auto',
    width: '100%',
    height: 48,
    padding: 0,
    borderRadius: 0,
    background: '#CAAF8B',
    boxShadow: 'none',
    color: '#FFF',
    textAlign: 'center',
    transition: 'all 0.0s ease',
    textTransform: 'none',
    '&:hover': {
      color: '#2D2D3A',
      background: '#CAAF8B',
      transition: 'all 0.4s ease',
    },
  },
}))
