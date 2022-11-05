import { Box, Button, Card, CardBody, CardFooter, DataChart, Text } from 'grommet'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/CoinListing.module.css'

let classPrice = ''
let classChange24h = ''
let classChange1h = ''

export default function CoinListing({ coin }) {
  const [priceState, setPriceState] = useState(0)
  
  const priceRef = useRef()
  const previousRef = useRef()
  useEffect(() => {
    previousRef.current = coin
  }, [])
  useEffect(() => {
    if (previousRef.current.price < coin.price) setPriceState(1)
    else if (previousRef.current.price > coin.price) setPriceState(-1)
    else setPriceState(0)

    // const priceEl = document.getElementById(coin.id)
    if (!priceRef.current) return
    priceRef.current.style.animationName = 'none'
    setTimeout(() => priceRef.current.style.animationName = '', 100)

    if (priceRef.current) priceRef.current.offsetHeight
  }, [coin.price])

  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <Text color='focus' weight={600}>{coin.id}</Text>
        <div ref={priceRef}
          className={`${styles.price} ${!!priceState ? priceState > 0 ? styles.up : styles.down : ''}`}
        >
          €{coin.price}
        </div>
        <div>
          <Text color='focus' weight={600}>24h Change</Text>
          <div>{Math.round(coin.change24h * 10000) / 100}%</div>
        </div>
        <div>
          <div className={styles.infoBlock}>
          <Text color='focus' weight={600}>24h High</Text>
            {/* <b>24h High</b> */}
            <span>€{coin.priceHigh24h}</span>
          </div>
          <div className={styles.infoBlock}>
            <Text color='focus' weight={600}>24h Low</Text>
            <span>€{coin.priceLow24h}</span>
          </div>
        </div>
        <Link href={`/track/${coin.id}`}>
          <Button
            size='small'
            color='focus'
            label='Track'
            style={{ color: 'white' }}
          />
        </Link>
      </div>
      <div className={styles.chart}>
        {coin.priceHistory && (
          <Box align='center' justify='center' height='100%'>
            <DataChart
              axis={false}
              data={coin.priceHistory.map(x => {
                const date = new Date(x.timestamp)
                return {
                  date: date.toLocaleString(),
                  amount: x.price
                }
              })}
              series={["date", { property: "amount", prefix: "€" }]}
              chart={[{ property: "amount", type: "line", thickness: "3px", round: true }]}

              size={{ height: '45px' }}
              style={{ gridGap: '0px' }}
            />
          </Box>
        )}
      </div>
    </div>
  )
}