import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlistcomponentComponent } from './postlistcomponent.component';

describe('PostlistcomponentComponent', () => {
  let component: PostlistcomponentComponent;
  let fixture: ComponentFixture<PostlistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostlistcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostlistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
