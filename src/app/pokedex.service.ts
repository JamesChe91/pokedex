import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
/**
 * Adds the toPromise method to convert an Observable to a Promise
 */
import 'rxjs/add/operator/toPromise'
import { Pokemon } from './pokemon'

@Injectable()
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  /**Inject the HTTP service. */
  constructor(private http: Http) { }

  /**
   * Method thah fetches data from the Pokémon API
   */
  getPokemon(offset: number, limit: number): Promise<Pokemon[]> {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      /**
       * The `get()` method returns an Observable but we convert it into a Promise 
       */
      .toPromise()
      .then(response => this.extractData(response))
      .then(items => items.map((item, idx) => {
        /**Massage the data a bit to create objects with the correct structure */
        const id: number = idx + offset + 1;
        return {
          name: item.name,
          sprite: `${this.baseSpriteUrl}${id}.png`,
          id,
          imageLoaded: false
        };
      })).catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.results || {};
  }
  private extractCount(res: Response) {
    let body = res.json();
    return body.count || {};
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  getAllPokemon(): Promise<Pokemon[]> {
    let offset = 0;
    return this.http.get(`${this.baseUrl}?offset=${offset}`)
      .toPromise()
      .then(response => this.extractCount(response))
      .then(count => this.getPokemon(offset, count))
      .catch(this.handleError);
  }
}