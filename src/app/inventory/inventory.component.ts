import { Component, OnInit } from '@angular/core';
import { InventoryItem } from './inventory-item.model';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  selectedItem: InventoryItem;

  constructor(private inventoryService:InventoryService) { }

  ngOnInit() {
    this.inventoryService.inventoryItemSelected.
    subscribe(
      (item: InventoryItem) => {
        this.selectedItem = item;
      });
  }
}
