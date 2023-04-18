import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:':id',
    component:EditComponent
  },
  {
    path:':id/view',
    component:ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PationtRoutingModule { }
