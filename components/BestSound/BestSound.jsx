import React from 'react'
import {Box, Typography, Container, Grid, Button} from '@material-ui/core';
import {useStyles} from './BestSound.style'
import classNames from "classnames";


export default function BestSound() {
    const classes = useStyles();

    return (
            <main>
                <Box className={classes.mainSection}>
                    <Grid container spacing={0} className={classes.mainGridCont}>
                        <Grid item className={classes.gridItems} xs={6}>
                            <Container className={classes.gridTextFirst}>
                                <img src="https://static.wixstatic.com/media/82fcd3_7b50ff02a3dd411fac2e6ced36f2aed0~mv2.png/v1/fill/w_488,h_267,al_c,q_85,usm_0.66_1.00_0.01/Model_Strip_Single.webp"/>
                            </Container>
                        </Grid>
                        <Grid item className={classes.gridItems} xs={6}>
                            <Container className={classes.gridTexSecond}>
                                <Typography variant="h3" className={classNames(classes.textAbout, classes.nameOfModel)}>
                                    Music Like You've <br/>
                                    Never Heard Before
                                </Typography>
                                <Typography variant="h2" className={classNames(classes.textAbout, classes.aboutExperience)}>
                                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                                    “Edit Text” or double click me to add your own content
                                </Typography>
                                <Typography className={classes.textAbout}>
                                    <Button className={classes.buttonOrder} variant="outlined">Order Now</Button>
                                </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </main>
    )
}
