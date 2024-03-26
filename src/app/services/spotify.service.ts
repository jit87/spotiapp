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


  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    //Token obtenido con Postman siguiendo instrucciones de https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
    //El token caduca a la hora, para renovarlo hay que utilizar Postman
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCoyUMahDap4ACj--ou-POrNxCGI7O3frxa06WGAubNRYCAUH3sY1ssRAusfaYO03ivXYNX9sl3XH1rmgOTQUDJsw0Z-8FPBC1AuUxLNHWxg0SJMf4'
    });

    return this.http.get(url, {headers});

  }


  getNewReleases(): Observable<any>{
   return this.getQuery('browse/new-releases?=limit=20')
                    .pipe( map( (data:any) => {
                        return data.albums.items; 
                    }) );
  }
  


  getArtistas( termino: string ){
    return this.getQuery( 'search?q=' + termino + '&type=artist')
                    .pipe( map( (data:any) => {
                      return data.artists.items; 
                  }) );
  }


  
  getArtista( id: string ){
    return this.getQuery( `artists/${id}`);
  }




  getTopTracks( id: string ){
    return this.getQuery( `artists/${id}/top-tracks?country=us`)
               .pipe(map( (data:any) => data['tracks']));
  }










  }





