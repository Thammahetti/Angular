import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartocompComponent } from './quartocomp.component';

describe('QuartocompComponent', () => {
  let component: QuartocompComponent;
  let fixture: ComponentFixture<QuartocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuartocompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuartocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
