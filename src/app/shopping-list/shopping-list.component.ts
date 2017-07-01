import { Component, OnInit } from '@angular/core';

import { ShoppingItem } from '../shared/shopping-item.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingItems: ShoppingItem[] = [];
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingItems = this.shoppingListService.getShoppingList();
    this.shoppingListService.shoppingListUpdated.subscribe(
      (items) => {
        this.shoppingItems = items;
      }
    )
  }
}
