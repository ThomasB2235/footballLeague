import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixEquipeComponent } from './choix-equipe.component';

describe('ChoixEquipeComponent', () => {
  let component: ChoixEquipeComponent;
  let fixture: ComponentFixture<ChoixEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
