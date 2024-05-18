// Middleware auth

declare global {
    namespace Express {
        interface Request {
            user?: { id: number; name: string };
        }
    }
}

import { Request, Response, NextFunction } from 'express';
import { decode } from '../utils/jwt';

function auth(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ message: 'Token is required' })
    }

    const decodeToken = decode(authorization.split(' ')[1])

    if (!decodeToken) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    req.user = decodeToken

    next()
}

export { auth };