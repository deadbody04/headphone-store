import React, { useContext, useState } from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Dialog,
} from '@material-ui/core'

import Order from '../Order'
import Header from '../Menu'
import Context from '../../store/controllers/Context'

import classNames from 'classnames'
import { useStyles } from './Content.style'



export default function Content(
  addProductToCart,
  carts,
  removeProductFromCart,
  removeQuantity,
  addQuantity,
  ...props
) {
  const [open, setOpen] = useState(false)
  const { product } = props

  const classes = useStyles()
  const context = useContext(Context)

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <main>
      <Box className={classes.homePart} id="home">
        <Container>
          <Grid container>
            <Grid item>
              <div className={classes.blockAbout}>
                <Typography
                  variant="h6"
                  className={classNames(classes.textAbout, classes.nameOfModel)}
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
                    onClick={handleClickOpen}
                  >
                    Order Now
                  </Button>
                  <Dialog open={open} fullScreen>
                    <Grid className={classes.mainGrid}>
                      <>
                        <Header />
                        <Order
                          product={product}
                          setOpen={setOpen}
                          addProductToCart={context.addProductToCart}
                        />
                      </>
                    </Grid>
                  </Dialog>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  )
}
