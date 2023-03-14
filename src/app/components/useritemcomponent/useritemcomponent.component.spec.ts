import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseritemcomponentComponent } from './useritemcomponent.component';

describe('UseritemcomponentComponent', () => {
  let component: UseritemcomponentComponent;
  let fixture: ComponentFixture<UseritemcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseritemcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseritemcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
