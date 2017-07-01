import {EventEmitter} from '@angular/core';

import { InventoryItem } from './inventory-item.model';

export class InventoryService{
    inventoryItemSelected = new EventEmitter<InventoryItem>();
    
    private inventoryItems: InventoryItem[] = [
    new InventoryItem (1, 'Samsung TV', 'TV in living room', 'https://c1.staticflickr.com/4/3909/14419470466_a1f0d2a624_b.jpg'),
    new InventoryItem (2, 'Sofa Set', 'Living room sofa set', 'https://upload.wikimedia.org/wikipedia/commons/6/61/Davenport_%28PSF%29.png'),
    new InventoryItem (3, 'XArcade', 'XArcade connected with RaspberryPi', 'http://www.publicdomainpictures.net/pictures/120000/velka/arcade-machine.jpg')
  ];

  getInventoryList(){
      return this.inventoryItems.slice();
  }

  getInventoryItem(index: number){
      return this.inventoryItems[index];
  }
}