import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
/**
 * Import the Pokedex service
 */
import { PokedexService } from './pokedex.service';

/**Import the Pokemon class */
import { Pokemon } from './pokemon'


export class CardOverviewExample {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /**The component maitains a list o Pokemon objects tha will be rendered.
   * 
   * We initialize it to an empty list
   */
  pokemon: Pokemon[] = [];

  /**A boolean that represents if we are currently loading data. */
  isLoading: boolean = false;

  /**This boolean will be set to true if an error occurred */
  error: boolean; false;

//autoComplete
  stateCtrl: FormControl;
  filteredPokemon: any;

  /**Inject the Pokedex service */
  constructor(private pokedexService: PokedexService) {
    //autoComplete
    this.stateCtrl = new FormControl();
    this.filteredPokemon = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
   }

  /**A lifecycle method that is automatically envoked when the component is created. */

  ngOnInit() {
    /**Load the initial data. */
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;
    /**Use the Pokedex service to load the next (6) Pokemon. */

    this.pokedexService.getPokemon(this.pokemon.length, 6)
      .then(pokemon => {
        pokemon = pokemon;
        /**If loading was successful we append the result to the list */
        this.pokemon = this.pokemon.concat(pokemon);
        this.isLoading = false;
        this.error = false;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      })
  }
  filterStates(val: string) {
    return val ? this.pokemon.filter(s => new RegExp(`^${val}`, 'gi').test(s.name))
               : null;
  }
}
