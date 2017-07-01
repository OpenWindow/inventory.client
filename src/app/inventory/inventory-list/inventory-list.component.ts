import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { InventoryItem } from '../inventory-item.model';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  inventoryItems: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService,
              private router: Router,
              private route: ActivatedRoute) {

               }

  ngOnInit() {
    this.inventoryItems = this.inventoryService.getInventoryList();
  }  

  onNewInventoryClick(){
    this.router.navigate(['new'], { relativeTo: this.route })
  }

}
