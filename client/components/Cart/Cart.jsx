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
  const classes = useStyles()

  const {
    product,
    removeProductFromCart,
    quantity,
    removeQuantity,
    addQuantity,
    carts,
    setOpen,
  } = props

  const handleClose = () => {
    setOpen(false)
  }

  const itemsPrice = carts.reduce(
    (resPrice, curElement) =>
      resPrice + curElement.product.price * curElement.quantity,
    0
  )

  return (
    <main className={classes.fullPage}>
      <Header />
      <Box className={classes.mainBlock}>
        <Grid container item className={classes.mainContainer}>
          {carts.length !== 0 ? (
            <>
              <Grid container item className={classes.firstGrid}>
                <Typography className={classes.boxTitleFirst}>
                  My Cart
                </Typography>
                {carts.map(({ product, quantity }) => (
                  <Grid
                    item
                    container
                    className={classes.productInCart}
                    key={product.id}
                  >
                    <Grid item className={classes.imgBox}>
                      <img
                        src={product.img}
                        alt="headphone icon"
                        className={classes.headphoneImg}
                      />
                    </Grid>
                    <Grid item className={classes.titleBox}>
                      <Typography className={classes.headphoneName}>
                        Soundbeam ERD - 3083
                      </Typography>
                      <Typography className={classes.priceText}>
                        ${product.price}
                      </Typography>
                      <Typography className={classes.colorText}>
                        Color: {product.paragraph}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.inputBox}>
                      <Box className={classes.spinnerBox}>
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
                    <Grid item className={classes.priceBox}>
                      <Typography className={classes.paper}>$299.00</Typography>
                    </Grid>
                    <Grid item className={classes.iconBox}>
                      <IconButton
                        underline="none"
                        className={classes.closeLink}
                        onClick={() => removeProductFromCart(product.id)}
                      >
                        <Close className={classes.closeButton} />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid container item className={classes.secondGrid}>
                <Typography className={classes.boxTitleSecond}>
                  Order Summary
                </Typography>
                <Grid item className={classes.orderBox}>
                  <Grid container item className={classes.subtotalPriceBox}>
                    <Typography className={classes.subtotalPrice}>
                      Subtotal
                    </Typography>
                    <Typography className={classes.subtotalPriceRight}>
                      ${itemsPrice}
                    </Typography>
                  </Grid>
                  <Grid container item className={classes.shippingPriceBox}>
                    <Typography className={classes.shipping}>
                      Shipping
                    </Typography>
                    <Typography className={classes.shippingPrice}>
                      Free
                    </Typography>
                  </Grid>
                  <Typography className={classes.geolocationTitle}>
                    Altayskiy Kray, Russia
                  </Typography>
                </Grid>
                <Grid container item className={classes.thirdGrid}>
                  <Grid container item className={classes.totalPriceBlock}>
                    <Typography>Total</Typography>
                    <Typography className={classes.totalPrice}>
                      ${itemsPrice}
                    </Typography>
                  </Grid>
                  <Grid container item>
                    <Button
                      variant="contained"
                      className={classes.checkoutButton}
                    >
                      Checkout
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid className={classes.emptyCart}>
              <Typography className={classes.emptyCartTitle}>
                Cart is empty
              </Typography>
              <br />
              <Link onClick={handleClose} className={classes.linkContinue}>
                Continue Shopping
              </Link>
            </Grid>
          )}
        </Grid>
      </Box>
      <EmailDistribution />
      <OtherLinks />
      <Footer />
    </main>
  )
}
