import { ClientPrisma } from "../client";
import { HttpResponse } from "../utils/httpRespose";
import { hash } from "../utils/hash";
import { IncidentModel } from "../model/Incident";

const validIncident = (data: IncidentModel) => {
  if (!data.name) {
    return "Nome obrigatório";
  }
  if (!data.address) {
    return "Endereço obrigatório";
  }
  if (!data.city) {
    return "cidade obrigatória";
  }
  if (!data.state) {
    return "estado obrigatório";
  }
  if (!data.zip) {
    return "CEP obrigatório";
  }
  if (!data.description) {
    return "Descrição obrigatória";
  }
  if (!data.lat) {
    return "Latitude obrigatória";
  }
  if (!data.long) {
    return "Longitude obrigatória";
  }

  // if (data.zip.toString().length === 8) {
  //   return "Zip must have 5 characters";
  // }

  return null;
};

export async function createIncidentService(
  data: IncidentModel,
  user_id: string
): Promise<HttpResponse> {
  const isValid = validIncident(data);

  if (isValid) {
    return {
      statusCode: 400,
      body: {
        message: isValid,
      },
    };
  }

  await ClientPrisma.incident.create({
    data: {
      name: data.name,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      description: data.description,
      lat: data.lat,
      long: data.long,
      image: data.image,
      user_id,
    },
  });

  return {
    statusCode: 201,
    body: {
      message: "Incident created successfully",
    },
  };
}

export async function getIncidentService(id: string) {
  const incidentExists = await ClientPrisma.incident.findUnique({
    where: {
      id,
    },
  });

  if (!incidentExists) {
    return {
      statusCode: 400,
      body: {
        message: "Incidente não encontrado.",
      },
    };
  }

  return {
    statusCode: 200,
    body: incidentExists,
  };
}

export async function getByUserIncidentService(id: string){
  console.log("deu");
}