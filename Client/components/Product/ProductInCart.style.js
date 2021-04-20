import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  productBox: {
    width: 320,
    height: 120,
  },
  productImg: {
    width: 80,
    height: 80,
  },
  inputSpinner: {
    width: 65,
    height: 30,
    border: 'solid 1px #FFF',
  },
  spinner: {
    margin: 'auto',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: '25px',
  },
  minus: {
    marginRight: 8,
    cursor: 'pointer',
  },
  plus: {
    marginLeft: 8,
    cursor: 'pointer',
  },
  secondProductGrid: {
    width: 160,
    marginLeft: 20,
    color: '#FFF',
  },
  productName: {
    color: '#ECECEC',
  },
  productPrice: {
    color: '#FFF',
  },
  deleteButton: {
    color: '#fff',
    position: 'absolute',
    marginLeft: 280,
    cursor: 'pointer',
  },
})
