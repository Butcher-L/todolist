import { encrypt } from '../../middlewares/encrypt.js';
import { generateToken } from '../../middlewares/token.js';

import login from './login.js';

const loginUseCase = login({ encrypt, generateToken });

export {
  loginUseCase,
};