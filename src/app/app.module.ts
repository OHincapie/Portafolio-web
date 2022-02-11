import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {PortadaModule} from './portada/portada.module';
import {SobremiModule} from './sobremi/sobremi.module'
import {TecnologiasModule} from './tecnologias/tecnologias.module';
import {PortafolioModule} from './portafolio/portafolio.module';
import {FooterModule} from './footer/footer.module'
@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PortadaModule,
    SobremiModule,
    TecnologiasModule,
    PortafolioModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
