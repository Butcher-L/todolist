import { generateId, Prefix } from '../../middlewares/generateId.js';
import { TransactionType, Transaction, Role } from '../../middlewares/types.js'; 

import addTransaction from './add-transaction.js';
import updateTransaction from './update-transaction.js';
import getTransaction from './get-transaction.js';
import getTransactions from './get-transactions.js';
import deleteTransaction from "./delete-transaction.js";

const addTransactionUseCase = addTransaction({ generateId, Prefix, Transaction});
const updateTransactionUseCase =  updateTransaction({ TransactionType })
const getTransactionUseCase = getTransaction({})
const getTransactionsUseCase = getTransactions({})
const deleteTransactionUseCase = deleteTransaction({ Role })

export {
  addTransactionUseCase,
  updateTransactionUseCase,
  getTransactionUseCase,
  getTransactionsUseCase,
  deleteTransactionUseCase
};