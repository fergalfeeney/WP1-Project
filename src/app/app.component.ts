import { Component } from '@angular/core';
import { DogBreedResponse } from './dogbreedsresponse';
import { DogbreedApiService } from './services/dogbreed-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dog-breed-project';
  dogData:DogBreedResponse | undefined;
  errorMessage:any;
  errorMsg: string = '';

  constructor(private _dogbreedService:DogbreedApiService){}

    getDogDetails(dogBreed:string):Boolean{
      this._dogbreedService.getDogdata(dogBreed).subscribe(
        dogData => {
          if (Array.isArray(dogData) && dogData.length > 0) {
            this.dogData = dogData[0];
          
           
            this.errorMsg = "";
          }
    },
    error => {
      console.log(error);
      this.dogData = undefined; // Clear previously displayed dog breed details
      this.errorMsg = "No breed found, please check spelling";
        }
      )
      return false;
    }
 
    
  
}
