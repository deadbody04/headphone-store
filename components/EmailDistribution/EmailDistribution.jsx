import { Typography, Grid, Button } from '@material-ui/core'
import { useStyles, CssTextField } from './EmailDistribution.style'
import React from 'react'

export default function EmailDistribution() {
  const classes = useStyles()

  return (
    <main>
      <Grid container className={classes.emailMainGrid}>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
          className={classes.boxGrid}
        >
          <Grid item>
            <Typography className={classes.stayConnected}>
              Stay Connected
            </Typography>
          </Grid>
          <Grid item xs container direction="column">
            <Typography className={classes.emailText} variant="h2">
              Email*
            </Typography>
            <CssTextField
              type="email"
              name="email"
              autoComplete="email"
              variant="outlined"
              color="primary"
              size="small"
              className={classes.emailField}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.subscribeButton}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}
