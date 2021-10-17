import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { MasterService } from './service/master.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterCreateComponent } from './components/master-create/master-create.component';
import { MasterEditComponent } from './components/master-edit/master-edit.component';
import { MasterListComponent } from './components/master-list/master-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    MasterCreateComponent,
    MasterEditComponent,
    MasterListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule	
  ],
  providers: [ApiService,MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
