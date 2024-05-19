import { Request, Response } from "express";
import { ShelterModel } from "../model/Shelter";
import { createShelterService } from "../service/ShelterService";

export async function createShelter(req: Request, res: Response) {
    const { name, address, city, state, zip, phone, code_pix, website, description, capacity, current } = req.body;
    const id = req.user.id;
    // const shelterModel = new ShelterModel(
    //     name, address, city, state, zip, phone, code_pix, website, description, capacity, current
    // );
    // const resutlt = await createShelterService(shelterModel, id);
    // res.status(resutlt.statusCode).json(resutlt.body);
}

// async function updateShelter(req: Request, res: Response) {
//     const { name } = req.body;
//     const resutlt = await updateShelterService(name, id);
//     res.status(resutlt.statusCode).json(resutlt.body);
// }

// async function deleteShelter(req: Request, res: Response) {
//     const resutlt = await deleteShelterService(id);
//     res.status(resutlt.statusCode).json(resutlt.body);
// }

// async function getrShelter(req: Request, res: Response) {
//     const UserId = req.user.id;
//     const { id } = req.query;
//     if (!id) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
//     const resutlt = await getShelterService(id);
//     res.status(resutlt.statusCode).json(resutlt.body);
// }