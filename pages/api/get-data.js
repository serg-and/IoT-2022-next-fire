import Cors from 'cors'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebaseConfig'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors)

  const snapCoins = await getDocs(collection(db, "coins"))
  const coins = snapCoins.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  const snapTracked = await getDocs(collection(db, "tracked"))
  const allTracked = snapTracked.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  const tracked = allTracked.filter(doc => !doc.endTimestamp)[0]

  const trackedCoin = tracked ? coins.find(coin => coin.id === tracked.coinId) : null
  
  res.status(200).json({
    coins: coins.map(coin => ({
      id: coin.id,
      price: coin.price
    })),
    selected: trackedCoin ? {
      selected_coin: {
        id: tracked.coinId,
        amount: tracked.amount
      },
      selected_delta: (trackedCoin.price / tracked.startPrice) - 1
    } : null
  })
}

const x = {
  "coins": [
    {
      "id": "ADA",
      "icon": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ada.svg",
      "price": 0.458856
    },
    {
      "id": "BTC",
      "icon": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
      "price": 19661.2
    },
    {
      "id": "ETH",
      "icon": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg",
      "price": 1350.89
    }
  ],
  "selected": {
    "selected_coin": {
      "id": "ETH",
      "amount": "30"
    },
    "selected_delta": 0.03565797363219814
  }
}
