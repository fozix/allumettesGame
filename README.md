# Jeu des allumettes

## Development server

Run `npm install` pour l'installation des dépendance et après `ng serve` pour le démarrage du serveur de développement. Allez à  `http://localhost:4200/` pour accèder au jeu.

## Les règles du jeu

- Ce jeu se joue à deux.
- Les joueurs sont devant un certain nombre d'allumettes, qui peut varier d'une partie à une autre entre 10 et 30 allumettes.
- A chaque tour, il faut en enlever 1, 2 ou 3 allumettes.
- Celui qui prend la dernière gagne la partie.
- Le score est mis à jour à la fin de chaque partie.
- Une nouvelle partie est relancée automatiquement à la fin.

## IHM de l'appplication
![Alt text](doc/allumettes_ihm.png)

## Code de l'application.

- L'application est basé sur Angular 7 et Angular Material.
- Un seul composant a été utilisé pour cette application, qui fait appel à une service qui fournie les allumettes de chaque partie, via un Observable RxJS.
- Le composant et le service ont chacun un test unitaire correspondant.

## Lancement des tests unitaires

Avec la commande `ng test`, une fenêtre de votre navigateur doit se lancer pour donner les résultat des tests via [Karma](https://karma-runner.github.io).
