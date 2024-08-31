export class Location {
    status: string;
    country: string;
    state: string;
    city: string;
    zip: string;

    constructor(status: string, country: string, state: string, city: string, zip: string) {
        this.status = status;
        this.country = country;
        this.state = state;
        this.city = city;
        this.zip = zip;
    }
    
}
