import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SejaMembroComponent } from './views/seja-membro/seja-membro.component';

const routes: Routes = [
{  path:"",component: HomeComponent},
{path:"seja-membro",component: SejaMembroComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
