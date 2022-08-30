
import express, { Request, Response } from 'express';
import { PostController } from '../../controllers';

export const postRouter = express.Router({
  strict: true
});

const postController = new PostController();

postRouter.get('/', (req: Request, res: Response) => {
  postController.read(req, res);
});

postRouter.get('/:id', (req: Request, res: Response) => {
  postController.readById(req, res);
});

postRouter.get('/by-user/:slug', (req: Request, res: Response) => {
  postController.readBySlug(req, res);
});

postRouter.post('/:postId/likes', (req: Request, res: Response) => {
  postController.addLike(req, res)
})