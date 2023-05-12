import { Component } from '@angular/core';
import { DogbreedApiService } from 'src/app/services/dogbreed-api.service';
import { DogBreedResponse } from 'src/app/dogbreedsresponse';

@Component({
  selector: 'app-searchbreed',
  templateUrl: './searchbreed.component.html',
  styleUrls: ['./searchbreed.component.css']
})
export class SearchbreedComponent {
  dogData!:DogBreedResponse
  errorMessage: any;
  errorMsg: string = '';
  
  constructor(private _dogbreedService:DogbreedApiService){
    
  }

  getDogDetails(dogBreed:string):Boolean{
    this._dogbreedService.getDogdata(dogBreed).subscribe(
      dogData => {
        if (Array.isArray(dogData) && dogData.length > 0) {
          this.dogData = dogData[0];
        
          console.log("Dog Breed: " + this.dogData?.breed);
          console.log("Dog origin: " + this.dogData?.origin);
          console.log("Dog image: " + this.dogData?.img);
          console.log("Dog coat: " + this.dogData?.meta.coat);
         
          this.errorMsg = "";
        }
  },
  error => {
    console.log(error);
   // this.dogData = undefined; // Clear previously displayed dog breed details
    this.errorMsg = "No breed found, please check spelling";
      }
    )
    return false;
  }
}
