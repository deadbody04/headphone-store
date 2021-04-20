import { Typography, Container } from '@material-ui/core'
import { useStyles } from './Footer.style'
import React from 'react'

export default function EmailDistribution() {
  const classes = useStyles()

  return (
    <main className={classes.footerMainBlock}>
      <Container
        className={classes.footerContainer}
        justify="center"
        alignItems="center"
      >
        <Typography className={classes.footerText} variant="h2">
          &#169;2023 by SOUNDBEAM. Proudly created with Wix.com
        </Typography>
      </Container>
    </main>
  )
}
