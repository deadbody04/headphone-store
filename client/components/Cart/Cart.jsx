import React from 'react'
import { Typography, Button, Grid, Box, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useStyles } from './Cart.style'
import EmailDistribution from '../EmailDistribution/EmailDistribution'
import OtherLinks from '../OtherLinks/OtherLinks'
import Footer from '../Footer/Footer'
import ProductInCart from '../Product/ProductInCart'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export default function Cart(props) {
  const classes = useStyles()
  const theme = useTheme()
  const {
    product,
    removeProductFromCart,
    quantity,
    removeQuantity,
    addQuantity,
    carts,
  } = props

  const itemsPrice = carts.reduce(
    (resPrice, curElement) =>
      resPrice + curElement.product.price * curElement.quantity,
    0
  )
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const FullSizePage = () => {
    return (
      <>
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
                          src={`${process.env.STRAPI_API_URL}` + item.image[0].url}
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
                          Color: {product.description}
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
                        <Typography>{product.price}</Typography>
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
              </Grid>
            )}
          </Grid>
        </Box>
        <EmailDistribution />
        <OtherLinks />
        <Footer />
      </>
    )
  }

  const SmallSizePage = () => {
    return (
      <>
        <Box className={classes.mainBlock}>
          <Grid container item className={classes.mainContainer}>
            {carts.length !== 0 ? (
              <>
                <Grid container item className={classes.firstGrid}>
                  <Typography
                    className={classes.boxTitleFirst}
                    style={{ textAlign: 'center' }}
                  >
                    My Cart
                  </Typography>
                  {carts.map(({ product, quantity }) => (
                    <ProductInCart
                      product={product}
                      carts={carts}
                      quantity={quantity}
                      removeProductFromCart={removeProductFromCart}
                      removeQuantity={removeQuantity}
                      addQuantity={addQuantity}
                    />
                  ))}
                </Grid>
                <Grid
                  container
                  item
                  className={classes.secondGrid}
                  style={{ textAlign: 'center' }}
                >
                  <Typography className={classes.boxTitleSecond}>
                    Order Summary
                  </Typography>
                  <Grid item className={classes.orderBox}>
                    <Grid container item className={classes.shippingPriceBox}>
                      <Typography className={classes.shipping}>
                        Shipping
                      </Typography>
                      <Typography className={classes.shippingPrice}>
                        Free
                      </Typography>
                    </Grid>
                    <Grid container item className={classes.shippingPriceBox}>
                      <Typography className={classes.shipping}>
                        Subtotal
                      </Typography>
                      <Typography className={classes.shippingPrice}>
                        ${itemsPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item className={classes.thirdGrid}>
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
              </Grid>
            )}
          </Grid>
        </Box>
        <EmailDistribution />
        <OtherLinks />
        <Footer />
      </>
    )
  }

  return (
    <main className={classes.fullPage}>
      {matches === true ? <FullSizePage /> : <SmallSizePage />}
    </main>
  )
}
