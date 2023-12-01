import { generateId, Prefix } from '../../middlewares/generateId.js';
import { TransactionType, Transaction } from '../../middlewares/types.js'; 

import addTransaction from './add-transaction.js';
// import updateTransaction from './update-transaction';
// import getTransaction from './get-transaction';
// import getTransactions from './get-transactions';
// import deleteTransaction from "./delete-transaction";

const addTransactionUseCase = addTransaction({ generateId, Prefix, Transaction});
// const updateTransactionUseCase =  updateTransaction({ TransactionType })
// const getTransactionUseCase = getTransaction({})
// const getTransactionsUseCase = getTransactions({})
// const deleteTransactionUseCase = deleteTransaction({})

export {
  addTransactionUseCase,
  // updateTransactionUseCase,
  // getTransactionUseCase,
  // getTransactionsUseCase,
  // deleteTransactionUseCase
};