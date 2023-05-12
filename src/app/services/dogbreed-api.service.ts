import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { DogBreedResponse } from '../dogbreedsresponse';
import { catchError, Observable, throwError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogbreedApiService {
  private _siteURL = "https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/"
  private _key = "?rapidapi-key=474be00f2cmsh21ba8ec1027f2f8p14f318jsnad2dca49652f"


  constructor(private _http:HttpClient) { }

  // meant for the nosql part but mongodb won't work
  private _localhostURL= "http://localhost:5050/dogs"

  getDogdata(dogBreed: string): Observable<DogBreedResponse> {
    const url = this._siteURL + encodeURIComponent(dogBreed) + this._key;
    return this._http.get<DogBreedResponse>(url).pipe(
      tap(data => console.log('Dogdata/error' + JSON.stringify(data))),
      catchError(this.handleError)
    );
}
private handleError(err:HttpErrorResponse){
  console.log('DogBreedApiService: ' + err.message);
  return throwError(() => new Error("DogBreedApiService: " + err.message))
}
}
