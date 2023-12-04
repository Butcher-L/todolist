import TransactionDB from '../../models/transaction-db.js';

const getTransactionUseCase = () => {
  return async function get(id){

      return TransactionDB.findById(id)
  };
};

export default getTransactionUseCase;