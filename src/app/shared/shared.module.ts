import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent} from './components/header/header.component';
import {MaterialModule} from '../material/material/material.module'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
    
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
