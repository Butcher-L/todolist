import express from 'express'

import dotenv from 'dotenv'

dotenv.config();
import  MongooseService  from './middlewares/mongo/mongoose.js'

import usersRouter from './api/user.js'
import loginRouter from './api/login.js'
import transactionRouter from './api/transactions.js'

const app = express();

app.use(express.json());

app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/transactions', transactionRouter)

const PORT = process.env.PORT || 3000;

async function Connect() {
  const connect = await MongooseService();
  return connect;
}


app.listen(PORT, async () => {
  await Connect()

  console.log(`Server is listening on port ${PORT}.`);
});

console.log(`Server is connecting to db: ${ process.env.NODE_ENV==='test'? process.env.MONGODBTEST : process.env.MONGODB}.`);

export default app;
