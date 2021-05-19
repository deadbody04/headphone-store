import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  headerImg: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('https://static.wixstatic.com/media/82fcd3_1e4cb7a7053948998237a43286bee5bf~mv2_d_3840_1470_s_2.jpg/v1/fill/w_1903,h_752,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_1e4cb7a7053948998237a43286bee5bf~mv2_d_3840_1470_s_2.webp')`,
  },
  header: {
    background: 'rgba(0,0,0,0)',
    boxShadow: 'none',
    position: 'absolute',
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
    height: '70%',
    background: '#2D2D2D',
    paddingTop: 35,
    [theme.breakpoints.down('sm')]: {
      height: '60%',
    },
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
    [theme.breakpoints.down('sm')]: {
      top: 10,
      right: 10,
    },
  },
  tabs: {
    '&.selected': {
      background: 'transparent',
    },
    '&.MuiTabs-root': {
      position: 'absolute',
      zIndex: 99999,
    },
    '&.MuiTab-fullWidth:': {
      width: 100,
      height: 30,
    },
  },
  linkTab: {
    width: 0,
    height: 25,
    marginTop: 8,
    '&.selected': {
      background: 'transparent',
    },
    '&.MuiTab-root': {
      minWidth: 75,
      minHeight: 30,
      color: 'black',
      textAlign: 'center',
    },
  },
  linkTabEmpty: {
    width: 0,
    position: 'absolute',
    height: 0,
    borderRadius: '100%',
    '&.MuiTab-root': {
      minWidth: 0,
      minHeight: 0,
      color: 'black',
      fontSize: 0,
      textAlign: 'center',
      cursor: 'default',
    },
    '&.MuiTab-wrapped:': { minWidth: 77, minHeight: 0 },
  },
  fourList: {
    height: '5%',
    color: '#FFF',
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
  textAbout: {
    color: '#FFF',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginTop: 120,
    },
  },
  blockAbout: {
    position: 'relative',
    marginTop: '25%',
  },
  aboutExperience: {
    textTransform: 'capitalize',
    fontSize: 80,
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
  },
  nameOfModel: {
    fontSize: 16,
  },
  buttonOrder: {
    borderRadius: '0',
    borderColor: '#FFF',
    color: '#FFF',
    textTransform: 'capitalize',
    width: 170,
    height: 50,
    '&:hover': {
      transition: 'all 0.3s ease',
      background: '#FFF',
      color: '#AC9E76',
    },
  },
}))
