import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { ShoppingItem } from '../../shared/shopping-item.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onItemAdded = new EventEmitter<ShoppingItem>();

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addItemToShoppingList(){
    this.slService.addShoppingListItem(new ShoppingItem(this.nameInputRef.nativeElement.value, 
                                                        this.quantityInputRef.nativeElement.value));
  }

}
