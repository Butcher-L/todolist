
import {
    addUserUseCase,
    getUsersUseCase,
    updateUserUseCase
} from '../../use-cases/users/index.js';

import addUser from './add-user.js'
import getUsers from './get-users.js'
import updateUser from './update-user.js'

const addUserController = addUser({ addUserUseCase });
const getUsersController = getUsers({ getUsersUseCase })
const updateUserController = updateUser({ updateUserUseCase })

export {
    addUserController,
    getUsersController,
    updateUserController
}
