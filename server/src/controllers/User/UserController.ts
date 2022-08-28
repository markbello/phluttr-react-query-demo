import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import { getUsers } from './getUsers';

export class UserController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
}

public read(req: Request, res: Response): void {
    res.send(getUsers());
}

public update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
}

public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
}
}