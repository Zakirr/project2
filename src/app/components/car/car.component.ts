import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  cars: Car[] = []
  dataloaded=false; 

  constructor(private carService: CarService,private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars();
      }
    })
  }
  getCars(): void {
    this.carService.getCars().subscribe(response => { 
      this.cars = response.data,this.dataloaded=true })
  } 
  getCarsByBrand(brandId:number): void {
    this.carService.getCarsByBrand(brandId).subscribe(response => { 
      this.cars = response.data,this.dataloaded=true })
  }



}
