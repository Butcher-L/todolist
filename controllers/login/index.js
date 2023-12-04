import { loginUseCase } from '../../use-cases/login/index.js';

import login from './login.js';

const loginController = login({ loginUseCase });

export {
  loginController
};
