import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import { createLike } from '../Post/createLike';
import { createFollower } from './createFollower';
import { getUserById } from './getUserById';
import { getUsers } from './getUsers';

export class UserController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
}

public async addFollower(req: Request, res: Response): Promise<void> {
    const response = await createFollower({ followeeSlug: req.params.followeeSlug, followerSlug: req.body.followerSlug})

    res.send(response)
}

public async read(req: Request, res: Response): Promise<void> {
    const users = await getUsers();
    setTimeout(() => {
        res.send(users);
    }, 1000)
}

public async readById(req: Request, res: Response): Promise<void> {
    const user = await getUserById(req.params.slug);
    setTimeout(() => {
        res.send(user);
    }, 1000)
}

public update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
}

public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
}
}