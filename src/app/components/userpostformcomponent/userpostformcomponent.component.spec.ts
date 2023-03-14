import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpostformcomponentComponent } from './userpostformcomponent.component';

describe('UserpostformcomponentComponent', () => {
  let component: UserpostformcomponentComponent;
  let fixture: ComponentFixture<UserpostformcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpostformcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpostformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
