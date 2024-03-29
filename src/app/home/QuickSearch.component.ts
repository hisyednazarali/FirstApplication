import {Component, OnInit} from '@angular/core';
import { IMeal } from './quick.model';
import { HomeService } from '../services/home.service';

@Component({
    selector :'app-quick-search',
    templateUrl:'./QuickSearch.component.html',
    styleUrls:['./QuickSearch.component.css']
})
export class QuickSearchComponent implements OnInit{

    mealType:IMeal[]=[];

    constructor(private homeService:HomeService){}






    ngOnInit(): void {
        this.homeService.getMeal().subscribe((data:IMeal[])=>this.mealType = data)
       
    }
    
}