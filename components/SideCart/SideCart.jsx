import React from 'react'
import {Box, Container, IconButton, Typography, Button} from '@material-ui/core'
import {ChevronLeft, ChevronRight} from '@material-ui/icons'
import {useStyles} from './SideCart.style'
import ProductBasket from '../Product/ProductBasket'
import clsx from 'clsx'

export default function SideCart(props) {
    const {anchor, setState, state, carts, removeProductFromCart, removeQuantity, addQuantity, setForm} = props
    const itemsPrice = carts.reduce((resPrice, curElement) => resPrice + curElement.product.price * curElement.quantity, 0)
    const classes = useStyles()

    const handleClick = () => {
        setForm(5)
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

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
                            {toggleDrawer === false ? <ChevronLeft/> : <ChevronRight/>}
                        </IconButton>
                        <span className={classes.cartTitle}>Cart</span>
                    </Box>
                </Container>
                <Container className={classes.secondList}>
                    {carts.length === 0 ? (
                            <Typography className={classes.cartItem}>Empty Cart</Typography>
                    ) : carts.length === 1 ? (
                            carts.map(({product, quantity}) => (

                                    <ProductBasket product={product} carts={carts} quantity={quantity}
                                                   removeProductFromCart={removeProductFromCart}
                                                   removeQuantity={removeQuantity} addQuantity={addQuantity}/>
                            ))
                    ) : (carts.map(({product, quantity}) => (
                            <>
                                <ProductBasket product={product} carts={carts} quantity={quantity}
                                               removeProductFromCart={removeProductFromCart}
                                               removeQuantity={removeQuantity} addQuantity={addQuantity}/>
                                <hr className={classes.lineUnderProduct}/>
                            </>
                    )))
                    }
                </Container>
                <Container className={classes.thirdList}>
                    {carts.length === 0 ? (

                            <Typography/>

                    ) : (
                            <>
                                <Typography className={classes.fullPrice}>Subtotal:</Typography>
                                <Typography className={classes.fullPrice}>${itemsPrice}</Typography>
                            </>
                    )}
                </Container>
                <Container className={classes.fourList}>
                    {carts.length === 0 ? (
                            <Typography/>
                    ) : (
                            <Button className={classes.viewCartButton} onClick={() => handleClick}> View Cart </Button>
                    )}
                </Container>
            </div>
    )
}