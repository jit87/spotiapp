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
      'Authorization' : 'Bearer BQB-GXhwv_01LMKFf2awfDCqEEeYMFkEtB5VfnAGIQRosdauPh6TTujaCEPA1trI9XiMSGjReGyaA49WfZ_LoTVcNryS6OnThP6PupJJ6bv9ZU_gtjI'
    });

    return this.http.get(url, {headers});

  }


  getNewReleases(): Observable<any>{
   return this.getQuery('browse/new-releases?=limit=20')
                    .pipe( map( (data:any) => {
                        return data.albums.items; 
                    }) );
  }
  


  getArtista( termino: string ){
    return this.getQuery( 'search?q=' + termino + '&type=artist')
                    .pipe( map( (data:any) => {
                      return data.artists.items; 
                  }) );
  }




  }





