import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { InventoryItem } from '../inventory-item.model';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit, OnDestroy {
  inventoryItems: InventoryItem[] = [];
  inventoryItemsSubscription = new Subscription();

  constructor(private inventoryService: InventoryService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.inventoryItems = this.inventoryService.getInventoryList();
    this.inventoryItemsSubscription = this.inventoryService.inventoryItemsUpdated
    .subscribe((items) => {
      this.inventoryItems = items;
    });
  }  

  onNewInventoryClick(){
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy(){
    this.inventoryItemsSubscription.unsubscribe();
  }

}
