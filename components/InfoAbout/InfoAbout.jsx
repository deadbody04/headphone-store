import {Paper, Typography, Container, Grid } from '@material-ui/core';
import {useStyles} from "./InfoAbout.style";
import React from 'react'

export default function InfoAbout() {
    const classes = useStyles();
    return (
        <main>
            <Paper className={classes.mainBlock}>
                <Container>
                    <Grid container spacing={0} className={classes.mainGridCont}>
                        <Grid item className={classes.gridItems} xs={3}>
                                <Typography variant="h6">
                                    high quality <br/>
                                    sound
                                </Typography>
                                <Typography>
                                    I'm a paragraph. Click here <br/>to add your own text and edit me. <br/>Let your users get to know you.
                                </Typography>
                        </Grid>
                        <Grid item className={classes.gridItems} xs={3}>
                                <Typography variant="h6">
                                    high quality <br/>
                                    sound
                                </Typography>
                                <Typography>
                                    I'm a paragraph. Click here <br/>to add your own text and edit me. <br/>Let your users get to know you.
                                </Typography>
                        </Grid>
                        <Grid item className={classes.gridItems} xs={3}>

                                <Typography variant="h6">
                                    high quality <br/>
                                    sound
                                </Typography>
                                <Typography>
                                    I'm a paragraph. Click here <br/>to add your own text and edit me. <br/>Let your users get to know you.
                                </Typography>
                        </Grid>
                        <Grid item className={classes.gridItems} xs={3}>
                                <Typography variant="h6">
                                    high quality <br/>
                                    sound
                                </Typography>
                                <Typography>
                                    I'm a paragraph. Click here <br/>to add your own text and edit me. <br/>Let your users get to know you.
                                </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </main>
    )
}
