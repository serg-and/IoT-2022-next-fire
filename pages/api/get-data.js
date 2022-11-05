import Cors from 'cors'

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
  
  res.status(200).json({
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
  })
}
