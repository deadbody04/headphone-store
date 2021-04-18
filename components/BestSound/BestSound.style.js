import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  mainSection: {
    height: 600,
    background: '#E3CBAA',
    color: '#FFF',
  },
  gridTextFirst: {
    maxWidth: 450,
    marginLeft: '25%',
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
  gridItems: {
    marginBlock: '10%',
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
