import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  

  /**Inject the Pokedex service */
  constructor() {
    // //autoComplete
    // this.stateCtrl = new FormControl();
    // this.filteredPokemon = this.stateCtrl.valueChanges
    //     .startWith(null)
    //     .map(name => this.filterStates(name));
   }

  /**A lifecycle method that is automatically envoked when the component is created. */

  ngOnInit() {
    /**Load the initial data. */
    // this.loadMore();
  }

}
