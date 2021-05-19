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
  Tabs,
  Tab,
  Box,
} from '@material-ui/core'
import {
  Headset,
  AccountCircle,
  Instagram,
  YouTube,
  Twitter,
  ShoppingBasket,
  Close,
  ChevronLeft,
  ChevronRight,
} from '@material-ui/icons'

import { useRouter } from 'next/router'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import Order from '../Order/Order'
import SignUp from '../Auth/SignUp/SignUp'
import Login from '../Auth/Login/Login'
import SignUpWithEmail from '../Auth/SignUp/SignUpWithEmail'
import LoginWithEmail from '../Auth/Login/LoginWithEmail'
import Cart from '../Cart'
import MainContent from '../MainContent/MainContent'

import { logoutUser } from '../../utils/_mocks_/auth'
import { AppContext } from '../../store/providers/AppProvider'
import Context from '../../store/controllers/Context'

import { Link } from 'react-scroll'
import classNames from 'classnames'
import Cookies from 'js-cookie'
import clsx from 'clsx'
import ProductInCart from '../Product/ProductInCart'

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
      disableRipple
      {...props}
    />
  )
}

//----------------------------САМ ХЕДЕР----------------------------//
//----------------------------САМ ХЕДЕР----------------------------//
//----------------------------САМ ХЕДЕР----------------------------//
//----------------------------САМ ХЕДЕР----------------------------//
//----------------------------САМ ХЕДЕР----------------------------//

export default function Header({
  addProductToCart,
  carts,
  removeProductFromCart,
  removeQuantity,
  addQuantity,
  ...props
}) {
  const classes = useStyles()
  const theme = useTheme()
  const router = useRouter()

  const { dispatch } = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(0)
  const [state, setState] = useState({
    right: false,
  })
  const [value, setValue] = React.useState(0)
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const openSignPage = () => {
    setForm(0)
  }
  const logout = async () => {
    try {
      await logoutUser(dispatch)
      router.push('/')
    } catch (error) {}
  }

  const homePage = () => {
    router.push('/')
  }

  function Content() {
    return (
      <main>
        <Box className={classes.homePart} id="home">
          <Container>
            <Grid container>
              <Grid item>
                <div className={classes.blockAbout}>
                  <Typography
                    variant="h6"
                    className={classNames(
                      classes.textAbout,
                      classes.nameOfModel
                    )}
                  >
                    Soundbeam ERD - 3083
                  </Typography>
                  <Typography
                    variant="h2"
                    className={classNames(
                      classes.textAbout,
                      classes.aboutExperience
                    )}
                  >
                    reinventing <br />
                    sound experience
                  </Typography>
                  <Typography className={classes.textAbout}>
                    <Button
                      className={classes.buttonOrder}
                      variant="outlined"
                    >
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
                        <LinkTab
                          style={{
                            width: 170,
                            height: 56,
                            marginTop: -6,
                          }}
                          disableRipple={false}
                          {...a11yProps(1)}
                          className={classes.linkTab}
                        />
                      </Tabs>
                      Order Now
                    </Button>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    )
  }

  const itemsPrice = context.carts.reduce(
    (resPrice, curElement) =>
      resPrice + curElement.product.price * curElement.quantity,
    0
  )

  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const matchesLow = useMediaQuery(theme.breakpoints.up('xs'))
  const matchesHight = useMediaQuery(theme.breakpoints.up('xl'))
  const matchesMid = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <>
      <div className={classes.headerImg}>
        <AppBar className={classes.header}>
          <Container className={classes.flexHead} fixed>
            <Toolbar className={classes.headerMenu} variant="regular">
              {matches !== true ? (
                <Typography variant="h5" className={classes.title}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    indicatorColor="false"
                    className={classes.tabs}
                  >
                    <LinkTab {...a11yProps(0)} />
                  </Tabs>
                  <Link
                    href="#"
                    color="inherit"
                    className={classes.menuLink}
                    underline="none"
                    onClick={homePage}
                  >
                    <Headset className={classes.headIcon} />
                    Soundbeam
                  </Link>
                </Typography>
              ) : (
                <Typography variant="h5" className={classes.title}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    indicatorColor="false"
                    className={classes.tabs}
                  >
                    <LinkTab {...a11yProps(0)} />
                  </Tabs>
                  <Link
                    href="#"
                    color="inherit"
                    className={classes.menuLink}
                    underline="none"
                    onClick={homePage}
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
              )}
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
                        className={classNames(
                          classes.linkIcons,
                          classes.logInIcon
                        )}
                      />
                    </Link>
                    {Cookies.get('token') === undefined ? (
                      <Link
                        href="#"
                        variant="body2"
                        color="inherit"
                        className={classNames(
                          classes.menuButtons,
                          classes.logText
                        )}
                        underline="none"
                        onClick={() => {
                          handleClickOpen()
                          openSignPage()
                        }}
                      >
                        Log in
                      </Link>
                    ) : (
                      <Link
                        href="#"
                        variant="body2"
                        color="inherit"
                        className={classNames(
                          classes.menuButtons,
                          classes.logText
                        )}
                        underline="none"
                        onClick={async () => logout()}
                      >
                        Logout
                      </Link>
                    )}
                    <Button
                      className={classNames(
                        classes.menuButtons,
                        classes.orderButton
                      )}
                      href="#contained-buttons"
                      disableElevation
                    >
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
                        <LinkTab
                          {...a11yProps(1)}
                          className={classes.linkTab}
                        />
                      </Tabs>
                      Order Now
                    </Button>
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
                            <SignUpWithEmail
                              setForm={setForm}
                              setOpen={setOpen}
                            />
                          </>
                        ) : form === 3 ? (
                          <>
                            <IconButton
                              className={classes.closeButton}
                              onClick={handleClose}
                            >
                              <Close />
                            </IconButton>
                            <LoginWithEmail
                              setForm={setForm}
                              setOpen={setOpen}
                            />
                          </>
                        ) : form === 5 ? (
                          <>
                            <Cart
                              product={product}
                              carts={context.carts}
                              setOpen={setOpen}
                              handleClose={handleClose}
                              removeProductFromCart={
                                context.removeProductFromCart
                              }
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
                    {Cookies.get('token') === undefined ? (
                      <Link
                        href="#"
                        variant="body2"
                        color="inherit"
                        className={classNames(
                          classes.menuButtons,
                          classes.logText
                        )}
                        underline="none"
                        onClick={() => {
                          handleClickOpen()
                          openSignPage()
                        }}
                      >
                        Log in
                      </Link>
                    ) : (
                      <Link
                        href="#"
                        variant="body2"
                        color="inherit"
                        className={classNames(
                          classes.menuButtons,
                          classes.logText
                        )}
                        underline="none"
                        onClick={async () => logout()}
                      >
                        Logout
                      </Link>
                    )}
                    <Button
                      className={classNames(
                        classes.menuButtons,
                        classes.orderButton
                      )}
                      href="#contained-buttons"
                      disableElevation
                    >
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
                        <LinkTab
                          {...a11yProps(1)}
                          className={classes.linkTab}
                        />
                      </Tabs>
                      Order Now
                    </Button>
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
                            <SignUp setForm={setForm} setOpen={setOpen} />
                          </>
                        ) : form === 1 ? (
                          <>
                            <IconButton
                              className={classes.closeButton}
                              onClick={handleClose}
                            >
                              <Close />
                            </IconButton>
                            <Login setForm={setForm} setOpen={setOpen} />
                          </>
                        ) : form === 2 ? (
                          <>
                            <IconButton
                              className={classes.closeButton}
                              onClick={handleClose}
                            >
                              <Close />
                            </IconButton>
                            <SignUpWithEmail
                              setForm={setForm}
                              setOpen={setOpen}
                              handleClose={handleClose}
                            />
                          </>
                        ) : form === 3 ? (
                          <>
                            <IconButton
                              className={classes.closeButton}
                              onClick={handleClose}
                            >
                              <Close />
                            </IconButton>
                            <LoginWithEmail
                              setForm={setForm}
                              setOpen={setOpen}
                            />
                          </>
                        ) : form === 5 ? (
                          <>
                            <Cart
                              product={product}
                              carts={context.carts}
                              setOpen={setOpen}
                              handleClose={handleClose}
                              removeProductFromCart={
                                context.removeProductFromCart
                              }
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
                    {Cookies.get('token') === undefined ? (
                      <Link
                        href="#"
                        variant="body2"
                        color="inherit"
                        className={classNames(
                          classes.menuButtons,
                          classes.logText
                        )}
                        underline="none"
                        onClick={() => {
                          handleClickOpen()
                          openSignPage()
                        }}
                      >
                        Log in
                      </Link>
                    ) : (
                      <Link
                        href="#"
                        variant="body2"
                        color="inherit"
                        className={classNames(
                          classes.menuButtons,
                          classes.logText
                        )}
                        underline="none"
                        onClick={async () => logout()}
                      >
                        Logout
                      </Link>
                    )}
                    <Button
                      className={classNames(
                        classes.menuButtons,
                        classes.orderButton
                      )}
                      href="#contained-buttons"
                      disableElevation
                    >
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
                        <LinkTab
                          {...a11yProps(1)}
                          className={classes.linkTab}
                        />
                      </Tabs>
                      Order Now
                    </Button>
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
                            <SignUpWithEmail
                              setForm={setForm}
                              setOpen={setOpen}
                            />
                          </>
                        ) : form === 3 ? (
                          <>
                            <IconButton
                              className={classes.closeButton}
                              onClick={handleClose}
                            >
                              <Close />
                            </IconButton>
                            <LoginWithEmail
                              setForm={setForm}
                              setOpen={setOpen}
                            />
                          </>
                        ) : form === 5 ? (
                          <>
                            <Cart
                              product={product}
                              carts={context.carts}
                              setOpen={setOpen}
                              handleClose={handleClose}
                              removeProductFromCart={
                                context.removeProductFromCart
                              }
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
                      <div
                        className={clsx(classes.listStyles, {
                          [classes.fullList]:
                            anchor === 'top' || anchor === 'bottom',
                        })}
                        role="presentation"
                      >
                        <Container className={classes.firstList}>
                          <Box className={classes.basketTitle}>
                            <IconButton
                              onClick={toggleDrawer(anchor, false)}
                              className={classes.chevronIcon}
                            >
                              {toggleDrawer === false ? (
                                <ChevronLeft />
                              ) : (
                                <ChevronRight />
                              )}
                            </IconButton>
                            <span className={classes.cartTitle}>Cart</span>
                          </Box>
                        </Container>
                        <Container className={classes.secondList}>
                          {context.carts.length === 0 ? (
                            <Typography className={classes.cartItem}>
                              Empty Cart
                            </Typography>
                          ) : (
                            context.carts.map(({ product, quantity }) => (
                              <>
                                <ProductInCart
                                  product={product}
                                  carts={context.carts}
                                  quantity={quantity}
                                  removeProductFromCart={
                                    context.removeProductFromCart
                                  }
                                  removeQuantity={context.removeQuantity}
                                  addQuantity={context.addQuantity}
                                />
                              </>
                            ))
                          )}
                        </Container>
                        <Container className={classes.thirdList}>
                          {context.carts.length === 0 ? (
                            <Typography />
                          ) : (
                            <>
                              <Typography className={classes.fullPrice}>
                                Subtotal:
                              </Typography>
                              <Typography className={classes.fullPrice}>
                                ${itemsPrice}
                              </Typography>
                            </>
                          )}
                        </Container>
                        <Container className={classes.fourList}>
                          {context.carts.length === 0 ? (
                            <Typography />
                          ) : (
                            <>
                              <Button
                                className={classes.viewCartButton}
                                onClick={toggleDrawer(anchor, false)}
                              >
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
                                  <LinkTab
                                    {...a11yProps(1)}
                                    className={classes.linkTabEmpty}
                                    disabled
                                  />
                                  <LinkTab
                                    style={{
                                      width: 450,
                                      height: 40,
                                    }}
                                    {...a11yProps(2)}
                                    className={classes.linkTab}
                                    onClick={toggleDrawer(anchor, false)}
                                  />
                                </Tabs>
                                View Cart
                              </Button>
                            </>
                          )}
                        </Container>
                      </div>
                    </Drawer>
                  </React.Fragment>
                ))}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <TabPanel value={value} index={0}>
        <div className={classes.headerImg}>
          <Content />
        </div>
        <MainContent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Order product={product} addProductToCart={context.addProductToCart} />
      </TabPanel>
      <TabPanel value={value} index={2}>
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
      </TabPanel>
    </>
  )
}
