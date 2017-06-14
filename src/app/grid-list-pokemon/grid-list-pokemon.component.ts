import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Pokemon } from '../pokemon'
import { PokedexService } from '../pokedex.service';
@Component({
  selector: 'app-grid-list-pokemon',
  templateUrl: './grid-list-pokemon.component.html',
  styleUrls: ['./grid-list-pokemon.component.css']
})

export class GridListPokemonComponent {

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

  ngOnInit() {
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

  @Output() mySelectItemCard = new EventEmitter<Pokemon>();
  
  openDialogEmmiterCard(pokemon: Pokemon) {
    this.mySelectItemCard.emit(pokemon);
  }

}
