import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 


  }

  getNewReleases(): Observable<any>{

    //Token obtenido con Postman siguiendo instrucciones de https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
    //El token caduca a la hora, para renovarlo hay que utilizar Postman
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB9xrkCjVFQchXvZA_JMBQilMLvoliwk8jGues0PsM7kgqSOox-nZGcG7dagz8uyLyn1sVOjvq8XU9mIAPVSEhX4222dDv_n556G7w3ZjV9A_15v-Q'
    });

    return this.http.get( 'https://api.spotify.com/v1/browse/new-releases',{ headers })
                    .pipe( map( (data:any) => {
                        return data.albums.items; 
                    }) );

  }


  getArtista( termino: string ){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB9xrkCjVFQchXvZA_JMBQilMLvoliwk8jGues0PsM7kgqSOox-nZGcG7dagz8uyLyn1sVOjvq8XU9mIAPVSEhX4222dDv_n556G7w3ZjV9A_15v-Q'
    });

    return this.http.get( `https://api.spotify.com/v1/search?q=${termino}&type=artist`,{ headers })
                    .pipe( map( (data:any) => {
                      return data.artists.items; 
                  }) );

  }




  }





