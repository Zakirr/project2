import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44314/api/"
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModule<Car>> {
    let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModule<Car>>(newPath)
    
   }
   getCarsByBrand(brandId:number):Observable<ListResponseModule<Car>> {
    let newPath=this.apiUrl+"cars/getbybrandid?id="+brandId

    return this.httpClient.get<ListResponseModule<Car>>(newPath)
    
   }
}
