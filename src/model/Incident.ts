export class IncidentModel {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    description: string;
    lat: number;
    long: number;
    image: string
    
  
    constructor(name: string, address: string, city: string, state: string, zip: number, description: string, lat: number, long: number, image:string) {
      this.name = name;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.description = description;
      this.lat = lat;
      this.long = long;
      this.image = image;
    }
}