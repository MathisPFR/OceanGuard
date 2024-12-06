import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostZmpComponent } from './post-zmp.component';

describe('PostZmpComponent', () => {
  let component: PostZmpComponent;
  let fixture: ComponentFixture<PostZmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostZmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostZmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
