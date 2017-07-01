import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoryComponent } from './inventory/inventory.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { InventoryDetailComponent } from './inventory/inventory-detail/inventory-detail.component';
import { InventoryStartComponent } from './inventory/inventory-start/inventory-start.component';
import { InventoryEditComponent } from './inventory/inventory-edit/inventory-edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/inventory', pathMatch: 'full' },
    { path: 'inventory', component: InventoryComponent, 
        children: [
            { path: '', component: InventoryStartComponent },
            { path: 'new', component: InventoryEditComponent },
            { path:':id', component: InventoryDetailComponent },
            { path: ':id/edit', component: InventoryEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule(
    {
        declarations: [

        ],
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppRoutingModule {

}