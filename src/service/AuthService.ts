import { ClientPrisma } from "../client";
import { AuthModel } from "../model/Auth";
import { compare } from "../utils/hash";
import { HttpResponse } from "../utils/httpRespose";
import { sign } from "../utils/jwt";

async function authService(auth: AuthModel): Promise<HttpResponse> {
    const userExist = await ClientPrisma.user.findUnique({
        where: {
            email: auth.email
        }
    })
    if (!userExist) {
        return {
            statusCode: 404,
            body: {
                message: 'User not found'
            }
        }
    }
    const passwordMatch = await compare(auth.password, userExist.password);

    if (!passwordMatch) {
        return {
            statusCode: 401,
            body: {
                message: 'Invalid password'
            }
        }
    }

    const token = await sign({ id: userExist.id, name: userExist.name, role: userExist.role });

    return {
        statusCode: 200,
        body: {
            message: token,
            data: {
                id: userExist.id,
                name: userExist.name,
                email: userExist.email,
                role: userExist.role
            }
        }
    }

}

export { authService };