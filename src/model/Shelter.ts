import { v4 as uuidv4 } from 'uuid' 
 
class Item {
  id: string;
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
  }
}

export class ShelterModel {
  name: string;
  address: string;
  city: string;
  image: string;
  state: string;
  zip: string;
  phone: string;
  code_pix: string;
  website: string;
  description: string;
  long: string;
  lat: string;
  user_id: string;
  item: Item[];
  capacity: number;
  current: number;

  constructor(
    name: string,
    address: string,
    image: string,
    long: string,
    lat: string,
    city: string,
    state: string,
    zip: string,
    phone: string,
    code_pix: string,
    website: string,
    description: string,
    user_id: string,
    item: Item[],
    capacity: number,
    current: number,
    
  ) {
    console.log(user_id, 'negro');
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.image = image;
    this.long = long;
    this.lat = lat;
    this.zip = zip;
    this.phone = phone;
    this.code_pix = code_pix;
    this.website = website;
    this.description = description;
    this.capacity = capacity;
    this.item = item;
    this.current = current;
    this.user_id = user_id;
  }
}
