import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  emailMainGrid: {
    height: 240,
    width: '100%',
    background: '#2D2D2D',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: 'auto',
    },
  },
  boxGrid: {
    width: 655,
    height: 128,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  stayConnected: {
    color: '#FFF',
    letterSpacing: '0.02em',
    marginLeft: 40,
    fontSize: 19,
  },
  emailField: {
    width: 263,
    height: 39,
    marginLeft: 72,
  },
  emailText: {
    marginLeft: 72,
    lineHeight: 1,
    marginBottom: 7,
    color: '#FFF',
    font: 'var(--fnt,var(--font_5))',
  },
  subscribeButton: {
    padding: 0,
    borderRadius: 0,
    background: '#CAAF8B',
    boxShadow: 'none',
    width: 111,
    height: 40,
    color: '#000',
    fontSize: 12,
    marginRight: 18,
    textTransform: 'capitalize',
    font: 'var(--fnt,var(--font_5))',
    '&:hover': {
      background: '#FFF',
    },
  },
}))

export const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'solid 1px #CAAF8B',
        borderRadius: 0,
      },
      '&:hover fieldset': {
        border: 'solid 3px #CAAF8B',
        borderRadius: 0,
      },
      '&.Mui-focused fieldset': {
        border: 'solid 3px #CAAF8B',
        borderRadius: 0,
      },
      '& .MuiInputBase-root.Mui-disabled': {
        color: 'rgba(1, 220, 220,0.0)',
      },
      '& .MuiOutlinedInput-input': {
        color: '#FFF',
        fontSize: 15,
      },
    },
  },
})(TextField)
