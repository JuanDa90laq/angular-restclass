import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPokemones } from '../interfaces/lista-pokemones'
import { DetallePokemon } from '../interfaces/detalle-pokemon'


@Injectable()
export class DataSourceService {

  public static readonly URL = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  getPokemonList(path): Observable<ListaPokemones[]> {
    return this.http.get<ListaPokemones[]>(`${DataSourceService.URL}${path}`);
  }

  getPokemonDetalle(path, parameters): Observable<DetallePokemon[]>{
    return this.http.get<DetallePokemon[]>(`${DataSourceService.URL}${path}${parameters}/`);
  }

}