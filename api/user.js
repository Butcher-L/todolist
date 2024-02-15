import { Router } from 'express';
import  ExpressCallback  from '../middlewares/express-callback.js';
import { verifyToken } from '../middlewares/token.js'

const router = Router();

import {
    addUserController,
    getUsersController,
    updateUserController,
    deleteUserController,
    getUserController
}  from '../controllers/users/index.js';

router.post('/add-user', ExpressCallback(addUserController));
router.get('/', verifyToken, ExpressCallback(getUsersController));
router.put('/update/:id', verifyToken, ExpressCallback(updateUserController));
router.delete('/delete/:id', verifyToken, ExpressCallback(deleteUserController))
router.get('/:id', ExpressCallback(getUserController))

export default router;