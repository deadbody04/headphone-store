import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  mainSection: {
    height: 600,
    background: '#E3CBAA',
    color: '#FFF',
    [theme.breakpoints.down('sm')]: {
      height: 900,
    },
  },
  gridTextFirst: {
    maxWidth: 450,
    margin: 'auto',
  },
  gridTextSecond: {
    marginTop: '15%',
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
  textAbout: {
    paddingBottom: 30,
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  gridItems: {
    marginBlock: '10%',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  nameOfModel: {
    fontSize: 50,
  },
  aboutExperience: {
    fontSize: 15,
    maxWidth: 450,
    lineHeight: 2,
  },
}))
