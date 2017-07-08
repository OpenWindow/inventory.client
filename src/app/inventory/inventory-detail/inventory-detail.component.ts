import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Params, Router } from  '@angular/router';


import { InventoryItem } from '../inventory-item.model';
import { InventoryService } from '../inventory.service';
@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {
  item: InventoryItem;
  id: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private inventoryService: InventoryService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      this.item = this.inventoryService.getInventoryItem(this.id);
    });
  }

  onEditClick(){
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteClick(){
    this.inventoryService.deleteInventoryItem(this.id);
    this.router.navigate(['../'], { relativeTo: this.route});
  }

}
