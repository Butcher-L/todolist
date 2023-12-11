import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

async function MongooseService() {
const uri = process.env.MONGODB_URI 
// process.env.NODE_ENV==='test' 
//   ?  `mongodb://127.0.0.1:27017/todolist_test`
  // :
  //  process.env.MONGODB_URI 
  //  || `mongodb://127.0.0.1:27017/${process.env.MONGODB}` 

  console.log(uri)
// Connect to the MongoDB server and the specified database using Mongoose
  try {
    await mongoose.connect(uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    console.log("Connect to MongoDB successfully")
  } catch (error) {
    throw new Error("Connect failed " + error.message )
  }
}
 

export default  MongooseService 