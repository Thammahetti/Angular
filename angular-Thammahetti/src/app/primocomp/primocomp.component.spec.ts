import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimocompComponent } from './primocomp.component';

describe('PrimocompComponent', () => {
  let component: PrimocompComponent;
  let fixture: ComponentFixture<PrimocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimocompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
