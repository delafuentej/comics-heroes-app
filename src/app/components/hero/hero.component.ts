import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent /* implements OnInit */ {

  hero:any={};

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
    ) { 

    this.activatedRoute.params.subscribe(params=> {

      this.hero= this.heroesService.getHero(params['id'])
     
    })
  }

 /*  ngOnInit(): void {
  } */

}
