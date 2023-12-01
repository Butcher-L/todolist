import { 
  addTransactionUseCase, 
  // updateTransactionUseCase, 
  // getTransactionUseCase, 
  // getTransactionsUseCase, 
  // deleteTransactionUseCase 
} from '../../use-cases/transactions/index.js';

import addTransaction from './add-transaction.js';
// import updateTransaction from './update-transaction';
// import getTransaction from './get-transaction';
// import getTransactions from './get-transactions';
// import deleteTransaction from './delete-transaction';

const addTransactionController = addTransaction({ addTransactionUseCase });
// const updateTransactionController = updateTransaction({ updateTransactionUseCase });
// const getTransactionController = getTransaction({ getTransactionUseCase })
// const getTransactionsController = getTransactions({ getTransactionsUseCase })
// const deleteTransactionController = deleteTransaction({ deleteTransactionUseCase })


export {
  addTransactionController,
  // updateTransactionController,
  // getTransactionController,
  // getTransactionsController,
  // deleteTransactionController
}