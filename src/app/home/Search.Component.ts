import { Component, OnInit } from "@angular/core";
import {ICity} from '../home/location.model';
import { HomeService } from "../services/home.service";
import { IRest } from "./rest.model";

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css']
})

export class SearchComponent implements OnInit{
  title:String  ='Search Place Near to You';
    locationData:ICity[]=[];
    restaurants:IRest[]=[];

    constructor(private homeService:HomeService){}

handleCity(event:Event){
    console.log((event.target as HTMLInputElement).value)
    let stateId = Number((event.target as HTMLInputElement).value)
    this.homeService.getRestaurants(stateId).subscribe((data:IRest[]) => this.restaurants = data)
}
ngOnInit(): void {
    this.homeService.getCity().subscribe((data:ICity[]) => this.locationData = data)
        
    }
    
}