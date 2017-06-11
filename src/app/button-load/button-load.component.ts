import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
 
/**Import the Pokemon class */
import { Pokemon } from '../pokemon'
@Component({ 
  selector: 'app-button-load',
  templateUrl: './button-load.component.html',
  styleUrls: ['./button-load.component.css']
})
export class ButtonLoadComponent implements OnInit {
  /**The component maitains a list o Pokemon objects tha will be rendered.
   * 
   * We initialize it to an empty list
   */
  
  pokemon: Pokemon[] = [];
  /**A boolean that represents if we are currently loading data. */
  isLoading: boolean = false;
  /**This boolean will be set to true if an error occurred */
  error: boolean; false;
  constructor(private pokedexService: PokedexService) { }

  ngOnInit() 
  {
    // this.pokedexService.getPokemon(this.pokemon.length, 6)
    //   .then(pokemon => {
    //     pokemon = pokemon;
    //     /**If loading was successful we append the result to the list */
    //     this.pokemon = this.pokemon.concat(pokemon);
    //     // this.isLoading = false;
    //     // this.error = false;
    //   })
this.loadMore();
  }
  
  loadMore() {
    this.isLoading = true;
    /**Use the Pokedex service to load the next (6) Pokemon. */

    this.pokedexService.getPokemon(this.pokemon.length, 60)
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

}