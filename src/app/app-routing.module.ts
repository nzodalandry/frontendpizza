import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PizzaListComponent }      from './pizza-list/pizza-list.component';
import { PizzaComponent }      from './pizza/pizza.component';


const routes: Routes = [
  { path: 'pizzas', component: PizzaComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
