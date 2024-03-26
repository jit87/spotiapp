import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  nuevasCanciones: any[] = [];
  loading: boolean; 
  error: boolean = false;
  mensajeError: string = ""; 

  constructor(  private spotify: SpotifyService ){

    this.loading = true; 
    this.error = false; 

    this.spotify.getNewReleases()
                .subscribe((data:any) => {
                    this.nuevasCanciones = data;
                    this.loading = false; 
                }, (errorServicio)=>{
                  this.loading = false; 
                  this.error = true; 
                  console.log(errorServicio);
                  this.mensajeError = errorServicio.error.error.message; 
                });
   
  }

  ngOnInit() {


    
  

  }

}
