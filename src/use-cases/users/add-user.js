import UserDB from '../../models/user-db.js';
import makeUser from "../../entities/users/index.js";

const addUserUseCase = ({ encrypt, generateId , Prefix}) => {
    return async function add(info){
        const userEntity = makeUser(info);
        
        const user = await UserDB.findOne({
            firstname : info.firstname,
            lastname : info.lastname
        })

        if(user){
            throw new Error('Account already exists')
        }

        const username = await UserDB.findOne({
            username : info.username,
        })

        if(username){
            throw new Error('username already exists')
        }

        const id = generateId(Prefix.User)

        await UserDB.create({
            ...info,
            _id:id,
            password: encrypt(info.password), 
            dateTimeCreated: Date.now(),
            dateTimeUpdated: Date.now(),
        })
        return {
            msg: `User ${userEntity.getFirstname()} added successfully`,
            id
        };
    };
};

export default addUserUseCase;