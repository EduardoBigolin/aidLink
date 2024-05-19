import { Request, Response } from "express";
import { IncidentModel } from "../model/Incident";
import {
  createIncidentService,
  getIncidentService,
  getByUserIncidentService,
  deleteIncidentService,
  updateIncidentService
} from "../service/IncidentService";

export async function createIncident(req: Request, res: Response) {
  const {
    name,
    address,
    city,
    state,
    zip,
    description,
    lat,
    long,
    image,
    user_id,
  } = req.body;

  const incidentModel = new IncidentModel(
    name,
    address,
    city,
    state,
    zip,
    description,
    lat,
    long,
    image,
    user_id
  );

  const result = await createIncidentService(incidentModel, req.user.id);
  res.status(result.statusCode).json(result.body);
}

export async function getIncident(req: Request, res: Response) {
  const id = req.params.id;

  const result = await getIncidentService(id);

  res.status(result.statusCode).json(result.body);
}

export async function getIncidentByUser(req: Request, res: Response) {
  const id = req.params.id;

  const result = await getByUserIncidentService(id);

  res.status(result.statusCode).json(result.body);
}

export async function deleteIncidents(req: Request, res: Response) {
  const id = req.params.id;
  const result = await deleteIncidentService(id);

  res.status(result.statusCode).json(result.body);
}

export async function updateIncidents(req: Request, res: Response){
  const id = req.params.id;
  
  
  
  const { name } = req.body
    const resutlt = await updateIncidentService(name, id)

    res.status(resutlt.statusCode).json(resutlt.body)
}