import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplitButtonModule } from 'primeng/splitbutton';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BaseComponent } from './components/base/base.component';
import { DirectoComponent } from './components/directo/directo.component';
import { DirectosComponent } from './components/directos/directos.component';
import { KarlosComponent } from './components/karlos/karlos.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ProgramadorComponent } from './components/programador/programador.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BaseComponent,
    PortadaComponent,
    DirectosComponent,
    DirectoComponent,
    KarlosComponent,
    ProgramadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
