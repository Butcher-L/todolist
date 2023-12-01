import { Router } from 'express';
const router = Router();
import ExpressCallback from '../middlewares/express-callback.js';
import { verifyToken } from '../middlewares/token.js';

import { 
  addTransactionController, 
  // updateTransactionController, 
  // getTransactionController, 
  // getTransactionsController, 
  // deleteTransactionController 
} from '../controllers/transactions/index.js';

router.post('/add-transaction', verifyToken, ExpressCallback(addTransactionController));
// router.put('/update/:id', verifyToken, ExpressCallback(updateTransactionController))
// router.get('/get/:id', verifyToken, ExpressCallback(getTransactionController))
// router.get('/', verifyToken, ExpressCallback(getTransactionsController)) 
// router.delete('/delete/:id', verifyToken, ExpressCallback(deleteTransactionController))


export default router;