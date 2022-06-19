import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { IHeroes } from './heroes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:IHeroes[]=[]

  constructor(
    private heroesService: HeroesService,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    this.heroes= this.heroesService.getHeroes();
    console.log(this.heroes)
  }

  seeDetailsHero(idx:number){
    this.router.navigate(['/hero',idx])
  }

}
