import { Request, Response } from 'express';
import { UserModel } from '../model/User';
import { createUserService, updateUserService } from '../service/UserService';

async function createUser(req: Request, res: Response) {
    
    const { name, email, password } = req.body
    
    const userModel = new UserModel(name, email, password);
    const resutlt = await createUserService(userModel)    

    res.status(resutlt.statusCode).json(resutlt.body)
}


async function updateUser(req: Request, res: Response) {
    const { id } = req.params
    const { name} = req.body
    const resutlt = await updateUserService(name, id)

    res.status(resutlt.statusCode).json(resutlt.body)
}

export { createUser, updateUser };
