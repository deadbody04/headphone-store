import React, { useContext, useState } from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Dialog,
} from '@material-ui/core'
import { useStyles } from './BestSound.style'
import classNames from 'classnames'
import Context from '../../store/controllers/Context'
import Order from '../Order'

export default function BestSound(props) {
  const [open, setOpen] = useState(false)
  const context = useContext(Context)
  const { product } = props

  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <main>
      <Box className={classes.mainSection}>
        <Grid container spacing={0} className={classes.mainGridCont}>
          <Grid item className={classes.gridItems}>
            <Container className={classes.gridTextFirst}>
              <img src="https://static.wixstatic.com/media/82fcd3_7b50ff02a3dd411fac2e6ced36f2aed0~mv2.png/v1/fill/w_488,h_267,al_c,q_85,usm_0.66_1.00_0.01/Model_Strip_Single.webp" className={classes.image}/>
            </Container>
          </Grid>
          <Grid item container className={classes.gridItems}>
            <Container className={classes.gridTexSecond}>
              <Typography
                variant="h3"
                className={classNames(classes.textAbout, classes.nameOfModel)}
              >
                Music Like You've <br />
                Never Heard Before
              </Typography>
              <Typography
                variant="h2"
                className={classNames(
                  classes.textAbout,
                  classes.aboutExperience
                )}
              >
                Crafted by true masters of the industry, SoundBeam is the
                perfect product for all. Adjustable vertical sliders help you
                find the perfect fit and maximize comfort.
              </Typography>
              <Typography className={classes.textAbout}>
                <Dialog open={open} fullScreen>
                  <Grid container>
                    <Order
                      product={product}
                      setOpen={setOpen}
                      addProductToCart={context.addProductToCart}
                    />
                  </Grid>
                </Dialog>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </main>
  )
}
