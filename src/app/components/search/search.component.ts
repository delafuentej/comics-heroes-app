import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { IHeroes } from '../heroes/heroes.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes:any[]=[];
  searchTerm:string="";
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router:Router
    ) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    this.searchTerm= params['searchTerm'];
     this.heroes= this.heroesService.searchHeroes(params['searchTerm'])
     console.log(this.heroes)

     
  })

  }
  seeDetailsHero(){
    this.router.navigate(['/hero'])
  }

}
