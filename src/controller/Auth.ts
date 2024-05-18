import { Request, Response } from 'express';
import { AuthModel } from '../model/Auth';
import { authService } from '../service/AuthService';

async function authController(req: Request, res: Response) {
    const { email, password } = req.body
    const auth = new AuthModel(email, password)
    const resutlt  = await authService(auth)

    res.status(resutlt.statusCode).json(resutlt.body)
}

export { authController };
