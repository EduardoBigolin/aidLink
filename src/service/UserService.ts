import { ClientPrisma } from "../client";
import { HttpResponse } from "../utils/httpRespose";
import { hash } from "../utils/hash";
import { UserModel } from "../model/User";

function validCreateUser(data: UserModel) {
    if (!data.name) {
        return 'Name is required'
    }
    if (!data.email) {
        return 'Email is required'
    }
    if (!data.password) {
        return 'Password is required'
    }
    if (data.password.length < 6) {
        return 'Password must be at least 6 characters'
    }
    if (!data.email.includes('@')) {
        return 'Invalid email'
    }
    if (data.name.length < 3) {
        return 'Name must be at least 3 characters'
    }
    if (data.name.length > 255) {
        return 'Name must be less than 255 characters'
    }
    if (data.email.length > 255) {
        return 'Email must be less than 255 characters'
    }
    if (data.password.length > 255) {
        return 'Password must be less than 255 characters'
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
        return 'Invalid email'
    }

    return null
}

async function createUserService(data: UserModel): Promise<HttpResponse> {

    const isValid = validCreateUser(data);

    if (isValid) {
        return {
            statusCode: 400,
            body: {
                message: isValid
            }
        }
    }

    const userAlreadyExists = await ClientPrisma.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (userAlreadyExists) {
        return {
            statusCode: 400,
            body: {
                message: 'User already exists'
            }
        }
    }

    const hashPassword = await hash(data.password)

    const user = await ClientPrisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashPassword,
        }
    })

    return {
        statusCode: 201,
        body: {
            message: 'User created successfully'
        }
    }
}


function validUpdateUser(name: string) {
    if (!name) {
        return 'Name is required'
    }
    if (name.length < 3) {
        return 'Name must be at least 3 characters'
    }
    if (name.length > 255) {
        return 'Name must be less than 255 characters'
    }

    return null
}

async function updateUserService(name: string, id: string): Promise<HttpResponse> {

    const isValid = validUpdateUser(name);

    if (isValid) {
        return {
            statusCode: 400,
            body: {
                message: isValid
            }
        }
    }

    const userExists = await ClientPrisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!userExists) {
        return {
            statusCode: 400,
            body: {
                message: 'User not found'
            }
        }
    }

    await ClientPrisma.user.update({
        where: {
            id: id
        },
        data: {
            name,
        }
    })

    return {
        statusCode: 200,
        body: {
            message: 'User updated successfully'
        }
    }
}

export { createUserService, updateUserService };