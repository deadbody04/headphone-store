import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  reviewsBlock: {
    height: 640,
    background: '#FFF',
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      height: 800,
    },
  },
  reviewItem: {
    paddingTop: 146,
    height: 640,
    width: 'auto',
  },
  reviewsCaption: {
    fontSize: 25,
    letterSpacing: 15,
  },
  reviewsParagraph: {
    margin: '0 auto',
    marginTop: 45,
    fontSize: 36,
    lineHeight: 1.5,
    width: '80%',
  },
  reviewsAuthor: {
    marginTop: 74,
    fontSize: 18,
  },
  bottomLine: {
    height: 5,
    width: 76,
    borderTop: 'solid 1px #000',
    marginTop: 42,
    margin: 'auto',
  },
  indicator: {
    marginTop: 45,
  },
}))

export const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
}
export const indicatorStyles = {
  background: '#2D2D2D',
  width: 6,
  height: 6,
  display: 'inline-block',
  margin: '35px 6px',
  borderRadius: 100,
  cursor: 'pointer',
}
