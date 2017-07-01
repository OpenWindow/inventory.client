import { Injectable , EventEmitter} from '@angular/core';
import { ShoppingItem } from '../shared/shopping-item.model';

@Injectable()
export class ShoppingListService{
    shoppingListUpdated = new EventEmitter<ShoppingItem[]>();

    private shoppingItems: ShoppingItem[] = [
    new ShoppingItem('Milk', '2 gallon'),
    new ShoppingItem('Eggs','2 dozen')
  ];

  getShoppingList(){
      return this.shoppingItems.slice();
  }

  addShoppingListItem(item: ShoppingItem){
    this.shoppingItems.push(item);
    this.shoppingListUpdated.emit(this.shoppingItems.slice());
  }
}