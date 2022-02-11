import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SobreMiComponent} from './sobre-mi/sobre-mi.component'


@NgModule({
  declarations: [SobreMiComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SobreMiComponent
  ]
})
export class SobremiModule { }
