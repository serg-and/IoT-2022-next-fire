import { useRouter } from "next/router";
import { useState } from "react";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, Timestamp, where } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { Box, Button, Text, TextInput } from "grommet";

export default function TrackCoin() {
  const [amount, setAmount] = useState()
  const router = useRouter()
  let { coinId } = router.query
  coinId = coinId?.toUpperCase()

  async function startTracking() {
    const coinSnapshot = await getDoc(doc(db, 'coins', coinId))
    if (!coinSnapshot.exists()) {
      console.log(`Coin id ${coinId} doesn't exist`)
      return
    }
    const coin = coinSnapshot.data()

    // stop tracking any currently tracking coins and set end price and timestamp
    const currrentlyTracking = await getDocs(query(collection(db, 'tracked'), where('endTimestamp', '==', null)))
    currrentlyTracking.forEach(async tracked => {
      const trackedData = tracked.data()
      const coinSnap = await getDoc(doc(db, 'coins', trackedData.coinId))
      const coinData = coinSnap.data()

      setDoc(doc(db, 'tracked', tracked.id), {
        ...tracked.data(),
        endTimestamp: Timestamp.now(),
        endPrice: coinData.price
      })
    })

    await addDoc(collection(db, 'tracked'), {
      amount: amount,
      coinId: coinId,
      startPrice: coin.price,
      endPrice: null,
      startTimestamp: Timestamp.now(),
      endTimestamp: null,
    })

    // redirect to portfolio page
    location.href = '/portfolio'
  }

  return (
    <Box align="center">
      <Box gap='medium' width='20rem'>
        <h2>Start tracking <Text color='focus' size='1.5rem' weight={600}>{coinId}</Text></h2>
        <TextInput
          type='number'
          placeholder='Enter an amount to track'
          onChange={e => setAmount(e.target.value)}
        />
        <Button
          color='focus'
          disabled={!amount}
          label='Start Tracking'
          style={{ color: 'white' }}
          onClick={startTracking}
        />
      </Box>
    </Box>
  )
}