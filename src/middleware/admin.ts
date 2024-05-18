// Middleware auth
import { NextFunction, Request, Response } from 'express';

function admin(req: Request, res: Response, next: NextFunction) {
    const role = req.user.role
    if (role !== 'ADMIN') {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    
    next()
}

export { admin };
