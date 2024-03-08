import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 


  }

  getNewReleases(): Observable<any>{

    //Token obtenido con Postman siguiendo instrucciones de https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQD2Bs5Rbgd3WhFaVoYYuQKIMxu3lHBD1gSoZyohf96XD35pp3G4Ud5NrzGL-PkL8WllKWffzQaJYiYpeTZ3ojafpCJAlFhh64nQD2AA1u03Fy4TRM8'
    });

    return this.http.get( 'https://api.spotify.com/v1/browse/new-releases',{ headers });

  }




}
