import { Grommet, Box } from 'grommet'
import { addDoc, collection, doc, getDocs, onSnapshot, setDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../utils/firebaseConfig'
import CoinListing from '../components/CoinListing'

const Coins = collection(db, 'coins')

export default function AllCoins() {
  const [coins, setCoins] = useState([])
  
  useEffect(() => {
    onSnapshot(Coins,
      snapshot => setCoins(snapshot.docs.map(item => ({ ...item.data(), id: item.id }))),
      err => console.error(err)
    )
  }, [])

  return (
    <Box gap='medium'>
      {coins.map(coin => <CoinListing coin={coin} key={coin.id} />)}
    </Box>
  )
}