import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() hero:any={};
  @Input() index:number=0;
  @Output() selectedHero:EventEmitter<number>

  constructor(
    private router:Router
  ) {
    this.selectedHero= new EventEmitter();
   }

  ngOnInit(): void {
  }

  seeDetailsHero(){
    this.router.navigate(['/hero',this.index])
  }
 /*  this.selectedHero.emit(this.index) */
}

