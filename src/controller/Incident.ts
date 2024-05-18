import { Request, Response } from "express";
import { IncidentModel } from "../model/Incident";
import { createIncidentService } from '../service/IncidentService';

export async function createIncident(req: Request, res: Response) {
  const { name, address, city, state, zip, description, lat, long, image, user_id } =
    req.body;

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

  const result = await createIncidentService(incidentModel, req.user.id)
  res.status(result.statusCode).json(result.body);
}

export async function getIncident (req: Request, res: Response){
  
}