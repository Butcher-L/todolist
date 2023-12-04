import { Router } from 'express';
const router = Router();
import  ExpressCallback  from '../middlewares/express-callback.js';
import { loginController } from '../controllers/login/index.js';


router.post('/',ExpressCallback(loginController));

export default router;