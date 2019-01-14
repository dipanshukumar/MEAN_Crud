import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';

const routes: Routes = [
  {path: '', component: ViewComponent},
  {path: 'createUpdate', component: CreateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

