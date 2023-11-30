import { Router } from 'express';
import  ExpressCallback  from '../middlewares/express-callback.js';
import { verifyToken } from '../middlewares/token.js'

const router = Router();

import {
    addUserController,
    getUsersController,
    updateUserController
}  from '../controllers/users/index.js';

router.post('/add-user', ExpressCallback(addUserController));
router.get('/', verifyToken, ExpressCallback(getUsersController));
router.put('/update/:id', verifyToken, ExpressCallback(updateUserController));

export default router;