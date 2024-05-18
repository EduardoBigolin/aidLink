import { Request, Response } from 'express'
import { createUserService, getUserByIdService } from '../service/UserService'
import { UserModel } from '../model/User'

async function createUser(req: Request, res: Response) {
    
    const { name, email, password } = req.body
    
    const userModel = new UserModel(name, email, password);
    const resutlt = await createUserService(userModel)    

    res.status(resutlt.statusCode).json(resutlt.body)
}

export { createUser }