import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, Timestamp, where } from 'firebase/firestore'
import { Grommet, Box, Card, CardHeader, CardFooter, DataChart, Text, Grid, Button, Heading } from 'grommet'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../utils/firebaseConfig'
import coinsStyles from '../styles/CoinListing.module.css'

export default function Portfolio() {
  const [tracked, setTracked] = useState()
  const [previous, setPrevious] = useState([])

  useEffect(() => {
    fetchTracked()
  }, [])

  async function fetchTracked() {
    const snapshot = await getDocs(collection(db, "tracked"))
    const res = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    const currentTracked = res.filter(doc => !doc.endTimestamp)[0]
    const previousTracked = res.filter(doc => doc.endTimestamp)

    setPrevious(previousTracked)

    if (!currentTracked) {
      setTracked(false)
    } else {
      onSnapshot(doc(db, 'coins', currentTracked.coinId),
        doc => setTracked({ ...currentTracked, ...doc.data() })
      )
    }
  }

  async function stopTracking() {
    await setDoc(doc(db, 'tracked', tracked.id), {
      amount: tracked.amount,
      coinId: tracked.coinId,
      startPrice: tracked.startPrice,
      startTimestamp: tracked.startTimestamp,
      endTimestamp: Timestamp.now(),
      endPrice: tracked.price
    })

    setTracked(false)
  }

  const startTimestamp = tracked?.startTimestamp?.seconds * 1000

  console.log(tracked)

  const chartData = tracked ?
    tracked.priceHistory
      // .filter(x => x.timestamp >= startTimestamp)
      ?.filter(x => x.price % 1 === 0).map(x => {
        const date = new Date(x.timestamp.seconds * 1000)
        return {
          price: x.price * tracked.amount,
          date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
        }
      })
    : null

  return (
    <Box gap='medium'>
      {tracked === false && (
        <Box gap='small'>
          <Text>No coin selected for tracking</Text>
          <Link href='/coins'>
            <Button
              color='focus'
              label='Start Tracking'
              style={{ color: 'white', width: '15rem' }}
            />
          </Link>
        </Box>
      )}
      
      {tracked && (
        <Box gap='medium' pad='medium' className={coinsStyles.card}>
          <Box direction='row' gap='medium' align='center'>
            <Heading level={3} margin={{ vertical: 'xsmall' }}>
              Currently Tracking <Text color='focus' size='inherit'>{tracked.amount} {tracked.coinId}</Text>
            </Heading>
            <Box direction='row' gap='medium'>
              <Text size='1.2rem' className={tracked.price - tracked.startPrice >= 0 ? coinsStyles.up : coinsStyles.down}>
                {Math.abs(((tracked.price / tracked.startPrice * 100) - 100).toFixed(3))}%
              </Text>
            </Box>
          </Box>

          {chartData && chartData.length ? (
            <Box>
              <DataChart
                data={chartData}
                series={["date", { property: "price", prefix: "$" }]}
                chart={[
                  { property: "price", type: "line", thickness: "5px", round: true },
                  { property: "price", type: "area", opacity: "medium", thickness: "xsmall" },
                ]}
                // size={{ width: 'calc(80vw)' }}
                style={{ maxWidth: 'max-content' }}
              />
            </Box>
          ) : (
            "Not enough data points for chart"
          )}

          <Text color='status-critical' onClick={stopTracking} style={{ cursor: 'pointer', width: 'max-content' }}>
            Stop Tracking
          </Text>
        </Box>
      )}

      <Box>
        <Heading level={3}>Previously Tracked</Heading>
        {previous.length ? (
          <Box gap='small'>
            {previous.map(tracked => {
              const delta = (tracked.endPrice / tracked.startPrice * 100) - 100
              return (
                <div
                  className={`${coinsStyles.card} ${coinsStyles.cardInfo}`}
                  style={{ gridTemplateColumns: '12% 12% 30% 40%', minWidth: 'unset' }}
                >
                  <Box width='100%' align='center' justify='center'>
                    <Text color='focus' size='1.2rem' weight={600}>{tracked.coinId}</Text>
                  </Box>
                  <Box width='100%' align='center' justify='center'>
                    <Text
                      size='1.2rem'
                      className={delta >= 0 ? coinsStyles.up : coinsStyles.down}
                      >
                        {Math.abs(delta).toFixed(2)}%
                      </Text>
                  </Box>
                  <div>
                    <div className={coinsStyles.infoBlock}>
                    <Text color='focus' weight={600}>Starting price</Text>
                      <span>${tracked.startPrice}</span>
                    </div>
                    <div className={coinsStyles.infoBlock}>
                      <Text color='focus' weight={600}>Ending price</Text>
                      <span>${tracked.endPrice}</span>
                    </div>
                  </div>
                  <div>
                    <div className={coinsStyles.infoBlock} style={{ maxWidth: '17rem' }}>
                    <Text color='focus' weight={600}>From</Text>
                      <span>{dateString(tracked.startTimestamp.seconds)}</span>
                    </div>
                    <div className={coinsStyles.infoBlock} style={{ maxWidth: '17rem' }}>
                      <Text color='focus' weight={600}>Till</Text>
                      <span>{dateString(tracked.endTimestamp.seconds)}</span>
                    </div>
                  </div>
                  {/* <Grid
                    key={tracked.id}
                    columns={['small', 'small', 'auto']}
                    rows={['xxsmall']}
                    areas={[
                      { name: 'info1', start: [0, 0], end: [0, 0] },
                      { name: 'info2', start: [1, 0], end: [1, 0] },
                      { name: 'info3', start: [2, 0], end: [2, 0] }
                    ]}
                  >
                    <Box gridArea='info1'>
                      <Text size={'1.2rem'} weight={600}>Coin: {tracked.coinId}</Text>
                      <Box>Delta: {delta}%</Box>
                    </Box>
                    <Box gridArea='info2'>
                      <Box>Starting price: ${tracked.startPrice}</Box>
                      <Box>Ending price: ${tracked.endPrice}</Box>
                    </Box>
                    <Box gridArea='info3'>{dateString(tracked.startTimestamp.seconds)} - {dateString(tracked.endTimestamp.seconds)}</Box>
                  </Grid> */}
                </div>
              )
            })}
          </Box>
        ) : (
          <Text>No previously tracked coins</Text>
        )}
      </Box>
    </Box>
  )
}

function dateString(timestamp) {
  const date = new Date(timestamp * 1000)
  return date.toLocaleString()
}