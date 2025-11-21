/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import { mapOrder } from '~/utils/sorts.js'
import { CONNECT_DB, GET_DB } from '~/config/mongodb.js'

const START_SERVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8017

  app.get('/', async (req, res) => {
    // Test Absolute import mapOrder
    console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`3. Back-end server is running successfully at Host: ${hostname} and Port: ${port}`)
  })
}

//Chỉ khi kết nối tới database thành công thì mới khởi động server back-end
//Immediately-Invoked / Anonymous Async Function (IIFE)
;(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas ...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB Cloud Atlas successfully!')
    START_SERVER()
  } catch (error) {
    console.error('Failed to connect to MongoDB Cloud Atlas', error)
    process.exit(0)
  }
})()

//Chỉ khi kết nối tới database thành công thì mới khởi động server back-end
// console.log('1. Connecting to MongoDB Cloud Atlas ...')
// CONNECT_DB()
//   .then(() => console.log('2. Connected to MongoDB Cloud Atlas successfully!'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error('Failed to connect to MongoDB Cloud Atlas', error)
//     process.exit(0)
//   })
