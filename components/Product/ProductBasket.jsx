import React from 'react'
import { useStyles } from './Product.style'
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Link,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

export default function ProductBasket(props) {
  const classes = useStyles()
  const {
    product,
    removeProductFromCart,
    quantity,
    removeQuantity,
    addQuantity,
  } = props

  return (
    <Box className={classes.productBox}>
      <Container>
        <Link
          underline="none"
          className={classes.deleteButton}
          onClick={() => removeProductFromCart(product.id)}
        >
          <HighlightOffIcon />
        </Link>
        <Grid container>
          <Grid item>
            <Box>
              <img src={product.img} alt="hp" className={classes.productImg} />
            </Box>
          </Grid>
          <Grid item className={classes.secondProductGrid}>
            <Typography className={classes.productName}>
              Soundbeam ERD - 3083
            </Typography>
            <Typography className={classes.productPrice}>
              ${product.price}
            </Typography>
            <Box className={classes.inputSpinner}>
              <div className={classes.spinner}>
                <span
                  className={classes.minus}
                  onClick={() => removeQuantity(product.id)}
                >
                  -
                </span>
                {quantity}
                <span
                  className={classes.plus}
                  onClick={() => addQuantity(product.id)}
                >
                  +
                </span>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
