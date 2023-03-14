import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginformcomponentComponent } from './loginformcomponent.component';

describe('LoginformcomponentComponent', () => {
  let component: LoginformcomponentComponent;
  let fixture: ComponentFixture<LoginformcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginformcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
