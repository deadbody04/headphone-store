import React, { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Button,
  AppBar,
  Tabs,
  AccordionSummary,
  AccordionDetails,
  Dialog,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'

import EmailDistribution from '../EmailDistribution/EmailDistribution'
import OtherLinks from '../OtherLinks/OtherLinks'
import Footer from '../Footer/Footer'

import { useStyles, AntTab, AccordionCustom } from './Order.style'
import DATA from '../../graphql/queries/Data'
import { useQuery } from '@apollo/client'
import PropTypes from 'prop-types'
import Loader from '../Loader'

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

export default function Order(props) {
  const classes = useStyles()

  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)

  const { addProductToCart } = props
  // const { data, loading, error } = useQuery(DATA)
  //
  // if (loading) return <Loader />
  // if (error) return `Error! ${error.message}`

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  console.log(process.env.STRAPI_API_URL)

  const allProducts = data.products.map((item, index) => {
    return (
      <AntTab
        key={index}
        {...a11yProps(index)}
        icon={
          <img
            src={`${process.env.STRAPI_API_URL}` + item.image[0].url}
            alt="hp"
            className={classes.headIcon}
          />
        }
      />
    )
  })

  const productsPhoto = data.products.map((item, index) => {
    return (
      <TabPanel
        key={index}
        value={value}
        index={index}
        className={classes.imgBox}
      >
        <img
          src={`${process.env.STRAPI_API_URL}` + item.image[0].url}
          alt="headphones"
          className={classes.image}
        />
      </TabPanel>
    )
  })

  const colorName = data.products.map((item, index) => {
    return (
      <TabPanel key={index} value={value} index={index}>
        Color: {item.description}
      </TabPanel>
    )
  })

  const colorPicker = data.products.map((item, index) => {
    return (
      <AntTab
        key={item.id}
        className={classes.colorTab}
        {...a11yProps(index)}
        style={{ background: `${item.color}` }}
      />
    )
  })

  const productPrice = data.products.map((item, index) => {
    return (
      <TabPanel key={index} value={value} index={index}>
        Price: {item.price}
      </TabPanel>
    )
  })

  const buyButton = data.products.map((item, index) => {
    return (
      <TabPanel key={index} value={value} index={index}>
        <Box>
          <Button
            className={classes.buttonOrder}
            variant="outlined"
            onClick={() => addProductToCart(item)}
          >
            Order Now
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.buttonBuy}
            variant="outlined"
            onClick={handleClickOpen}
          >
            Buy Now
          </Button>
        </Box>
      </TabPanel>
    )
  })

  const model = data.products.map((item, index) => {
    return (
      <TabPanel key={index} value={value} index={index}>
        {item.model}
      </TabPanel>
    )
  })

  const skuNumber = data.products.map((item, index) => {
    return (
      <TabPanel key={index} value={value} index={index}>
        SKU: {item.SKU}
      </TabPanel>
    )
  })

  return (
    <main>
      <div className={classes.headerSection}>
        <Grid item container className={classes.mainSection}>
          <Grid container className={classes.mainGrid}>
            <Grid item>
              <Box className={classes.imgBox}>
                {productsPhoto}
                <AppBar position="static" className={classes.switchBox}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    indicatorColor="false"
                  >
                    {allProducts}
                  </Tabs>
                </AppBar>
                <Box>
                  <Typography variant="h2" className={classes.bottomParagraph}>
                    I'm a product description. I'm a great place to add more
                    details about your product such as sizing, material, care
                    instructions and cleaning instructions.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item className={classes.secondGrid}>
              <Typography variant="h1" className={classes.headphoneTitle}>
                {model}
              </Typography>
              <Typography variant="h2" className={classes.underTitle}>
                {skuNumber}
              </Typography>
              <Typography variant="h3" className={classes.price}>
                {productPrice}
              </Typography>
              <Box className={classes.colorSelection}>
                <Typography variant="h2" className={classes.colorSelectorText}>
                  {colorName}
                </Typography>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  indicatorColor="false"
                >
                  {colorPicker}
                </Tabs>
              </Box>
              {buyButton}
              <Box className={classes.accordionSection}>
                <AccordionCustom>
                  <AccordionSummary expandIcon={<Add />}>
                    <Typography className={classes.accordionHeading}>
                      Product Info
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.accordionParagraph}>
                      I'm a product detail. I'm a great place to add more
                      information about your product such as sizing, material,
                      care and cleaning instructions. This is also a great space
                      to write what makes this product special and how your
                      customers can benefit from this item.
                    </Typography>
                  </AccordionDetails>
                </AccordionCustom>
                <hr className={classes.accordionLine} />
                <AccordionCustom>
                  <AccordionSummary expandIcon={<Add />}>
                    <Typography className={classes.accordionHeading}>
                      Return & Refund Policy
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.accordionParagraph}>
                      I'm a product detail. I'm a great place to add more
                      information about your product such as sizing, material,
                      care and cleaning instructions. This is also a great space
                      to write what makes this product special and how your
                      customers can benefit from this item.
                    </Typography>
                  </AccordionDetails>
                </AccordionCustom>
                <hr className={classes.accordionLine} />
                <AccordionCustom>
                  <AccordionSummary expandIcon={<Add />}>
                    <Typography className={classes.accordionHeading}>
                      Shipping info
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.accordionParagraph}>
                      I'm a product detail. I'm a great place to add more
                      information about your product such as sizing, material,
                      care and cleaning instructions. This is also a great space
                      to write what makes this product special and how your
                      customers can benefit from this item.
                    </Typography>
                  </AccordionDetails>
                </AccordionCustom>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <EmailDistribution />
      <OtherLinks />
      <Footer />
    </main>
  )
}
