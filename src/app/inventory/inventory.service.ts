import { Subject } from 'rxjs/Subject';

import { InventoryItem } from './inventory-item.model';

export class InventoryService{
    inventoryItemSelected = new Subject<InventoryItem>();
    inventoryItemsUpdated = new Subject<InventoryItem[]>();
    
    private inventoryItems: InventoryItem[] = [
    new InventoryItem ('Samsung TV', 'TV in living room', 'https://c1.staticflickr.com/4/3909/14419470466_a1f0d2a624_b.jpg'),
    new InventoryItem ('Sofa Set', 'Living room sofa set', 'https://upload.wikimedia.org/wikipedia/commons/6/61/Davenport_%28PSF%29.png'),
    new InventoryItem ('XArcade', 'XArcade connected with RaspberryPi', 'http://www.publicdomainpictures.net/pictures/120000/velka/arcade-machine.jpg')
  ];

  getInventoryList(){
      return this.inventoryItems.slice();
  }

  getInventoryItem(index: number){
      return this.inventoryItems[index];
  }

  addInventoryItem(inventoryItem: InventoryItem){
      this.inventoryItems.push(inventoryItem);
      this.inventoryItemsUpdated.next(this.inventoryItems.slice());
  }

  updateInventoryItem(index: number, inventoryItem: InventoryItem){
      this.inventoryItems[index] = inventoryItem;
      this.inventoryItemsUpdated.next(this.inventoryItems.slice());
  }

  deleteInventoryItem(index: number){
      this.inventoryItems.splice(index, 1);
      this.inventoryItemsUpdated.next(this.inventoryItems.slice());
  }
}