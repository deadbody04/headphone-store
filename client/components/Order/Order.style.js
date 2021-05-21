import { makeStyles, withStyles } from '@material-ui/core/styles'
import React from 'react'
import { Tab, Accordion } from '@material-ui/core'

export const AccordionCustom = withStyles({
  root: {
    padding: 0,
    margin: 0,
    background: 'transparent',
    borderBottom: 'none',
    boxShadow: 'none',
    color: '#fff',
    '& .MuiAccordionSummary-expandIcon': {
      color: '#fff',
    },
  },
})(Accordion)

export const AntTab = withStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
    border: 'solid 1px #FFF',
    textTransform: 'none',
    minWidth: 0,
    minHeight: 0,
    '& .MuiTab-icon': {
      minWidth: 0,
      minHeight: 0,
    },
  },
}))((props) => <Tab disableRipple {...props} />)

export const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    minHeight: 800,
    margin: 'auto',
    marginTop: 200,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10%',
    },
  },
  headerSection: {
    background: '#2D2D2D',
  },
  mainSection: {
    maxWidth: 900,
    margin: 'auto',
    color: '#FFF',
  },
  headphoneTitle: {
    fontSize: 26,
    lineHeight: '1.4em',
  },
  underTitle: {
    marginTop: 8,
    color: '#ECECEC',
    fontSize: 14,
  },
  price: {
    fontSize: 20,
    marginTop: 30,
  },
  colorSelectorText: {
    color: '#ECECEC',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 60,
  },
  buttonOrder: {
    marginTop: 30,
    width: 350,
    height: 40,
    padding: 0,
    borderRadius: 0,
    background: '#CAAF8B',
    boxShadow: 'none',
    color: '#000',
    font: 'var(--ttlFnt,var(--font_2))',
    textAlign: 'center',
    transition: 'all 0.0s ease',
    textTransform: 'none',
    '&:hover': {
      background: '#9F8B71',
      transition: 'all 0.4s ease',
    },
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
  },
  buttonBuy: {
    marginTop: 10,
    width: 350,
    height: 40,
    padding: 0,
    borderRadius: 0,
    background: '#FFF',
    boxShadow: 'none',
    color: '#000',
    font: 'var(--ttlFnt,var(--font_2))',
    textAlign: 'center',
    transition: 'all 0.0s ease',
    textTransform: 'none',
    '&:hover': {
      background: '#C0C0C0',
      transition: 'all 0.4s ease',
    },
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
  },
  colorSelection: {
    marginTop: 20,
  },
  quantitySpinner: {
    marginTop: 10,
  },
  switchBox: {
    width: 170,
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  headIcon: {
    width: 25,
    height: 30,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  imgBox: {
    minWidth: 500,
    minHeight: 500,
    [theme.breakpoints.down('sm')]: {
      minWidth: 300,
      minHeight: 300,
    },
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 300,
    },
  },
  bottomParagraph: {
    width: 460,
    marginTop: 20,
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
  },
  accordionHeading: {
    float: 'left',
    textTransform: 'uppercase',
    font: 'normal normal normal 16px/1.4em barlow-extralight,barlow,sans-serif',
    fontSize: 14,
  },
  accordionSection: {
    maxWidth: 360,
    marginTop: 50,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
    },
  },
  accordionLine: {
    color: '#FFF',
    background: '#FFF',
    height: '0.1em',
  },
  accordionParagraph: {
    font: 'normal normal normal 16px/1.4em barlow-extralight,barlow,sans-serif',
    fontSize: 14,
  },

  homeLink: {
    color: '#FFF',
  },
  nameOfModel: {
    opacity: 0.6,
  },
  linkSection: {
    color: '#FFF',
    marginTop: 50,
    marginBottom: 50,
    fontSize: 14,
  },
  secondGrid: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    },
  },
  colorTab: {
    borderRadius: '100%',
    width: 0,
    height: 25,
    marginTop: 5,
  },
  inputField: {
    marginTop: 5,
    paddingLeft: 5,
    background: '#FFF',
    borderBottom: 'solid 0px !important',
    color: '#000',
    border: 'none !important',
    width: 80,
    height: 40,
  },
  SubmitButton: {
    display: 'block',
    fontSize: 16,
    width: 'calc(100% - 30px)',
    height: 40,
    margin: '40px 15px 0px',
    backgroundColor: '#B29B7C',
    boxShadow:
      '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6',
    borderRadius: 4,
    color: '#fff',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 100ms ease-in-out',
    willChange: 'transform, background-color, box-shadow',
    '&:active': {
      backgroundColor: '#d782d9',
      boxShadow:
        '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08) inset 0 1px 0 #e298d8',
      transform: 'scale(0.99)',
    },
  },
  AppWrapper: {
    width: 500,
    height: 400,
    position: 'relative',
  },

  Form: {
    animation: 'fade 200ms ease-out',
  },

  FormGroup: {
    margin: '0 15px 20px',
    padding: 0,
    borderStyle: 'none',
    backgroundColor: '#7795f8',
    willChange: 'opacity, transform',
    boxShadow:
      ' 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #829fff',
    borderRadius: 4,
  },

  FormRow: {
    display: 'flex',
    flexAlign: 'center',
    alignItems: 'center',
    marginLeft: 15,
    borderTop: '1px solid #819efc',
  },
}))
