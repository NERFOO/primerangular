import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PrimerComponent } from 'src/components/primercomponent/primer.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { Deportes } from 'src/components/deportes/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormulariobindingComponent } from 'src/components/formulariobinding/formulariobinding.component';
import { SumarNumeros } from 'src/components/sumarnumeros/sumarnumeros.component';

@NgModule({
  declarations: [
    AppComponent ,
    PrimerComponent ,
    HooksAngular ,
    Deportes ,
    FormulariobindingComponent ,
    SumarNumeros
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
