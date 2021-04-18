import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Dialog,
} from '@material-ui/core'
import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { useStyles } from './Content.style'
import Order from '../Order'
import Context from '../../store/Context'

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
  const handleClose = () => {
    setOpen(false)
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
                      <Order
                        product={product}
                        setOpen={setOpen}
                        addProductToCart={context.addProductToCart}
                      />
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
