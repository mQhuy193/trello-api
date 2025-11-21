/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

const MONGODB_URI = 'mongodb+srv://mQhuy193:WrZhZa6EjPgJKUn7@cluster0-mqhuy.iafiifh.mongodb.net/?appName=Cluster0-mQhuy'

const DATABASE_NAME = 'trello-database'

import { MongoClient, ServerApiVersion } from 'mongodb'

// Khởi tạo một đối tượng trelloDatabaseInstance ban đầu là null vì chưa connect
let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

//Kết nối đến database
export const CONNECT_DB = async () => {
  //Gọi kết nối MongoDB Atlas tới URI đã khai báo trong thân của mongoClientInstance
  await mongoClientInstance.connect()

  //Kết nối thành công thì lấy ra Database theo tên và gán ngược vào biến trelloDatabaseInstance
  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

/*Funtion GET_DB có nhiệm vụ export ra trelloDatabaseInstance sau khi đã connect thành công tới MongoDB
 để sử dụng ở nhiều nơi khác nhau trong code*/
//Lưu ý phải đảm bảo chỉ gọi GET_DB sau khi kết nối thành công tới MongoDB
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to database first!')
  return trelloDatabaseInstance
}
