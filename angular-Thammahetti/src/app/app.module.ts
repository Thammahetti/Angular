import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimocompComponent } from './primocomp/primocomp.component';
import { SecondocompComponent } from './secondocomp/secondocomp.component';
import { TerzocompComponent } from './terzocomp/terzocomp.component';
import { QuartocompComponent } from './quartocomp/quartocomp.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimocompComponent,
    SecondocompComponent,
    TerzocompComponent,
    QuartocompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
