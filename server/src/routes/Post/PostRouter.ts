
import express, { Request, Response } from 'express';
import { PostController } from '../../controllers';

export const postRouter = express.Router({
  strict: true
});

const postController = new PostController();

postRouter.get('/', (req: Request, res: Response) => {
  postController.read(req, res);
});
postRouter.get('/:userId', (req: Request, res: Response) => {
  postController.readByUserId(req, res);
});