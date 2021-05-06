import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  header: {
    background: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none',
    position: 'relative',
  },
  flexHead: {
    maxWidth: '98%',
  },
  headerMenu: {
    boxSizing: 'border-box',
    marginTop: -7,
    padding: 0,
    height: 108,
    borderBottom: '1px solid #fff',
  },
  menuLinks: {
    font: 'var(--fnt,var(--font_5))',
    fontSize: 13,
    marginLeft: theme.spacing(4.5),
    '&:hover': {
      transition: 'all 0.3s ease',
      color: '#D9C0A1',
    },
  },
  menuLink: {
    marginLeft: theme.spacing(4.5),
  },
  menuButtons: {
    marginRight: theme.spacing(1.5),
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  orderButton: {
    padding: 0,
    borderRadius: 0,
    background: '#CAAF8B',
    boxShadow: 'none',
    width: 75,
    height: 30,
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'capitalize',
    font: 'var(--fnt,var(--font_5))',
    '&:hover': {
      background: '#FFF',
    },
    [theme.breakpoints.down('sm')]: {
      width: 60,
      height: 30,
    },
  },
  homePart: {
    height: 650,
  },
  logText: {
    fontSize: 13,
    marginRight: 28,
    color: '#D0B48F',
    '&:hover': {
      color: '#7C6955',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    },
  },
  headIcon: {
    position: 'absolute',
    padding: 0,
    marginLeft: -40,
    fontSize: 32,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
    },
  },
  linkIcons: {
    position: 'relative',
    top: 6,
    fontSize: 22,
    color: '#FFF',
  },
  logInIcon: {
    fontSize: 30,
    color: '#D0B48F',
    top: 8,
  },
  mainGrid: {
    minWidth: '100%',
    height: '100vh',
    background: '#2D2D2D',
    color: '#FFF',
  },
  listStyles: {
    width: 380,
    height: '100%',
    background: '#2D2D2D',
  },
  firstList: {
    height: '100px',
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
    height: '80%',
    background: '#2D2D2D',
    paddingTop: 35,
  },
  thirdList: {
    height: 'auto',
    background: '#2D2D2D',
    color: '#FFF',
  },
  cartItem: {
    textAlign: 'center',
    color: '#FFF',
  },
  closeButton: {
    position: 'fixed',
    touchAction: 'manipulation',
    top: 60,
    right: 60,
    background: 'none',
  },
}))
