import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./app.component";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CommunicationService  {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('http://localhost:8080/info',
      {observe: 'body',
        responseType:'json'
      });
  }
}



