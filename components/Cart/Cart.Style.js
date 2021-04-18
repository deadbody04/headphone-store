import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  mainBlock: {
    background: '#2D2D2D',
    height: 500,
  },
  mainContainer: {
    width: 960,
    height: 400,
    margin: 'auto',
    paddingTop: 60,
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
  closeButton: {
    width: 20,
    height: 20,
  },
  firstGrid: {
    width: 615,
    height: 235,
    borderBottom: 'solid 1px #575757',
  },
  secondGrid: {
    width: 280,
    height: 235,
    marginLeft: 'auto',
    borderBottom: 'solid 1px #575757',
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
    width: '100%',
    color: '#FFF',
    fontSize: 20,
    borderBottom: 'solid 1px #575757',
  },
  subtotalPrice: {
    fontSize: 16,
    font: 'var(--fnt,var(--font_5))',
    color: '#FFF',
    opacity: 0.8,
  },
  shippingPrice: {
    fontSize: 16,
    font: 'var(--fnt,var(--font_5))',
    color: '#FFF',
    opacity: 0.8,
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
    '&:hover': {
      color: '#2D2D3A',
      background: '#CAAF8B',
      transition: 'all 0.4s ease',
    },
  },
  thirdGrid: {
    marginLeft: 'auto',
    width: 280,
  },
  totalPrice: {
    marginLeft: 'auto',
  },
  totalPriceBlock: {
    font: 'var(--fnt,var(--font_5))',
    color: '#FFF',
  },
}))
