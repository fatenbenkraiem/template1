import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenFrancaisComponent } from './examen-francais.component';

describe('ExamenFrancaisComponent', () => {
  let component: ExamenFrancaisComponent;
  let fixture: ComponentFixture<ExamenFrancaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenFrancaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenFrancaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
