import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BestPracticesComponent } from './best-practices/best-practices.component';
import { ResourcesComponent } from './resources/resources.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'best-practices', component: BestPracticesComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'examples', component: ExamplesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
