import { Request, Response } from "express";
import { ShelterModel } from "../model/Shelter";
import {
  createShelterService,
  updateShelterService,
  deleteShelterService,
  getUserShelterService
} from "../service/ShelterService";

export async function createShelter(req: Request, res: Response) {
  const {
    name,
    address,
    long,
    lat,
    image,
    city,
    state,
    zip,
    phone,
    code_pix,
    website,
    description,
    item,
    capacity,
    current,
  } = req.body;
  const id = req.user.id;
  const shelterModel = new ShelterModel(
    name,
    address,
    city,
    image,
    state,
    zip,
    phone,
    code_pix,
    website,
    description,
    long,
    lat,
    id,
    item,
    capacity,
    current
  );
  const resutlt = await createShelterService(shelterModel, id);
  res.status(resutlt.statusCode).json(resutlt.body);
}

export async function updateShelter(req: Request, res: Response) {
  const {
    name,
    address,
    long,
    lat,
    image,
    city,
    state,
    zip,
    phone,
    code_pix,
    website,
    description,
    item,
    capacity,
    current,
  } = req.body;
  const id = req.user.id;
  const user_id = id;
  const shelterModel = new ShelterModel(
    name,
    address,
    long,
    lat,
    image,
    city,
    state,
    zip,
    phone,
    code_pix,
    website,
    description,
    user_id,
    item,
    capacity,
    current
  );
  console.log(shelterModel.user_id);

  const resutlt = await updateShelterService(shelterModel);
  console.log(resutlt);

  res.status(resutlt.statusCode).json(resutlt.body);
}

export async function deleteShelter(req: Request, res: Response) {
  const id = req.user.id;
  const resutlt = await deleteShelterService(id);
  res.status(resutlt.statusCode).json(resutlt.body);
}

export async function getUserShelter(req: Request, res: Response) {
  const UserId = req.user.id;
  if (!UserId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const resutlt = await getUserShelterService(UserId);
  res.status(resutlt.statusCode).json(resutlt.body);
}
