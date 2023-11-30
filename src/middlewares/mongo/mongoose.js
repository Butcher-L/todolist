import { connect } from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

async function MongooseService() {
const uri =  process.env.NODE_ENV==='test' 
  ?  `mongodb://127.0.0.1:27017/todolist_test`
  : process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${process.env.MONGODB}` 

// Connect to the MongoDB server and the specified database using Mongoose
  connect(uri, {
   useNewUrlParser: true, 
   useUnifiedTopology: true, 
   dbName: process.env.NODE_ENV==='test'? process.env.MONGODBTEST : process.env.MONGODB })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });
}
 

export default  MongooseService 