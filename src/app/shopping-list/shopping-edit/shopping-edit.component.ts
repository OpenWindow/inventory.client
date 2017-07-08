import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingItem } from '../../shared/shopping-item.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  selectedItemId:number;
  selectedItem: ShoppingItem;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.slService.shoppingListItemEdit.subscribe(
      (id: number) => {
        this.editMode = true;
        this.selectedItemId = id;
        this.selectedItem = this.slService.getShoppingListItem(id);
        this.slForm.setValue({
          name: this.selectedItem.name,
          quantity: this.selectedItem.quantity
        });
      }
    );
  }

  addOrUpdateShoppingListItem(){
    const item = new ShoppingItem(this.slForm.value.name, this.slForm.value.quantity);
    if(this.editMode) {
      this.slService.updateShoppingListItem(this.selectedItemId, item)
    }else{
      this.slService.addShoppingListItem(item);
    }
    this.resetForm();
  }

  onDeleteClick(){
    this.slService.deleteShoppingListItem(this.selectedItemId);
    this.resetForm();
  }

  onClearClick(){
    this.resetForm();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  resetForm(){
    this.slForm.reset();
    this.editMode = false;
  }

}
