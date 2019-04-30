import { TestBed,fakeAsync } from '@angular/core/testing';


import { AllumettesProviderService } from './allumettes-provider.service';
//Exemple de test d'une logique métier.
//Test basique pour vérifier que le service fourni bien un tableau de 10 à 30 éléments.
describe('AllumettesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
    //On teste d'une manière synchrone, le service asynchrone.
    it('Doit renvoyer un tableau de 10 à 30 allumettes.', fakeAsync(() => {
      let allumetteService;
      allumetteService = TestBed.get(AllumettesProviderService);
      let allumettes;
        allumetteService.provideAllumettes()
            .subscribe(_allumettes => allumettes = _allumettes);

        expect(allumettes).toBeDefined();
        expect(allumettes.length).toBeGreaterThanOrEqual(10);
        expect(allumettes.length).toBeLessThanOrEqual(30);


    }));
  it('Vérier la création du service.', () => {
    const service: AllumettesProviderService = TestBed.get(AllumettesProviderService);
    expect(service).toBeTruthy();
  });
});
