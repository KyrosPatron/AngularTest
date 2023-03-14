import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpostpageComponent } from './userpostpage.component';

describe('UserpostpageComponent', () => {
  let component: UserpostpageComponent;
  let fixture: ComponentFixture<UserpostpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpostpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpostpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
