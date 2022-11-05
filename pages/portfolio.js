import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, Timestamp, where } from 'firebase/firestore'
import { Grommet, Box, Card, CardHeader, CardFooter, DataChart, Text, Grid, Button } from 'grommet'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../utils/firebaseConfig'

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

  const chartData = tracked ?
    tracked.priceHistory
      // .filter(x => x.timestamp >= startTimestamp)
      ?.map(x => {
        const date = new Date(x.timestamp)
        return {
          price: x.price * tracked.amount,
          date: date.toLocaleString()
        }
      })
    : null

  return (
    <Box gap='medium'>
      {tracked === false && (
        <Box gap='small'>
          <Text>No coin selected for tracking</Text>
        </Box>
      )}
      <Link href='/coins'>
        <Button
          primary={tracked === false}
          color='focus'
          label='Track A New Coin'
          style={{ color: 'white', width: '15rem' }}
        />
      </Link>
      {tracked && (
        <Box gap='medium'>
          <Text size='1.8rem' weight={600}>Currently Tracking <Text color='focus' size='inherit'>{tracked.amount} {tracked.coinId}</Text></Text>
          <Box direction='row' gap='medium'>
            <Text color={tracked.price - tracked.startPrice >= 0 ? 'green' : 'red'}>
              {(tracked.price / tracked.startPrice * 100) - 100}%
            </Text>
            <Text>
              €{tracked.price * tracked.amount}
            </Text>
            <div
              style={{ color: 'red', cursor: 'pointer', width: 'max-content' }}
              onClick={stopTracking}
            >
              Stop Tracking
            </div>
          </Box>
          {chartData && chartData.length ? (
            <Box>
              <DataChart
                data={chartData}
                series={["date", { property: "price", prefix: "€" }]}
                chart={[
                  { property: "price", type: "line", thickness: "5px", round: true },
                  { property: "price", type: "area", opacity: "medium", thickness: "xsmall" },
                ]}
                style={{ maxWidth: 'max-content' }}
              />
            </Box>
          ) : (
            "Not enough data points for chart"
          )}
        </Box>
      )}
      <Box>
        <h2>Previously tracked</h2>
        {previous.length ? (
          <Box gap='small'>
            {previous.map(tracked => {
              const delta = (tracked.endPrice / tracked.startPrice * 100) - 100
              return (
                <Grid
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
                    <Box>Starting price: €{tracked.startPrice}</Box>
                    <Box>Ending price: €{tracked.endPrice}</Box>
                  </Box>
                  <Box gridArea='info3'>{dateString(tracked.startTimestamp.seconds)} - {dateString(tracked.endTimestamp.seconds)}</Box>
                </Grid>
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
  const date = new Date(timestamp)
  return date.toLocaleString()
}