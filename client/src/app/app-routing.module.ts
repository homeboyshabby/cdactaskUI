import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowlistComponent } from './showlist/showlist.component';
import { InsertformComponent } from './insertform/insertform.component';
import { UpdateformComponent } from './updateform/updateform.component';

const routes: Routes = [
  { path: "", component: HomeComponent, children: [{ path: "", component: InsertformComponent }] },
  { path: "users", component: HomeComponent, children: [{ path: "", component: ShowlistComponent }] },
  { path: "update", component: HomeComponent, children: [{ path: "", component: UpdateformComponent }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }