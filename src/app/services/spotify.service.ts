import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private spotify: SpotifyService ,private http: HttpClient) { 


  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer 2beafbae4b7a4a61894e19ed3b776435'
    });

    this.http.get('https://accounts.spotify.com/v1/browse/new-releases')
        .subscribe( data => {
            console.log(data);
        });

  }
}
