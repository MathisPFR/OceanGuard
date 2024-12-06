import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateZmpComponent } from './update-zmp.component';

describe('UpdateZmpComponent', () => {
  let component: UpdateZmpComponent;
  let fixture: ComponentFixture<UpdateZmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateZmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateZmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
