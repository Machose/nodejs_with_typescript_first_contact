import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);

    const newUser = {
      name: user.fullName(),
      email: user.email,
    };

    return res.status(201).json(newUser);
  }
}

export default new UserController();
