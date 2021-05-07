import React, { useState } from 'react'
import {
  Box,
  Container,
  IconButton,
  Typography,
  Button,
  Dialog,
} from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { useStyles } from './SideCart.style'
import ProductInCart from '../Product/ProductInCart'
import clsx from 'clsx'
import Cart from '../Cart'

export default function SideCart(props) {
  const {
    anchor,
    setState,
    state,
    carts,
    removeProductFromCart,
    removeQuantity,
    addQuantity,
    setForm,
    product,
  } = props
  const itemsPrice = carts.reduce(
    (resPrice, curElement) =>
      resPrice + curElement.product.price * curElement.quantity,
    0
  )
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  return (
    <div
      className={clsx(classes.listStyles, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <Container className={classes.firstList}>
        <Box className={classes.basketTitle}>
          <IconButton
            onClick={toggleDrawer(anchor, false)}
            className={classes.chevronIcon}
          >
            {toggleDrawer === false ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
          <span className={classes.cartTitle}>Cart</span>
        </Box>
      </Container>
      <Container className={classes.secondList}>
        {carts.length === 0 ? (
          <Typography className={classes.cartItem}>Empty Cart</Typography>
        ) : carts.length === 1 ? (
          carts.map(({ product, quantity }) => (
            <ProductInCart
              product={product}
              carts={carts}
              quantity={quantity}
              removeProductFromCart={removeProductFromCart}
              removeQuantity={removeQuantity}
              addQuantity={addQuantity}
            />
          ))
        ) : (
          carts.map(({ product, quantity }) => (
            <>
              <ProductInCart
                product={product}
                carts={carts}
                quantity={quantity}
                removeProductFromCart={removeProductFromCart}
                removeQuantity={removeQuantity}
                addQuantity={addQuantity}
              />
              <hr className={classes.lineUnderProduct} />
            </>
          ))
        )}
      </Container>
      <Container className={classes.thirdList}>
        {carts.length === 0 ? (
          <Typography />
        ) : (
          <>
            <Typography className={classes.fullPrice}>Subtotal:</Typography>
            <Typography className={classes.fullPrice}>${itemsPrice}</Typography>
          </>
        )}
      </Container>
      <Container className={classes.fourList}>
        {carts.length === 0 ? (
          <Typography />
        ) : (
          <>
            <Button
              className={classes.viewCartButton}
              onClick={() => {
                handleClickOpen()
                toggleDrawer(anchor, false)
              }}
              product={product}
              carts={carts}
            >
              View Cart
            </Button>
          </>
        )}
        <Dialog open={open} fullScreen>
          <Cart
            product={product}
            carts={carts}
            setOpen={setOpen}
            removeProductFromCart={removeProductFromCart}
            removeQuantity={removeQuantity}
            addQuantity={addQuantity}
          />
        </Dialog>
      </Container>
    </div>
  )
}
