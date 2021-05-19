import React, { useState } from 'react'
import {
  Box,
  Container,
  IconButton,
  Typography,
  Button,
  Dialog,
  Tabs,
  Tab,
} from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { useStyles } from './SideCart.style'
import ProductInCart from '../Product/ProductInCart'
import clsx from 'clsx'
import Cart from '../Cart'
import PropTypes from 'prop-types'
import Content from '../Content/Content'
import MainContent from '../MainContent/MainContent'
import Order from '../Order/Order'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

export default function SideCart(props) {
  const {
    anchor,
    setState,
    state,
    carts,
    removeProductFromCart,
    removeQuantity,
    addQuantity,
    product,
  } = props

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
              onClick={handleClickOpen}
            >
              {' '}
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                indicatorColor="false"
                className={classes.tabs}
              >
                <LinkTab
                  {...a11yProps(0)}
                  className={classes.linkTabEmpty}
                  disabled
                />
                <LinkTab {...a11yProps(1)} className={classes.linkTab} />
                <LinkTab {...a11yProps(2)} className={classes.linkTab} />
              </Tabs>
              View Cart
            </Button>
          </>
        )}
        {/*<Dialog open={open} fullScreen>*/}
        {/*  <Cart*/}
        {/*    product={product}*/}
        {/*    carts={carts}*/}
        {/*    setOpen={setOpen}*/}
        {/*    removeProductFromCart={removeProductFromCart}*/}
        {/*    removeQuantity={removeQuantity}*/}
        {/*    addQuantity={addQuantity}*/}
        {/*  />*/}
        {/*</Dialog>*/}
      </Container>
      <TabPanel value={value} index={0}>
        <div className={classes.headerImg}>
          <Content />
        </div>
        <MainContent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Order product={product} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Cart
          product={product}
          carts={carts}
          setOpen={setOpen}
          removeProductFromCart={context.removeProductFromCart}
          removeQuantity={context.removeQuantity}
          addQuantity={context.addQuantity}
        />
      </TabPanel>
    </div>
  )
}
