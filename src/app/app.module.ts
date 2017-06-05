import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * The HTTP service is not added by default
 * so we need to import it.
 */
import { HttpModule } from '@angular/http';

/**
 * Import the PokedexService
 */
import { PokedexService } from './pokedex.service';

import { CapitalizePipe } from './capitalize.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    /**Register the TTP service */
    HttpModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private pokedexService: PokedexService) { }
}
