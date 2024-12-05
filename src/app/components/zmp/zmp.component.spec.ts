import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmpComponent } from './zmp.component';

describe('ZmpComponent', () => {
  let component: ZmpComponent;
  let fixture: ComponentFixture<ZmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
