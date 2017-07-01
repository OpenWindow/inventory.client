import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { InventoryItemComponent } from './inventory/inventory-list/inventory-item/inventory-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryDetailComponent } from './inventory/inventory-detail/inventory-detail.component';

import { DropDownDirective } from './shared/dropdown.directive';

import { ShoppingListService } from  './shopping-list/shopping-list.service';
import { InventoryStartComponent } from './inventory/inventory-start/inventory-start.component';
import { InventoryEditComponent } from './inventory/inventory-edit/inventory-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InventoryComponent,
    ShoppingListComponent,
    InventoryListComponent,
    InventoryItemComponent,
    ShoppingEditComponent,
    InventoryDetailComponent,
    DropDownDirective,
    InventoryStartComponent,
    InventoryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
