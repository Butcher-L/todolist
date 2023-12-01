import TransactionDB from '../../models/transaction-db.js';
import  makeTransaction  from "../../entities/transactions/index.js";

const addTransactionUseCase = ({generateId, Prefix, Transaction}) => {
    return async function add(info){
        const transactionEntity = makeTransaction(info);
        const transaction = await TransactionDB.findOne({
            name : info.name,
            user: info.user,
            status: Transaction.Todo,
        })
        if(transaction){
            throw new Error('Transaction already exists')
        }

        const id = generateId(Prefix.Transaction)

        await TransactionDB.create({
            ...info,
            _id:id,
            status: Transaction.Todo,
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