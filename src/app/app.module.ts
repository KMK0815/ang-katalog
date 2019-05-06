import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { SmallArtikelComponent } from './small-artikel/small-artikel.component';
import { VortextComponent } from './vortext/vortext.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtikelComponent,
    ArtikelListeComponent,
    SmallArtikelComponent,
    VortextComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
