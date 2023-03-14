import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostitemcomponentComponent } from './postitemcomponent.component';

describe('PostitemcomponentComponent', () => {
  let component: PostitemcomponentComponent;
  let fixture: ComponentFixture<PostitemcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostitemcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostitemcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
