import { Component, OnInit } from '@angular/core';
import { Recipie } from 'src/model/recipie/recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  
  recipies: Recipie[] = [
    new Recipie("Paneeer Curry", "A tasty paneer curry with non spicey dishes", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"),
    new Recipie("Chilly Chicken", "A tasty chicken curry with dry mode", "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/chilli-chicken-recipe-500x500.jpg"),
    new Recipie("Egg Burgy", "A tasty egg burgy with duck egg", "https://www.whiskaffair.com/wp-content/uploads/2019/10/Egg-Bhurji-1-3.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
