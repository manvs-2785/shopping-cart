import { Component, OnInit } from '@angular/core';
import { Ingradient } from 'src/model/shared/ingradient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingradients: Ingradient[] = [
    new Ingradient("Paneer", 55),
    new Ingradient("Chicken", 120),
    new Ingradient("Egg", 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
