import { ListOfClassesComponent } from './list-of-classes/list-of-classes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailOfClassComponent } from './detail-of-class/detail-of-class.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo : 'list-of-classes'},
  { path: 'list-of-classes', component: ListOfClassesComponent },
  { path: 'detail-of-class/:id', component: DetailOfClassComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
