import { encrypt } from '../../middlewares/encrypt.js';
import { generateId, Prefix } from '../../middlewares/generateId.js';

import addUser from './add-user.js'
import getUsers from './get-users.js'
import updateUser from './update-user.js'

const addUserUseCase = addUser({ encrypt, generateId, Prefix })
const getUsersUseCase = getUsers()
const updateUserUseCase = updateUser({encrypt})


export {
    addUserUseCase,
    getUsersUseCase,
    updateUserUseCase
}
