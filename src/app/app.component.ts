import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './services/repository.service';

@Component({
  selector: 'my-app',
   templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(public repository: RepositoryService){}
  ngOnInit(): void {
    this.repository.getPokemons();
  }

  onClickMe(id){
    this.repository.getPokemonDetalle(id);
  }
}
