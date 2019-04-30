import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllumettesProviderService {

  constructor() { }

  //Fourni un tableau d'entier qui représente les allumettes.
  //Le type de retour pourrait ne pas être un Observable, ici c'est le cas juste pour illustrer RxJS.
  provideAllumettes() : Observable<Array<number>>{
    //Entre 10 et 30 pour une courte partie.
    let matchesNumber = this.getRandomInt(10,30);
    return of(Array(matchesNumber).fill(1));
  }

  //Genere un entier aléatoire entre 10 et 30.
  getRandomInt (min : number , max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
