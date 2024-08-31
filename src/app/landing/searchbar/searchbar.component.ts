import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
    searchQuery: string = '';
}
