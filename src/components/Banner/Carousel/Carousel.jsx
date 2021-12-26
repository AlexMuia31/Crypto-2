import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { CryptoState } from '../../../CryptoContext'
import { carouselStyles } from './CarouselStyles'
import { TrendingCoins } from '../../../config/api'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

const Carousel = () => {
    const classes = carouselStyles()
    const [trending, setTrending] = useState([])


    const { currency } = CryptoState()
    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))

        setTrending(data)
    }
    console.log(trending)

    useEffect(() => {
        fetchTrendingCoins();
        //eslint-disable-next-line
    }, [currency])

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        }
    }

    const items = trending.map((coin) => {
        return (
            <Link to={`/coins/${coin.id}`} className={classes.carouselItem} >
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height='80'
                    style={{ marginBottom: 10 }}
                />

            </Link>
        )
    })

    return (
        <div className={classes.carousel}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}
            />
        </div>
    )
}

export default Carousel
