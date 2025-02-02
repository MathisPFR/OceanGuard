import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEspeceComponent } from './add-espece.component';

describe('AddEspeceComponent', () => {
  let component: AddEspeceComponent;
  let fixture: ComponentFixture<AddEspeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEspeceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
