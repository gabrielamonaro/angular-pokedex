import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData;

  attributesTypes:string[] = ['Fire', 'Rock']
  constructor(private service:PokemonService) {
    this.pokemon = {
        id: 0,
        name: '',
        sprites: {
          front_default: ''
        },
        types: []
    }
   }

  ngOnInit(): void {
    this.service.getPokemon('pikachu').subscribe(
      {
        next: (resultado) => {
          this.pokemon = {
            id: resultado.id,
            name:  resultado.name,
            sprites: resultado.sprites,
            types: resultado.types
          }
        },
      })
  }

  getPokemon(searchName: string)
  {
    this.service.getPokemon(searchName).subscribe(
      {
        next: (resultado) => {

          this.pokemon = {
            id: resultado.id,
            name:  resultado.name,
            sprites: resultado.sprites,
            types: resultado.types
          }
        },
        error: (res) => console.log(res)
      }
    )
  }
}
