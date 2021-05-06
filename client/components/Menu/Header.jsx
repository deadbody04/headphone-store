import React, { useState, useContext } from 'react'
import { useStyles } from './Header.style'
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Dialog,
  Grid,
  Button,
  Drawer,
  IconButton,
} from '@material-ui/core'
import {
  Headset,
  AccountCircle,
  Instagram,
  YouTube,
  Twitter,
  ShoppingBasket,
  Close,
} from '@material-ui/icons'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

import Order from '../Order/Order'
import SignUp from '../Auth/SignUp/SignUp'
import Login from '../Auth/Login/Login'
import SignUpWithEmail from '../Auth/SignUp/SignUpWithEmail'
import LoginWithEmail from '../Auth/Login/LoginWithEmail'
import SideCart from '../SideCart/SideCart'
import Cart from '../Cart'

import Context from '../../store/controllers/Context'

import { Link } from 'react-scroll'
import classNames from 'classnames'

export default function Header({
  addProductToCart,
  carts,
  removeProductFromCart,
  removeQuantity,
  addQuantity,
  openButton,
  ...props
}) {
  const classes = useStyles()
  const theme = useTheme()

  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(0)
  const [state, setState] = useState({
    right: false,
  })
  const { product } = props

  const context = useContext(Context)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const openOrder = () => {
    setForm(4)
  }
  const openSignPage = () => {
    setForm(0)
  }
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const matchesLow = useMediaQuery(theme.breakpoints.up('xs'))
  const matchesHight = useMediaQuery(theme.breakpoints.up('xl'))
  const matchesMid = useMediaQuery(theme.breakpoints.up('lg'))

  const FullSize = () => {
    return (
      <Typography variant="h5" className={classes.title}>
        <Link
          href="#"
          color="inherit"
          className={classes.menuLink}
          underline="none"
        >
          <Headset className={classes.headIcon} />
          Soundbeam
        </Link>
        <Link
          href="#"
          variant="body2"
          color="inherit"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className={classes.menuLinks}
          underline="none"
        >
          Home
        </Link>
        <Link
          href="#"
          variant="body2"
          color="inherit"
          to="content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className={classes.menuLinks}
          underline="none"
        >
          Benefits
        </Link>
        <Link
          href="#"
          variant="body2"
          color="inherit"
          to="reviews"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1400}
          className={classes.menuLinks}
          underline="none"
        >
          Reviews
        </Link>
      </Typography>
    )
  }
  const SmallSize = () => {
    return (
      <Typography variant="h5" className={classes.title}>
        <Link
          href="#"
          color="inherit"
          className={classes.menuLink}
          underline="none"
        >
          <Headset className={classes.headIcon} />
          Soundbeam
        </Link>
      </Typography>
    )
  }

  return (
    <AppBar className={classes.header}>
      <Container className={classes.flexHead} fixed>
        <Toolbar className={classes.headerMenu} variant="regular">
          {matches !== true ? <SmallSize /> : <FullSize />}
          <Typography>
            {matchesHight === true || matchesMid === true ? (
              <>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                  onClick={handleClickOpen}
                >
                  <AccountCircle
                    className={classNames(classes.linkIcons, classes.logInIcon)}
                  />
                </Link>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classNames(classes.menuButtons, classes.logText)}
                  underline="none"
                  onClick={() => {
                    handleClickOpen()
                    openSignPage()
                  }}
                >
                  Log in
                </Link>
                {openButton ? (
                  <Button
                    className={classNames(
                      classes.menuButtons,
                      classes.orderButton
                    )}
                    href="#contained-buttons"
                    disableElevation
                  >
                    Order Now
                  </Button>
                ) : (
                  <Button
                    className={classNames(
                      classes.menuButtons,
                      classes.orderButton
                    )}
                    href="#contained-buttons"
                    disableElevation
                    onClick={() => {
                      openOrder()
                      handleClickOpen()
                    }}
                  >
                    Order Now
                  </Button>
                )}
                <Dialog open={open} fullScreen>
                  <Grid className={classes.mainGrid}>
                    {form === 0 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <SignUp setForm={setForm} />
                      </>
                    ) : form === 1 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <Login setForm={setForm} />
                      </>
                    ) : form === 2 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <SignUpWithEmail setForm={setForm} />
                      </>
                    ) : form === 3 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <LoginWithEmail setForm={setForm} />
                      </>
                    ) : form === 4 ? (
                      <Order
                        product={product}
                        setForm={setForm}
                        setOpen={setOpen}
                        addProductToCart={context.addProductToCart}
                        handleClose={handleClose}
                      />
                    ) : form === 5 ? (
                      <>
                        <Cart
                          product={product}
                          carts={context.carts}
                          setOpen={setOpen}
                          handleClose={handleClose}
                          removeProductFromCart={context.removeProductFromCart}
                          removeQuantity={context.removeQuantity}
                          addQuantity={context.addQuantity}
                          addProductToCart={context.addProductToCart}
                        />
                      </>
                    ) : (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <SignUp setForm={setForm} />
                      </>
                    )}
                  </Grid>
                </Dialog>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                >
                  <Instagram className={classes.linkIcons} />
                </Link>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                >
                  <YouTube className={classes.linkIcons} />
                </Link>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                >
                  <Twitter className={classes.linkIcons} />
                </Link>
              </>
            ) : matches !== true && matchesLow === true ? (
              <>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                  onClick={handleClickOpen}
                />
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classNames(classes.menuButtons, classes.logText)}
                  underline="none"
                  onClick={() => {
                    handleClickOpen()
                    openSignPage()
                  }}
                >
                  Log in
                </Link>
                {openButton ? (
                  <Button
                    className={classNames(
                      classes.menuButtons,
                      classes.orderButton
                    )}
                    href="#contained-buttons"
                    disableElevation
                  >
                    Order Now
                  </Button>
                ) : (
                  <Button
                    className={classNames(
                      classes.menuButtons,
                      classes.orderButton
                    )}
                    href="#contained-buttons"
                    disableElevation
                    onClick={() => {
                      openOrder()
                      handleClickOpen()
                    }}
                  >
                    Order Now
                  </Button>
                )}
                <Dialog open={open} fullScreen>
                  <Grid className={classes.mainGrid}>
                    {form === 0 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <SignUp setForm={setForm} />
                      </>
                    ) : form === 1 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <Login setForm={setForm} />
                      </>
                    ) : form === 2 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <SignUpWithEmail setForm={setForm} />
                      </>
                    ) : form === 3 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <LoginWithEmail setForm={setForm} />
                      </>
                    ) : form === 4 ? (
                      <Order
                        product={product}
                        setForm={setForm}
                        setOpen={setOpen}
                        addProductToCart={context.addProductToCart}
                        handleClose={handleClose}
                      />
                    ) : form === 5 ? (
                      <>
                        <Cart
                          product={product}
                          carts={context.carts}
                          setOpen={setOpen}
                          handleClose={handleClose}
                          removeProductFromCart={context.removeProductFromCart}
                          removeQuantity={context.removeQuantity}
                          addQuantity={context.addQuantity}
                          addProductToCart={context.addProductToCart}
                        />
                      </>
                    ) : (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <SignUp setForm={setForm} />
                      </>
                    )}
                  </Grid>
                </Dialog>
              </>
            ) : (
              <>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                  onClick={handleClickOpen}
                />
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classNames(classes.menuButtons, classes.logText)}
                  underline="none"
                  onClick={() => {
                    handleClickOpen()
                    openSignPage()
                  }}
                >
                  Log in
                </Link>
                {openButton ? (
                  <Button
                    className={classNames(
                      classes.menuButtons,
                      classes.orderButton
                    )}
                    href="#contained-buttons"
                    disableElevation
                  >
                    Order Now
                  </Button>
                ) : (
                  <Button
                    className={classNames(
                      classes.menuButtons,
                      classes.orderButton
                    )}
                    href="#contained-buttons"
                    disableElevation
                    onClick={() => {
                      openOrder()
                      handleClickOpen()
                    }}
                  >
                    Order Now
                  </Button>
                )}
                <Dialog open={open} fullScreen>
                  <Grid className={classes.mainGrid}>
                    {form === 0 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <SignUp setForm={setForm} />
                      </>
                    ) : form === 1 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <Login setForm={setForm} />
                      </>
                    ) : form === 2 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <SignUpWithEmail setForm={setForm} />
                      </>
                    ) : form === 3 ? (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <LoginWithEmail setForm={setForm} />
                      </>
                    ) : form === 4 ? (
                      <Order
                        product={product}
                        setForm={setForm}
                        setOpen={setOpen}
                        addProductToCart={context.addProductToCart}
                        handleClose={handleClose}
                      />
                    ) : form === 5 ? (
                      <>
                        <Cart
                          product={product}
                          carts={context.carts}
                          setOpen={setOpen}
                          handleClose={handleClose}
                          removeProductFromCart={context.removeProductFromCart}
                          removeQuantity={context.removeQuantity}
                          addQuantity={context.addQuantity}
                          addProductToCart={context.addProductToCart}
                        />
                      </>
                    ) : (
                      <>
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>
                        <SignUp setForm={setForm} />
                      </>
                    )}
                  </Grid>
                </Dialog>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                >
                  <Instagram className={classes.linkIcons} />
                </Link>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                >
                  <YouTube className={classes.linkIcons} />
                </Link>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                >
                  <Twitter className={classes.linkIcons} />
                </Link>
              </>
            )}

            {['right'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Link
                  onClick={toggleDrawer(anchor, true)}
                  href="#"
                  variant="body2"
                  color="inherit"
                  className={classes.menuButtons}
                >
                  <ShoppingBasket className={classes.linkIcons} />
                </Link>
                <Drawer anchor={anchor} open={state[anchor]}>
                  <SideCart
                    {...anchor}
                    setState={setState}
                    setForm={setForm}
                    setOpen={setOpen}
                    carts={context.carts}
                    removeProductFromCart={context.removeProductFromCart}
                    removeQuantity={context.removeQuantity}
                    addQuantity={context.addQuantity}
                    product={product}
                  />
                </Drawer>
              </React.Fragment>
            ))}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
