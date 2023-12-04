import UserDB from '../../models/user-db.js';
import makeLogin from '../../entities/login/index.js';

const loginUseCase = ({ encrypt ,generateToken }) => {
  return async function login(info){

    const userExist = await UserDB.findOne({
        username : info.username,
    })

    makeLogin(info);

    if (!userExist){
        throw new Error('User does not exits')
    }
    const user = await UserDB.findOne({
        username : info.username,
        password : encrypt(info.password)
    })

    if(!user){
        return{
            error: "Invalid Credentials",
            statusCode: 404,
        }
    }

    const token = await generateToken(user)

    return {
        message : 'Login successful',
        statusCode: 200,
        token: token,
    };
};
}

export default loginUseCase;