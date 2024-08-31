import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { CardComponent } from "../card-grid/card/card.component";
import { CardGridComponent } from "../card-grid/card-grid.component";
import { LocationService } from '../service/location.service';
import { Location } from '../classes/location';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, SearchbarComponent, CardComponent, CardGridComponent, NgIf],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

    mylocation : Location = new Location("","","","your City", "");

    constructor(private locationService : LocationService){

    }

    ngOnInit(): void{
        this.getlocation();
    }

    private getlocation(){
        this.locationService.getLocation().subscribe(data => {
            this.mylocation = data;
        })
    }

}
