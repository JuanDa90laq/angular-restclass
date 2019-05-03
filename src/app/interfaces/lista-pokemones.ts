import {urlPokemon} from './urlPokemon'

export interface ListaPokemones {
  count: number,
  next: number,
  previous: number,
  results:Array<urlPokemon>
}