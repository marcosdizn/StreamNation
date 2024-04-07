import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { DirectoComponent } from './components/directo/directo.component';
import { DirectosComponent } from './components/directos/directos.component';
import { KarlosComponent } from './components/karlos/karlos.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ProgramadorComponent } from './components/programador/programador.component';

const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'directos', component: DirectosComponent },
  { path: 'directo', component: DirectoComponent },
  { path: 'karlos', component: KarlosComponent },
  { path: 'programador', component: ProgramadorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
