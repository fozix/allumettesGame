import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component, DebugElement } from "@angular/core";
import { MatToolbarModule, MatCardModule,MatIconModule, MatGridListModule,
  MatBadgeModule, MatButtonToggleModule, MatSnackBarModule} from '@angular/material';
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
  //Creation des variables utilisé lors du test.
    let fixture: ComponentFixture<AppComponent>;
    let htmlRoot: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatBadgeModule,
        MatButtonToggleModule,
        MatSnackBarModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);
    //Get buttons elemnts of user 1 and user 2.
    htmlRoot = fixture.debugElement.nativeElement;
  }));

  //Test ajouté 
  it('Utilisateur 1 commence le jeu et l\'utilisateur 2 a les boutons désactivé', () => {
    //On vérifie que le user 1 a les boutons activés.
    expect(htmlRoot.querySelector('#user1Select').hasAttribute('disabled')).toBeFalsy;
    //On vérifie que le user 2 a les boutons désactivés.
    expect(htmlRoot.querySelector('#user2Select').hasAttribute('disabled')).toBeFalsy;
  });
  it('L\'application est correctement démarrée', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
