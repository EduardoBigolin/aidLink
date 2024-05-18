import { ShelterModel } from "../model/Shelter";
import { ClientPrisma } from "../client";
async function createShelterService(shelterModel: ShelterModel, useId: string) {
    console.log(shelterModel, useId);
    await ClientPrisma.shelter.create({
        data: {
            name: shelterModel.name,
            address: shelterModel.address,
            city: shelterModel.city,
            state: shelterModel.state,
            zip: shelterModel.zip,
            phone: shelterModel.phone,
            code_pix: shelterModel.code_pix,
            website: shelterModel.website,
            description: shelterModel.description,
            capacity: shelterModel.capacity,
            current: shelterModel.current,
            user: {
                connect: {
                    id: useId
                }
            }
        }
    })

}

// function updateShelterService(shelterModel: ShelterModel): Promise<HttpResponse> {
// }

// function deleteShelterService(id): Promise<HttpResponse> {

// }

// function getShelterService(id): Promise<HttpResponse> {

// }


export { createShelterService };

