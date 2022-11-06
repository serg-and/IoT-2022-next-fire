import _ from 'lodash'
import axios from 'axios'
import { collection, doc, getDocs, setDoc, Timestamp } from 'firebase/firestore'
import { db } from './firebaseConfig.js'
// import { WebSocket } from 'ws'

// const markets = [
//   'BTC/EUR',
//   'BTC/USD',
//   'ETH/EUR',
//   'ETH/USD',
// ]

// let counter = 0
// let prices = {}

// const FTX = new WebSocket('wss://ftx.com/ws/')

// FTX.on('open', startSubscribtion)
// FTX.on('message', bufferedData => handleMessage(JSON.parse(bufferedData.toString())))

// function startSubscribtion() {
//   console.log('connected')
//   setInterval(() => FTX.send('{ "op": "ping" }'), 15000)

//   markets.forEach(market =>
//     FTX.send(JSON.stringify({ 'op': 'subscribe', 'channel': 'trades', 'market': market }))
//   )
// }

// function handleMessage(message) {
//   if (message.channel === 'trades') {
//     counter = counter + 1

//     if (message.data && prices[message.market] !== message.data[0].price) {
//       prices[message.market] = message.data[0].price

//       console.log(counter, message.market, message.data[0].price)
//     }
//   }

//   // switch (message.type) {
//   //   // case 'subscribed' || 'unsubscribed':
//   //   //   console.log(message.type, 'from channel:', message.channel, 'market:', message.market)
//   //   //   return
//   //   // case 'partial':
//   //   //   if (!message.data) return

//   //   //   console.log('update:', message.data.data['BTC/EUR'])
//   //   default:
//   // }
// }

const coinIds = [
  'BTC',
  'ETH',
  'USDT',
  'BNB',
  'DOGE',
  'SOL',
  'XRP',
  'FTT',
]

const priceHistoryIntervals = {}
// const priceHistoryUpdateInterval = 60  // 1 minute
const priceHistoryUpdateInterval = 900  // 15 minutes

export const localDataSet = {}
const snapshot = await getDocs(collection(db, "coins"))
snapshot.docs.forEach(doc => localDataSet[doc.id] =  doc.data())

getLatestPrices()
// setInterval(getLatestPrices, 5000)
setInterval(getLatestPrices, 910000)

async function getLatestPrices() {
  const { data } = await axios.get('https://ftx.com/api/markets')
  if (!data.success) return
  
  const currentTimestamp = Timestamp.now()

  // get all markets to track
  const usdMarkets = _.filter(data.result, market => market.quoteCurrency === 'USD')
  const availableMarkets = _.filter(usdMarkets, market => coinIds.includes(market.baseCurrency))

  availableMarkets.forEach(market => {
    if (localDataSet[market.baseCurrency]?.price !== market.price) {
      const newDataObject = {
        price: market.price,
        change1h: market.change1h,
        change24h: market.change24h,
        priceHigh24h: market.priceHigh24h,
        priceLow24h: market.priceLow24h,
        priceHistory: localDataSet[market.baseCurrency]?.priceHistory
          ? localDataSet[market.baseCurrency].priceHistory
          : []
      }

      // add updated price to priceHistory array if the update interval has passed for given coin
      if (!priceHistoryIntervals[market.baseCurrency] || currentTimestamp.seconds - priceHistoryIntervals[market.baseCurrency] > priceHistoryUpdateInterval) {
        newDataObject.priceHistory.push({
          price: market.price,
          timestamp: currentTimestamp
        })
        priceHistoryIntervals[market.baseCurrency] = currentTimestamp.seconds
      }

      localDataSet[market.baseCurrency] = newDataObject
      setDoc(doc(db, 'coins', market.baseCurrency), newDataObject)        
      console.log('updated:', market.baseCurrency, market.price)
    }
  })
}