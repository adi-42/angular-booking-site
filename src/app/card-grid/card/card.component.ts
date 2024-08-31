import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{

    @Input() cardTitle:string = "defaulttitle"
    @Input() cardContent:string = "defaulttext"
    @Input() cardDate?: string;
    @Input() cardAddr:string = "Gachibowli"
    @Input() cardPrice:string = "$$"
    @Input() cardSize:string = "Any"
    @Input() cardImage:string = "/dancepic1.jpg"

}
