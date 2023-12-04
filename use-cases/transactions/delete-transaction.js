import TransactionDB from '../../models/transaction-db.js';

const deleteTransactionUseCase = ({Role}) => {
  return async function get(id, info){

    if(info.decoded.role != Role.Admin ){
      const transaction = await TransactionDB.findOne({
        _id: id,
        user: info.decoded._id
      })
  
      console.log(transaction)
  
      if(!transaction) {
        throw new Error('Not Authorize to delete')
      }
    }
    

    await TransactionDB.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set:{
          deleted: true,
          dateTimeUpdated: Date.now(),
          deletedBy: info.decoded._id
        }
      })
    return {
        msg: `Transaction ${id} deleted successfully`,
        id
    };
  };
};

export default deleteTransactionUseCase;