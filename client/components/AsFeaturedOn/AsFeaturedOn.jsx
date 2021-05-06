import React from 'react'
import { Container, Grid, Box, Typography, Link } from '@material-ui/core'
import { useStyles } from './AsFeaturedOn.style'
import TuneIcon from '../../components/TuneIcon/TuneIcon'
import EastFlowIcon from '../../components/EastFlowIcon/EastFlowIcon'
import RockIcon from '../../components/RockIcon/RockIcon'
import InstrumentalIcon from '../../components/InstrumentalIcon/InstrumentalIcon'
import WaveIcon from '../../components/WaveIcon/WaveIcon'

export default function AsFeaturedOn() {
  const classes = useStyles()

  return (
    <main>
      <Box className={classes.featuredOn}>
        <Container className={classes.allContent}>
          <Grid container className={classes.MainGrid}>
            <Grid container item xs={12} spacing={0}>
              <Grid item xs={2} className={classes.gridElement}>
                <Box className={classes.paper}>
                  <Typography className={classes.title}>
                    As Featured On:
                  </Typography>
                </Box>
              </Grid>
              <Grid item className={classes.gridElement}>
                <Box className={classes.paper}>
                  <Link href="">
                    <TuneIcon />
                  </Link>
                </Box>
              </Grid>
              <Grid item className={classes.gridElement}>
                <Box className={classes.paper}>
                  <Link href="">
                    <EastFlowIcon />
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              spacing={0}
              className={classes.secondGrid}
            >
              <Grid item className={classes.gridElement}>
                <Box className={classes.paper}>
                  <Link href="">
                    <RockIcon />
                  </Link>
                </Box>
              </Grid>
              <Grid item className={classes.gridElement}>
                <Box className={classes.paper}>
                  <Link href="">
                    <InstrumentalIcon />
                  </Link>
                </Box>
              </Grid>
              <Grid item className={classes.gridElement}>
                <Box className={classes.paper}>
                  <Link href="">
                    <WaveIcon />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  )
}
