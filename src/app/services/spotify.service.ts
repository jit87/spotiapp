import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 


  }

  getNewReleases(){

    //Token obtenido con Postman siguiendo instrucciones de https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBufm68qKYd6RZQ4V-Yt9zc9G3oteNrF9arpH2VoAgHwgAdpE7WjQmM-Vzbec2XGHWjsWNsvPe1Z-UGdZgKxngIPevA_W7AgbH5-l6C9PHn0WuhMH8'
    });

    this.http.get( 'https://api.spotify.com/v1/browse/new-releases',{ headers })
        .subscribe( data => {
            console.log(data);
        });

  }
}
