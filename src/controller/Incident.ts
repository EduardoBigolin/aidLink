import { Request, Response } from "express";
import { IncidentModel } from "../model/Incident";
import { createIncidentService } from '../service/IncidentService';

export async function createIncident(req: Request, res: Response) {
  const { name, address, city, state, zip, description, lat, long, image } =
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
    image
  );

  const result = await createIncidentService(incidentModel)

  console.log(result);
}
