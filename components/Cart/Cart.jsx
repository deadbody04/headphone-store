import {
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  IconButton,
  Link,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useStyles } from './Cart.style'
import React from 'react'
import Header from '../Menu/Header'
import EmailDistribution from '../EmailDistribution/EmailDistribution'
import OtherLinks from '../OtherLinks/OtherLinks'
import Footer from '../Footer/Footer'

export default function Cart(props) {
  const {
    product,
    removeProductFromCart,
    quantity,
    removeQuantity,
    addQuantity,
  } = props

  const classes = useStyles()

  return (
    <main>
      <Header />
      <Box className={classes.mainBlock}>
        <Grid container item className={classes.mainContainer}>
          <Grid container item className={classes.firstGrid}>
            <Typography className={classes.boxTitleFirst}>My Cart</Typography>
            <Grid item className={classes.imgBox}>
              <img
                src={product.img}
                className={classes.headphoneImg}
              />
            </Grid>
            <Grid item className={classes.titleBox}>
              <Typography className={classes.headphoneName}>
                Soundbeam ERD - 3083
              </Typography>
              <Typography className={classes.priceText}>${product.price}</Typography>
              <Typography className={classes.colorText}>
                Color: {product.color}
              </Typography>
            </Grid>
            <Grid item className={classes.inputBox}>
              <Typography className={classes.paper}>
                <TextField
                  variant="outlined"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    inputProps: {
                      max: 10,
                      min: 1,
                      step: 1,
                      type: 'number',
                      defaultValue: 1,
                    },
                  }}
                  className={classes.inputSpinner}
                />
              </Typography>
            </Grid>
            <Grid item className={classes.priceBox}>
              <Typography className={classes.paper}>$299.00</Typography>
            </Grid>
            <Grid item className={classes.iconBox}>
              <IconButton underline="none" className={classes.closeLink}>
                <Close className={classes.closeButton} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container item className={classes.secondGrid}>
            <Typography className={classes.boxTitleSecond}>Order</Typography>
            <Grid item className={classes.imgBox}></Grid>
            <Grid item className={classes.titleBox}>
              <Typography className={classes.subtotalPrice}>
                Subtotal
              </Typography>
              <Typography className={classes.shippingPrice}>
                Shipping
              </Typography>
              <Typography className={classes.geolocationTitle}>
                Altayskiy Kray, Russia
              </Typography>
            </Grid>
          </Grid>
          <Grid container item className={classes.thirdGrid}>
            <Grid container item className={classes.totalPriceBlock}>
              <Typography>Total</Typography>
              <Typography className={classes.totalPrice}>$299</Typography>
            </Grid>
            <Grid container item>
              <Button variant="contained" className={classes.checkoutButton}>
                Checkout
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <EmailDistribution />
      <OtherLinks />
      <Footer />
    </main>
  )
}
