import { encrypt } from '../../middlewares/encrypt.js';
import { generateId, Prefix } from '../../middlewares/generateId.js';

import addUser from './add-user.js';
import getUsers from './get-users.js';

const addUserUseCase = addUser({ encrypt, generateId, Prefix });
const getUsersUseCase = getUsers();

export {
    addUserUseCase,
    getUsersUseCase
}
