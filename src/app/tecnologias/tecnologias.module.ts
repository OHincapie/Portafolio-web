import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import {MaterialModule} from './../material/material/material.module';
import { LenguajeComponent } from './lenguaje/lenguaje.component'



@NgModule({
  declarations: [
    TecnologiasComponent,
    LenguajeComponent
  ],
  exports:[
    TecnologiasComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class TecnologiasModule { }
