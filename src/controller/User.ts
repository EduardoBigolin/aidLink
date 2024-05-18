import { Request, Response } from 'express';
import { UserModel } from '../model/User';
import { createUserService, deleteUserService, getUserService, updateUserService } from '../service/UserService';

async function createUser(req: Request, res: Response) {

    const { name, email, password } = req.body

    const userModel = new UserModel(name, email, password);
    const resutlt = await createUserService(userModel)

    res.status(resutlt.statusCode).json(resutlt.body)
}

async function updateUser(req: Request, res: Response) {
    const id = req.user.id

    if (!id) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const { name } = req.body
    const resutlt = await updateUserService(name, id)

    res.status(resutlt.statusCode).json(resutlt.body)
}

async function deleteUser(req: Request, res: Response) {
    const id = req.user.id

    if (!id) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const resutlt = await deleteUserService(id)

    res.status(resutlt.statusCode).json(resutlt.body)
}

async function getUser(req: Request, res: Response) {
    const id = req.user.id

    if (!id) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const resutlt = await getUserService(id)

    res.status(resutlt.statusCode).json(resutlt.body)
}

export { createUser, deleteUser, getUser, updateUser };
