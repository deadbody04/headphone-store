import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { useStyles, arrowStyles, indicatorStyles } from './Reviews.style'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

export default function Reviews() {
  const classes = useStyles()
  return (
    <main>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        id="reviews"
      >
        <Carousel
          className={classes.reviewsBlock}
          infiniteLoop={true}
          showStatus={false}
          transitionTime="1800"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <ArrowBackIos
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  left: 50,
                }}
              />
            )
          }
          renderArrowNext={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <ArrowForwardIos
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  right: 50,
                }}
              />
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  style={{ ...indicatorStyles, background: '#C0C0C0' }}
                  className={classes.indicator}
                />
              )
            }
            return (
              <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                className={classes.indicator}
              />
            )
          }}
        >
          <Container className={classes.reviewItem}>
            <Typography className={classes.reviewsCaption} variant="h2">
              Reviews
            </Typography>
            <Typography className={classes.bottomLine} variant="h2" />
            <Typography className={classes.reviewsParagraph} variant="h2">
              “Immerse yourself in the music and the world around you. Enjoy
              your favorite music with Soundbeam.”
            </Typography>
            <Typography className={classes.reviewsAuthor} variant="h2">
              DJ Nini
            </Typography>
          </Container>
          <Container className={classes.reviewItem}>
            <Typography className={classes.reviewsCaption} variant="h2">
              Reviews
            </Typography>
            <Typography className={classes.bottomLine} />
            <Typography className={classes.reviewsParagraph} variant="h2">
              “Soundbeam headphones let you listen to music and answer calls
              without any problems.”
            </Typography>
            <Typography className={classes.reviewsAuthor} variant="h2">
              Sam Mathews
            </Typography>
          </Container>
          <Container className={classes.reviewItem}>
            <Typography className={classes.reviewsCaption} variant="h2">
              Reviews
            </Typography>
            <Typography className={classes.bottomLine} />
            <Typography className={classes.reviewsParagraph} variant="h2">
              “Choose the Soundbeam ERD - 3083 headphones in your style from a
              wide range of colors.”
            </Typography>
            <Typography className={classes.reviewsAuthor} variant="h2">
              Rene Jordan
            </Typography>
          </Container>
        </Carousel>
      </Grid>
    </main>
  )
}
