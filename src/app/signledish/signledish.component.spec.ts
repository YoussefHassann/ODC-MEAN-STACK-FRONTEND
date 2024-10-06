import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignledishComponent } from './signledish.component';

describe('SignledishComponent', () => {
  let component: SignledishComponent;
  let fixture: ComponentFixture<SignledishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignledishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignledishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
