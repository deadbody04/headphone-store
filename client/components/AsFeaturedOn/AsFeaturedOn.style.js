import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  featuredOn: {
    height: 440,
    background: '#ECECEC',
    color: '#000',
    [theme.breakpoints.down('sm')]: {
      height: 550,
    },
  },
  gridElement: {
    margin: '0 auto',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0)',
      marginTop: 10,
      textAlign: 'center',
      alignItems: 'center',
    },
  },
  title: {
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  paper: {
    verticalAlign: 'bottom',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  allContent: {
    maxWidth: 1185,
    margin: 'auto',
  },
  MainGrid: {
    paddingTop: '10%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '5%',
      width: '100%',
    },
  },
  secondGrid: {
    marginTop: '8%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
}))
