import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWordComponent } from './hello-word.component';

describe('HelloWordComponent', () => {
  let component: HelloWordComponent;
  let fixture: ComponentFixture<HelloWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
