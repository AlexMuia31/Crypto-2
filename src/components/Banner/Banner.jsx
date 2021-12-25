import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { bannerStyles } from './BannerStyles'
import Carousel from './Carousel/Carousel'


const Banner = () => {
    const classes = bannerStyles()
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant='h2'
                        style={{
                            fontWeight: 'bold',
                            marginBottom: 15,
                            fontFamily: 'Nunito'
                        }}
                    >
                        Crypto Rank
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        style={{
                            color: 'darkgrey',
                            textTransform: 'capitalize',
                            fontFamily: 'Nunito'
                        }}
                    >
                        Providing all info about cryptocurrencies
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
}

export default Banner
