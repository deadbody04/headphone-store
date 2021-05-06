import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  homePart: {
    padding: 0,
    height: 650,
    width: '100%',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0)',
  },
  textAbout: {
    color: '#FFF',
    marginTop: theme.spacing(3),
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
