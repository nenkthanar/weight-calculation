import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DatalogsComponent} from './datalogs/datalogs.component';
import { LoginComponent } from './login/login.component';
import { ProcessComponent} from './process/process.component';
import {TogtableComponent} from './togtable/togtable.component';
const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'datalogs',component:DatalogsComponent},
  {path: 'login',component:LoginComponent},
  {path: 'process',component:ProcessComponent},
  {path: 'togtable',component:TogtableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
