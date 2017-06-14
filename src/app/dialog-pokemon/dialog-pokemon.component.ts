import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-dialog-pokemon',
  templateUrl: './dialog-pokemon.component.html',
  styleUrls: ['./dialog-pokemon.component.css']
})
export class DialogPokemonComponent implements OnInit {
  pokemon: Pokemon;
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog(event) {
    this.pokemon = event;
    let dialogRef = this.dialog.open(DialogPokemon, {
      data: this.pokemon
    });
  }

}

@Component({
  selector: 'dialog-pokemon',
  templateUrl: 'dialog-pokemon-result.html',
})
export class DialogPokemon {

  constructor( @Inject(MD_DIALOG_DATA) public pokeDialog: Pokemon) { }
}
