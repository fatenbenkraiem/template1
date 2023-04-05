import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenueFormationComponent } from './contenue-formation.component';

describe('ContenueFormationComponent', () => {
  let component: ContenueFormationComponent;
  let fixture: ComponentFixture<ContenueFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenueFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenueFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
