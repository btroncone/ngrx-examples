import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {operationsReducer} from "./common/operations";
import {CommonModule} from "@angular/common";
import {NewOperation} from "./new-operation.component";
import {OperationsList} from "./operations-list.component";


@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NewOperation,
    OperationsList,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ operations: operationsReducer }),
  ],
})
export class AppModule {
  constructor() {}



}

