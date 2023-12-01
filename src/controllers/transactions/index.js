import { 
  addTransactionUseCase, 
  updateTransactionUseCase, 
  getTransactionUseCase, 
  getTransactionsUseCase, 
  deleteTransactionUseCase 
} from '../../use-cases/transactions/index.js';

import addTransaction from './add-transaction.js';
import updateTransaction from './update-transaction.js';
import getTransaction from './get-transaction.js';
import getTransactions from './get-transactions.js';
import deleteTransaction from './delete-transaction.js';

const addTransactionController = addTransaction({ addTransactionUseCase });
const updateTransactionController = updateTransaction({ updateTransactionUseCase });
const getTransactionController = getTransaction({ getTransactionUseCase })
const getTransactionsController = getTransactions({ getTransactionsUseCase })
const deleteTransactionController = deleteTransaction({ deleteTransactionUseCase })


export {
  addTransactionController,
  updateTransactionController,
  getTransactionController,
  getTransactionsController,
  deleteTransactionController
}