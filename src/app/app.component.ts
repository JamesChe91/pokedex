import { Component } from '@angular/core';
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

  /**Inject the Pokedex service */
  constructor(private pokedexService: PokedexService) { }

  /**A lifecycle method that is automatically envoked when the component is created. */

  ngOnInit() {
    /**Load the initial data. */
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;
    /**Use the Pokedex service to load the next (8) Pokemon. */

    this.pokedexService.getPokemon(this.pokemon.length, 6)
      .then(pokemon => {
        pokemon = pokemon.map(p => {
          p.imageLoaded = false;
          return p;
        });
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
}
