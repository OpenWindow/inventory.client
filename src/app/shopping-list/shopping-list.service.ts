import { Injectable , EventEmitter} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ShoppingItem } from '../shared/shopping-item.model';

@Injectable()
export class ShoppingListService{
    shoppingListUpdated = new Subject<ShoppingItem[]>();
    shoppingListItemEdit = new Subject<any>();

    private shoppingItems: ShoppingItem[] = [
    new ShoppingItem('Milk', '2 gallon'),
    new ShoppingItem('Eggs','2 dozen')
  ];

  getShoppingList(){
      return this.shoppingItems.slice();
  }

  getShoppingListItem(index:number){
    return this.shoppingItems[index];
  }

  addShoppingListItem(item: ShoppingItem){
    this.shoppingItems.push(item);
    this.shoppingListUpdated.next(this.shoppingItems.slice());
  }

  updateShoppingListItem(index:number, item: ShoppingItem){
    this.shoppingItems[index] = item;
    this.shoppingListUpdated.next(this.shoppingItems.slice());
  }

  deleteShoppingListItem(index:number){
    this.shoppingItems.splice(index, 1);
    this.shoppingListUpdated.next(this.shoppingItems.slice());
  }

}