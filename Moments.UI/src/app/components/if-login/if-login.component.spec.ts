import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfLoginComponent } from './if-login.component';

describe('IfLoginComponent', () => {
  let component: IfLoginComponent;
  let fixture: ComponentFixture<IfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
