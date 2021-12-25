import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { CryptoState } from '../../../CryptoContext'
import { carouselStyles } from './CarouselStyles'
import { TrendingCoins } from '../../../config/api'

const Carousel = () => {
    const [trending, setTrending] = useState([])
    const classes = carouselStyles()

    const { currency } = CryptoState()
    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))

        setTrending(data)
    }
    console.log(trending)
    useEffect(() => {
        fetchTrendingCoins()
    }, [currency])
    return (
        <div className={classes.carousel}>
            Carousel
        </div>
    )
}

export default Carousel
