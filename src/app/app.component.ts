import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //Titre du jeu.
  title = 'Jeu d\'allumettes';
  //Nombre d'allumette au début du jeu.
  matchesNumber : number;
  //Tableau d'allumettes.
  matches : Array<number>;
  //A true si le tour de jouer est au joueur 1.
  playerOneTurn : boolean;
  //nombre de victoire joureur 1.
  playerOneVictories : number = 0;
  //nombre de victoire joureur 2.
  playerTwoVictories : number = 0;

  constructor(private snackBar: MatSnackBar) {}

  //Initialisation du nombre d'allumettes
  ngOnInit(){
    this.matchesNumber = this.getRandomInt(10,30);
    this.matches =  Array(this.matchesNumber).fill(1); 
    this.playerOneTurn = true;
  }

  //Jouer un tour, vérifier que la partie n'est pas terminé et donner la main au suivant.
  jouerUnTour (isPlayerOne : boolean, event : any){
    if(this.matches.length > event.value ){
      this.matches.length = this.matches.length - event.value ;
    }
    else{
      this.matches.length = 0;
    }

    event.source.buttonToggleGroup.value=undefined;

    //Si la partie est terminé, on affiche un message avec le gagnant, on incrémente le score
    //puis on réitialise la partie.
    if(this.matches.length === 0){
      //Incrémenter le nombre de victoire.
      this.playerOneTurn? this.playerOneVictories++ : this.playerTwoVictories++;
      //affichage d'un message de fin + score
      let message = "Le joueur " + (this.playerOneTurn? "1" : "2") + " remporte la partie. Le score est de "+this.playerOneVictories+" - "+this.playerTwoVictories;
      this.snackBar.open(message,null, {
        duration: 4000,
      });
      //On relance une nouvelle partie.
      this.matchesNumber = this.getRandomInt(10,30);
      this.matches =  Array(this.matchesNumber).fill(1); 
    }
    this.playerOneTurn = !this.playerOneTurn;
  }
  //Genere un entier aléatoire entre 10 et 30.
  getRandomInt (min : number , max : number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
