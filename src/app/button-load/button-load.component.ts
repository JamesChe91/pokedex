import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() myEvent = new EventEmitter();
  loadPokemonb() {
    this.myEvent.emit(null);
  }
  /**The component maitains a list o Pokemon objects tha will be rendered.
   * 
   * We initialize it to an empty list
   */

  /**A boolean that represents if we are currently loading data. */
  @Input() isLoading: boolean = false;
  /**This boolean will be set to true if an error occurred */
  error: boolean; false;
  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
  
  }

 

}
