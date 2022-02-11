import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioCardComponent } from './portafolio-card/portafolio-card.component';
import {MaterialModule} from '../material/material/material.module';
import { PortafolioComponent } from './portafolio/portafolio.component'


@NgModule({
  declarations: [
    PortafolioCardComponent,
    PortafolioComponent
  ],
  exports:[
    PortafolioCardComponent,
    PortafolioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PortafolioModule { }
