import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  headerSection: {
    width: '100%',
    height: '752px',

    [theme.breakpoints.down('sm')]: {
      height: '550px',
    },
  },
  infoAboutHP: {
    color: '#FFF',
    height: 770,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 1000,
    },
  },
  mainGridCont: {
    height: 770,
    [theme.breakpoints.down('sm')]: {
      height: 1000,
    },
  },
  gridItems: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRight: '1px solid rgba(0,0,0,0)',
    backgroundClip: 'content-box',
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 250,
      borderBottom: '1px solid rgba(0,0,0,0)',
    },
  },
  gridTextFirst: {
    marginTop: '70%',
    width: '200px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      height: 250,
      marginTop: '5%',
      marginLeft: '5%',
      margin: 'auto',
    },
  },
  gridTexSecond: {
    marginTop: '45%',
    width: '200px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      height: 250,
      marginTop: '5%',
      marginLeft: '5%',
      margin: 'auto',
    },
  },
  featuredOn: {
    width: '100%',
  },
  bestSound: {
    width: '100%',
  },
  reviews: {
    width: '100%',
    height: 640,
  },
  parallaxImage: {
    width: '100%',
    height: 570,
    backgroundSize: 'cover',
  },
  innerColor: {
    width: '100%',
    height: 570,
    background: 'rgba(208, 180, 143, 0.3)',
  },
  emailDistribution: {
    width: '100%',
    height: 240,
  },
  otherLinks: {
    width: '100%',
    height: 230,
  },
  footer: {
    width: '100%',
    height: 66,
  },
  signUp: {
    width: '100%',
  },
}))
