import { ClientPrisma } from "../client";
import { HttpResponse } from "../utils/httpRespose";
import { hash } from "../utils/hash";
import { SecurePointModel } from "../model/SecurePoint";

async function createSecurePointService(securePoint: SecurePointModel){
    const securePointCreated = "aaaaaaa"//await ClientPrisma.securePoint.create(securePoint)

    return { statusCode: 200,
        body: securePointCreated
    }
    
}

export {createSecurePointService}