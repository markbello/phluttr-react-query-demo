import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import { createLike } from './createLike';
import { getPostById } from './getPostById';
import { getPosts } from './getPosts';
import { getPostsBySlug } from './getPostsBySlug';

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
    public async readBySlug(req: Request, res: Response): Promise<void> {
        const posts = await getPostsBySlug(req.params.slug);
        setTimeout(() => {
            res.send(posts);
        }, 1000)
    }

    public async readById(req: Request, res: Response): Promise<void> {
        const posts = await getPostById(req.params.id);
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

    public async addLike(req: Request, res: Response): Promise<void> {
        const response = await createLike(req.params.postId, req.body.createdBy);
        res.send(response)
    }
}