import { ShelterModel } from "../model/Shelter";
import { ClientPrisma } from "../client";
import {HttpResponse} from "../utils/httpRespose"
async function createShelterService(shelterModel: ShelterModel, userId: string): Promise<HttpResponse>{
    console.log(shelterModel, userId);
    const createdShelter = await ClientPrisma.shelter.create({
        data: {
            name: shelterModel.name,
            address: shelterModel.address,
            city: shelterModel.city,
            image: shelterModel.image,
            long: shelterModel.long,
            lat: shelterModel.lat,
            state: shelterModel.state,
            zip: shelterModel.zip,
            phone: shelterModel.phone,
            code_pix: shelterModel.code_pix,
            website: shelterModel.website,
            description: shelterModel.description,
            item: shelterModel.item.map(e => JSON.stringify(e)),
            capacity: shelterModel.capacity,
            current: shelterModel.current,
            user_id: userId
        },
    })

    const result: HttpResponse = {statusCode: 201, body: createdShelter}

    return result
}

async function updateShelterService(shelterModel: ShelterModel): Promise<HttpResponse> {
    console.log(shelterModel.user_id);
    
    const firtsShelterFinded = await ClientPrisma.shelter.findFirst({
        where: {
            user_id: shelterModel.user_id
        }
    })

    if(!firtsShelterFinded){
        return {statusCode: 404, body: "This user does not have shelters created"}
    }


    const updatedUser = await ClientPrisma.shelter.update({
        where: {
            id: firtsShelterFinded.id
        },
        data: {
            code_pix: shelterModel.code_pix,
            item: shelterModel.item.map(e => JSON.stringify(e)),
        }
    })

    const result: HttpResponse= {statusCode: 200, body: updatedUser}

    return result
}

async function deleteShelterService(id: string): Promise<HttpResponse> {
    const firtsShelterFinded = await ClientPrisma.shelter.findFirst({
        where: {
            user_id: id
        }
    })

    if(!firtsShelterFinded){
        return {statusCode: 404, body: "This user does not have shelters created"}
    }


    const deletedShelter = await ClientPrisma.shelter.delete({
        where: {
            id: firtsShelterFinded.id
        }   
    })

    const result: HttpResponse= {statusCode: 200, body: deletedShelter}

    return result
}

async function getUserShelterService(id: string): Promise<HttpResponse> {
   
    const listedShelters = await ClientPrisma.shelter.findMany({
    where: {
        user_id: id
    } 
   })

   if(!listedShelters){
    return {statusCode:  404, body: "Uswer shelters not found"}
   }

   const result: HttpResponse = {statusCode: 201, body: listedShelters}

   return result
   
}


export { createShelterService, updateShelterService, deleteShelterService, getUserShelterService};

