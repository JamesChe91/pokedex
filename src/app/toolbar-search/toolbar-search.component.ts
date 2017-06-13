import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.css']
})
export class ToolbarSearchComponent implements OnInit {
  pokemon: Pokemon[] = [];
  //autoComplete
  stateCtrl: FormControl;
  filteredPokemon: any;
  constructor(private pokedexService: PokedexService) {
    //autoComplete
    this.stateCtrl = new FormControl();
    this.filteredPokemon = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterPokemon(name));
  }

  ngOnInit() {
    this.pokedexService.getAllPokemon()
      .then(pokemon => this.pokemon = pokemon)
  }

  @Output() mySelectItemEvent = new EventEmitter<Pokemon>();
  
  openDialogEmmiter(pokemon: Pokemon) {
    this.mySelectItemEvent.emit(pokemon);
  }

  filterPokemon(val: string) {
    return val ? this.pokemon.filter(s => new RegExp(`^${val}`, 'gi').test(s.name)) : null;
  }
}


