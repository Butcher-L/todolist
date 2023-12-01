import TransactionDB from '../../models/transaction-db.js';
import  makeTransaction  from "../../entities/transactions/index.js";

const addTransactionUseCase = ({generateId, Prefix, Transaction}) => {
    return async function add(info){
        
        const data = {
            ...info,
            user: info.decoded._id
        }
        const transactionEntity = makeTransaction(data); 

        const transaction = await TransactionDB.findOne({
            name : data.name,
            user: data.user,
            status: Transaction.Todo,
        })

        if(transaction){
            throw new Error('Transaction already exists')
        }

        const id = generateId(Prefix.Transaction)

        await TransactionDB.create({
            ...data,
            _id:id,
            status: Transaction.Todo,
            user: data.user,
            dateTimeCreated: Date.now(),
            dateTimeUpdated: Date.now(),
        })
        return {
            msg: `Transaction ${transactionEntity.getName()} created successfully`,
            id
        };
    };
};

export default addTransactionUseCase;