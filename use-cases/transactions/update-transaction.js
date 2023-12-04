import TransactionDB from '../../models/transaction-db.js';
import { includes, pick } from 'ramda';

const updateTransactionUseCase = ({ TransactionType }) => {
    return async function add(id,info){
      const transactionExists = await TransactionDB.findOne({_id:id})
      if(!transactionExists){
        throw new Error('Transaction does not exists')
      }

      if(info.status){
        const validStatus = includes(info.status, TransactionType)
        
        if(!validStatus){
          throw new Error('Invalid status')
        }
      }

      if(info.name){
        const transaction = await TransactionDB.findOne({
          ...pick(['name'],info)
        })

        if(transaction){
          throw new Error('Transaction name already exists')
        }
      }

      await TransactionDB.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set:{
            ...info,
            dateTimeUpdated: Date.now(),
            updatedBy: info.decoded._id
          }
        })
      return {
          msg: `Transaction ${id} updated successfully`,
          id
      };
    };
};

export default updateTransactionUseCase;