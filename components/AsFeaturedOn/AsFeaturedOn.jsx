import React from 'react'
import { Container, Grid, Box, Typography, Link} from '@material-ui/core';
import { useStyles } from './AsFeaturedOn.style'
import TuneIcon from "../../public/TuneIcon";
import EastFlowIcon from "../../public/EastFlowIcon";
import RockIcon from "../../public/RockIcon";
import InstrumentalIcon from "../../public/InstrumentalIcon";
import WaveIcon from "../../public/WaveIcon";


export default function AsFeaturedOn() {
    const classes = useStyles();

    return (
        <main>
            <Box className={classes.featuredOn}>
                <Container className={classes.allContent}>
                    <Grid container spacing={1} className={classes.MainGrid}>
                        <Grid container item xs={12} spacing={0}>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Typography style={{padding: 20}}>As Featured On:</Typography> </Box>
                            </Grid>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}> <Link href=""><TuneIcon/></Link>
                                </Box>
                            </Grid>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Link href=""><EastFlowIcon/></Link></Box>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={0} className={classes.secondGrid}>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Link href=""><RockIcon/></Link></Box>
                            </Grid>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Link href=""><InstrumentalIcon/></Link></Box>
                            </Grid>
                            <Grid item xs={2} className={classes.gridElement}>
                                <Box className={classes.paper}><Link href=""><WaveIcon/></Link></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </main>
    )
}