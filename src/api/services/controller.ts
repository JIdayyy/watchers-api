import ServiceHandler from './interfaces';
import forgotPassword from './handlers/forgotPassword';
import resetPassword from './handlers/resetPassword';
import verifyCaptcha from './handlers/verifyCaptcha';
import checkToken from './handlers/checkToken';

const controllers: ServiceHandler = {
  forgotPassword,
  resetPassword,
  verifyCaptcha,
  checkToken,
};

export default controllers;
