import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixJoueursComponent } from './choix-joueurs.component';

describe('ChoixJoueursComponent', () => {
  let component: ChoixJoueursComponent;
  let fixture: ComponentFixture<ChoixJoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixJoueursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
