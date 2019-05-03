import { Injectable, Input } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { ListaPokemones } from '../interfaces/lista-pokemones';
import { DetallePokemon } from '../interfaces/detalle-pokemon';
import { map }  from 'rxjs/operators'

@Injectable()
export class RepositoryService {

  private _listaPokemon: ListaPokemones;
  get listaPokemon(): ListaPokemones {
    return this._listaPokemon;
  }

  private _pokemonDetalle: DetallePokemon;
  get detallePokemon(): DetallePokemon {
    return this._listaPokemon;
  }

  constructor(private dataSource: DataSourceService ) { }

  public getPokemons(): void {
    this.dataSource
        .getPokemonList('/pokemon/')
        .pipe(
          map((pokemon) => {
            const _pokemon = pokemon.results;
            
            console.log(_pokemon);
            
            _pokemon.forEach((p) => {
              var a = new URL(p.url)
              var id = a.pathname.match(/\/\d+/g)[0].replace("/", "");
              p.id = id;
            });            
            

            return _pokemon;
          })
        )
        .subscribe((pokemones) => {
          this._listaPokemon = pokemones
    });
  }

  public getPokemonDetalle(id): void{
    this.dataSource
        .getPokemonDetalle('/pokemon/', id )
                .subscribe((pokemon) => {
          this._pokemonDetalle = pokemon

          console.log(pokemon);
        });
  }
}