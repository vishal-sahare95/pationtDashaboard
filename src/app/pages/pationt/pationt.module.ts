import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PationtRoutingModule } from './pationt-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    PationtRoutingModule,
    ReactiveFormsModule,
    TableModule
  ],
  exports:[
    AddComponent,
    ListComponent,
    EditComponent
  ],
})
export class PationtModule { }
