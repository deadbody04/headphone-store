import {
    Box,
    Typography,
    Grid,
    Button,
    AppBar,
    Tabs,
    AccordionSummary,
    AccordionDetails,
    Link
} from '@material-ui/core';
import Header from '../Menu/Header'
import EmailDistribution from '../EmailDistribution/EmailDistribution'
import OtherLinks from '../OtherLinks/OtherLinks'
import Footer from '../Footer/Footer'
import Products from '../Product/Products'
import React, {useRef, useState} from 'react'
import {useStyles, AntTab, AccordionCustom} from "./Order.style";
import PropTypes from 'prop-types';
import {Add} from '@material-ui/icons';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
            <div
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                    {...other}
            >
                {value === index && (
                        <>
                            {children}
                        </>
                )}
            </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Order(props) {
    let spinnerInput = React.createRef()

    const [value, setValue] = useState(0);
    const [output, setOutput] = useState(1)

    const {addProductToCart, setOpen} = props

    const {products} = Products
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleClose = () => {
        setOpen(false)
    }

    function inputChange() {
        setOutput(spinnerInput.current.value)
        console.log(spinnerInput.current)
    }

    const allProducts = products.map(item => {
        return (
                <AntTab
                        key={item.id}
                        {...a11yProps(item.id)}
                        icon={<img src={item.icon} alt="hp" className={classes.headIcon}/>}
                >

                </AntTab>
        )
    });
    const productsPhoto = products.map(item => {
                return (
                        <TabPanel
                                key={item.id}
                                value={value}
                                index={item.id}
                                className={classes.imgBox}
                        >
                            <img src={item.img} alt="headphones"/>
                        </TabPanel>
                )
            }
    );
    const colorName = products.map(item => {
                return (
                        <TabPanel
                                key={item.id}
                                value={value}
                                index={item.id}
                        >
                            Color: {item.paragraph}
                        </TabPanel>
                )
            }
    );
    const colorPicker = products.map((item, index) => {
                return (
                        <AntTab
                                className={classes.colorTab}
                                {...a11yProps(index)}
                                style={{background: `${item.color}`}}
                        />
                )
            }
    )
    const productPrice = products.map(item => {
                return (
                        <TabPanel
                                key={item.id}
                                value={value}
                                index={item.id}
                        >
                            Price: {item.price}
                        </TabPanel>
                )
            }
    );
    const buyButton = products.map(item => {
                return (
                        <TabPanel
                                key={item.id}
                                value={value}
                                index={item.id}
                        >
                            <Box>
                                <Button className={classes.buttonOrder} variant="outlined"
                                        quantity={output} onClick={() => addProductToCart(item)}> Order Now {output}</Button>
                            </Box>
                            <Box>
                                <Button className={classes.buttonBuy} variant="outlined">Buy Now</Button>
                            </Box>
                        </TabPanel>
                )
            }
    );

    return (
            <main>
                <div className={classes.headerSection}>
                    <Header/>
                    <Grid item container className={classes.mainSection}>
                        <Grid container className={classes.mainGrid}>
                            <Grid item>
                                <Typography variant='h2' className={classes.linkSection}>
                                    <Link href='#' underline='none' className={classes.homeLink}
                                          onClick={handleClose}>Home</Link> /
                                    <span className={classes.nameOfModel}>Soundbeam ERD - 3083</span>
                                </Typography>
                                <Box>
                                    {productsPhoto}
                                    <AppBar position="static" className={classes.switchBox}>
                                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                                              indicatorColor='false'>
                                            {allProducts}
                                        </Tabs>
                                    </AppBar>
                                    <Box>
                                        <Typography variant='h2' className={classes.bottomParagraph}>
                                            I'm a product description. I'm a great place to add more details about
                                            your
                                            product such as sizing, material, care instructions and cleaning
                                            instructions.
                                        </Typography>
                                    </Box>

                                </Box>

                            </Grid>
                            <Grid item className={classes.secondGrid}>
                                <Typography variant='h1' className={classes.headphoneTitle}>Soundbeam ERD -
                                    3083</Typography>
                                <Typography variant='h2' className={classes.underTitle}>SKU: 00001</Typography>
                                <Typography variant='h3' className={classes.price}>
                                    {productPrice}
                                </Typography>
                                <Box className={classes.colorSelection}>
                                    <Typography variant='h2'
                                                className={classes.colorSelectorText}> {colorName} </Typography>
                                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                                          indicatorColor='false'>
                                        {colorPicker}
                                    </Tabs>
                                </Box>
                                <Box className={classes.quantitySpinner}>
                                    <Typography variant='h2'
                                                className={classes.colorSelectorText}>Quantity
                                    </Typography>
                                    <input type="number"
                                           className={classes.inputField}
                                           ref={spinnerInput}
                                           onChange={inputChange}
                                           value={output}
                                           min={1}
                                           max={10}
                                    />
                                </Box>
                                {buyButton}
                                <Box className={classes.accordionSection}>
                                    <AccordionCustom>
                                        <AccordionSummary expandIcon={<Add/>}>
                                            <Typography className={classes.accordionHeading}>Product
                                                Info</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className={classes.accordionParagraph}>
                                                I'm a product detail. I'm a great place to add more information
                                                about
                                                your
                                                product such as sizing, material, care and cleaning instructions.
                                                This
                                                is
                                                also a great space to write what makes this product special and how
                                                your
                                                customers can benefit from this item.
                                            </Typography>
                                        </AccordionDetails>
                                    </AccordionCustom>
                                    <hr className={classes.accordionLine}/>
                                    <AccordionCustom>
                                        <AccordionSummary expandIcon={<Add/>}>
                                            <Typography className={classes.accordionHeading}>
                                                Return & Refund Policy
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className={classes.accordionParagraph}>
                                                I'm a product detail. I'm a great place to add more information
                                                about
                                                your
                                                product such as sizing, material, care and cleaning instructions.
                                                This
                                                is
                                                also a great space to write what makes this product special and how
                                                your
                                                customers can benefit from this item.
                                            </Typography>
                                        </AccordionDetails>
                                    </AccordionCustom>
                                    <hr className={classes.accordionLine}/>
                                    <AccordionCustom>
                                        <AccordionSummary expandIcon={<Add/>}>
                                            <Typography className={classes.accordionHeading}>Shipping
                                                info</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className={classes.accordionParagraph}>
                                                I'm a product detail. I'm a great place to add more information
                                                about
                                                your
                                                product such as sizing, material, care and cleaning instructions.
                                                This
                                                is
                                                also a great space to write what makes this product special and how
                                                your
                                                customers can benefit from this item.
                                            </Typography>
                                        </AccordionDetails>
                                    </AccordionCustom>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <EmailDistribution/>
                <OtherLinks/>
                <Footer/>
            </main>
    )
}