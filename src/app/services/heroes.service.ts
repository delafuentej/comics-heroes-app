import { Injectable } from '@angular/core';
import { IHeroes } from '../components/heroes/heroes.model';

@Injectable()

export class HeroesService {

    private heroes:IHeroes[]=[
        {
          name: "Aquaman",
          info: "Aquaman's most recognized power is the telepathic ability to communicate with sea life, which he can summon from great distances.",
          img: "assets/img/aquaman.png",
          create: "1941-11-01",
          home:"DC"
        },
        {
          name: "Batman",
          info: "Batman's core traits are summed up as 'physical prowess, deductive skills, and obsession.' Most of the basic characteristics of the comics have varied because of the different interpretations given to the character.",
          img: "assets/img/batman.png",
          create: "1939-05-01",
          home:"DC"
        },
        {
          name: "Daredevil",
          info: "Having lost his sight, Daredevil's four remaining senses were enhanced by radiation to superhuman levels in the accident he had as a child. Despite his blindness, he can see through a 'sixth sense' that serves as a bat-like radar.",
          img: "assets/img/daredevil.png",
          create: "1964-01-01",
          home: "Marvel"
        },
        {
          name: "Hulk",
          info: "His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in charge at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).",
          img: "assets/img/hulk.png",
          create: "1962-05-01",
          home:"Marvel"
        },
        {
          name: "Green Lantern",
          info: "Possessor of the ring of power possessing the ability to create manifestations of solid light through the use of thought. He is powered by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a lamp maker named Chang found)",
          img: "assets/img/linterna-verde.png",
          create: "1940-06-01",
          home: "DC"
        },
        {
          name: "Spider-Man",
          info: "After being bitten by a radioactive spider, he gained the following superhuman powers, great strength, agility, and the ability to climb walls. Spider-Man's strength allows him to lift 10 tons or more. Thanks to this great strength Spider-Man can perform incredible jumps. A 'spider-sense', which allows him to know if a danger is looming over him, before it happens. Sometimes this can lead Spider-Man to the source of the danger.",
          img: "assets/img/spiderman.png",
          create: "1962-08-01",
          home: "Marvel"
        },
        {
          name: "Wolverine",
          info:"In Marvel's fictional universe, Wolverine possesses regenerative powers that can heal any wound, no matter how deadly, and that same power makes him immune to any disease on Earth and some extraterrestrials. He also possesses superhuman strength, which although it does not compare to that of other superheroes such as the Hulk, it does surpass that of any human.",
          img: "assets/img/wolverine.png",
          create: "1974-11-01",
          home: "Marvel"
        }
      ];
    constructor() {
        console.log('service')
     }
     getHeroes():IHeroes[]{
        return this.heroes;
     }

     getHero(idx:number){
      return this.heroes[idx]
     }
    
}