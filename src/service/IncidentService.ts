import { ClientPrisma } from "../client";
import { HttpResponse } from "../utils/httpRespose";
import { hash } from "../utils/hash";
import { IncidentModel } from "../model/Incident";

const validIncident = (data: IncidentModel) => {
  if (!data.name) {
    return "Name is required";
  }
};

export async function createIncidentService(
  data: IncidentModel
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
      image: data.image
    },
  });

  return {
    statusCode: 201,
    body: {
        message: 'Incident created successfully'
    }
}


}
