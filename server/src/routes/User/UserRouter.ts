
import express, { Request, Response } from 'express';
import { UserController } from '../../controllers';

export const userRouter = express.Router({
  strict: true
});

const userController = new UserController();

userRouter.get('/', (req: Request, res: Response) => {
  userController.read(req, res);
});