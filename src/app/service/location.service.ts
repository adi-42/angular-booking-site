import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../classes/location';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

    private baseURL = "http://ip-api.com/json/";
    constructor(private httpClient : HttpClient) { }

    getLocation(): Observable<Location>{
        return this.httpClient.get<any>(`${this.baseURL}`).pipe(
            map(data => new Location(
              data["status"],
              data["country"],
              data["state"],
              data["city"],
              data["zip"]
            ))
          );
    }
}
