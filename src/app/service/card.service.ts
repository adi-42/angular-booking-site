import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../classes/post';
import { Images } from '../classes/images';

@Injectable({
  providedIn: 'root'
})
export class CardService {

    private postURL = "http://localhost:8080/posts";
    private imageURL = "https://api.pexels.com/v1/search?query=horses&per_page=7";
    
    constructor(private httpClient : HttpClient) { }

    getPostsList(): Observable<Post[]>{
        return this.httpClient.get<Post[]>(`${this.postURL}`);
    }

    getPostsListforSearch(query : string): Observable<Post[]>{
        return this.httpClient.get<Post[]>(this.postURL + '/' + query);
    }

    // getImages(): Observable<Images[]>{
    //     const headers = new HttpHeaders({
    //         'Authorization': 'WN6zH1dDFMdEPKigkiZZRnTJ9zhfjHomaxIBuMdlL03SYF60J4xExyhB', // Replace with your actual token
    //         'Content-Type': 'application/json'
    //       });
    //     return this.httpClient.get<Images[]>(this.imageURL, {headers});
    // }
}
