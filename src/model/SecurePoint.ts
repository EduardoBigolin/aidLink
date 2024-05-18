export class SecurePointModel {
  city: string;
  name: string;
  max_people: number;
  current_people: number;
  state: string;
  street: string;
  longitude: string;
  latitude: string;
  items: JSON;

  constructor(
    city: string,
    name: string,
    max_people: number,
    current_people: number,
    state: string,
    street: string,
    longitude: string,
    latitude: string,
    items: JSON
  ){
    this.city = city;
    this.name = name;
    this.max_people = max_people;
    this.current_people = max_people;
    this.state = city;
    this.street = street;
    this.longitude= longitude;
    this.latitude= latitude;
    this.items= items;
  }
}
