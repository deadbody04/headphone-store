import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  fullPage: {
    width: '100%',
    background: '#2D2D2D',
  },
  mainBlock: {
    background: '#2D2D2D',
    height: '100vh',
  },
  mainContainer: {
    width: 960,
    margin: 'auto',
    paddingTop: 30,
    minHeight: 600,
    maxHeight: 700,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  emptyCart: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 26,
    alignItems: 'center',
    margin: 'auto',
    color: '#fff',
  },
  emptyCartTitle: {
    fontSize: 24,
    marginTop: 80,
  },
  linkContinue: {
    marginTop: 20,
    cursor: 'pointer',
    fontSize: 16,
    textDecoration: 'underline',
    color: '#FFF',
  },
  productInCart: {
    paddingBottom: 30,
    paddingTop: 30,
    borderBottom: 'solid 1px #575757',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  imgBox: {
    border: 'solid 1px #585858',
    width: 101,
    height: 101,
  },
  headphoneImg: {
    width: 98,
    height: 98,
  },
  inputSpinner: {
    width: 75,
    height: 30,
  },
  headphoneName: {
    fontSize: 16,
    font: 'var(--fnt,var(--font_5))',
    color: '#FFF',
  },
  priceText: {
    fontSize: 14,
    color: '#FFF',
    opacity: 0.6,
    font: 'var(--fnt,var(--font_5))',
    marginTop: 15,
  },
  colorText: {
    fontSize: 14,
    color: '#FFF',
    opacity: 0.6,
    font: 'var(--fnt,var(--font_5))',
    marginTop: 8,
  },
  titleBox: {
    marginLeft: 15,
  },
  inputBox: {
    marginLeft: 95,
    color: '#FFF',
  },
  priceBox: {
    marginLeft: 50,
    color: '#FFF',
    font: 'var(--fnt,var(--font_5))',
  },
  iconBox: {
    marginLeft: 15,
    color: '#FFF',
  },
  closeLink: {
    cursor: 'pointer',
    width: 10,
    height: 10,
    color: '#FFF',
    font: 'var(--fnt,var(--font_5))',
  },
  spinner: {
    margin: 'auto',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: '25px',
  },
  minus: {
    marginRight: 15,
    cursor: 'pointer',
  },
  plus: {
    marginLeft: 15,
    cursor: 'pointer',
  },
  spinnerBox: {
    width: 80,
    height: 30,
    border: 'solid 1px #A0A0A0',
    '&:hover': {
      border: 'solid 1px #FFF',
    },
  },
  closeButton: {
    width: 20,
    height: 20,
  },
  firstGrid: {
    marginTop: 120,
    width: 615,
    height: 235,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  secondGrid: {
    marginTop: 120,
    width: 280,
    height: 235,
    marginLeft: 'auto',
    borderBottom: 'solid 1px #575757',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 0,
    },
  },
  thirdGrid: {
    marginLeft: 'auto',
    width: 280,
    marginTop: 100,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  boxTitleFirst: {
    color: '#FFF',
    width: '100%',
    marginBottom: 30,
    fontSize: 20,
    paddingBottom: 10,
    borderBottom: 'solid 1px #575757',
  },
  boxTitleSecond: {
    color: '#FFF',
    width: '100%',
    marginBottom: 30,
    fontSize: 20,
    paddingBottom: 10,
    borderBottom: 'solid 1px #575757',
  },
  orderBox: {
    width: '100%',
  },
  subtotalPriceBox: {
    width: '100%',
    font: 'var(--fnt,var(--font_5))',
    color: '#FFF',
    opacity: 0.8,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  subtotalPrice: {
    fontSize: 16,
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
  },
  subtotalPriceRight: {
    marginLeft: 'auto',
  },
  shippingPriceBox: {
    width: '100%',
    font: 'var(--fnt,var(--font_5))',
    color: '#FFF',
    opacity: 0.8,
    marginTop: 25,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  shipping: {
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
    },
  },
  shippingPrice: {
    fontSize: 16,
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 20,
    },
  },
  checkoutButton: {
    width: '100%',
    height: 40,
    padding: 0,
    borderRadius: 0,
    background: '#CAAF8B',
    boxShadow: 'none',
    color: '#FFF',
    textAlign: 'center',
    transition: 'all 0.0s ease',
    textTransform: 'none',
    marginTop: 20,
    '&:hover': {
      color: '#2D2D3A',
      background: '#CAAF8B',
      transition: 'all 0.4s ease',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: -50,
    },
  },
  totalPrice: {
    font: 'var(--fnt,var(--font_5))',
    color: '#FFF',
    opacity: 0.8,
    marginLeft: 'auto',
  },
  totalPriceBlock: {
    font: 'var(--fnt,var(--font_5))',
    color: '#FFF',
  },
}))
