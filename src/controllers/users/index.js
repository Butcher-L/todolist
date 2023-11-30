
import {
    addUserUseCase,
    getUsersUseCase
} from '../../use-cases/users/index.js';

import addUser from './add-user.js'
import getUsers from './get-users.js'

const addUserController = addUser({ addUserUseCase });
const getUsersController = getUsers({ getUsersUseCase })

export {
    addUserController,
    getUsersController
}
