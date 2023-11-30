import { Router } from 'express';
const router = Router();
import  ExpressCallback  from '../middlewares/express-callback.js';

import {
    addUserController,
    getUsersController
}  from '../controllers/users/index.js';

router.post('/add-user', ExpressCallback(addUserController));
router.get('/' ,ExpressCallback(getUsersController));

export default router;