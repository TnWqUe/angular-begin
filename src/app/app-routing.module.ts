import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {ChartComponent} from "./chart/chart/chart.component";
import {TableComponent} from "./table/table/table.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'table', component: TableComponent},
 // {path: 'posts', loadChildren: () => import('./posts/posts/posts.module').then((item) => item.PostsModule)},
  {path: '', pathMatch: "full", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
