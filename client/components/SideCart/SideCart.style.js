import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  listStyles: {
    width: 380,
    height: '100%',
    background: '#2D2D2D',
    overflow: 'hidden',
  },
  firstList: {
    height: 100,
    background: '#FFF',
  },
  basketTitle: {
    lineHeight: '100px',
  },
  cartTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginLeft: '28%',
  },
  chevronIcon: {
    marginTop: -5,
  },
  secondList: {
    height: '70%',
    background: '#2D2D2D',
    paddingTop: 35,
    overflow: 'hidden',
  },
  thirdList: {
    height: '10%',
    background: '#2D2D2D',
    color: '#FFF',
    fontSize: 20,
  },
  fourList: {
    height: '5%',
    color: '#FFF',
  },
  cartItem: {
    textAlign: 'center',
    color: '#FFF',
  },
  lineUnderProduct: {
    marginBottom: 30,
    background: '#575757',
  },
  viewCartButton: {
    margin: 'auto',
    width: '100%',
    height: 40,
    padding: 0,
    borderRadius: 0,
    background: '#CAAF8B',
    boxShadow: 'none',
    color: '#000',
    textAlign: 'center',
    transition: 'all 0.0s ease',
    textTransform: 'none',
    '&:hover': {
      color: '#000',
      background: '#CAAF8B',
      transition: 'all 0.4s ease',
    },
  },
  fullPrice: {
    fontSize: 26,
    lineHeight: 1.5,
    font: 'var(--fnt,var(--font_8))',
  },
}))
