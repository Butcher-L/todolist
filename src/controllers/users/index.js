
import {
    addUserUseCase,
    getUsersUseCase,
    updateUserUseCase,
    deleteUserUseCase,
    getUserUseCase
} from '../../use-cases/users/index.js';

import addUser from './add-user.js'
import getUsers from './get-users.js'
import updateUser from './update-user.js'
import deleteUser from './delete-user.js'
import getUser from './get-user.js'

const addUserController = addUser({ addUserUseCase });
const getUsersController = getUsers({ getUsersUseCase })
const updateUserController = updateUser({ updateUserUseCase })
const deleteUserController = deleteUser({ deleteUserUseCase })
const getUserController = getUser({ getUserUseCase })

export {
    addUserController,
    getUsersController,
    updateUserController,
    deleteUserController,
    getUserController
}
