import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MenuPortafolioComponent } from './components/menu-portafolio/menu-portafolio.component';
import { InfoComponent } from './components/info/info.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'Portafolio', component: MenuPortafolioComponent},
  {path:'Info', component: InfoComponent},
  {path:'Contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
