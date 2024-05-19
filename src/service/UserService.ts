import { ClientPrisma } from "../client";
import { HttpResponse } from "../utils/httpRespose";
import { hash } from "../utils/hash";
import { UserModel } from "../model/User";

function validCreateUser(data: UserModel) {
    if (!data.name) {
        return 'Nome é obrigatório'
    }
    if (!data.email) {
        return 'Email é obrigatório'
    }
    if (!data.password) {
        return 'Senha é obrigatória'
    }
    if (data.password.length < 6) {
        return 'Senha deve ter no mínimo 6 caracteres'
    }
    if (!data.email.includes('@')) {
        return 'Email inválido'
    }
    if (data.name.length < 3) {
        return 'Nome deve ter no mínimo 3 caracteres'
    }
    if (data.name.length > 255) {
        return 'Nome deve ter menos de 255 caracteres'
    }
    if (data.email.length > 255) {
        return 'Email deve ter menos de 255 caracteres'
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
        return 'Email inválido'
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
                message: 'Usuario já existe'
            }
        }
    }

    const hashPassword = await hash(data.password)

    await ClientPrisma.user.create({
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
        return 'Nome é obrigatório'
    }
    if (name.length < 3) {
        return 'Nome precisa ter no mínimo 3 caracteres'
    }
    if (name.length > 255) {
        return 'Nome precisa ter menos de 255 caracteres'
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
                message: 'Usuário não encontrado'
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
            message: 'Usuário atualizado com sucesso'
        }
    }
}

async function deleteUserService(id: string) {
    const userExists = await ClientPrisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!userExists) {
        return {
            statusCode: 400,
            body: {
                message: 'Usuário não encontrado'
            }
        }
    }

    await ClientPrisma.user.delete({
        where: {
            id: id
        }
    })

    return {
        statusCode: 200,
        body: {
            message: 'Usuário deletado com sucesso'
        }
    }
}

async function getUserService(id: string) {
    const userExists = await ClientPrisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!userExists) {
        return {
            statusCode: 400,
            body: {
                message: 'Usuário não encontrado'
            }
        }
    }

    return {
        statusCode: 200,
        body: userExists
    }
}

export { createUserService, updateUserService, deleteUserService, getUserService };
