import { ClientPrisma } from '../client'
import { HttpResponse } from '../utils/httpRespose'
import { SecurePointModel } from "../model/SecurePoint"
import { Request, Response } from 'express'
import { createSecurePointService } from "../service/SecurePoint"

async function createSecurePoint(req: Request, res: Response) {

  const {
    city,
    name,
    max_people,
    current_people,
    state,
    street,
    longitude,
    latitude,
    items } = req.body

  const securePoint = new SecurePointModel(city,
    name,
    max_people,
    current_people,
    state,
    street,
    longitude,
    latitude,
    items)

  const result = await createSecurePointService(securePoint)


  res.status(result.statusCode).json(result.body)
}

async function updateSecurePoint(req: Request, res: Response) {
  const { city,
    name,
    max_people,
    current_people,
    state,
    street,
    longitude,
    latitude,
    items } = req.body
}




export { createSecurePoint, updateSecurePoint }