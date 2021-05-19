import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { useStyles } from './Loader.style'

export default function Loader() {
  const classes = useStyles()

  return (
    <main className={classes.mainBlock}>
      <CircularProgress className={classes.progressBlock} />
    </main>
  )
}
