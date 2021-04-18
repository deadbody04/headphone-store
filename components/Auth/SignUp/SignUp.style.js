import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

export const useStyles = makeStyles((theme) => ({
  labelText: {
    fontSize: 20,
    color: '#FFF',
    '&:active': {
      color: '#FFF',
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
    color: '#B0B0B0',
    backgroundColor: '#2D2D2D',
    width: 40,
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
    marginTop: -15,
    width: '100%',
  },
  logButton: {
    margin: 'auto',
    width: '100%',
    border: 'solid 1px #AAAAAA',
    borderRadius: 0,
    boxShadow: 'none',
    color: '#FFF',
    background: 'transparent',
    transition: 'all 0.0s ease',
    textTransform: 'none',
    '&:hover': {
      background: 'transparent',
      border: 'solid 1px #FFF',
    },
  },

  logButtonEmail: {
    margin: 'auto',
    width: '100%',
    marginTop: 25,
    border: 'solid 1px #AAAAAA',
    borderRadius: 0,
    boxShadow: 'none',
    color: '#FFF',
    background: 'transparent',
    transition: 'all 0.0s ease',
    textTransform: 'none',
    '&:hover': {
      background: 'transparent',
      border: 'solid 1px #FFF',
    },
  },
}))
