import { Component, OnInit, Input} from '@angular/core';

import { InventoryItem } from '../../inventory-item.model';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
  @Input() item: InventoryItem;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }
}
