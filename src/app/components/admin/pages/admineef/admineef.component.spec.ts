import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineefComponent } from './admineef.component';

describe('AdmineefComponent', () => {
  let component: AdmineefComponent;
  let fixture: ComponentFixture<AdmineefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
