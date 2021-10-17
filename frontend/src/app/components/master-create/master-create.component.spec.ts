import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCreateComponent } from './master-create.component';

describe('MasterCreateComponent', () => {
  let component: MasterCreateComponent;
  let fixture: ComponentFixture<MasterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
