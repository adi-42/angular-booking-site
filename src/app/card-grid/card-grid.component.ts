import { Component, OnInit, Input} from '@angular/core';
import { CardComponent } from "./card/card.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Post } from '../classes/post';
import { CardService } from '../service/card.service';
import { Images } from '../classes/images';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [CardComponent, NgFor, NgIf, CommonModule],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css'
})

export class CardGridComponent {

    @Input() cardFetch:string = "default";

    cards !: Post[];
    images : string[] = ["artwrk1.jpg", "artwrk2.jpg", "artwrk3.jpg", "artwrk5.jpeg", "artwrk6.jpeg", "artwrk7.jpg", "artwrk8.jpeg","dancepic1.jpg",];

    constructor(private cardService : CardService){

    }

    ngOnInit(): void{
        if(this.cardFetch=="default") this.getCards();
        if(this.cardFetch=="search") this.getCardsFromSearch("search");
    }

    private getCards(){
        this.cardService.getPostsList().subscribe(data => {
            this.cards = data;
        })
    }

    private getCardsFromSearch(query: string){
        this.cardService.getPostsListforSearch(query).subscribe(data =>{
            this.cards = data;
        })
    }
}
