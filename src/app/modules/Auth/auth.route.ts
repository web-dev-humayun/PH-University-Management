import express from 'express';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
)
router.post(
  '/change-password',
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword,
);

export const AuthRoutes = router;
