import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  footerMainBlock: {
    width: '100%',
    height: 66,
    background: '#E3E3E3',
  },
  footerContainer: {},
  footerText: {
    margin: '0 auto',
    textAlign: 'center',
    verticalAlign: 'center',
    fontSize: '15px',
    color: '#2D2D2D',
    font: 'var(--font_8)',
    lineHeight: '66px',
  },
}))
