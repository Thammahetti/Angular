import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondocompComponent } from './secondocomp.component';

describe('SecondocompComponent', () => {
  let component: SecondocompComponent;
  let fixture: ComponentFixture<SecondocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondocompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
