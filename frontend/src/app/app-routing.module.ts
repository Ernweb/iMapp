import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MasterCreateComponent } from './components/master-create/master-create.component';
import { MasterEditComponent } from './components/master-edit/master-edit.component';
import { MasterListComponent } from './components/master-list/master-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-user' },
  { path: 'create-user', component: UserCreateComponent },
  { path: 'edit-user/:id', component: UserEditComponent },
  { path: 'list-user', component: UserListComponent },
  { path: 'create-master', component: MasterCreateComponent },
  { path: 'edit-master/:id', component: MasterEditComponent },
  { path: 'list-master', component: MasterListComponent },
  { path: 'create-product', component: ProductCreateComponent },
  { path: 'edit-product/:id', component: ProductEditComponent },
  { path: 'list-product', component: ProductListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
