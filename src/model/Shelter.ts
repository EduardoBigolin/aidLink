export class ShelterModel {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    code_pix: string;
    website: string;
    description: string;
    capacity: number;
    current: number;

    constructor(name: string, address: string, city: string, state: string, zip: string, phone: string, code_pix: string, website: string, description: string, capacity: number, current: number) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.code_pix = code_pix;
        this.website = website;
        this.description = description;
        this.capacity = capacity;
        this.current = current;
    }
}