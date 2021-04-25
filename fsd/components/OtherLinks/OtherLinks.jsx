import {Typography, Grid, Link, Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import React from 'react'
import {useStyles} from "./OtherLinks.style";

export default function OtherLinks() {
    const classes = useStyles();

    return (
            <main className={classes.allContent}>
                <Container className={classes.mainContainer}>
                    <Grid container direction="column" className={classes.mainGrid}>
                        <Grid container item>
                            <Grid item xs={4} justify="flex-start">
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        HOME
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={4} justify="center">
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        SHIPPING & RETURNS
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={4} justify="flex-end">
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        Instagram
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        BENEFITS
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        Store Policy
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        YOUTUBE
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        REVIEWS
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        PAYMENT METHODS
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        Twitter
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.linksText} variant="h2">
                                    <Link rel="stylesheet" href="" color="inherit" underline="none">
                                        Faq
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </main>
    )
}

