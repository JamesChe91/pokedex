import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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


import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    MainToolbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    /**Register the TTP service */
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private pokedexService: PokedexService) { }
}
