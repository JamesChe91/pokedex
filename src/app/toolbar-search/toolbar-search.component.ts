import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.css']
})
export class ToolbarSearchComponent implements OnInit {
  pokemon: Pokemon[] = [];
  constructor(private pokedexService: PokedexService) 
  {
    //autoComplete
    this.stateCtrl = new FormControl();
    this.filteredPokemon = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
   }

  ngOnInit() {
      //  this.isLoading = true;
    /**Use the Pokedex service to load the next (6) Pokemon. */

    this.pokedexService.getPokemon(this.pokemon.length, 900)
      .then(pokemon => {
        pokemon = pokemon;
        /**If loading was successful we append the result to the list */
        this.pokemon = this.pokemon.concat(pokemon);
        // this.isLoading = false;
        // this.error = false;
      })
      // .catch(() => {
      //   this.error = true;
      //   this.isLoading = false;
      // })
  }

  //autoComplete
  stateCtrl: FormControl;
  filteredPokemon: any;


  filterStates(val: string) {
    return val ? this.pokemon.filter(s => new RegExp(`^${val}`, 'gi').test(s.name)): null;
  }
}
