import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEspeceComponent } from './update-espece.component';

describe('UpdateEspeceComponent', () => {
  let component: UpdateEspeceComponent;
  let fixture: ComponentFixture<UpdateEspeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEspeceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
