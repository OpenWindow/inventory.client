import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-item.model';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {
  id: number;
  editMode = false;
  inventoryItemForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private inventoryService: InventoryService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
     });
  }

  private initForm(){
    let inventoryItemName = '';
    let inventoryItemDescription = '';
    let inventoryItemImagePath = '';

    if(this.editMode){
      const inventoryItem = this.inventoryService.getInventoryItem(this.id);
      inventoryItemName = inventoryItem.name;
      inventoryItemDescription = inventoryItem.description;
      inventoryItemImagePath = inventoryItem.imagePath;
    }

    this.inventoryItemForm = new FormGroup({
      'name': new FormControl(inventoryItemName, Validators.required),
      'description': new FormControl(inventoryItemDescription, Validators.required),
      'imagePath': new FormControl(inventoryItemImagePath, Validators.required)
    });

  }

  onFormSave(){
    const item = new InventoryItem(
      this.inventoryItemForm.value['name'], 
      this.inventoryItemForm.value['description'], 
      this.inventoryItemForm.value['imagePath']);

    if(this.editMode){
      this.inventoryService.updateInventoryItem(this.id, item);
    }else{
      this.inventoryService.addInventoryItem(item);
    }

    // Navigate to parent (ie 'inventory/:id)
    this.router.navigate(['../'], {relativeTo: this.route}) ;

  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route}) ;
  }

}
