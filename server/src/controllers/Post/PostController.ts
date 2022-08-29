import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import { getPosts } from './getPosts';

export class PostController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
}

public async read(req: Request, res: Response): Promise<void> {
    const posts = await getPosts(req.params.userId);
    setTimeout(() => {
        res.send(posts);
    }, 1000)
    
}

public update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
}

public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
}
}