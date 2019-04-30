import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {AllumettesProviderService} from './services/allumettes-provider.service'

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
  playerOneTurn : boolean= true;
  //nombre de victoire joureur 1.
  playerOneVictories : number = 0;
  //nombre de victoire joureur 2.
  playerTwoVictories : number = 0;

  constructor(private allumettesProvider : AllumettesProviderService, private snackBar: MatSnackBar) {}

  //Initialisation du nombre d'allumettes
  ngOnInit(){
    //Le tableau d'allumette est alimenté suite à un observable. (juste pour illustrer le principe)
    this.allumettesProvider.provideAllumettes().subscribe(
      allumettes => { 
        this.matches = allumettes;
        this.matchesNumber = this.matches.length;
      },
      error => {
        //Pas de traitement particulier.
        console.log(error);
      }
    ); 
  }

  //Jouer un tour, vérifier que la partie n'est pas terminé et donner la main au suivant.
  jouerUnTour (isPlayerOne : boolean, event : any){
    //Extraire le nombre d'allumettes souhaité.
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
      this.allumettesProvider.provideAllumettes().subscribe(
        allumettes => { 
          this.matches = allumettes;
          this.matchesNumber = this.matches.length;
        },
        error => {
          //Pas de traitement particulier.
          console.log(error);
        }
      );     
    }
    this.playerOneTurn = !this.playerOneTurn;
  }

}
