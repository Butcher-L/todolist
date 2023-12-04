import TransactionDB from '../../models/transaction-db.js';

const getTransactionsUseCase = () => {
  return async function getAll(info){

    const {first, order, next, user} = info
      return TransactionDB.find({
        ...user ? ({ user }) : {deleted: false}
      })
      .skip(next)
      .limit(first)
      .sort({dateTimeCreated:order});
  };
};

export default getTransactionsUseCase;