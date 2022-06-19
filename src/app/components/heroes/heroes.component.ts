import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { IHeroes } from './heroes.model';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:IHeroes[]=[]

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes= this.heroesService.getHeroes();
    console.log(this.heroes)
  }

}
